export default function Item({ name, isPacked, togglePacked }) {
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
