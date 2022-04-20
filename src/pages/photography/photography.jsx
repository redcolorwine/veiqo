import cmedia from './photography.module.css';
import HorizontalArticle from '../../components/horizontalArticle/horizontalArticle';

const Photography = (props) => {
    let photoArticles = props.articles.map(article => {
        if (article.genre.includes('Фотография')) {
            return (<HorizontalArticle id={article.id} title={article.title} genre={article.genre} image={article.image} rate={article.rate} />)
        }
    })
    return (
        <div className={cmedia.photography}>
            <h1>Фотография</h1>
            <p> Рассказываю о фотографии простыми словами. О том, что знаю сам.</p>
            {photoArticles}
        </div>)
}

export default Photography;