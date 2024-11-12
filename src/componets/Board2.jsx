import { useEffect } from 'react';
import { createDisc } from './DiskHelper.jsx';

const Board2 = () => {
    const whitePositions = [27, 36];
    const blackPositions = [28, 35];
    const greyPositions = [19, 26, 37, 44]; // Positions of the grey discs

    // Function to render the grid
    const renderGrid = () => {
        const grids = [];
        for (let i = 0; i < 64; i++) {
            const isWhite = whitePositions.includes(i);
            const isBlack = blackPositions.includes(i);
            const isGrey = greyPositions.includes(i);

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
                    {isGrey && (
                        <div
                            className="grey-disc"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                visibility: 'hidden', // Initially hidden
                            }}
                        >
                            {createDisc('grey')}
                        </div>
                    )}
                </div>
            );
        }
        return grids;
    };

    useEffect(() => {
        const board = document.getElementById('board2');
        animateGreyDiscs(board);
    }, []);

    const animateGreyDiscs = (board) => {
        const greyDiscs = board.querySelectorAll('.grey-disc');
        let index = 0;

        // Function to animate the grey discs
        const intervalId = setInterval(() => {
            greyDiscs.forEach((disc, i) => {
                disc.style.visibility = i === index ? 'visible' : 'hidden'; // Show one disc at a time
            });
            index = (index + 1) % greyDiscs.length; // Loop through the grey discs

        }, 2000); // Delay of 1 second

        // Cleanup function to clear the interval on unmount
        return () => clearInterval(intervalId);
    };

    return (
        <div
            id="board2"
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

export default Board2;