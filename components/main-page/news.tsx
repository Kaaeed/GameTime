export default function News() {
  return (
    <div className="w-full flex bg-[#60a5fa] text-white justify-center">
      <section className="flex flex-col items-center w-3/5 my-10">
        <h2 className="font-bold text-4xl">Our stats</h2>
        <div className="text-xl flex justify-between w-full items-center mt-6 flex-col xl:flex-row">
          <span>NUM Total Games</span>
          <span>NUM Genres</span>
          <span>NUM Users</span>
          <span>NUM Reviews</span>
          <span>NUM New Posts</span>
          <span>NUM New Threads</span>
        </div>
      </section>
    </div>
  );
}
