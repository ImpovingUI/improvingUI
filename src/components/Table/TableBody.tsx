import React, {FC} from 'react';

export interface TableProps {
    listRows: Object[],
    actions: any,
    listColumns: any,
    listIndex: any
}

const name = 'Table';

export const TableBody : FC<TableProps> = ({listRows=[],actions, listColumns,listIndex=[]}) => {
    return (
        <tbody className={`Tbody-${name}`}>
            {listRows.length > 0
                ?listRows.map((value: any, index: number)=>(
                <tr key={index+'a'}>
                    {listIndex.length === 0
                        ?Object.values(value).map((data: any, index1: number)=>(
                        <td key={index1 + data} className={`Td-${name}`}>
                            {data}
                        </td>
                    ))
                    :Object.values(value).map((data: any, index1: number)=>(
                        listIndex.some((element:number) => element === index1)
                        ?null
                        :<td key={index1 + data} className={`Td-${name}`}>
                                {data}
                        </td>
                    ))
                    }
                    {actions
                        ?
                        <td className={`Td-${name}`}>
                            {actions.map((action: JSX.Element) => (
                                React.cloneElement(action,{key:action.props.onClick &&action.props.onClick(value[Object.keys(value)[0]]), onClick: () => {action.props.onClick &&action.props.onClick(value[Object.keys(value)[0]])}})
                            ))}
                        </td>
                        :null
                    }
                </tr>
            ))
                :<tr>
                    <td className={`Td-${name}`} colSpan={listColumns.length}>No hay datos</td>
                </tr>
            }
        </tbody>
    )
};