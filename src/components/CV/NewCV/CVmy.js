import React from "react";
import styles from './CVmy.module.css'
import useSound from 'use-sound';
import phone from './sound/iphone.mp3'
import styled, {keyframes} from 'styled-components';
import {
    slideInDown, zoomIn, pulse, tada, zoomInDown,
    slideInLeft, slideInRight, slideInUp
} from 'react-animations';
import {Link} from "react-router-dom";
import {ScrollToTopOnMount} from "../ScrollToTopOnMount/ScrollToTopOnMount";


export const SlideInLeft = styled.div`animation: 2s ${keyframes`${slideInLeft}`}`;
export const SlideInDown = styled.div`animation: 3s backwards 1s ${keyframes`${slideInDown}`}`;
export const Tada = styled.div`animation: 2s ${keyframes`${tada}`} infinite`;
export const Pulse = styled.div`animation: 3s backwards 2s ${keyframes`${pulse}`}`;
export const SlideInUp = styled.div`animation: 2s backwards ${keyframes`${slideInUp}`}`;
export const ZoomInDown = styled.div`animation: 3s backwards 1s ${keyframes`${zoomInDown}`}`;
export const ZoomIn = styled.div`animation: 3s backwards 1s ${keyframes`${zoomIn}`}`;
export const ZoomInC = styled.div`animation: 3s backwards 2s ${keyframes`${zoomIn}`}`;
export const SlideInRight = styled.div`animation: 2s ${keyframes`${slideInRight}`}`;


export function CVmy() {

    const [play, {stop}] = useSound(phone);


    return (
        <div className={styles.wrapper}>
            <ScrollToTopOnMount/>
            <SlideInLeft className={styles.bottom}>
                <Link to="/" className={styles.back}>H</Link>
                <div onMouseEnter={() => {
                    play()
                }} onMouseLeave={() => {
                    stop()
                }}>
                    🔊
                </div>
            </SlideInLeft>
            <div className={styles.main}>
                <SlideInDown className={styles.header}>
                    <div className={styles.about}>KHOMENKO <br/> ALEXANDR <br/> VLADIMIROVICH <br/>
                        <hr/>
                        <Tada> FRONTEND DEVELOPER</Tada>
                    </div>
                    <div className={styles.foto}><Pulse>
                        <img className={styles.img} src={"/myfoto.jpg"} alt="myPhoto"/>
                    </Pulse>
                    </div>
                </SlideInDown>
                <SlideInUp className={styles.menu}>
                    <ZoomIn className={styles.category}>
                        <ZoomInDown>
                            <h2>CONTACTS</h2>
                            <hr/>
                            <br/>
                            <ZoomInC className={styles.category2}>
                                <div className={styles.name}>
                                    <div>E-mail:</div>
                                    <div>Phone:</div>
                                    <div>Telegram:</div>
                                    <div>Skype:</div>
                                    <div>GitHub:</div>
                                </div>
                                <div className={styles.value}>
                                    <div><a className={styles.refer}
                                            target="_blank"
                                            href='mailto:alex988andr@gmail.com'
                                            rel="noreferrer">
                                        alex988andr@gmail.com</a>
                                    </div>
                                    <div>+38 (073) 020 12 85</div>
                                    <div><a className={styles.refer} target="_blank"
                                            href='https://t.me/Ander988'
                                            rel="noreferrer">
                                        @Ander988</a>
                                    </div>
                                    <div>alex7work</div>
                                    <div><a className={styles.refer} target="_blank"
                                            href='https://github.com/AlexandrKhom'
                                            rel="noreferrer">
                                        github.com/AlexandrKhom</a>
                                    </div>
                                </div>
                            </ZoomInC>
                        </ZoomInDown>
                    </ZoomIn>
                    <ZoomIn className={styles.category}>
                        <ZoomInDown>
                            <h2>TECHNICAL SKILLS</h2>
                            <hr/>
                            <br/>
                            <ZoomInC className={styles.category2}>
                                <div className={styles.name}>
                                    <div>JavaScript</div>
                                    <div>React</div>
                                    <div>MySQL/MongoDB</div>
                                    <div>Angular</div>
                                    <div>Node.js</div>
                                    {/*<div>GIT, Webpack, Bootstrap,</div>*/}
                                    {/*<div>CSS3, HTML5, Figma</div>*/}
                                </div>
                                <div className={styles.value}>
                                    <div>🟣🟣🟣🟣⚫</div>
                                    <div>🟣🟣🟣🟣⚫</div>
                                    <div>🟣🟣🟣⚫⚫</div>
                                    <div>🟣🟣⚫⚫⚫</div>
                                    <div>🟣🟣⚫⚫⚫</div>
                                </div>
                            </ZoomInC>
                        </ZoomInDown>
                    </ZoomIn>
                    <ZoomIn className={styles.category}>
                        <ZoomInDown>
                            <h2>EDUCATION</h2>
                            <hr/>
                            <br/>
                            <ZoomInC className={styles.category3}>
                                <b>JavaScript Complex</b>
                                <p>Okt 2020 - Present</p>
                                <p>OktenWeb University</p>

                                <b>Medical Psychology</b>
                                <p>Sep 2003 – May 2010</p>
                                <p>BOGOMOLETS NMU</p>
                            </ZoomInC>
                        </ZoomInDown>
                    </ZoomIn>
                    <ZoomIn className={styles.category}>
                        <ZoomInDown>
                            <h2>LANGUAGES</h2>
                            <hr/>
                            <br/>
                            <ZoomInC className={styles.category2}>
                                <div className={styles.name}>
                                    <div>Ukrainian</div>
                                    <div>Russian</div>
                                    <div>English</div>
                                    <div>German</div>
                                </div>
                                <div className={styles.value}>
                                    <div>🟣🟣🟣🟣🟣</div>
                                    <div>🟣🟣🟣🟣🟣</div>
                                    <div>🟣🟣⚫⚫⚫</div>
                                    <div>🟣⚫⚫⚫⚫</div>
                                </div>
                            </ZoomInC>
                        </ZoomInDown>
                    </ZoomIn>
                    <ZoomIn className={styles.category}>
                        <ZoomInDown>
                            <h2>WORK EXPERIENCE</h2>
                            <hr/>
                            <br/>
                            <ZoomInC className={styles.category3}>
                                <b>Head of development department</b>
                                <p>May 2018 - Sep 2021</p>
                                <p>"Alfa Global"</p>

                                <b>Account Manager</b>
                                <p>Aug 2015 - May 2018</p>
                                <p>"Hasky outsourcing"</p>
                            </ZoomInC>
                        </ZoomInDown>
                    </ZoomIn>
                    <ZoomIn className={styles.category}>
                        <ZoomInDown>
                            <h2>PET PROJECTS</h2>
                            <hr/>
                            <br/>
                            <ZoomInC className={styles.refer2}>
                                <a
                                    target="_blank"
                                    href="https://alexandrkhom.github.io"
                                    rel="noreferrer">
                                    alexandrkhom.github.io/movie</a>
                                <br/>
                                <br/>
                                <a
                                    target="_blank"
                                    href="https://alexkyiv1990.github.io"
                                    rel="noreferrer">
                                    alexandrkhom.github.io/calculator</a>
                                <br/>
                            </ZoomInC>
                        </ZoomInDown>
                    </ZoomIn>
                </SlideInUp>
            </div>
            <SlideInRight className={styles.bottom}>
                <div onMouseEnter={() => play()} onMouseLeave={() => stop()}>
                    🔊
                </div>
            </SlideInRight>
        </div>
    );
}



