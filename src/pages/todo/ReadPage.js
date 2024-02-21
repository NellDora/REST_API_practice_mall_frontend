import React from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams} from 'react-router-dom';
import ReadComponent from '../../component/todo/ReadComponent';

function ReadPage(props){

    const navigate = useNavigate()

    const {tno} = useParams()

    const [queryParams] = useSearchParams()

    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10

    //createSearchOaram 함수를 사용하면 주소창 쿼리 물음표를 만들어줌
    const queryStr = createSearchParams({page:page, size:size}).toString()

    console.log(tno)

    const moveToModify = (tno)=>{
        navigate({
            pathname:`/todo/modify/${tno}`,
            search : queryStr
        },[page,size])

    }

    const moveToList = () =>{
        navigate({
            pathname:`/todo/list`,
            search : queryStr
        },[page,size])
    }

    return(
        <div className='font-extrabold  w-full bg-white mt-6'>
            <div className={'text-2xl'}>
                Todo Read Component {tno}
            </div>

            <ReadComponent tno={tno}/>
        </div>
    );
}

export default ReadPage;