import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(){
  const navigate = useNavigate();

return(

<div style={{
  height:"100vh",
  background:"#0f172a",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}}>

<div style={{
  width:"400px",
  padding:"40px",
  background:"#111827",
  borderRadius:"12px",
  boxShadow:"0px 0px 20px rgba(0,0,0,0.5)",
  color:"white"
}}>

<h2 style={{textAlign:"center"}}>Create account</h2>

<p style={{textAlign:"center",color:"#9ca3af"}}>
Join the network and start swapping skills today
</p>

<input 
type="text"
placeholder="Full Name"
style={inputStyle}
/>

<input 
type="email"
placeholder="Email Address"
style={inputStyle}
/>

<div style={{display:"flex",gap:"10px"}}>

<input 
type="password"
placeholder="Password"
style={inputStyle}
/>

<input 
type="password"
placeholder="Confirm Password"
style={inputStyle}
/>

</div>

<button 
  style={buttonStyle}
  onClick={() => navigate("/skills")}
>
Create Account
</button>

<p style={{textAlign:"center",marginTop:"15px"}}>
Already have an account? 
<Link to="/" style={{color:"#22c55e", textDecoration:"none"}}> Login</Link>
</p>

</div>

</div>

)

}

const inputStyle={
width:"100%",
padding:"12px",
marginTop:"15px",
borderRadius:"8px",
border:"none",
background:"#1f2937",
color:"white"
}

const buttonStyle={
width:"100%",
padding:"12px",
marginTop:"20px",
border:"none",
borderRadius:"8px",
background:"#22c55e",
color:"white",
fontWeight:"bold"
}

export default Signup;