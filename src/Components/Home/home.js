import styles from './home.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home(){
        
    
    return(
        <>
            <main className={styles.home}>
                <section className={styles.quote}>
                    <div>
                        <p>Your fitness journey starts here</p>
                    </div>
                </section>
                <section className={styles.heading}>
                    <h1>Move</h1>
                    <h1><span className={styles.linearColor}>Stronger</span></h1>
                    <h1>Everyday</h1>
                </section>
                <section className={styles.text}>
                    <p>Master your body with our curated collection of <span className={styles.calisthenics}>calisthenics</span> and <span className={styles.mobility}>mobility</span> workouts. No gym required, just you and your determination.</p>
                </section>
                <section className={styles.links}>
                    <Link to={'/calisthenic'} className={styles.linkCalisthenics}>Calisthenics</Link>
                    <Link to={'/mobility'} className={styles.linkMobility}>Mobility</Link>
                </section>
                <section className={styles.data}>
                    <h3 className={styles.dataItem}><span className={styles.linearColor}>500+<br/></span> exercises</h3>
                    <h3 className={styles.dataItem}><span className={styles.linearColor}>100%<br/></span>free</h3>
                    <h3 className={styles.dataItem}><span className={styles.linearColor}>24/7<br/></span>access</h3>
                </section>
            </main>
        </>
    )
};

export default Home;