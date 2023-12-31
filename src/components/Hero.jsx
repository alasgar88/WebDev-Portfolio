import React from 'react';
import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { useGlobalContext } from '../App';

const Hero = () => {
  const { homeRef } = useGlobalContext();
  return (
    <div className='bg-emerald-100 py-24' ref={homeRef}>
      <div className='align-elements grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I'm Alasgar</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Front-End Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/alasgar88/' target='_blank'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a
              href='https://www.linkedin.com/in/alasgar-mahmudov-2a3193b6/'
              target='_blank'
            >
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a
              href='https://www.facebook.com/mahmudov.alasgar/'
              target='_blank'
            >
              <FaFacebookSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80' />
        </article>
      </div>
    </div>
  );
};

export default Hero;
