import { useState } from "react";
import styles from "../styles.ItemList.module.css";

export default function ItemList({ items, onSelect, addItem }) {
    const [newItem, setNewItem] = useState(" ");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.trim() === "") return;
        addItem(newItem);
        setNewItem("");
};

return (
    <div className={styles.listContainer}>
        <h2>Item List</h2>
        <ul>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <li key={index} onClick={() => onSelect(item)}>
                        {item}
                        </li>
                ))
                ) : (
                <p>No items found.</p>
            )}
        </ul>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add an item"
            />
            <button type="submit">Add</button>
        </form>
        </div>
);
}