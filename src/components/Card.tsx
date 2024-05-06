/**
 * @prettier
 */
import * as React from 'react';
import classes from 'src/styles/card.module.css';
import { CardProps } from 'src/types/components/Card';
import { classNames } from 'src/utils/css/classNames';

export function Card({ classes: classesProp, children, title }: CardProps): React.ReactElement {
    return (
        <div className={classNames(classes.cardContainer, classesProp?.cardContainer)}>
            <div className={classNames(classes.cardTitle, classesProp?.cardTitle)}>{title}</div>
            <div className={classNames(classes.cardContent, classesProp?.cardContent)}>{children}</div>
        </div>
    );
}
