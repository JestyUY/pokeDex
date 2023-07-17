// eslint-disable-next-line react/prop-types
export function AboutCard({ weight, height, moves }) {
  return (
    <section className="flex text-black z-30 w-[95%] h-40 absolute">
      <div className="">
        {weight}
        <span className="">Weight</span>
      </div>

      <div className="">
        {height}
        <span className="">Height</span>
      </div>
      <div className="">
        {moves}
        <span className="">Moves</span>
      </div>
    </section>
  );
}
