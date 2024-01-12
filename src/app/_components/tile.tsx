"use client";

export function Tile(props:{handleTileClick:()=>void, color:string}) {

  console.log('rendering tile!');
  return (
      <button
        className="rounded-full bg-white/10 px-10 py-10 font-semibold transition hover:bg-white/20"
        onClick={props.handleTileClick}
        style={{ backgroundColor: props.color}}
      >

      </button>
  );
}
