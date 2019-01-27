import React from "react";

const Title = ({children, size=40, color="black",weight="500"})=>{
    return <h1 style={{fontSize:size,
        fontWeight:weight,
        color,
        marginBottom:18,
        marginTop:85,
        fontFamily:"'Poppins', sans-serif",
    }}>{children}</h1>
}
export default Title;