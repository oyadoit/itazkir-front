import React from 'react';
import Style from 'style-it'

const Circle = ({width, color, height, top, right, left, bottom}) => {
    return Style.it(`
    .shapes {
        width: ${width}px;
        height: ${height}px;
        background-color: ${color};
        clip-path: circle(9.9% at 49% 50%);
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

export default Circle
