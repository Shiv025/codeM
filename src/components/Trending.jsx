import React from 'react';
export default function Trending(){
    return(
        
            <div>
                <div className='flex pt-8 pl-10'>
                    <div>
                    <span className='w-[165px] h-[36px] font-[Jost] font-[100] text-[25px] leading-[36.13px] text-[#000000]'>For this Session</span>
                    <h1 className='w-[590px] h-[115px] mt-[36px] font-[Jost] font-[400] text-[75px]'>Trending & New</h1>
                    </div>
                    <div className='w-[140px] h-[70px] ml-[5px] font-[Jost] font-[400] text-[35px] leading-[50.58px]' >
                        <button className='text-[#000000] justify-center border rounded '>
                            See All
                        </button>
                    </div>
                    
                </div>
            </div>
        
    );
}
