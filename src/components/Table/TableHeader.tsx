import React, {FC} from 'react';

export interface TableProps {
    listColumns: any
}

export const TableHeader : FC<TableProps> = ({listColumns}) => {
    return (
        <thead>
            <tr>
                {listColumns.map((value: String) => (
                    <th>{value}</th>
                ))}
            </tr>
        </thead>
    )
};