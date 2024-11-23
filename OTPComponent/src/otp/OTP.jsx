 import { useState } from "react"
import "./style.css"
const OTP = ({count}) => {
    const [otps,setOtps] = useState([]);

    function handleKeyUp(index){
        return (event)=>{
            const key = event.key;
            const oldOtps = [...otps];
            oldOtps[index] = key;  
            setOtps(oldOtps)
        };
    }
  return (

  <div>
        {
            new Array(count).fill("").map((_,index)=>{
                return <input 
                onKeyUp={handleKeyUp(index)}
                key={index} 
                type="text" 
                value={otps[index]}/>
            })}
    </div>
  )
}

export default OTP