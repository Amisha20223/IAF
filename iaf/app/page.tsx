import Image from 'next/image'
import hero from '@/componenets/Hero';
import navbar from '@/componenets/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-center bg-blue-200 w-400 h-20'>
       <Image
            src="/ima.png"
            alt="logo"
            width={100}
            height={90}
            className="cursor-pointer hover:animate-slowspin"
          />
          <div className='justify items-center align-text-top'>

         

           <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About IAF
            </a>
            <a href="#skills" className="cursor-pointer">
              IMA
            </a>
            <a href="#projects" className="cursor-pointer">
              SESSION
            </a>
           
          </div>
        </div>
        </div>

    <div >
 
          
     
    </div>
    
    
    </div>
    
  )
}
