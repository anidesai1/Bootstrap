import React from 'react';

const MyPicture = () => {
    return (
        <header>
             <div className="my-picture-container">
                <img src="./MyPhoto.jpg" alt="my graduation" className="my-picture-image" style={{ maxWidth: '100%', maxHeight: '150%' }} />
            </div>
        </header>
    );
};

export default MyPicture;
