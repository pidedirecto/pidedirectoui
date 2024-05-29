/**
 * @prettier
 */
import React from 'react';
import classes from 'src/styles/loader.module.css';

export function Loader(): React.ReactElement {
    return (
        <div className={classes.loaderContainer}>
            <div className={classes.loader}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p>Cargando, espera...</p>
        </div>
    );
}
