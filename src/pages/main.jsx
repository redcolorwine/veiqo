import cmedia from './main.module.css';
import baseimg from './../media/images/tableImg/10.HEIC';
import bigImg from './../media/images/tableImg/7.JPG';
import middleImg from './../media/images/mountains.jpg';
import BasicArticle from '../components/basicArticle/basicArticle';
import BigArticle from '../components/bigArticle/bigArticle';
import MiddleArticle from '../components/middleArticle/middleArticle';
import { useState } from 'react';
const Main = (props) => {
    let contentPerPage = 6;
    let totalCount = 32;
    let pageCount = Math.floor(totalCount / contentPerPage);
    let endPortion = 0;
    const [currentPortion, setPortion] = useState(6);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let alength = getRandomInt(props.articles.length);

    let bestArticles = props.articles.map(article => {
        if (article.rate == 5) {
            return (<BasicArticle key={article.id} rate={article.rate} views={article.views} image={article.image} title={article.title} genre={article.genre} id={article.id} />)
        }
    })

    let allArticle = props.articles.slice(0, currentPortion).map(article => {

        return (<MiddleArticle key={article.id} rate={article.rate} views={article.views} image={article.image} title={article.title} genre={article.genre} id={article.id} />)

    })

    const onNextClick = () => {
        if (currentPortion < totalCount) {
            setPortion(currentPortion + contentPerPage);
        } else {
            alert('Больше нет контента')
        }
    }
    return (
        <div className={cmedia.main}>
            <div className={cmedia.mainBlock}>
                <div className={cmedia.mainRead}>
                    <h3>Невероятно важные заметки от создателя данного журнала</h3>
                    <p>Разное 13 апреля 2022</p>
                    <button>Читать далее</button>
                </div>

            </div>
            <div className={cmedia.bestArticles}>
                <p>Лучшие статьи</p>
                <div className={cmedia.bestArtItems}>
                    {bestArticles}
                </div>
                <BigArticle image={props.articles[alength].image} title={props.articles[alength].title} genre={props.articles[alength].genre} />
                <div className={cmedia.middleArticles}>
                    {allArticle}

                </div>
                <button className={cmedia.nextButton} onClick={onNextClick}>Показать еще</button>
            </div>
        </div>
    )
}

export default Main;