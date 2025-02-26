import { useState, useEffect } from "react";
import styles from "../styles/ItemDetails.module.css";

export default function ItemDetails({ item }) {
    const [selectedItem, setSelectedItem] = useState(item);

    useEffect(() => {
        setSelectedItem(item);
    }, [item]);

    if (!selectedItem) {
        return <p>No artist selected</p>
    }
    
    return (
        <div className={styles.detailsContainer}>
            <h2 className={styles.heading}>Artist Details</h2>
            <p><strong>Name:</strong> {selectedItem.name}</p>
            <h3>Albums:</h3>
            <ul>
                {selectedItem.albums.map((album, index) => (
                    <li key={index}>{album}</li>
                ))}
            </ul>
            </div>
    );
}