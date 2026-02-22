import styles from './root.module.scss';
import { Outlet } from 'react-router-dom';

import Navigation from '../Navigation/navigation';

function Root(){
    return (
        <div className={styles.root}>

            <Navigation/>

            <Outlet/>
            
        </div>
    )
};

export default Root;