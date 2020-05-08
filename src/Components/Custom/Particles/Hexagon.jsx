import React from 'react';
import Style from 'style-it'

const Hexagon = ({width, color, height, top, right, left, bottom}) => {
    return Style.it(`
    .shapes {
        width: ${width}px;
        height: ${height}px;
        background-color: ${color};
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        position: absolute;
        top: ${top}px;
        left: ${left}px;
        right: ${right}px;
        bottom: ${bottom}px

    }
    `,
    <div className='shapes'>
            
    </div>
    ) 
}

export default Hexagon;
