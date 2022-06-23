import React, {FC,useState} from 'react';

export interface TableProps {
    listColumns: any,
    actions: boolean
}

export const TableHeader : FC<TableProps> = ({listColumns,actions}) => {
    
    return (
        <thead>
            <tr>
                {listColumns.map((value: String,index: Number) => (
                    <th key={index+"a"}>{value}</th>
                ))}
                {actions && <th>Actions</th>}
            </tr>
        </thead>
    )
};