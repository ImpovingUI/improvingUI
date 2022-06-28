import React, {FC, useState, useEffect} from 'react';
import './Table.css'
import { InputFilter } from './InputFilter';
import { Pagination } from './Pagination';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { validationColumn, validationIndex } from './validations';

export interface TableProps {
    filter?: Boolean,
    pagination ?: Boolean,
    listRows?: Object[],
    listColumns?: String [],
    listIndex?: Number[],
    actions?: JSX.Element[] 
}

export const Table : FC<TableProps> = ({filter, pagination, listColumns=[], listRows,actions, listIndex=[]}) => {
    const [initial, setInitial] = useState(listRows);
    const [initialFilter, setInitiailFilter] = useState(listRows);
    const [initialColumns, setInitialColumns] = useState<String[]>([])
    const [initialIndex, setInitialIndex] = useState<Number[]>([])

    useEffect(() => {
        const columns = validationColumn(listColumns);
        const indexs = validationIndex(listIndex);
        setInitialColumns(columns);
        setInitialIndex(indexs);
    },[])

    return (
        <div>
            {filter && <InputFilter initial={initial} setInitial={setInitial} listRows={listRows} listColumns={listColumns} setInitialFilter={setInitiailFilter} listIndex={initialIndex}/>}
            <table>
                <TableHeader
                    listColumns={initialColumns}
                    actions={actions ?true :false}
                />
                <TableBody
                    listRows={initial}
                    actions={actions}
                    listColumns={listColumns}
                    listIndex={initialIndex}
                />
            </table>
            {pagination && <Pagination initial={initial} setInitial={setInitial} listRows={initialFilter}/>}

        </div>
    )
};