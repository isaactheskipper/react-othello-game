import { useEffect } from 'react';
import { createDisc } from './DiskHelper.jsx';

const Board4 = () => {
    const whitePositions = [36];
    const blackPositions = [19, 27, 28, 35];
    const lightGreyPosition = [18, 20, 34];

    // Function to render the grid
    const renderGrid = () => {
        const grids = [];
        for (let i = 0; i < 64; i++) {
            const isWhite = whitePositions.includes(i);
            const isBlack = blackPositions.includes(i);
            const isLightGrey = lightGreyPosition.includes(i);

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
                    {isLightGrey && (
                        <div
                            className="light-grey-disc"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                visibility: 'hidden', // Initially hidden
                            }}
                        >
                            {createDisc('white', 0.5)} {/* Light grey disc */}
                        </div>
                    )}
                </div>
            );
        }
        return grids;
    };

    useEffect(() => {
        const board = document.getElementById('board4');
        animateLightGreyDiscs(board);
    }, []);

    const animateLightGreyDiscs = (board) => {
        const lightGreyDiscs = board.querySelectorAll('.light-grey-disc');
        let index = 0;

        // Set interval to animate discs
        const intervalId = setInterval(() => {
            lightGreyDiscs.forEach((disc, i) => {
                disc.style.visibility = i === index ? 'visible' : 'hidden'; // Show one disc at a time
            });
            index = (index + 1) % lightGreyDiscs.length; // Loop through the light grey discs

        }, 2000); // Delay of 1 second

        // Cleanup function to clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    };

    return (
        <div
            id="board4"
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

export default Board4;
