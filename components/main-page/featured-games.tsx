import GameCard from "./game-card";

interface FeaturedGamesProps {
  sectionTitle: string;
}

export default function FeaturedGames({ sectionTitle }: FeaturedGamesProps) {
  return (
    <div className="w-full flex justify-center intems-center bg-zinc-800">
      <section className="w-full mx-4 sm:mx-0 sm:w-7/12 mt-10 mb-20 ">
        <h1 className="font-bold text-4xl mb-4 text-orange-400">
          {sectionTitle}
        </h1>
        <div>
          <ul className="grid grid-cols-1 gap-x-2 gap-y-2 xl:grid-cols-2">
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
      </section>
    </div>
  );
}

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
  {
    id: 5,
    name: "Portal 2",
    main: 8,
    extra: 14,
    completionist: 21,
  },
  {
    id: 6,
    name: "Portal 2",
    main: 8,
    extra: 14,
    completionist: 21,
  },
];
