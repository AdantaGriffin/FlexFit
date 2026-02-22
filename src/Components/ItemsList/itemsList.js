import styles from './itemsList.module.scss';
import {useState, useEffect} from 'react';
import { useParams, NavLink } from "react-router-dom";
import { getData } from '../Api/api';

function ItemsList(){
    const {type} = useParams();
    const [data,setData] = useState([]);
    useEffect(() => {
        async function getItemData(){
            const data = await getData();
            console.log(data)
            if(!type) return
            const filteredItems = data.filter(
                item => item.type?.toLowerCase() === type?.toLowerCase()
            );

            setData(filteredItems)
        }
        getItemData()
    }, [type]);
    const [text, setText] = useState('');
    const handleTextChange = (event) => {
        event.preventDefault()
        setText(event.target.value.toLowerCase()); 
        
    };
    const findExercise = (letter) => (ex) => ex.name.toLowerCase().includes(letter) ||
    ex.type.toLowerCase().includes(letter)
    return(
        <>
            <section className={styles.itemsList}>
                <div className={styles.top}>
                    <h2>{type} Page</h2>
                    <input className={styles.filter} placeholder="Find an exercise" onChange={handleTextChange} value={text} type="text"/>
                </div>
                {data.filter(findExercise(text)).map(x => (
                    <article 
                    className={styles.article}
                    key={x.id}>
                        <img alt="" src={x.image}/>
                        <h3>{x.name}</h3>
                        <NavLink to={`${x.id}`}>explore</NavLink>
                    </article>
                ))}
            </section>
        </>
    )
};

export default ItemsList;