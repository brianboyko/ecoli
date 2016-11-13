import React from 'react';

const styles = {
  stroke: 'none',
  strokeWidth: 0.354,
  strokeLinejoin: 'miter',
  strokeMiterlimit: 79.84031677,
  markerStart: 'none',
  markerEnd: 'none',
};

export const peep = (color) => (<svg>
          <path
             style={Object.assign({}, styles, {fill: color})}
             d="m 33.015,18.04 -10e-4,12.041 c -1.28,0.848 -2.124,2.301 -2.124,3.949 l 0,8.003 c 0,2.612 2.121,4.733 4.733,4.733 l 3.754,0 c 2.612,0 4.733,-2.121 4.733,-4.733 l 0,-8.003 c 0,-1.648 -0.845,-3.101 -2.125,-3.949 l 0,-12.041 c 0,-0.825 -0.67,-1.495 -1.495,-1.495 l -5.98,0 c -0.825,0 -1.495,0.67 -1.495,1.495 z m -0.531,35.499 c 0,2.714 2.203,4.917 4.917,4.917 2.714,0 4.917,-2.203 4.917,-4.917 0,-2.713 -2.203,-4.916 -4.917,-4.916 -2.714,0 -4.917,2.203 -4.917,4.916 z"
             stroke-miterlimit="79.8403193612775"
             id="path3402" />
</svg>);
