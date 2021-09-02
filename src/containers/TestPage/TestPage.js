import React, {useEffect, useState} from "react";
import styles from './TestPage.module.css';
import {Preview, Questions, Timer} from "../../components";
import {Link} from "react-router-dom";

export const TestPage = () => {
    const [start, setStart] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        return () => {
            setStart(false);
            setSuccess(false);
        }
    }, [])

    return (
        <div className={`${styles.wrapper} ${success ? styles.green : styles.red}`}>
            <Link to="/" className={styles.back}>H</Link>
            {!start && <Preview setStart={setStart}/>}
            {start && <Timer setStart={setStart} success={success}/>}
            {start && <Questions setSuccess={setSuccess} success={success}/>}
        </div>
    );
}
