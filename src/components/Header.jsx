'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Header() {
   
    return (
        <div className="w-full h-full flex lg:py-28 lg:px-20">
            <section className="flex flex-col justify-between sm:gap-28">
                <div className=" font-sans text-slate-200">
                    <h1 className="sm:text-5xl font-bold  tracking-tight ">
                        <a href="#init">Carlos Duarte</a>
                    </h1>
                    <h3 className="py-3 font-medium tracking-tight lg:text-xl">Programador frontend</h3>
                    <p className=" max-w-xs text-slate-400">Creo experiencias digitales perfectas en píxeles, atractivas y accesibles.</p>
                </div>
              
                <div className="">
                    
                    <div className='flex gap-4 text-2xl text-slate-400'>
                        <a href='#' className='hover:text-white transition duration-300'><FontAwesomeIcon icon={faGithub} /></a>
                        <a href='#' className='hover:text-white transition duration-300'><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href='#' className='hover:text-white transition duration-300'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='#' className='hover:text-white transition duration-300'><FontAwesomeIcon icon={faXTwitter} /></a>
                    </div>

                </div>
            </section>
        </div>
    );
}