import React, {FC, useState} from 'react';
import './Table.css'
import { InputFilter } from './InputFilter';
import { Pagination } from './Pagination';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';

export interface TableProps {
    filter?: Boolean,
    pagination ?: Boolean,
    listRows?: Object[],
    listColumns?: String []
}

export const Table : FC<TableProps> = ({filter, pagination, listColumns, listRows}) => {
    const [initial, setInitial] = useState(listRows);
    return (
        <div>
            {filter && <InputFilter initial={initial} setInitial={setInitial} listRows={listRows} listColumns={listColumns}/>}
            <table>
                <TableHeader
                    listColumns={listColumns}
                />
                <TableBody
                    listRows={initial}
                />
            </table>
            {pagination && <Pagination initial={initial} setInitial={setInitial} listRows={listRows}/>}

        </div>
    )
};