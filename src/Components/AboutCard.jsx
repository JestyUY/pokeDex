const rule = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 2.33325C4 2.06659 4.1 1.83325 4.3 1.63325C4.5 1.43325 4.73333 1.33325 5 1.33325L11 1.33325C11.2556 1.33325 11.4861 1.43325 11.6917 1.63325C11.8972 1.83325 12 2.06659 12 2.33325V13.6666C12 13.9333 11.8972 14.1666 11.6917 14.3666C11.4861 14.5666 11.2556 14.6666 11 14.6666H5C4.73333 14.6666 4.5 14.5666 4.3 14.3666C4.1 14.1666 4 13.9333 4 13.6666L4 2.33325ZM5 2.33325L5 13.6666H11V11.4999H8V10.4999H11V8.49992H8V7.49992H11V5.49992H8V4.49992H11V2.33325L5 2.33325ZM8 4.49992V5.49992V4.49992ZM8 7.49992V8.49992V7.49992ZM8 10.4999V11.4999V10.4999Z"
      fill="#1D1D1D"
    />
  </svg>
);

// eslint-disable-next-line react/prop-types
export function AboutCard({ weight, height, moves, moves2 }) {
  return (
    <section className="flex justify-between text-black z-30 w-[95%] mx-auto ">
      <div className="flex flex-col">
        <span>{weight}</span>
        <span className="">Weight</span>
      </div>

      <div className="flex flex-col ">
        <div className="flex">
          <span className="">
            {" "}
            {rule} {height * 0.1} m
          </span>
        </div>
        <span className="">Height</span>
      </div>
      <div className="flex flex-col">
        <span>{moves}</span>
        <span>{moves2}</span>
        <span className="">Moves</span>
      </div>
    </section>
  );
}
