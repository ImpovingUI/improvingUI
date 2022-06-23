import React, {FC} from 'react';

export interface TableProps {
    listRows: any,
    actions: any
}

export const TableBody : FC<TableProps> = ({listRows,actions}) => {
    return (
        <tbody>
            {listRows.map((value: Object)=>(
                <tr>
                    {Object.values(value).map((data: any)=>(
                        <td>
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
            ))}
        </tbody>
    )
};