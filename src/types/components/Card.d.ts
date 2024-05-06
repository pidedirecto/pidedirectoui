import * as React from "react";

export type CardProps = {
    title?:string,
    children?: React.Node,
    classes?: {
        cardContainer?: string,
        cardTitle?: string,
        cardContent?:string
    },
}

export type Card = React.FunctionComponent<CardProps>
