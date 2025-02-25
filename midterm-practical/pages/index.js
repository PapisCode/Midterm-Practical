import { useState } from "react";
import MainComponent from "../components/MainComponent";
import ItemList from "../components/ItemList";
import ItemDetails from "../components/ItemDetails";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  const [items, setItems] = useState([
{ name: "Drake", albums: ["Her Loss", "Certified Lover Boy", "Scorpion"] },
{ name: "Tory Lanez", albums: ["Sorry 4 What", "Alone at Prom", "Daystar"] },
{ name: "Lil Baby", albums: ["It's Only Me", "My Turn", "Harder Than Ever"] }
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const addItem = (item) => {
    if (item.trim() === "") return;
  setItems([...items, {name: item, albums: []}]);
};

return (
  <div className={styles.container}>
    <MainComponent />
    <ItemList items={items} onSelect={setSelectedItem} addItem={addItem} />
    {selectedItem && <ItemDetails item={selectedItem} />}
    </div>
);
}
