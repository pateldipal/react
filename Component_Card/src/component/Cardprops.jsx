import React from 'react'
import { Bookmark } from 'lucide-react';

export const Cardprops = (props) => {
    console.log(props.companyName);
    
  return (
        <div className='card'>
       <div>
         <div className='top'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9Mdeo4S4YXDOaI4Xm53DaaHVlccVG_j7Yg&s" alt="" />
            <button>Save <Bookmark size={12}/> </button> 
        </div>
        <div className='center'>
            <h3>{props.companyName} <span> Five Days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
           <div className='tag'>
                <h4>Part Time</h4>
                <h4>Senior Level</h4> 
            </div> 
        </div>
       </div>
        <div className='bottom'>
            <div>
                <h3>$120/hr</h3>
                <p>Mumbai,India</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>   

  )
}
