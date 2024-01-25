import GameCard from "./game-card";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Baldur's Gate 3",
    main: 61,
    extra: 106,
    completionist: 150,
  },
  {
    id: 2,
    name: "Cyberpunk 2077",
    main: 25,
    extra: 61,
    completionist: 104,
  },
  {
    id: 3,
    name: "Red Dead Redenotion 2",
    main: 50,
    extra: 82,
    completionist: 183,
  },
  {
    id: 4,
    name: "Portal 2",
    main: 8,
    extra: 14,
    completionist: 21,
  },
];

export default function PopularGames() {
  return (
    <div>
      <div>
        <h1>Popular Games</h1>
        <div>
          <ul>
            {DUMMY_DATA.map((game) => (
              <li key={game.id}>
                <GameCard
                  name={game.name}
                  main={game.main}
                  extra={game.extra}
                  completionist={game.completionist}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
