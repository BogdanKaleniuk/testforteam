import React, { useState } from "react";

function Item({ name, isPacked, togglePacked }) {
  return (
    <li className="item">
      <label style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={isPacked}
          onChange={togglePacked}
          style={{ marginRight: "8px" }} // Додаємо відстань між чекбоксом і назвою
        />
        {isPacked ? <del>{name + " ✅"}</del> : name}
      </label>
    </li>
  );
}

export default function PackingList() {
  const [items, setItems] = useState([
    { name: "Космічний костюм", isPacked: true },
    { name: "Шолом із золотим листям", isPacked: true },
    { name: "Фото Тем О'Шонессі (Tam O'Shaughnessy)", isPacked: false },
  ]);

  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { name: newItem, isPacked: false }]);
      setNewItem(""); // очищаємо поле вводу після додавання
    }
  };

  const togglePacked = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  };

  return (
    <section>
      <h1>Список речей для пакування Саллі Райд (Sally Ride)</h1>
      <input
        type="text"
        placeholder="Додати новий елемент"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Додати</button>
      <ul>
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            isPacked={item.isPacked}
            togglePacked={() => togglePacked(index)}
          />
        ))}
      </ul>
    </section>
  );
}
