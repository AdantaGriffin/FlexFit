import styles from './navigation.module.scss';
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { getType } from '../Api/api';

function Navigation(){
    const [cat, setCat] = useState([]);
    useEffect(() => {
        async function getCats(){
            const data = await getType();
            //console.log(data)
            setCat(data)
        }
        getCats()
    },[]);

    
    return(
        <>
            <nav className={styles.navigationContainer}>
                <div className={styles.siteIcon}>
                    <img src='/barbell.png' width='40px' height='40px'/> 
                    <h1><NavLink to={"/"}>Flex <span className={styles.orange}>Fit</span></NavLink></h1>
                </div>
                <ul>
                    {cat.map(x => (
                        <li 
                        key={x.id}>
                            <NavLink
                            id={x.id}
                            to={x.name} 
                            key={x.id}>{x.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
};

export default Navigation;