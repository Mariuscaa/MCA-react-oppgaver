
export default function ListComponent({foods}) {
  return (
    <>
      <ul>
        {foods.map((meal) => (
          <li>{meal}</li>
        ))}
      </ul>
    </>
  );
}
