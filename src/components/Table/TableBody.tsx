import React, {FC} from 'react';

export interface TableProps {
    listRows: any
}

export const TableBody : FC<TableProps> = ({listRows}) => {
    return (
        <tbody>
            {listRows.map((value: Object)=>(
                <tr>
                    {Object.values(value).map((data: any)=>(
                        <td>
                            {data}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
};