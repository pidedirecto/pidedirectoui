import * as React from 'react';
import classes from 'src/styles/card.module.css';
import { CardProps } from 'src/types/components/Card';
import { classNames } from 'src/utils/css/classNames';

export function Card({ classes: classesProp, children, title }: CardProps): React.ReactElement {
    return (
        <div className={classNames(classes.cardContainer, classesProp?.cardContainer)}>
            {title && <h3 className={classNames(classes.cardTitle, classesProp?.cardTitle)}>{title}</h3>}
            <div className={classNames(classes.cardContent, classesProp?.cardContent)}>{children}</div>
        </div>
    );
}
