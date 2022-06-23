import React, {FC, useEffect, useState} from 'react';
import './Table.css'


export interface PaginationProps {
    initial: any,
    setInitial: any,
    listRows: any
}

export const Pagination : FC<PaginationProps> = ({initial, setInitial,listRows}) => {
    const [pagination, setPagination] =  useState<number>(5);
    const [pages,setPages] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const result = listRows.length/pagination;
        if(!Number.isInteger(result)){
            setPage(0);
            setPages(Math.ceil(result)); //Aportación de Mayte
        }
        else if(initial.length/pagination > 1){
            setPage(0);
            setPages(initial.length/pagination);
        }
        else{
            setPage(0);
            setPages(1);
        }
    },[pagination,listRows])

    useEffect(() => {
        const final = (page+1)*pagination;
        let filter;
        if(final > listRows.length){
            filter = listRows.slice(page*pagination, listRows.length);
        }else{
            filter = listRows.slice(page*pagination, (page+1)*pagination);
        }
        setInitial(filter);
    },[page,pages])

    const increase = () => {
        if(page < pages-1)
            setPage(page+1);
    }

    const decrease = () => {
        if(page > 0)
            setPage(page-1);
    }
    return (
        <div className='containerPagin'>
            <div>
                <select value={pagination} className={"selectPage"} onChange={e => setPagination(e.target.value)}>
                    <option value={5}>Items per page: 5</option>
                    <option value={10}>Items per page: 10</option>
                    <option value={50}>Items per page: 50</option>
                    <option value={100}>Items per page: 100</option>
                </select>
            </div>
            <div>{(page*pagination)+1}-{(pagination*(page+1))<listRows.length ?pagination*(page+1) :listRows.length} of {listRows.length} items</div>
            <div>{page+1} of {pages} pages</div>
            <div>
                <button className='btn-direction' onClick={decrease}>◄</button>
                <button className='btn-direction' onClick={increase}>►</button>
            </div>
        </div>
    )
};