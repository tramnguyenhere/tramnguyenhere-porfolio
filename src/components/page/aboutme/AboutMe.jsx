import React from 'react';
import '../aboutme/aboutme.css';
import passion from '../../../assets/img/direction.jpg';

const AboutMe = () => {
  return (
    <div className='aboutme'>
      <hr />
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
            express my ideas in a real webpage. After university, I spend
            everyday to teach myself coding, as well as complete several online
            courses to gain the skills and knowledge necessary for the tech
            industry.
          </p>
          <p>
            I've been learning and practicing from data structures and
            algorithm, to JavaScript, TypeScript, and how to utilize different
            modern libraries such as ReactJs, Redux and NodeJs. Now,
            <span>
              I am excited to take my passion for technology to the next level
              and pursue a career in frontend development, where I can use my
              problem-solving, collaboration and communication skills to create
              meaningful and user-friendly applications.
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
        <div className='technical-skill--knowledge'>
          <h3>Programming languages</h3>
          <div className='technical-skill--knowledge-list'>
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
        </div>
        <div className='technical-skill--knowledge'>
          <h3>Frameworks</h3>
          <div className='technical-skill--knowledge-list'>
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
