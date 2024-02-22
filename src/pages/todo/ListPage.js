import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ListComponent from '../../component/todo/ListComponent';

const ListPage =() =>{

    return(
        <div className=' p-4 w-full bg-white'>
            <div className=' text-3xl font-extrabold'>
                Todo List Page component 
            </div>
            <ListComponent/>
        </div>
    );
}

export default ListPage;