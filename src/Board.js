import Square from './Square';
import styles from './styles.module.css';
import calculateWinner from './calculateWinner';

export default function Board({ isXNext, squares, onPlay }) {
    function handleClick(index) {
        if (calculateWinner(squares) || squares[index]) {
            return;
        }

        const nextSquares = squares.slice();

        if (isXNext) {
            nextSquares[index] = "X";
        } else {
            nextSquares[index] = "O";
        }

        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (isXNext ? "X" : "O");
    }

    return <>
        <div className={ styles.status }>{status}</div>
        <div className={ styles['board-row'] }>
            <Square value={ squares[0] } onSquareClick={() => handleClick(0) }  />
            <Square value={ squares[1] } onSquareClick={() => handleClick(1) } />
            <Square value={ squares[2] } onSquareClick={() => handleClick(2) } />
        </div>
        <div className={ styles['board-row'] }>
            <Square value={ squares[3] } onSquareClick={() => handleClick(3)} />
            <Square value={ squares[4] } onSquareClick={() => handleClick(4)} />
            <Square value={ squares[5] } onSquareClick={() => handleClick(5)} />
        </div>
        <div className={ styles['board-row'] }>
            <Square value={ squares[6] } onSquareClick={() => handleClick(6)} />
            <Square value={ squares[7] } onSquareClick={() => handleClick(7)} />
            <Square value={ squares[8] } onSquareClick={() => handleClick(8)} />
        </div>
    </>
}