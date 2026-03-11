import React from "react";

function NavigationArchitecture(){

const container={
minHeight:"100vh",
background:"#0f172a",
color:"white",
padding:"80px",
fontFamily:"Arial"
}

const row={
display:"flex",
gap:"30px",
marginTop:"50px"
}

const card={
background:"#111827",
padding:"25px",
borderRadius:"12px",
width:"320px",
boxShadow:"0px 0px 15px rgba(0,0,0,0.5)"
}

const badge={
background:"#064e3b",
color:"#22c55e",
padding:"6px 14px",
borderRadius:"20px",
display:"inline-block",
fontSize:"12px"
}

const activeTag={
background:"#064e3b",
color:"#22c55e",
padding:"3px 8px",
borderRadius:"6px",
fontSize:"10px",
marginLeft:"10px"
}

const text={
color:"#9ca3af",
fontSize:"14px",
marginTop:"10px"
}

return(

<div style={container}>

<span style={badge}>UI Design System</span>

<h1 style={{fontSize:"42px",marginTop:"20px"}}>
Navigation Architecture
</h1>

<p style={{color:"#9ca3af",maxWidth:"700px"}}>
The navigation chrome is designed for maximum efficiency in a dark-mode environment, utilizing neon green accents to guide user attention and maintain visual hierarchy.
</p>

<div style={row}>

<div style={card}>

<h3>
Brand Identity 
<span style={activeTag}>ACTIVE COMPONENT</span>
</h3>

<p style={text}>
Left-aligned logo uses the Repeat icon with solid styling.
</p>

<p style={text}>ICON — Repeat (Solid)</p>
<p style={text}>FONT WEIGHT — Bold (700)</p>

</div>

<div style={card}>

<h3>
Global Context 
<span style={activeTag}>ACTIVE COMPONENT</span>
</h3>

<p style={text}>
Central search bar with glassmorphism effects.
</p>

<p style={text}>BACKDROP — Blur (12px)</p>
<p style={text}>INPUT STYLE — Pill (Rounded-Full)</p>

</div>

<div style={card}>

<h3>
User Authority 
<span style={activeTag}>ACTIVE COMPONENT</span>
</h3>

<p style={text}>
Persistent avatar with online status indicator.
</p>

<p style={text}>AVATAR SIZE — 36px</p>
<p style={text}>STATUS — Online (Primary)</p>

</div>

</div>

</div>

)

}

export default NavigationArchitecture