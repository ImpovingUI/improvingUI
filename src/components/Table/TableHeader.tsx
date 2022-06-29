import React, {FC,useState} from 'react';

export interface TableProps {
    listColumns: any,
    actions: boolean
}

const name = 'Table';

export const TableHeader : FC<TableProps> = ({listColumns=[],actions}) => {
    
    return (
        <thead className={`Thead-${name}`}>
                <tr>
                    {listColumns.map((value: String,index: Number) => (
                        <th key={index+"a"}>{value}</th>
                    ))}
                    {actions && <th>Actions</th>}
                </tr>
        </thead>
    )
};