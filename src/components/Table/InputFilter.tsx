import React, {FC, ChangeEvent, useState} from 'react';

export interface InputProps {
    initial?: any,
    setInitial?: any,
    listRows?: Object[],
    listColumns: any
}

export const InputFilter: FC<InputProps> =({initial,setInitial, listRows, listColumns}) => {
    const [filter, setFilter] = useState('');
    const [option, setOption] = useState('all');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
        if(e.target.value.length === 0){
            setInitial(listRows);
        }else{
            if(option === 'all'){
                const filteredRows = initial.filter((row:Object)=> {
                    let values = Object.values(row);
                    for(let i = 0; i < values.length; i++){
                        if(typeof(values[i]) === 'string'){
                            if(values[i].toLowerCase().includes(e.target.value.toLowerCase())){
                                return true;
                            }
                        }
                    }
                    return false;
                })
                setInitial(filteredRows);
            }else{
                const filteredRows = initial.filter((row: Object) => {
                    const data = row[option];
                    if(typeof(data) === 'string'){
                        if(data.toLowerCase().includes(e.target.value.toLowerCase())){
                            return true;
                        }
                    }
                    return false;
                })
                setInitial(filteredRows);
            }
        }
    }

    return(
        <div>
            <input type = "text" value={filter} onChange={handleChange}/>
            <select value={option} onChange={e => setOption(e.target.value)}>
                <option value="all">All</option>
                {listColumns.map((column: String, index: Number) => (
                    <option value={Object.keys(listRows[0])[index]}>{column}</option>
                ))

                } 
            </select> 
        </div>
    )
} 