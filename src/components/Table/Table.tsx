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
    listColumns?: String [],
    actions?: JSX.Element[] 
}

export const Table : FC<TableProps> = ({filter, pagination, listColumns, listRows,actions}) => {
    const [initial, setInitial] = useState(listRows);
    const [initialFilter, setInitiailFilter] = useState(listRows)
    return (
        <div>
            {filter && <InputFilter initial={initial} setInitial={setInitial} listRows={listRows} listColumns={listColumns} setInitialFilter={setInitiailFilter}/>}
            <table>
                <TableHeader
                    listColumns={listColumns}
                    actions={actions ?true :false}
                />
                <TableBody
                    listRows={initial}
                    actions={actions}
                />
            </table>
            {pagination && <Pagination initial={initial} setInitial={setInitial} listRows={initialFilter}/>}

        </div>
    )
};