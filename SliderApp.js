import React, {useState} from "react"
import Title from "./Title"

export default function SliderApp(){
    const [value, setValue] = useState(0)
    
    const changeInputValue = (e)=>{
        setValue(e.target.value)
    } 
    
    let bgColor
    let fontColor
    
    if(value > 1 && value <= 25){
        bgColor = "rgba(0,0,0,.35)"
        fontColor = "white"  
    }
    if(value >= 26 && value <= 50){
        bgColor = "green"
        fontColor = "yellow"  
    }
    if(value >= 51 && value <= 75){
        bgColor = "blue"
        fontColor = "white"  
    }
    if(value > 76 && value <= 100){
        bgColor = "yellow"
        fontColor = "red"  
    }
    return(
        <div>
            <Title text="React Slider App"/>
            <input 
                style={{
                    appearance: "none",
                    width: "75vw",
                    height: "50px",
                    background: "rgba(0,0,0,0.4)",
                    borderRadius: "25px",
                    outline: "none",
                    marginTop: "20px"
                }}
                className="slider"
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={changeInputValue}
            />
            <div 
                style={{
                    width: `${value * 3}px`,
                    height: `${value * 3}px`,
                    borderRadius: "50%",
                    background: !bgColor ? "white" : bgColor,
                    margin: "0 auto",
                    display: "grid",
                    placeContent: "center",
                    marginTop: "20px",
                    boxShadow: "3px 3px 16px 0px rgba(0,0,0,0.3)"
                }}
            >
                <p
                    style={{
                        color: !fontColor ? "black" : fontColor, 
                        fontWeight: "bold",
                        fontSize: `${value * 1.5}px`
                    }}  
                >{value}</p>
            </div>
           
        </div>
    )
}