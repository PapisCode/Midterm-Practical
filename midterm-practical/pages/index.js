import { useState } from "react";
import MainComponent from "../components/MainComponent";
import ItemList from "../components/ItemList";
import ItemDetails from "../components/ItemDetails";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  const [items, setItems] = useState([
{ name: "Drake", albums: ["For All The Dogs", "Honnestly, Nevermind", "Certified Lover Boy"] },
{ name: "Tory Lanez", albums: ["Alone At Prom", "Daystar", "The New Toronto 3"] },
{ name: "Lil Baby", albums: ["It's Only Me", "My Turn", "Harder Than Ever"] }
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const addItem = (name) => {
    if (name.trim() === "") return;
    const newItem = { name, albums: [] };
    setItems([...items, newItem]);
  };

return (
  <div className={styles.container}>
    <MainComponent />
    <ItemList items={items} onSelect={setSelectedItem} addItem={addItem} />
            {selectedItem && <ItemDetails item={selectedItem} />}
    </div>
);
}
