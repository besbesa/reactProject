import React from "react";
import Title from "./Title";

export default class MovieDetails extends React.Component{


    render(){
        const {
            name,
            details1,
            details2,
            details3,
            cover,
            streaming,
        }=this.props.movie;
        
        return (
            <div style={{
                position:"fixed",
                zIndex:99,
                top:0, left:0,
                background: `white url(${cover}) center center / cover`,
                width:"100%", height:"100%"
            }}>
                <span style={{position:'absolute',
                top:0,left:0,
                zIndex:-1,
                opacity:.7,
                width:"100%",height:"100%",
                background:"black"}}></span>
                <div className="container" >
                    <Title color="white" size={50} weight={10}>{name}</Title>
                    <div classname="bloc1">
                        <p style={{color:"#f8d440"}}>{details1}</p>
                        <p style={{color:"white"}}>{details2}</p>
                        <p style={{color:"#00838F", fontWeight:"bold", fontSize:18}}>{details3}</p>
                    </div>
                    <div classname="bloc2" style={{marginTop:55, marginLeft:150}}>
                        <video controls src={streaming} height="300" width="800"/>
                    </div>
                </div>
            </div>
        )
    }

}