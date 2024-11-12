import { useEffect, useState } from 'react';
import { createDisc } from '/home/isaac/vite-othello-game-react/src/componets/DiskHelper.jsx';

const Board5 = () => {
    const initialWhitePositions = [36]; // Set initial white disc positions
    const initialBlackPositions = [19, 27, 28, 35]; // Set initial black disc positions

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
            // 1. Add white disc to index 34
            setWhitePositions((prev) => [...prev, 34]);

            // 2. After 1 second, flip the black disc at index 35 to white
            setTimeout(() => {
                setBlackPositions((prev) => prev.filter((pos) => pos !== 35)); // Remove black at 35
                setWhitePositions((prev) => [...prev, 35]); // Add white at 35
            }, 1000); // Delay 1 second before flipping

            // 3. After another 1 second (total 2 seconds), reset the board
            setTimeout(() => {
                setWhitePositions((prev) => prev.filter((pos) => pos !== 34 && pos !== 35)); // Remove white at 34 and 35
                setBlackPositions((prev) => [...prev, 35]); // Put black back at 35
            }, 2000); // Reset after 2 seconds

        }, 4000); // Repeat every 4 seconds: 2 seconds to display, 2 seconds to reset

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    return (
        <div
            id="board5"
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

export default Board5;