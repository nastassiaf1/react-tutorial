import styles from './styles.module.css';
import Square from './Square';

export default function Board() {
    return <>
        <div className={ styles['board-row'] }>
            <Square />
            <Square />
            <Square />
        </div>
        <div className={ styles['board-row'] }>
            <Square />
            <Square />
            <Square />
        </div>
        <div className={ styles['board-row'] }>
            <Square />
            <Square />
            <Square />
        </div>
    </>
}