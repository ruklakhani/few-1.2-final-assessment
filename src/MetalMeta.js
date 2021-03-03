// src/MetalMeta.js

import React from 'react';
import data from './metal.json';
import './MetalMeta.css'

function MetalMeta() {
    return(
        <div className="metal-meta">
            <div className="total_bands">
                Total Bands: {data.length}
            </div>
        </div>
    );
}

export default MetalMeta