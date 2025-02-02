/* eslint-disable*/

import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollectionDtl } from '../../hooks/useCollectionDtl';

import DetailForm from './DetailForm';
import Comment from '../comment/Comment';
import styles from './Detail.module.css';

export default function Detail(props){

    //유저정보
    const {user} = useAuthContext();

    // url 파라미터 id
    let {id} = useParams();
    const {documents,error} = useCollectionDtl("diary",["createdUqe","==",id]);
    console.log(documents)
    return (
        <main className={styles.detail_form}>
            <div>
                {error && <strong>{error}</strong>}
                {documents && <DetailForm data={documents}/>}
                <Comment></Comment>
            </div>
        </main>
    )
    
}