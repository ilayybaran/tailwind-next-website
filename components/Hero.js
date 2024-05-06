
import Image from "next/image";
import React from "react";

const Hero = () =>{
    return (
     <div className="header">
     <Image 
     className="h-auto max-w-full " 
     src="/assets/image1.jpg" 
     alt="picture" 
     width={1600} 
     height={200}/>

     </div>

     
    )
}
export default Hero;