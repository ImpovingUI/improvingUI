import React, {FC, ChangeEvent, useState} from 'react';

export interface InputProps {
    initial?: any,
    setInitial?: any,
    listRows?: Object[],
    listColumns: any,
    setInitialFilter: any
}

export const InputFilter: FC<InputProps> =({initial,setInitial, listRows, listColumns, setInitialFilter}) => {
    const [filter, setFilter] = useState('');
    const [option, setOption] = useState('all');
    const [temp, setTemp] = useState([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
        if(e.target.value.length === 0){
            setInitial(temp);
            setTemp([]);
            setInitialFilter(listRows);
        }else{
            if(e.target.value.length === 1 && temp.length === 0){
                setTemp(initial);
            }
            if(option === 'all'){
                const filteredRows = listRows.filter((row:Object)=> {
                    let values = Object.values(row);
                    for(let i = 0; i < values.length; i++){

                        if(values[i].toString().toLowerCase().includes(e.target.value.toLowerCase())){
                            return true;
                        }
                        
                    }
                    return false;
                })
                setInitialFilter(filteredRows);
                setInitial(filteredRows);
            }else{
                const filteredRows = listRows.filter((row: Object) => {
                    const data = row[option];

                    if(data.toString().toLowerCase().includes(e.target.value.toLowerCase())){
                        return true;
                    }
                    
                    return false;
                })
                setInitialFilter(filteredRows);
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