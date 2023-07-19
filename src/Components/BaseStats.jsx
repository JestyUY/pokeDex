export function BaseStats(props) {
  //HP
  const hpSize = props.hpValue;
  const newHpSize = (hpSize * 100) / 200;
  const hpBarStyles = {
    width: `${newHpSize}%`,
    height: "4px",
    backgroundColor: props.type,
  };

  const reducedValue = 100 - newHpSize;
  const secondBar = {
    width: `${reducedValue}%`,
    height: "4px",
    backgroundColor: props.type,
  };

  //ATK

  const atkSize = props.atkValue;
  const newAtkSize = (atkSize * 100) / 200;
  const atkBarStyles = {
    width: `${newAtkSize}%`,
    height: "4px",
    backgroundColor: props.type,
  };

  const reducedAtkValue = 100 - newAtkSize;
  const secondAtkBar = {
    width: `${reducedAtkValue}%`,
    height: "4px",
    backgroundColor: props.type,
  };

  // DEF

  const defSize = props.defValue;
  const newDefSize = (defSize * 100) / 200;
  const defBarStyles = {
    width: `${newDefSize}%`,
    height: "4px",
    backgroundColor: props.type,
  };

  const reducedDefValue = 100 - newDefSize;
  const secondDefBar = {
    width: `${reducedDefValue}%`,
    height: "4px",
    backgroundColor: props.type,
  };

  //SPATK

  const spatkSize = props.spatkValue;
  const newSpatkSize = (spatkSize * 100) / 200;
  const spatkBarStyles = {
    width: `${newSpatkSize}%`,
    height: "4px",
    backgroundColor: props.type,
  };

  const reducedSpatkValue = 100 - newSpatkSize;
  const secondSpatkBar = {
    width: `${reducedSpatkValue}%`,
    height: "4px",
    backgroundColor: props.type,
  };

  // SPDEF

  const spdefSize = props.spdefValue;
  const newspDefSize = (spdefSize * 100) / 200;
  const spdefBarStyles = {
    width: `${newspDefSize}%`,
    height: "4px",
    backgroundColor: props.type,
  };

  const reducedspDefValue = 100 - newspDefSize;
  const secondspDefBar = {
    width: `${reducedspDefValue}%`,
    height: "4px",
    backgroundColor: props.type,
  };

  // SPD

  const spdSize = props.spdValue;
  const newspdSize = (spdSize * 100) / 200;
  const spdBarStyles = {
    width: `${newspdSize}%`,
    height: "4px",
    backgroundColor: props.type,
  };

  const reducedspdValue = 100 - newspdSize;
  const secondspdBar = {
    width: `${reducedspdValue}%`,
    height: "4px",
    backgroundColor: props.type,
  };
  return (
    <ul className="w-[97%] [&>li]:px-4 ">
      <li className="flex   ">
        <span
          className={`text ${props.type}   border-r border-slate-400 w-[15%] `}
        >
          HP
        </span>{" "}
        <span className="px-1 w-[10%]">{props.hpValue}</span>
        <div className="flex w-[75%]">
          <span
            className={` bg ${props.type}   block self-center transition-all rounded-l-xl `}
            style={hpBarStyles}
          ></span>
          <span
            className={` bg ${props.type}   block self-center opacity-20 transition-all rounded-r-xl`}
            style={secondBar}
          ></span>
        </div>
      </li>

      <li className="flex  ">
        <span
          className={`text ${props.type}   border-r border-slate-400 w-[15%] `}
        >
          ATK
        </span>{" "}
        <span className="px-1 w-[10%]">{props.atkValue}</span>
        <div className="flex w-[75%]">
          <span
            className={` bg ${props.type}   block self-center transition-all rounded-l-xl`}
            style={atkBarStyles}
          ></span>
          <span
            className={` bg ${props.type}   block self-center opacity-20 transition-all  rounded-r-xl`}
            style={secondAtkBar}
          ></span>
        </div>
      </li>

      <li className="flex  ">
        <span
          className={`text ${props.type}   border-r border-slate-400 w-[15%] `}
        >
          DEF
        </span>{" "}
        <span className="px-1 w-[10%]">{props.defValue}</span>
        <div className="flex w-[75%]">
          <span
            className={` bg ${props.type}   block self-center transition-all rounded-l-xl`}
            style={defBarStyles}
          ></span>
          <span
            className={` bg ${props.type}   block self-center opacity-20 transition-all  rounded-r-xl`}
            style={secondDefBar}
          ></span>
        </div>
      </li>

      <li className="flex  ">
        <span
          className={`text ${props.type}   border-r border-slate-400 w-[15%] `}
        >
          SPATK
        </span>{" "}
        <span className="px-1 w-[10%]">{props.spatkValue}</span>
        <div className="flex w-[75%]">
          <span
            className={` bg ${props.type}   block self-center transition-all rounded-l-xl`}
            style={spatkBarStyles}
          ></span>
          <span
            className={` bg ${props.type}   block self-center opacity-20 transition-all  rounded-r-xl`}
            style={secondSpatkBar}
          ></span>
        </div>
      </li>

      <li className="flex  ">
        <span
          className={`text ${props.type}   border-r border-slate-400 w-[15%]  `}
        >
          SPDEF
        </span>{" "}
        <span className="px-1 w-[10%]">{props.spdefValue}</span>
        <div className="flex w-[75%]">
          <span
            className={` bg ${props.type}   block self-center transition-all rounded-l-xl`}
            style={spdefBarStyles}
          ></span>
          <span
            className={` bg ${props.type}   block self-center opacity-20 transition-all  rounded-r-xl`}
            style={secondspDefBar}
          ></span>
        </div>
      </li>

      <li className="flex   ">
        <span
          className={`text ${props.type}    border-r border-slate-400 w-[15%] `}
        >
          SPD
        </span>{" "}
        <span className="px-1 w-[10%]">{props.spdValue}</span>
        <div className="flex w-[75%]">
          <span
            className={` bg ${props.type}   block self-center transition-all rounded-l-xl`}
            style={spdBarStyles}
          ></span>
          <span
            className={` bg ${props.type}   block self-center opacity-20 transition-all  rounded-r-xl`}
            style={secondspdBar}
          ></span>
        </div>
      </li>
    </ul>
  );
}
