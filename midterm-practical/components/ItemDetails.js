import { useState, useEffect } from "react";
import styles from "../styles/ItemDetails.module.css";

export default function ItemDetails({ item }) {
    const [selectedItem, setSelectedItem] = useState(item);

    useEffect(() => {
        setSelectedItem(item);
    }, [item]);
    
    return (
        <div className={styles.detailsContainer}>
            <h2>Artist Details</h2>
            <p><strong>Selected Artist:</strong> {selectedItem.name}</p>
            <h3>Latest Albums:</h3>
            <ul>
                {selectedItem.albums && selectedItem.albums.length > 0 ? (
                    selectedItem.albums.map((album, index) => <li key={index}>{album}</li>)
                ) : (
                    <p>No albums available</p>
                )}
            </ul>
            </div>
    );
}