import { viewMatrix } from "../models/Game";
import { getClassName } from "../models/Piece";
import { Context } from "../context";
import React, { useContext } from "react";

export default function GameboardView(): JSX.Element {
	const game = useContext(Context);
	const matrix = viewMatrix(game);

	return (
		<table className="game-board">
			<tbody>
				{matrix.map((row, i) => {
					const blocksInRow = row.map((block, j) => {
						const classString = `game-block ${
							block ? getClassName(block) : "block-empty"
						}`;
						return <td key={j} className={classString} />;
					});

					return <tr key={i}>{blocksInRow}</tr>;
				})}
			</tbody>
		</table>
	);
}
