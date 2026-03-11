import requests
import sys

BASE = "http://127.0.0.1:8000"

PASS = "\033[92mPASS\033[0m"
FAIL = "\033[91mFAIL\033[0m"

errors = []

def check(label, response, expected_status, check_fn=None):
    ok = response.status_code == expected_status
    if ok and check_fn:
        ok = check_fn(response.json())
    status = PASS if ok else FAIL
    print(f"  [{status}] {label} — HTTP {response.status_code}")
    if not ok:
        errors.append(label)
        try:
            print(f"         Response: {response.json()}")
        except Exception:
            print(f"         Response: {response.text}")
    return response

# ─── Cleanup: make sure test email is fresh ───────────────────────────────────
# (If the DB already has the test user from a previous run, signup will return 400)
TEST_EMAIL = "testuser_abc123@example.com"
TEST_NAME  = "Test User"
TEST_PASS  = "securepass123"

print("\n=== 1. SIGNUP ===")

r = check(
    "Signup new user",
    requests.post(f"{BASE}/signup", json={"name": TEST_NAME, "email": TEST_EMAIL, "password": TEST_PASS}),
    expected_status=200,
    check_fn=lambda j: j.get("email") == TEST_EMAIL and "id" in j
)
if r.status_code == 200:
    user_id = r.json()["id"]
    print(f"         Created user_id={user_id}")
elif r.status_code == 400 and "already registered" in r.json().get("detail", ""):
    # User exists from previous run — log in to get the id
    print("  [INFO] User already exists, fetching id via login...")
    lr = requests.post(f"{BASE}/login", json={"email": TEST_EMAIL, "password": TEST_PASS})
    user_id = lr.json().get("user_id") if lr.status_code == 200 else None
    print(f"         user_id={user_id}")
else:
    user_id = None

check(
    "Signup duplicate email → 400",
    requests.post(f"{BASE}/signup", json={"name": TEST_NAME, "email": TEST_EMAIL, "password": TEST_PASS}),
    expected_status=400
)

check(
    "Signup missing field → 422",
    requests.post(f"{BASE}/signup", json={"email": TEST_EMAIL}),
    expected_status=422
)

# ─── LOGIN ────────────────────────────────────────────────────────────────────
print("\n=== 2. LOGIN ===")

check(
    "Login valid credentials",
    requests.post(f"{BASE}/login", json={"email": TEST_EMAIL, "password": TEST_PASS}),
    expected_status=200,
    check_fn=lambda j: j.get("message") == "login success" and "user_id" in j
)

check(
    "Login wrong password → 401",
    requests.post(f"{BASE}/login", json={"email": TEST_EMAIL, "password": "wrongpassword"}),
    expected_status=401
)

check(
    "Login unknown email → 401",
    requests.post(f"{BASE}/login", json={"email": "nobody@nowhere.com", "password": "x"}),
    expected_status=401
)

check(
    "Login missing field → 422",
    requests.post(f"{BASE}/login", json={"email": TEST_EMAIL}),
    expected_status=422
)

# ─── SKILLS ──────────────────────────────────────────────────────────────────
print("\n=== 3. SKILLS ===")

if user_id:
    check(
        "Add offer+want skills",
        requests.post(f"{BASE}/skills", json={
            "user_id": user_id,
            "offer": ["Python", "FastAPI"],
            "want":  ["React", "Docker"]
        }),
        expected_status=200,
        check_fn=lambda j: j.get("message") == "skills saved"
    )

    check(
        "Add skills with new want skill (not pre-existing in DB)",
        requests.post(f"{BASE}/skills", json={
            "user_id": user_id,
            "offer": ["SQL"],
            "want":  ["Kubernetes"]
        }),
        expected_status=200,
        check_fn=lambda j: j.get("message") == "skills saved"
    )
else:
    print("  [SKIP] user_id unknown, skipping skills tests")

check(
    "Add skills missing fields → 422",
    requests.post(f"{BASE}/skills", json={"user_id": 1}),
    expected_status=422
)

# ─── MATCHES ─────────────────────────────────────────────────────────────────
print("\n=== 4. MATCHES ===")

if user_id:
    r = check(
        f"Get matches for user_id={user_id}",
        requests.get(f"{BASE}/matches/{user_id}"),
        expected_status=200,
        check_fn=lambda j: isinstance(j, list)
    )
    if r.status_code == 200:
        print(f"         Matches returned: {r.json()}")

check(
    "Get matches for non-existent user (should return empty list)",
    requests.get(f"{BASE}/matches/999999"),
    expected_status=200,
    check_fn=lambda j: j == []
)

check(
    "Get matches invalid user_id type → 422",
    requests.get(f"{BASE}/matches/not-a-number"),
    expected_status=422
)

# ─── SUMMARY ─────────────────────────────────────────────────────────────────
print("\n" + "="*45)
if errors:
    print(f"\033[91mFAILED {len(errors)} test(s):\033[0m")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)
else:
    print(f"\033[92mAll tests passed!\033[0m")
