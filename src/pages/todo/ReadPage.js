import React from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams} from 'react-router-dom';

function ReadPage(props){

    const navigate = useNavigate()

    const {tno} = useParams()

    const [queryParams] = useSearchParams()

    const page = queryParams.get('page') ? parseInt(queryParams.get('page')) : 1
    const size = queryParams.get('size') ? parseInt(queryParams.get('size')) : 10

    //createSearchOaram 함수를 사용하면 주소창 쿼리 물음표를 만들어줌
    const queryStr = createSearchParams({page:page, size:size}).toString;

    console.log(tno)

    const moveToModify = (tno)=>{
        navigate({
            pathname:`/todo/modify/${tno}`,
            search : queryStr
        })

    }

    return(
        <div className={'text-3xl'}>
            Todo Read Page {tno}

            <div>
                <button onClick={()=>moveToModify(tno)}> Test Modify</button>
            </div>
        </div>
    );
}

export default ReadPage;