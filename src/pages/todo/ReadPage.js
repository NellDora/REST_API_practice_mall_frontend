import React from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams} from 'react-router-dom';
import ReadComponent from '../../component/todo/ReadComponent';

function ReadPage(props){

    const {tno} = useParams()


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