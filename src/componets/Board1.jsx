
import { createDisc } from './DiscHelper'; // Import the helper function

const Board1 = () => {
    const whitePositions = [27, 36];
    const blackPositions = [28, 35];

    const renderGrid = () => {
        const grids = [];
        for (let i = 0; i < 64; i++) {
            const isWhite = whitePositions.includes(i);
            const isBlack = blackPositions.includes(i);

            grids.push(
                <div
                    key={i}
                    id={`grid-${i}`}
                    style={{
                        border: 'solid',
                        height: '100px',
                        width: '100px',
                        position: 'relative',
                    }}
                >
                    {isWhite && createDisc('white')}
                    {isBlack && createDisc('black')}
                </div>
            );
        }
        return grids;
    };


    return (
        <div
            id="board1"
            style={{
                backgroundColor: 'green',
                display: 'grid',
                gridTemplateColumns: 'repeat(8, 100px)',
                gridTemplateRows: 'repeat(8, 100px)',
                gap: '5px',
                width: 'fit-content',
                padding: '5px',
                marginTop: '10px',
            }}
        >
            {renderGrid()}
        </div>
    );
};

export default Board1;