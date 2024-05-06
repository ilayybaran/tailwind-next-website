import Image from "next/image";
import React from "react";

const Proposal = () =>{ 
    return (
 <div class="grid grid-cols-2">
     <Image className="mt-32 ml-40 mb-24 h-auto max-w-full" 
     src="/assets/image6.jpg"
     height={700}
     width={500}
     />
     <div className="space-y-6 h-auto max-w-xl">
     <p className="mt-32 ml-80 text-3xl font-semibold">We'd love to hear from you</p>
     <div class="border-solid border-2 border-slate-500 w-100 h-16 pl-6 pt-3">Name*</div>
     <div class="border-solid border-2 border-slate-500 w-100 h-16 pl-6 pt-3">Email*</div>
     <div class="border-solid border-2 border-slate-500 w-100 h-16 pl-6 pt-3">Website Url*</div>
     <div class="border-solid border-2 border-slate-500 w-100 h-24 pl-6 pt-3">Project Details*</div>
     <div class="border-solid border-2 border-slate-500 bg-black text-white text-center w-100 h-16 pl-6 pt-4">Send Proposal</div>
     </div>
 </div>

    )
}
export default Proposal;