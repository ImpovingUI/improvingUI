import React, { FC } from "react";

export enum VariantEnum {
     'success' = 'success',
     'error' = 'error',
     'warning' = 'warning',
     'info' = 'info',
}

export enum PositionEnum {
     'top-right' = 'top-right', 
     'bottom-right' = 'bottom-right',
     'top-left' = 'top-left',
     'bottom-left' ='bottom-left'
}

export interface AlertProps {
     show: boolean;
     variant: `${VariantEnum}`;
     filled: boolean;
     closeAutomatic: boolean;
     timeOut?: number;
     message: string;
     tittle?: string;
     position: `${PositionEnum}`;
     Icon?: FC;
     config: AlertProps;
     handleClose: ( state: boolean ) => {};
}

export interface AlertPropsValidate {
     variant?: `${VariantEnum}`;
     position?: `${PositionEnum}`;
}