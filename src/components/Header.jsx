import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useSelector, useDispatch } from 'react-redux';
import { guardarItem } from '@/redux/slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter as faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";



gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    let [activeItem, setActiveItem] = useState('');
    const dispatch = useDispatch();
    let itemActivate = useSelector((state) => state.itemActivate);
    activeItem = itemActivate.itemName;

    const modificar = (name) => {
        dispatch(guardarItem(name));
    };

    useEffect(() => {
        const handleScroll = () => {
            const about = document.getElementById('about');
            const experience = document.getElementById('experience');
            const projects = document.getElementById('projects');
            const scrollPosition = window.scrollY;

            if (about && isElementInViewport(about, scrollPosition)) {
                modificar('about');
            } else if (experience && isElementInViewport(experience, scrollPosition)) {
                modificar('experience');
            } else if (projects && isElementInViewport(projects, scrollPosition)) {
                modificar('projects');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const isElementInViewport = (element, scrollPosition) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= scrollPosition &&
            rect.bottom >= scrollPosition
        );
    };

    return (
        <>
            <div className="w-full h-full flex lg:py-28 lg:px-20">
                <section className="flex flex-col justify-between sm:gap-28">
                    <div className=" font-sans text-slate-200">
                        <h1 className="sm:text-5xl font-bold  tracking-tight ">
                            <a href="#init">Carlos Duarte</a>
                        </h1>
                        <h3 className="py-3 font-medium tracking-tight lg:text-xl">Programador frontend</h3>
                        <p className=" max-w-xs text-slate-400">Creo experiencias digitales perfectas en píxeles, atractivas y accesibles.</p>
                    </div>
                    <div>
                        <nav>
                            <ul className="grid gap-4 text-slate-400">
                                <li className={`flex items-center gap-3 item-nav  tracking-tight ${activeItem === 'about' ? 'active' : ''}`}><span className='nav-line bg-slate-400'></span><a href="#about">sobre mí</a></li>
                                <li className={`flex items-center gap-3 item-nav tracking-tight ${activeItem === 'experience' ? 'active' : ''}`}><span className='nav-line bg-slate-400'></span><a href="#experience">Experiencia</a></li>
                                <li className={`flex items-center gap-3 item-nav tracking-tight ${activeItem === 'projects' ? 'active' : ''}`}><span className='nav-line bg-slate-400'></span><a href="#projects">Proyectos</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="">

                        <div className='flex gap-4 text-2xl text-slate-400'>
                            <a href='#' className='hover:text-white transition duration-300'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href='#' className='hover:text-white transition duration-300'><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href='#' className='hover:text-white transition duration-300'><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href='#' className='hover:text-white transition duration-300'><FontAwesomeIcon icon={faXTwitter} /></a>
                            <a href='#' className='hover:text-white transition duration-300'><FontAwesomeIcon icon={faFilePdf} /></a>
                        </div>

                    </div>
                </section>
            </div>

            <style jsx>{`
        .nav-line{
            width: 40px;
            height: 1px;
            display: block;
            transition: width 0.3s;
        }
        .item-nav{
            cursor: pointer;
            width: fit-content;
            text-transform: uppercase;
            font-weight: 600;
            font-size: 0.86rem;
        }
        .item-nav:hover{
            color: white;
        }
        
        .item-nav:hover .nav-line{
            width: 70px;
            background-color: white;
        }

        .item-nav.active{
            color: white;
        }
        .item-nav.active .nav-line{
            width: 70px;
            background-color: white;
        }
        
        `}</style>
        </>
    );
}
