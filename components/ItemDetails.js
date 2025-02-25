import styles from "../styles/ItemDetails.modules.css";

export default function ItemDetails({ item }) {
    return (
        <div className={styles.detailsContainer}>
            <h2>Item Details</h2>
            <p>Selected Item: {item}</p>
            </div>
    );
}