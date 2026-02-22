import styles from './item.module.scss';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { getDetails } from '../Api/api';

function Item(){
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        async function getItemDetails(){
           const data = await getDetails(id);
           //console.log(data)
           setDetails(data)
        }
        getItemDetails()
    },[id])
console.log(details)
    return (
        <>
            <section className={styles.itemContainer}>
                <h2>
                    {details.name}
                </h2>
                <article>

                    <figure>
                        <img alt="" src={details.image}/>
                        <figcaption>
                        level: {details.level} | </figcaption>
                    </figure>

                    <div className={styles.target}>
                        <h3>Muscles Targetted</h3>
                        <span className={styles.heavy}>Primary</span>: {details?.muscles?.primary?.join('- ')}<br/>
                        <span className={styles.heavy}>Secondary</span>: {details?.muscles?.secondary?.join('- ')}
                    </div>

                    <div className={styles.howTo}>
                        <h3>how to perform</h3>
                        <p>
                            {details.execution?.join(' ')}
                        </p>
                    </div>

                </article>
            </section>
        </>
    )
};

export default Item;