import cmedia from './main.module.css';
import baseimg from './../media/images/tableImg/10.HEIC';
import bigImg from './../media/images/tableImg/7.JPG';
import middleImg from './../media/images/mountains.jpg';
import BasicArticle from '../components/basicArticle/basicArticle';
import BigArticle from '../components/bigArticle/bigArticle';
import MiddleArticle from '../components/middleArticle/middleArticle';
const Main = (props) => {
    let bestArticles = props.articles.map(article => {
        return (<BasicArticle key={article.id} rate={article.rate} views={article.views} image={article.image} title={article.title} genre={article.genre} id={article.id} />)
    })
    
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
                    <BasicArticle image={baseimg} title="Тут что-то новенькое!" genre="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура" genre="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура" genre="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура. И еще много чего интересного" genre="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура. И еще много чего интересного" genre="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура. И еще много чего интересного" genre="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура. И еще много чего интересного" genre="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура. И еще много чего интересного" genre="Путешествия, Фотография" />
                </div>
                <BigArticle image={bigImg} title="Жили были два кота" genre="Разное" />

                <div className={cmedia.middleArticles}>
                    <MiddleArticle image={middleImg} title="Новый постик!" genre="Приключения" />
                    <div className={cmedia.middleArticle}>
                        <img src={middleImg} alt="" />
                        <div className={cmedia.middleArtText}>
                            <h4>Какой-то новый очень интересный пост</h4>
                            <p>Путешествия, Разное</p>
                        </div>
                    </div>
                    <div className={cmedia.middleArticle}>
                        <img src={middleImg} alt="" />
                        <div className={cmedia.middleArtText}>
                            <h4>Какой-то новый очень интересный пост</h4>
                            <p>Путешествия, Разное</p>
                        </div>
                    </div>
                    <div className={cmedia.middleArticle}>
                        <img src={middleImg} alt="" />
                        <div className={cmedia.middleArtText}>
                            <h4>Какой-то новый очень интересный пост</h4>
                            <p>Путешествия, Разное</p>
                        </div>
                    </div>
                    <div className={cmedia.middleArticle}>
                        <img src={middleImg} alt="" />
                        <div className={cmedia.middleArtText}>
                            <h4>Какой-то новый очень интересный пост</h4>
                            <p>Путешествия, Разное</p>
                        </div>
                    </div>
                    <div className={cmedia.middleArticle}>
                        <img src={middleImg} alt="" />
                        <div className={cmedia.middleArtText}>
                            <h4>Какой-то новый очень интересный пост</h4>
                            <p>Путешествия, Разное</p>
                        </div>
                    </div>
                    <div className={cmedia.middleArticle}>
                        <img src={middleImg} alt="" />
                        <div className={cmedia.middleArtText}>
                            <h4>Какой-то новый очень интересный пост</h4>
                            <p>Путешествия, Разное</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;