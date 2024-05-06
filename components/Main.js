import Image from "next/image";
import React from "react";

const Main = () =>{
return(
    <div class="main">
        <h1 className=" text-2xl px-32 mt-20 font-semibold">
            Who we are
        </h1>

        <p className="font-medium px-32 pt-8">

        We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.
        We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.
        </p>

        <Image className=" w-full px-32 pt-12 " 
        src="/assets/image2.jpg"
        width={500}
        height={200}/>

        <h1 className=" text-2xl text-center mt-32 font-semibold">
            Meet the heros behind the magic
        </h1>

         <div class="flex items-stretch mt-20 mx-60 space-x-12 max-w-full">

        <div class="box-border h-96 w-80 p-4 border-4 ...">
      <Image
       src="/assets/image3.jpg"
       width={500}
       height={200}/>
       <div class="font-bold text-xl mb-2 mt-2">Ester Howard</div>
       <p class="text-gray-500">Founder</p>
       </div>
       

       <div class="box-border h-96 w-80 p-4 border-4 ...">
      <Image
       src="/assets/image4.jpg"
       width={500}
       height={200}/>
       <div class="font-bold text-xl mb-2 mt-2">Cody Fisher</div>
       <p class="text-gray-500">Developer</p>
       </div>
       
       
       <div class="box-border h-96 w-80 p-4 border-4 ...">
      <Image
       src="/assets/image5.jpg"
       width={500}
       height={200}/>
       <div class="font-bold text-xl mb-2 mt-2">Brooklyn Simmons</div>
       <p class="text-gray-500">Designer</p>
       </div>
       </div>

       <div class="grid grid-cols-4 box-border w-full h-32 bg-black mt-32 space-x-20" >
        
        <div>
       <p class="text-yellow-400 text-3xl ml-24 pt-8">350 +</p>
       <p class="text-gray-100 text-l mt-4 ml-24">Clients Worldwide</p>
        </div>

        <div>
       <p class="text-yellow-400 text-3xl ml-12 pt-8">20 +</p>
       <p class="text-gray-100 text-l mt-4 ml-10">Team Member</p>
       </div>

       <div>
       <p class="text-yellow-400 text-3xl ml-12 pt-8">100 +</p>
       <p class="text-gray-100 text-l mt-4 ml-10">Project Completed</p>
       </div>

       <div>
       <p class="text-yellow-400 text-3xl ml-12 pt-8">85M +</p>
       <p class="text-gray-100 text-l mt-4 ml-10">Revenue Generated</p>
       </div>

       </div>

    </div>
)
} 
export default Main;