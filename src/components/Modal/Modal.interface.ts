import React, { FC } from "react";

export enum SizeEnum {
    'sm' = 'sm',
    'md' = 'md',
    'lg' = 'lg',
    'xl' = 'xl',
}

export interface ModalProps {
    size: `${SizeEnum}`;
    header?: string;
    show: boolean;
    children: JSX.Element;
}

export interface ModalPropsValidate {
    size?: `${SizeEnum}`;
}