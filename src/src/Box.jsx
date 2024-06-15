import React from 'react';
import styles from './box.module.css';

export default function Box() {
    return (
    <div className={styles.boxGrid}>
 
<nav className={styles.navBox}>Navigation</nav>
<main className={styles.mainBox}>Main area</main>

</div>
    );
};
