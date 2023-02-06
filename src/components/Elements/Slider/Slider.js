import React, { useEffect } from "react";
import {useState} from "react";
import Data from '../../Data/DataSlider';
import './Slider.css';

const Slider = () => {

    const [slide, setSlide] = useState(0);

    const target = (variable, slide)=>{
        variable = slide;
        setSlide(variable);
    }

    // const play = () =>{
        
      

    // } 

    useEffect(() => {  
        const timer = setInterval(() => {
            
            if(slide !== Data.length-1){
                setSlide(slide + 1);
            }
            else{
                
                setSlide(0);
            } 

        }, "4000"); 
       return () => clearInterval(timer);
    });

    return (

        <div className="slider">
        <div><img src={Data[slide].url} alt={Data[slide].alt}/></div>

        <ul className="puces">
            {Data.map((uneImage, i) => (
                <li key={uneImage.id} onClick = {() => target(slide, i)} className={i === slide ? 'target' : 'puce'}>
                </li>
            ))}   
        </ul>

        </div>
    )
    
}
export default Slider;