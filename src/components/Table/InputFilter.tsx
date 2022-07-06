import React, {FC, ChangeEvent, useState, useEffect} from 'react';

export interface InputProps {
    initial?: any,
    setInitial?: any,
    listRows?: Object[],
    listColumns: any,
    setInitialFilter: any,
    listIndex: any,
    minInput: Number
}

const name = 'Table';

export const InputFilter: FC<InputProps> =({initial,setInitial, listRows=[], listColumns=[], setInitialFilter, listIndex=[], minInput=0}) => {
    const [filter, setFilter] = useState(''); // filter input text
    const [option, setOption] = useState<string>('all'); // option input 
    const [temp, setTemp] = useState([]); // security copy

    /* minInput clean table in first render */
    useEffect(() => {
        minInput && cleanTable()
    },[])

    /* Quit all the rows in table */
    const cleanTable = () => {
        setInitial([])
        setTemp([])
        setInitialFilter([])
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
        if(e.target.value.length < minInput){
            if(minInput <= 0) { 
                setInitial(temp);
                setTemp([]);
                setInitialFilter(listRows);
            } else {
                cleanTable()
            }
        }else{
            if(e.target.value.length === 1 && temp.length === 0){
                setTemp(initial);
            }
            if(option === 'all'){
                const filteredRows = listRows.filter((row:Object)=> {
                    let values = Object.values(row);
                    for(let i = 0; i < values.length; i++){
                        if((listIndex.length === 0 || listIndex.some((element:number) => element !== i)) && values[i].toString().toLowerCase().includes(e.target.value.toLowerCase())){
                            return true;
                        }
                        
                    }
                    return false;
                })
                setInitialFilter(filteredRows);
                setInitial(filteredRows);
            }else{
                const filteredRows = listRows.filter((row: any) => {
                    const data = row[option];

                    if( data.toString().toLowerCase().includes(e.target.value.toLowerCase())){
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
            {listRows.length > 0
                ?<div>
                    <input className={`input-${name}`} type = "text" value={filter} onChange={handleChange}/>
                    <select className={`select-${name}`} value={option} onChange={e => setOption(e.target.value)}>
                        <option value="all">All</option>
                        {listColumns.length > 0 && listColumns.map((column: String, index: number) => (
                            <option key={Object.keys(listRows[0])[index]} value={Object.keys(listRows[0])[index]}>{column}</option>

                        ))
                        } 
                    </select> 
                </div>
                :null
            }
        </div>
    )
} 