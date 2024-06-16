import React, { useState } from 'react';

const Switch = () => {
    const [isOn, setIsOn] = useState(false);

    const Switch = () => {
        setIsOn(!isOn);
    };

    return (
        <div className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer ${isOn ? 'bg-color_branco' : 'bg-color_branco'}`} onClick={Switch}>
            <span className={`transform transition ease-in-out duration-200 inline-block w-4 h-4 bg-color_roxo1 rounded-full ${isOn ? 'translate-x-5' : 'translate-x-1'}`}/>
        </div>
    );
};

export default Switch;