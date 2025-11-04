import LikeButton from "./like-button";

function Header({ title }) {
  console.log(title);
  return <h1>{title}</h1>;
}

export default function HomePage() {
  const names = ['KR69', 'SB98', 'OT8'];

  

  return (
    <div>
      <Header title="Develop. Preview. Ship" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
