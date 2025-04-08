import React from 'react'
import s from './AboutMe.module.scss'
import Top from '../../ui/Top/Top'
import { FcIdea } from 'react-icons/fc'



const AboutMe = () => {
    return (
        <>
            <section className={s.aboutme}>
                <div className={s.about_wrap}>
                    <div className={s.box}>
                        <Top title={'About'} />
                        <p>Hey, my name is Rasim Khusanbaev, and I’m a frontend developer with a passion for creating seamless and innovative web experiences. I have studied web programming for 1 year, also i have a cerficate that proves my skills. Im always looking for ways to grow both personally and professionally.</p> <br />
                        <p>What have I learned:</p>
                        <p> HTML5, CSS3, SASS, SCSS, БЭМ, JavaScript, React, Responsive layout, Figma, Gulp  </p>
                        {/* <a href="">↓ Resume</a> */}
                    </div>

                    <div className={s.image}>
                        <div className={s.idea}>
                            <div>
                                <FcIdea />

                            </div>
                            {/* <p>abbos valiev • abbos valiev • abbos valiev •</p> */}
        
                        </div>
                        <img src="/Mee.jpg" alt="image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe