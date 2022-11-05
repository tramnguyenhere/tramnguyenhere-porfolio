import React from 'react';
import '../aboutme/aboutme.css';
import passion from '../../../assets/img/direction.jpg';

const AboutMe = () => {
  return (
    <div className='aboutme'>
      <div className='aboutme__heading'>
        <h2>About Me</h2>
        <h1>"From a marketing student to a front end developer"</h1>
      </div>
      <div className='aboutme__story'>
        <p>
          The chemistry between me and computer sciences established 2 years ago
          when I was assigned to build a website in the computer network course.
          I was fascinated at how I could one day use logical codes to express
          my ideas in a real webpage. It was the moment I realized that I wanted
          to do much more than that. After university, I spend everyday to chase
          what I'm passionate about in a professional path.
        </p>
        <div className='aboutme__mypassion'>
          <p className='mypassion__square'></p>
          <h4 className='mypassion__text'>
            Computer <br />
            Science
          </h4>
        </div>
        <p>
          Internet is the treasure of the 21st century and I've learned many
          things from the fundamental knowledge from computer sciences to
          programming languages, and different framework to facilitate web
          development. Now as I've equipped myself an adequate knowledge to
          pursue this career path, I am currently finding an opportunity to
          contribute more as a junior frontend developer, and a company where I
          could learn more and leverage my knowledge.
        </p>
        <div>
          <h1>Is it me who are you looking for?</h1>
        </div>
        <div className='aboutme__technical-skill'>
          <div>
            <h3>Programming languages</h3>
            <img alt='HTML' src='https://i.stack.imgur.com/PgcSR.png' />
            <img
              alt='HTML'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
            />
            <img
              alt='HTML'
              src='https://www.computerhope.com/jargon/j/javascript.png'
            />
            <img
              alt='HTML'
              src='https://www.tutorialsteacher.com/Content/images/home/typescript.svg'
            />
          </div>
          <div>
            <h3>Frameworks</h3>
            <img
              alt='HTML'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
            />
            <img
              alt='HTML'
              src='https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
