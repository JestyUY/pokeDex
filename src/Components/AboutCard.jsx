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
const weightSVG = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.28333 13.0001H13.05L12 5.66675H5.33333L4.28333 13.0001ZM8.66667 4.66675C8.95556 4.66675 9.19444 4.56953 9.38333 4.37508C9.57222 4.18064 9.66667 3.94453 9.66667 3.66675C9.66667 3.37786 9.57222 3.13897 9.38333 2.95008C9.19444 2.76119 8.95556 2.66675 8.66667 2.66675C8.38889 2.66675 8.15278 2.76119 7.95833 2.95008C7.76389 3.13897 7.66667 3.37786 7.66667 3.66675C7.66667 3.94453 7.76389 4.18064 7.95833 4.37508C8.15278 4.56953 8.38889 4.66675 8.66667 4.66675ZM10.4 4.66675H12C12.2556 4.66675 12.4778 4.7473 12.6667 4.90841C12.8556 5.06953 12.9667 5.27786 13 5.53341L14.0333 12.8667C14.0778 13.1667 14.0028 13.4306 13.8083 13.6584C13.6139 13.8862 13.3611 14.0001 13.05 14.0001H4.28333C3.97222 14.0001 3.71945 13.8862 3.525 13.6584C3.33056 13.4306 3.25556 13.1667 3.3 12.8667L4.33333 5.53341C4.36667 5.27786 4.47778 5.06953 4.66667 4.90841C4.85556 4.7473 5.07778 4.66675 5.33333 4.66675H6.93333C6.84444 4.51119 6.77778 4.35286 6.73333 4.19175C6.68889 4.03064 6.66667 3.85564 6.66667 3.66675C6.66667 3.11119 6.86111 2.63897 7.25 2.25008C7.63889 1.86119 8.11111 1.66675 8.66667 1.66675C9.22222 1.66675 9.69444 1.86119 10.0833 2.25008C10.4722 2.63897 10.6667 3.11119 10.6667 3.66675C10.6667 3.85564 10.6444 4.03064 10.6 4.19175C10.5556 4.35286 10.4889 4.51119 10.4 4.66675ZM4.28333 13.0001H13.05H4.28333Z"
      fill="#1D1D1D"
    />
  </svg>
);

// eslint-disable-next-line react/prop-types
export function AboutCard({ weight, height, moves, moves2 }) {
  let heightCalculated = height * 0.1;
  let newHeight = heightCalculated.toFixed(2);

  let fixedWeight = (weight * 0.1).toFixed(2);

  return (
    <section className="flex place-content-evenly text-black z-30 w-[95%] mx-auto h-[16%]  divide-gray-500 text-center">
      <div className="flex flex-col w-[30%] border-r border-gray-400 relative">
        <div className="flex place-content-center">
          <span className="scale-150 mr-2">{weightSVG}</span>
          <span>{fixedWeight} kg</span>
        </div>
        <span className="absolute bottom-0 left-0 right-0 font-light">
          Weight
        </span>
      </div>

      <div className="flex flex-col text-center w-[30%] border-r border-gray-400 relative">
        <div className="flex place-content-center">
          <span>{rule}</span>
          <span className=""> {newHeight} m</span>
        </div>
        <span className="absolute bottom-0 left-0 right-0 font-light">
          Height
        </span>
      </div>
      <div className="flex flex-col w-[30%] relative h-20">
        <div className="flex place-content-center">
          <span>{moves}</span>
          <span>{moves2}</span>
        </div>
        <span className="absolute bottom-0 left-0 right-0 font-light">
          Moves
        </span>
      </div>
    </section>
  );
}
