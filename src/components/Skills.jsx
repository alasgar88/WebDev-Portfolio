import React from 'react';
import { skills } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';
import { useGlobalContext } from '../App';

const Skills = () => {
  const { skillsRef } = useGlobalContext();
  return (
    <section className='py-20 align-elements' ref={skillsRef}>
      <SectionTitle text='tech stack' />
      <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
