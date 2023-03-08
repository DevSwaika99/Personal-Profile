import React from 'react';
import Footlink from '../Footlink/Footlink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details=''
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    {/* <h3 className='about-sub-head'>Teacher</h3> */}
                    <p className='about-details'>
                        Hello, I'm <b>Dev Swaika</b>, an upcoming software engineer. 
                        I have a passion for creating user-friendly and efficient software solutions that make a difference 
                        in people's lives. Over the years, I have honed my skills in various programming languages and 
                        technologies, including <b>Java</b> and <b>Web Development</b>.
                    </p>

                    {/* Sub section 2 */}
                    {/* <h3 className='about-sub-head'>Blogger</h3> */}
                    <p className='about-details'>
                        I am currently pursuing <b>Integrated M.Tech in Software Engineering</b> from <b>VIT Vellore</b>. 
                        I completed my class 12 from The Heritage School, Kolkata.
                    </p>

                    {/* Sub section 3 */}
                    {/* <h3 className='about-sub-head'>Public Speaker</h3> */}
                    <p className='about-details'>
                        Apart from coding, I enjoy exploring new technologies and reading about new technologies 
                        to keep up with the latest trends in the industry. In my free time, I also <b>Photography</b> and 
                        working on some <b>Cricket Insights</b>. Thank you for taking the time to visit my portfolio, and I 
                        look forward to connecting with you!
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <Footlink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;