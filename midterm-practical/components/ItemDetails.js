import { useState, useEffect } from "react";
import styles from "../styles/ItemDetails.module.css";

export default function ItemDetails({ item }) {
    const [selecteditem, setSelectedItem] = useState(item);

    useEffect(() => {
        setSelectedItem(item);
    }, [item]);
    
    return (
        <div className={styles.detailsContainer}>
            <h2>Item Details</h2>
            <p>Selected Item: {item}</p>
            </div>
    );
}