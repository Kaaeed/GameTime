import GameCard from "./game-card";

const DUMMY_DATA = [
  {
    name: "Baldur's Gate 3",
    main: 61,
    extra: 106,
    completionist: 150,
  },
  {
    name: "Cyberpunk 2077",
    main: 25,
    extra: 61,
    completionist: 104,
  },
  {
    name: "Red Dead Redenotion 2",
    main: 50,
    extra: 82,
    completionist: 183,
  },
  {
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
              <GameCard
                name={game.name}
                main={game.main}
                extra={game.extra}
                completionist={game.completionist}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
