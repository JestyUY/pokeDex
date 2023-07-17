export function PastillasClass({ typeColor, type }) {
  return (
    <span className={`${typeColor} w-20 text-center rounded-2xl text-white`}>
      {type}
    </span>
  );
}
