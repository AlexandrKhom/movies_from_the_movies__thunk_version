import React, { useEffect, useState } from "react";
import styles from './Hide.module.css'

export const Hide = () => {
  const [hide, setHide] = useState(true);

  const clickClose = () => {
    setHide(false);
    localStorage.setItem('modalState', JSON.stringify(false));
  }

  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem('modalState'));
    if (resp === null) setHide(true);
    if (resp === false) setHide(false);
  }, [])

  if (hide) {
    window.addEventListener('scroll', (e) => {
      e.preventDefault();
    })
  }
  return (
      <>
        {hide &&
        <div className={styles.wrapper}>
          <div className={styles.first}>
            <h2 className={styles.second}>Last update (v2.0)</h2>
            <br/>
            <h3>Added features:</h3>
            <ul>
              <li  className={styles.info}>smart search</li>
              <li  className={styles.info}>change the theme</li>
              <li  className={styles.info}>mobile adaptation</li>
              <li  className={styles.info}>select multiple genres</li>
              <li  className={styles.info}>video on the movies card</li>
              <li  className={styles.info}>my CV by clicking on the logo</li>
            </ul>
            <br/>
            <hr/>
            <br/>
            <h3>About the project:</h3>
            <br/>
            <div  className={styles.info}>
              ❗ If you want to see the code of the project, use the Test at the bottom of the page)  ❗
            </div>
            <br/>

            <div className={styles.btnWrapper}>
              <button className={styles.close} onClick={clickClose}>close info</button>
            </div>
          </div>
        </div>
        }
      </>
  );
}
