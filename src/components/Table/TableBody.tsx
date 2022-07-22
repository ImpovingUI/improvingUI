import React, {FC} from 'react';

export interface TableProps {
    listRows: Object[],
    actions: any,
    listColumns: any,
    listIndex: any,
    emptyMessage?: Boolean | undefined
}

const name = 'Table';

export const TableBody : FC<TableProps> = ({listRows=[],actions=[], listColumns,listIndex=[], emptyMessage=true}) => {
    return (
        <tbody className={`Tbody-${name}`} data-testid = "tBody" >
            {listRows.length > 0
                ?listRows.map((value: any, index: number)=>(
                <tr key={index+Date.now()}>
                    {listIndex.length === 0
                        ?Object.values(value).map((data: any, index1: number)=>(
                        <td key={index1 + Date.now()} className={`Td-${name}`}>
                            {data}
                        </td>
                    ))
                    :Object.values(value).map((data: any, index1: number)=>(
                        listIndex.some((element:number) => element === index1)
                        ?null
                        :<td key={index1 + Date.now()} className={`Td-${name}`}>
                                {data}
                        </td>
                    ))
                    }
                    {actions.length > 0
                        ?
                        <td className={`Td-${name}`}>
                            {actions.map((action: JSX.Element) => (
                                React.cloneElement(action,{key: value[Object.keys(value)[0]], onClick: () => {action.props.onClick && action.props.onClick(value[Object.keys(value)[0]])}})
                            ))}
                        </td>
                        :null
                    }
                </tr>
            ))
                :<tr>
                    <td className={`Td-${name} message`} colSpan={listColumns.length}>
                        {emptyMessage ? "Not data found" : "Type to search"}
                    </td>
                </tr>
            }
        </tbody>
    )
};