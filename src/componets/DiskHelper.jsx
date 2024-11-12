export const createDisc = (color, opacity = 1) => {
    return (
        <div
            style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: color,
                opacity: opacity,
            }}
        />
    );
};