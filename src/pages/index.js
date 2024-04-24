'use client';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='sm:flex gap-10 justify-between container '>
          <header className='lg:w-1/2 lg:max-h-screen lg:h-screen lg:sticky lg:top-0 '>
            <Header></Header>
          </header>
          <div className='lg:w-1/2 '>
            <h1></h1>
            <div className="lg:py-28 lg:px-8">
           <div className=' text-slate-400'>
           <p className=''>
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
            </p>
            <p className='mt-4'>My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, Ive also released an online video course that covers everything you need to know to build a web app with the Spotify API. </p>
            <p className='mt-4'>
              When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds Korokseeds.
            </p>
           </div>
              
              <div className="h-screen" id='experience'> <ul>
                <li className='group relative  transition-all  lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mt-10'>
                  <div className='absolute z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50 px-10 py-5'> 
                  </div>
                </li>
              </ul> </div>
              <div className="h-screen" id='projects'></div>
            
            </div>
          
          </div>
        </div>
      </div>
      <style jsx>{`

      `}</style>
    </>
  );
}
