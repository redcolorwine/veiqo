import cmedia from './travel.module.css';
import HorizontalArticle from '../../components/horizontalArticle/horizontalArticle';

const Travel = (props) => {
    let travelArticles = props.articles.map(article => {
        if (article.genre.includes('Путешествия')) {
            return (<HorizontalArticle title={article.title} genre={article.genre} image={article.image} rate={article.rate} />)
        }
    })
    return (
        <div className={cmedia.travel}>
            <h1>Путешествия</h1>
            <p> Рассказываю о путешествиях простыми словами. О том, что знаю сам.</p>
            {travelArticles}
        </div>)
}

export default Travel;