import HorizontalArticle from '../../components/horizontalArticle/horizontalArticle';
import cmedia from './other.module.css';

const Other = (props) => {
    let otherArticles = props.articles.map(article => {
        if (article.genre.includes('Разное')) {
            return (<HorizontalArticle title={article.title} genre={article.genre} image={article.image} rate={article.rate} />)
        }
    })
    return (
        <div className={cmedia.other}>
            <h1>Разное</h1>
            <p> Рассказываю о разном простыми словами. О том, что знаю сам.</p>
            {otherArticles}
        </div>)
}

export default Other;