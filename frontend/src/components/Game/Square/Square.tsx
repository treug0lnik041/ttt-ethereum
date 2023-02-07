import React, { useState } from "react";
import { Cell } from "../../../web3-sdk/Contract";
import "./Square.css";

function Square({ cell, onClick } : { cell: Cell, onClick: React.MouseEventHandler<HTMLButtonElement> } ) {
	const [isDisabled, setIsDisabled] = useState(false);

	const convertCellToChar = () => {
		switch (cell) {
			// Empty symbol needs because without it styles become strange
			case Cell.None: return 'ㅤ';
			case Cell.X: { setIsDisabled(true); return 'X'; }
			case Cell.O: { setIsDisabled(true); return 'O'; }
		}
	}

	return (
		<button className="square" onClick={onClick} disabled={isDisabled}>
			{convertCellToChar()}
		</button>
	);
}

export default Square;