import { useState } from "react";
import styles from "../styles.ItemList.module.css";

export default function ItemList({ items, onSelect, addItem }) {
    const [newItem, setNewItem] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.trim() === "") {
            setError("Item cannot be empty");
            return;
        }
        setError("");
        addItem(newItem);
        setNewItem("");
};

return (
    <div className={styles.listContainer}>
        <h2>Item List</h2>
            {items.length > 0 ? (
                <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => onSelect(item)}>
                        {item}
                        </li>
                ))}
                </ul>
                ) : (
                <p>No items found.</p>
            )}
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item"
            />
            <button type="submit">Add</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        </div>
);
}