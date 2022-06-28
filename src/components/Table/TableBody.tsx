import React, {FC} from 'react';

export interface TableProps {
    listRows: any,
    actions: any,
    listColumns: any,
    listIndex: any
}

export const TableBody : FC<TableProps> = ({listRows,actions, listColumns,listIndex=[]}) => {
    return (
        <tbody>
            {listRows.length > 0
                ?listRows.map((value: Object, index: number)=>(
                <tr key={index+'a'}>
                    {listIndex.length === 0
                        ?Object.values(value).map((data: any, index1: number)=>(
                        <td key={index1 + data}>
                            {data}
                        </td>
                    ))
                    :Object.values(value).map((data: any, index1: number)=>(
                        listIndex.some((element:number) => element === index1)
                        ?null
                        :<td key={index1 + data}>
                                {data}
                        </td>
                    ))
                    }
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