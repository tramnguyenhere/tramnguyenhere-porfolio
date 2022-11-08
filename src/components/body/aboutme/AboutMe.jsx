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
        <div className='aboutme__story--history'>
          <p>
            The chemistry between me and computer sciences established 1 years
            ago when I was assigned to build a website in the computer network
            course. I was fascinated at how I could one day use logical codes to
            express my ideas in a real webpage. It was the moment I realized
            that I wanted to do much more than that. After university, I spend
            everyday to chase web development in a professional path.
          </p>
          <p>
            Internet is the treasure of the 21st century. I've learned many
            things from algorithm, data structures, efficient memory in computer
            sciences to HTML, CSS, JavaScript, TypeScript, and how to utilize
            different frameworks such as ReactJS. It would be nice-ish in the
            beginning but the next step to leverage my coding skills and
            programming logic is by working with other coders to build practical
            projects. Now,{' '}
            <span>
              I am finding opportunities to add more values as an entry-level
              frontend developer, and learn more from experienced folks in the
              industry.
            </span>
          </p>
        </div>
        <div className='aboutme__story--passion'>
          <img src={passion} alt='passion' />
          <h4>
            Computer <br />
            Sciences
          </h4>
        </div>
      </div>

      <div className='aboutme__technical-skill'>
        <h1>Is it me who are you looking for?</h1>
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
  );
};

export default AboutMe;
