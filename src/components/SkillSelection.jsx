import React from "react";

function SkillSelection(){

const container={
minHeight:"100vh",
background:"#0f172a",
color:"white",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
fontFamily:"Arial"
}

const row={
display:"flex",
gap:"40px",
marginTop:"40px"
}

const card={
background:"#111827",
padding:"30px",
borderRadius:"12px",
width:"350px",
boxShadow:"0px 0px 15px rgba(0,0,0,0.4)"
}

const input={
width:"100%",
padding:"10px",
borderRadius:"8px",
border:"none",
marginTop:"10px",
background:"#1f2937",
color:"white"
}

const tag={
background:"#22c55e",
padding:"6px 12px",
borderRadius:"20px",
margin:"5px",
display:"inline-block",
fontSize:"12px"
}

const suggestion={
background:"#1f2937",
padding:"6px 12px",
borderRadius:"20px",
margin:"5px",
display:"inline-block",
fontSize:"12px"
}

const button={
marginTop:"40px",
padding:"14px 40px",
border:"none",
borderRadius:"8px",
background:"#22c55e",
color:"white",
fontWeight:"bold"
}

return(

<div style={container}>

<h1>Select your skills</h1>

<p style={{color:"#9ca3af"}}>
Identify the expertise you can offer and the skills you want to learn
</p>

<div style={row}>

<div style={card}>

<h3>Skills You Offer</h3>

<input placeholder="Search or add skill..." style={input}/>

<div style={{marginTop:"10px"}}>
<span style={tag}>React</span>
<span style={tag}>UI Design</span>
<span style={tag}>Node.js</span>
</div>

<h4 style={{marginTop:"20px"}}>Suggested For You</h4>

<div>
<span style={suggestion}>TypeScript</span>
<span style={suggestion}>Figma</span>
<span style={suggestion}>Marketing</span>
<span style={suggestion}>Public Speaking</span>
<span style={suggestion}>Data Analysis</span>
</div>

</div>

<div style={card}>

<h3>Skills You Want</h3>

<input placeholder="Search or add skill..." style={input}/>

<div style={{marginTop:"10px"}}>
<span style={tag}>Python</span>
<span style={tag}>Machine Learning</span>
<span style={tag}>AWS</span>
</div>

<h4 style={{marginTop:"20px"}}>Popular Categories</h4>

<div>
<span style={suggestion}>TypeScript</span>
<span style={suggestion}>Figma</span>
<span style={suggestion}>Marketing</span>
<span style={suggestion}>Public Speaking</span>
<span style={suggestion}>Data Analysis</span>
</div>

</div>

</div>

<button style={button}>Submit Selections</button>

</div>

)

}

export default SkillSelection;