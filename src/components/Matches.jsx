import React from "react";

function Matches(){

const container={
minHeight:"100vh",
background:"#0f172a",
padding:"60px",
color:"white",
fontFamily:"Arial"
}

const headerText={
color:"#22c55e",
fontSize:"12px",
letterSpacing:"2px"
}

const title={
fontSize:"36px",
marginTop:"10px"
}

const subtitle={
color:"#9ca3af",
maxWidth:"600px",
marginTop:"10px"
}

const row={
display:"flex",
gap:"25px",
marginTop:"40px"
}

const card={
background:"#111827",
padding:"25px",
borderRadius:"12px",
width:"300px",
boxShadow:"0px 0px 15px rgba(0,0,0,0.5)"
}

const tag={
background:"#22c55e",
padding:"5px 10px",
borderRadius:"20px",
fontSize:"11px",
margin:"3px",
display:"inline-block"
}

const grayTag={
background:"#1f2937",
padding:"5px 10px",
borderRadius:"20px",
fontSize:"11px",
margin:"3px",
display:"inline-block"
}

const button={
width:"100%",
padding:"10px",
background:"#22c55e",
border:"none",
borderRadius:"8px",
color:"white",
marginTop:"20px",
fontWeight:"bold"
}

return(

<div style={container}>

<div style={headerText}>DISCOVERY</div>

<h1 style={title}>
Your <span style={{color:"#22c55e"}}>Perfect</span> Skill Matches
</h1>

<p style={subtitle}>
We've found experts who want to learn exactly what you know. Connect now to start your knowledge exchange.
</p>

<div style={row}>

<div style={card}>

<h3>Alex Rivera</h3>
<p style={{color:"#9ca3af"}}>Senior Frontend Engineer</p>

<p style={{marginTop:"15px",fontSize:"12px"}}>OFFERING</p>

<div>
<span style={tag}>React</span>
<span style={tag}>Tailwind CSS</span>
<span style={tag}>TypeScript</span>
</div>

<p style={{marginTop:"15px",fontSize:"12px"}}>WANTS</p>

<div>
<span style={grayTag}>Python</span>
<span style={grayTag}>Data Science</span>
</div>

<button style={button}>Connect Now</button>

</div>


<div style={card}>

<h3>Sarah Chen</h3>
<p style={{color:"#9ca3af"}}>Product Designer</p>

<p style={{marginTop:"15px",fontSize:"12px"}}>OFFERING</p>

<div>
<span style={tag}>Figma</span>
<span style={tag}>UI/UX Design</span>
<span style={tag}>Branding</span>
</div>

<p style={{marginTop:"15px",fontSize:"12px"}}>WANTS</p>

<div>
<span style={grayTag}>JavaScript</span>
<span style={grayTag}>HTML/CSS</span>
</div>

<button style={button}>Connect Now</button>

</div>


<div style={card}>

<h3>Marcus Thorne</h3>
<p style={{color:"#9ca3af"}}>Backend Architect</p>

<p style={{marginTop:"15px",fontSize:"12px"}}>OFFERING</p>

<div>
<span style={tag}>Node.js</span>
<span style={tag}>PostgreSQL</span>
<span style={tag}>Docker</span>
</div>

<p style={{marginTop:"15px",fontSize:"12px"}}>WANTS</p>

<div>
<span style={grayTag}>React Native</span>
<span style={grayTag}>Mobile Dev</span>
</div>

<button style={button}>Connect Now</button>

</div>

</div>

</div>

)

}

export default Matches