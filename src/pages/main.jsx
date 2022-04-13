import cmedia from './main.module.css';
import baseimg from './../media/images/tableImg/10.HEIC';
import bigImg from './../media/images/tableImg/7.JPG';
import BasicArticle from '../components/basicArticle/basicArticle';
import BigArticle from '../components/bigArticle/bigArticle';
const Main = (props) => {
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
                    <BasicArticle image={baseimg} title="Тут что-то новенькое!" about="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура" about="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура" about="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура. И еще много чего интересного" about="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура. И еще много чего интересного" about="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура. И еще много чего интересного" about="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура. И еще много чего интересного" about="Путешествия, Фотография" />
                    <BasicArticle image={baseimg} title="Новые просторы: лёд и холодные воды прекрасного Амура. И еще много чего интересного" about="Путешествия, Фотография" />
                </div>
                <BigArticle image={bigImg} title="Жили были два кота" about="Разное" />
            </div>
        </div>
    )
}

export default Main;