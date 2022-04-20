import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cmedia from './contentPage.module.css';

const ContentPage = (props) => {

    const { id } = useParams();

    useEffect(() => {
        props.getContent(id);
        props.setIsLoading(false);
    }, [id])
    if (props.contentIsLoading) {
        return (<h1>Загрузка</h1>)
    } else {
        console.log(props.currentArticle[0].content)
        return (
            <div className={cmedia.contentPage}>
                <h1>{props.currentArticle[0].title}</h1>
                <img src={props.currentArticle[0].image}  alt="" />
                <h3>{props.currentArticle[0].views}</h3>
                <h4>{props.currentArticle[0].rate}</h4>
                <h4>{props.currentArticle[0].genre} </h4>
                <p>{props.currentArticle[0].content}</p>

            </div>
        )
    }

}

export default ContentPage;