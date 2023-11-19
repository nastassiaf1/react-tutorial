import { useState } from 'react';

import Board from './Board';
import styles from './styles.module.css';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const isXNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
      }

    const moves = history.map((_squares, move) => {
        let description;

        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }

        return (
            <li key={ move }>
                <button onClick={() => jumpTo(move)}>{ description }</button>
            </li>
        );
    });

    return (
      <div className={ styles.game }>
        <div className={ styles["game-board"] }>
            <Board isXNext={ isXNext } squares={ currentSquares } onPlay={ handlePlay } />
        </div>
        <div className={ styles["game-info"] }>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
}