import React from 'react';
import styles from "./Home.module.css";
import { NavLink } from 'react-router-dom';
import apexVideo from "../../media/apex-legends-video.mp4";
import arrow from "../../media/arrow.png";


const Home = () => {
    return (
        <div className={styles.bigContainer}>
            <div className={styles.newsContainer}>
                <div className={styles.textContainer}>
                    <h1>News</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id gravida augue. 
                        Aliquam a maximus sem, non pretium erat. Quisque at elit ac diam porta fermentum. 
                        Curabitur lacus purus, vestibulum in diam nec, lobortis efficitur sapien. 
                        Quisque sit amet orci vitae elit suscipit bibendum quis accumsan nunc. 
                        Aenean ornare elit ut justo pellentesque maximus. Integer venenatis neque ac lorem finibus, 
                        sed rhoncus diam finibus. Phasellus accumsan ipsum vitae urna cursus egestas. 
                        Aenean euismod massa non eros rhoncus, et aliquet mi ornare. Pellentesque non nisi lorem. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate, augue ac maximus pharetra, 
                        ligula turpis dignissim sapien, vel fringilla sapien augue eget eros. 
                        Pellentesque elementum, erat vitae imperdiet congue, dui metus sollicitudin nunc, 
                        at sodales tellus tortor a metus.</p>
                </div>
                <NavLink to="/under-construction" className={styles.moreContainer}>
                    <img src={arrow} alt="" className={styles.arrow}/>
                </NavLink>
            </div>
            <div className={styles.videoContainer}>
                <video loop autoPlay muted className={styles.video}>
                    <source
                        src={apexVideo}
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    )
};



export default Home;