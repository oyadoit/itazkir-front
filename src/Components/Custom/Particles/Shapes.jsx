import React from 'react';
import Style from 'style-it'

const Shapes = ({width, color, bgImage, height, top, right, left, bottom}) => {
    return Style.it(`
    .shapes {
        // width: ${width}px;
        // height: ${height}px;
        background-color: ${color};
        background-image: ${bgImage}
        position: absolute;
        top: ${top}px;
        left: ${left}px;
        right: ${right}px;
        bottom: ${bottom}px;

    }
    `,
    <div className='shapes'>
            
    </div>
    ) 
}

export default Shapes;
