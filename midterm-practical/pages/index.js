import { useState } from "react";
import ItemList from "../components/ItemList";
import ItemDetails from "../components/ItemDetails";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [selectedItem, setSelectedItem] = useState(null);

  const addItem = (item) => {
    if (item.trim() ==="") return;
  setItems([...items, item]);
};

return (
  <div className={styles.container}>
    <h1>Midterm Practical App</h1>
    <ItemList items={items} setSelectedItem={setSelectedItem} addItem={additem} />
    {selectedItem && <ItemDetails item={selectedItem} />}
    </div>
);
}
