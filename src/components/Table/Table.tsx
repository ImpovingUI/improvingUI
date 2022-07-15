import React, {FC, useState, useLayoutEffect} from 'react';
import './Table.css'
import { InputFilter } from './InputFilter';
import { Pagination } from './Pagination';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { validationColumn, validationIndex, validationRow, validationAction } from './validations';

export interface TableProps {
    filter?: Boolean,
    pagination ?: Boolean,
    listRows?: Object[],
    listColumns?: String [],
    listIndex?: Number[],
    actions?: JSX.Element[],
    minInput?: Number | undefined
}

export const Table : FC<TableProps> = ({filter, pagination, listColumns=[], listRows=[],actions=[], listIndex=[], minInput}) => {
    const [initial, setInitial] = useState(listRows);
    const [initialFilter, setInitiailFilter] = useState(listRows);
    const [initialColumns, setInitialColumns] = useState<String[]>([])
    const [initialIndex, setInitialIndex] = useState<Number[]>([])
    const [initialActions, setInitialActions] = useState<JSX.Element[]>();
    const [initialRows, setInitialRows] = useState<Object[]>([]);
    const emptyMessage = useState(false)

    useLayoutEffect(() => {
        const columns = validationColumn(listColumns);
        const indexs = validationIndex(listIndex);
        const rows = validationRow(listRows);
        const acts = validationAction(actions);
        setInitialColumns(columns);
        setInitialIndex(indexs);
        setInitialRows(rows);
        setInitialActions(acts);
    },[listRows])

    return (
        <div className='ContainerTable' role="data">
            {filter && <InputFilter initial={initial} setInitial={setInitial} listRows={initialRows} listColumns={listColumns} setInitialFilter={setInitiailFilter} listIndex={initialIndex} minInput={minInput || 0} emptyMessage={emptyMessage}/>}
            <table className='Table'>
                <TableHeader
                    listColumns={initialColumns}
                    actions={actions.length>0 ?true :false}
                />
                <TableBody
                    listRows={initial}
                    actions={initialActions}
                    listColumns={listColumns}
                    listIndex={initialIndex}
                    emptyMessage={emptyMessage[0]}
                />
            </table>
            {pagination && <Pagination initial={initial} setInitial={setInitial} listRows={initialFilter}/>}

        </div>
    )
};