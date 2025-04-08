import React from 'react'
import s from './Contact.module.scss'
import Top from '../../ui/Top/Top'

const Contact = () => {
    return (
        <>
            <section className={s.contact}>
                <div className="container">
                    <div className={s.wrap}>
                        <Top title={'Contacts'} />
                        <div className={s.inner}>
                            <div className={s.item}>
                                <h3>MAIL</h3>
                                <div>
                              
                                    <a href="mailto:rasimhusanbaev20@gmail.com">↗ rasimhusanbaev20@gmail.com</a>
                                </div>
                            </div>

                            <div className={s.item}>
                                <h3>Social medias</h3>
                                <div>
                                    <a target='_blank' href="https://t.me/Virus_2074" rel="noreferrer">↗ telegram</a>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact