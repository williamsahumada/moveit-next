import {useState} from "react";
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    let exp;
    let xpview;
    let max = 10000;
    let min = 0;
    const [counter, setCount] = useState(0 );

    function setXP() {
        //setCount(1);
        if (counter < max) {
            setCount(counter +100);
            console.log(counter / 100);
            console.log("counter:" + counter);
            xpview = counter;
            //setTimeout(setXP, 300)
        }

    }

    function descXP() {
        //setCount(1);
        if (min < counter) {
            setCount(counter -100);
            console.log(counter / 100);
            console.log("counter:" + counter);
            xpview = counter;
            //setTimeout(setXP, 300)
        }

    }

    function timer() {
        //setTimeout(setXP, 900);
        //let i = 0;

        //setTimeout(() => alert(i), 900);
        //setInterval(setXP, 900);
        setXP();
    }


    //setXP(50);

    return (

        < header className={styles.experienceBar} >
            <span onClick={descXP}>{min} xp</span>
            <div onClick={timer} >
                <div style={{ width: counter / 100 + '%', maxWidth : max }} onClick={timer}/>
                <span className={styles.currentExperience} style={{ left: counter / 100 + '%' }}>{counter} xp </span>
            </div>
            <span onClick={timer}>{max} xp</span>
        </header>
    );
}
