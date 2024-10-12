import React from 'react';

const Logo = () => {
    const styles = {
        container: {
            width: '289.891px',
            height: '285.543px',
            transform: 'translate(0px, 0px) rotate(0deg)',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensures the image covers the container
        },
    };

    return (
        <div className="Izwocg" style={styles.container}>
            <img
                className="_7_i_XA"
                src="https://media-public.canva.com/FjmEs/MAEzjJFjmEs/1/s.png"
                alt="Gold circle frame. geometric"
                style={styles.image}
                draggable="false"
            />
        </div>
    );
};

export default Logo;