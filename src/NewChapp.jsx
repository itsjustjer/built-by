import React from 'react';
import styles from './newchap.module.css';

export default function NewChapp() {
 return (
     <>
        <div className={styles.chapBox}>
            <header></header>
                <aside></aside>
                    <main className={styles.chapMain}>
                        <section className={styles.sectionA}>
                           <section className={styles.chappSection1}>
                                <h2>section 1</h2>
                                    <p>section 1, paragraph 1: </p>
                            </section>
                            <section className={styles.chappSection2}>
                                <h2>section 2</h2>
                                    <p>section 2, paragraph 1: </p>
                             </section>
                            <section className={styles.chappSection3}>
                                <h2>section 3</h2>
                                    <p>section 3, paragraph 1: </p>
                            </section>
                            <section className={styles.chappSection4}>
                                    <h2>section 4</h2>
                                        <p>section 4, paragraph 1: </p>
                            </section>
                        </section>
                        <section className={styles.sectionB}>
                            <section className={styles.chappSection1}>
                                <h2>section 5</h2>
                                    <p>section 5, paragraph 1: </p>
                            </section>
                            <section className={styles.chappSection2}>
                                 <h2>section 6</h2>
                                     <p>section 6, paragraph 1: </p>
                            </section>
                            <section className={styles.chappSection3}>
                                <h2>section 7</h2>
                                    <p>section 7, paragraph 1: </p>
                            </section>
                            <section className={styles.chappSection4}>
                                <h2>section 8</h2>
                                    <p>section 8, paragraph 1: </p>
                            </section>
                        </section>
                    </main>
                <aside></aside>
            <footer></footer>

         </div>
       </>
    );
};