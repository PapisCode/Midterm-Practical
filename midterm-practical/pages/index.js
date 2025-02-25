import { useState } from "react";
import MainComponent from "../components/MainComponent";
import ItemList from "../components/ItemList";
import ItemDetails from "../components/ItemDetails";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [selectedItem, setSelectedItem] = useState(null);

  const addItem = (item) => {
    if (item.trim() === "") return;
  setItems([...items, item]);
};

return (
  <div className={styles.container}>
    <MainComponent />
    <ItemList items={items} onSelect={setSelectedItem} addItem={additem} />
    {selectedItem && <ItemDetails item={selectedItem} />}
    </div>
);
}
