"use client";

export function Tile(props:{handleTileClick:()=>void, color:string}) {

  // console.log('rendering tile!');

  let css;
  if (props.color == 'red')
  {
    css = "bg-red-500/60 hover:bg-red-500/80";
  }

  else
  {
    css = "bg-sky-500/60 hover:bg-sky-500/80";
  }
  return (
      <button
        className={`rounded-full px-10 py-10 font-semibold transition {} ${css}`}
        onClick={props.handleTileClick}
      >

      </button>
  );
}
