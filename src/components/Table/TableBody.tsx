import React, {FC} from 'react';

export interface TableProps {
    listRows: any,
    actions: any,
    listColumns: any
}

export const TableBody : FC<TableProps> = ({listRows,actions, listColumns}) => {
    return (
        <tbody>
            {listRows.length > 0
                ?listRows.map((value: Object, index: Number)=>(
                <tr key={index+'a'}>
                    {Object.values(value).map((data: any, index1: Number)=>(
                        <td key={index1 + data}>
                            {data}
                        </td>
                    ))}
                    {actions
                        ?
                        <td>
                            {actions.map((action: JSX.Element) => (
                                React.cloneElement(action,{onClick: () => {action.props.onClick &&action.props.onClick(1)}})
                            ))}
                        </td>
                        :null
                    }
                </tr>
            ))
                :<tr>
                    <td colSpan={listColumns.length}>No hay datos</td>
                </tr>
            }
        </tbody>
    )
};