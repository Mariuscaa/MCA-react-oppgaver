export default function Food({ foods }) {
  return (
    <>
      <ul>
        {foods.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>
    </>
  );
}
