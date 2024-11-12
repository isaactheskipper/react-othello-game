import { useEffect, useState } from 'react';
import { createDisc } from '/home/isaac/vite-othello-game-react/src/componets/DiskHelper.jsx';

const Board3 = () => {
    const initialWhitePositions = [36, 27]; // White discs initially at 36 and 27
    const initialBlackPositions = [28, 35]; // Black discs initially at 28 and 35

    const [whitePositions, setWhitePositions] = useState(initialWhitePositions);
    const [blackPositions, setBlackPositions] = useState(initialBlackPositions);

    // Function to render the grid
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

    useEffect(() => {
        const intervalId = setInterval(() => {
            // 1. Add black disc to index 19
            setBlackPositions((prev) => [...prev, 19]);

            // 2. After 1 second, flip the white disc at index 27 to black
            setTimeout(() => {
                setWhitePositions((prev) => prev.filter((pos) => pos !== 27)); // Remove white at 27
                setBlackPositions((prev) => [...prev, 27]); // Add black at 27
            }, 1000); // Delay 1 second before flipping

            // 3. After 2 seconds, reset the board
            setTimeout(() => {
                setBlackPositions((prev) => prev.filter((pos) => pos !== 19 && pos !== 27)); // Remove black at 19 and 27
                setWhitePositions((prev) => [...prev, 27]); // Put white back at 27
            }, 2000); // Reset after 2 seconds

        }, 4000); // Repeat every 4 seconds: 2 seconds to display, 2 seconds to reset

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    return (
        <div
            id="board3"
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

export default Board3;
