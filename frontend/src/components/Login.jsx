import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(){
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleLogin = async () => {
		setLoading(true);
		setError("");
		try {
			const response = await fetch("http://localhost:8000/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password })
});
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.detail || "Login failed");
}
			// You can handle successful login here (e.g., save token, redirect)
			alert("Login successful!");
			navigate("/skills");
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

const container={
minHeight:"100vh",
background:"#0f172a",
display:"flex",
justifyContent:"center",
alignItems:"center",
fontFamily:"Arial"
}

const card={
width:"420px",
background:"#111827",
padding:"40px",
borderRadius:"12px",
color:"white",
boxShadow:"0px 0px 20px rgba(0,0,0,0.5)",
textAlign:"center"
}

const input={
width:"100%",
padding:"12px",
marginTop:"12px",
borderRadius:"8px",
border:"none",
background:"#1f2937",
color:"white"
}

const button={
width:"100%",
padding:"14px",
marginTop:"20px",
background:"#22c55e",
border:"none",
borderRadius:"8px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
}

const smallBtn={
flex:"1",
padding:"10px",
background:"#1f2937",
border:"none",
borderRadius:"8px",
color:"white"
}

return(

<div style={container}>

<div style={card}>

<div style={{fontSize:"30px",marginBottom:"10px"}}>🔄</div>

<h2>Welcome back</h2>

<p style={{color:"#9ca3af"}}>
Enter your credentials to access your skill matches
</p>

<div style={{textAlign:"left",marginTop:"20px"}}>

<label style={{fontSize:"12px",color:"#9ca3af"}}>
EMAIL ADDRESS
</label>

<input
	type="email"
	placeholder="name@example.com"
	style={input}
	value={email}
	onChange={e => setEmail(e.target.value)}
/> 

<label style={{fontSize:"12px",color:"#9ca3af",marginTop:"15px",display:"block"}}>
PASSWORD
</label>

<input
	type="password"
	placeholder="******"
	style={input}
	value={password}
	onChange={e => setPassword(e.target.value)}
/> 

</div>

<button style={button} onClick={handleLogin} disabled={loading}>
	{loading ? "Logging in..." : "Login to Skill Swap"}
</button>
{error && <div style={{color: "#ef4444", marginTop: 10}}>{error}</div>}

<p style={{marginTop:"20px",color:"#9ca3af"}}>
OR CONTINUE WITH
</p>

<div style={{display:"flex",gap:"10px",marginTop:"10px"}}>
<button style={smallBtn}>Google</button>
<button style={smallBtn}>GitHub</button>
</div>

<p style={{marginTop:"20px"}}>
Don't have an account? 
<Link to="/signup" style={{color:"#22c55e", textDecoration:"none"}}> Sign up for free</Link>
</p>

</div>

</div>

)

}

export default Login