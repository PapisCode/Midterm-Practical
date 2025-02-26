import { useState} from "react";
import styles from "../styles/Home.module.css";

export default function MainComponent() {
    const [WelcomeMessage, setWelcomeMessage] = useState(true);

    return (
    <div className={styles.mainContainer}>
        <h1 className={styles.title}>Welcome to the Midterm Practical App</h1>
        {WelcomeMessage && <p>Select and item from the list or add a new one.</p>}
        <button className={styles.button} onClick ={() => setWelcomeMessage(false)}>Hide Message</button>
        </div>
        );
}