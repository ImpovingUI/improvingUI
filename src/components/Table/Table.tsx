import React, {FC, useState, useEffect} from 'react';
import './Table.css'
import { InputFilter } from './InputFilter';
import { Pagination } from './Pagination';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { validationColumn, validationIndex, validationRow, validationAction } from './validations';

//Especificas el tipo de datos que recibiran las propiedades.
//El signo ? significa que no es obligatoria la propiedad.
export interface TableProps {
    filter?: Boolean,
    pagination ?: Boolean,
    listRows?: Object[],
    listColumns?: String [],
    listIndex?: Number[],
    actions?: JSX.Element[], //este sirve para recibir componentes
    minInput?: Number | undefined 
}

export const Table : FC<TableProps> = ({filter, pagination, listColumns=[], listRows=[],actions=[], listIndex=[], minInput}) => {
    const [initial, setInitial] = useState(listRows); //Lista inicial
    const [initialFilter, setInitiailFilter] = useState(listRows); //Lista inicial del filtro
    //Con el modo estricto necesitas especificar el tipo de dato, por eso se ponen como etiqueta html 
    const [initialColumns, setInitialColumns] = useState<String[]>([]) //Lista inicial de columnas
    const [initialIndex, setInitialIndex] = useState<Number[]>([]) // Lista inicial de indices
    const [initialActions, setInitialActions] = useState<JSX.Element[]>(); //Lista inicial de acciones
    const [initialRows, setInitialRows] = useState<Object[]>([]);
    const emptyMessage = useState(false)

    //Funciona casi igual que el useEffect, la diferencia es que este se ejecuta antes de renderear.
    useEffect(() => {
        const initial = validationRow(listRows);
        const columns = validationColumn(listColumns);
        const indexs = validationIndex(listIndex);
        const rows = validationRow(listRows);
        const acts = validationAction(actions);
        setInitialColumns(columns);
        setInitialIndex(indexs);
        setInitialRows(rows);
        setInitialActions(acts);
        setInitial(initial);
    },[listRows])

    return (
        <div className='ContainerTable'>
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