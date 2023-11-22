import React from 'react';
import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20 ' id='about'>
      <div className='align-elements grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            aliquid ratione quisquam explicabo maxime eos ut iste beatae
            aliquam, recusandae optio tenetur, incidunt aut sit corrupti
            repudiandae, non obcaecati ex.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
