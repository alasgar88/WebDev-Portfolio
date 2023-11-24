import { links } from '../data.jsx';
import { useGlobalContext } from '../App.jsx';

const Navbar = () => {
  const { homeRef, skillsRef, aboutRef, projectsRef, scrollToRef } =
    useGlobalContext();

  function evaluateLink(linkText) {
    switch (linkText) {
      case 'home':
        return homeRef;
        break;
      case 'skills':
        return skillsRef;
        break;
      case 'about':
        return aboutRef;
        break;
      case 'projects':
        return projectsRef;
        break;
    }
  }
  return (
    <nav className='bg-emerald-100'>
      <div className='align-elements py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
          Web <span className='text-emerald-600'>Dev</span>
        </h2>
        <div className='flex gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                className='navlink capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'
                onClick={() => {
                  const refContainer = evaluateLink(text);
                  scrollToRef(refContainer);
                }}
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
