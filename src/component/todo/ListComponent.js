import React, { useEffect, useState } from 'react';
import useCustomMove from '../../hooks/useCustomMove';
import { getList } from '../../api/todoApi';


//서버에서 받아올 정보
const initState ={
    dtoList:[],
    pageNumList:[],
    pageRequestDTO:null,
    prev:false,
    next : false,
    totalCount : 0,
    prevPage: 0,
    nextPage : 0,
    totalPage : 0,
    current : 0,

}



const ListComponent = () =>{
    
    const {page,size} =useCustomMove()

    const [serverData, setServerData] =  useState(initState)

    useEffect(() =>{
        getList({page,size}).then(data=>{
            console.log(data)
            setServerData(data)
        })

    },  [page,size])

    //ajax 통신
    //서버 사이드에서 필요한 정보를 전부 받아오기 때문에 받으면 문제X

    return(
        <div className='border-2 border-blue-100 mt-10 mr-2 ml-2'>
            <div className='flex flex-wrap mx-auto justify-center p-6'>

                

                {serverData.dtoList.map(todo=>

                <div
                    key= {todo.tno} 
                    className="w-full min-w-[400px]  p-2 m-2 rounded shadow-md"
                >  

                    <div className='flex'>
                        <div className='font-extrabold text-2xl p-2 w-1/2'>
                            {todo.tno}
                        </div>
                        <div className='text-1xl m-1 p-2 w-8/12 font-extrabold'>
                            {todo.title}
                        </div>
                        <div className='text-1xl m-1 p-2 w-2/10 font-medium'>
                            {todo.dueDate}
                        </div>
                    </div>
                </div>
                )}
                
            </div>
        </div>
    )
}

export default ListComponent;