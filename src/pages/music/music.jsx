import cmedia from './music.module.css';
import HorizontalArticle from '../../components/horizontalArticle/horizontalArticle';

const Music = (props) => {
    let musicArticles = props.articles.map(article => {
        if (article.genre.includes('Музыка')) {
            return (<HorizontalArticle title={article.title} genre={article.genre} image={article.image} rate={article.rate} />)
        }
    })
    return (
        <div className={cmedia.music}>
            <h1>Музыка</h1>
            <p> Рассказываю о музыке простыми словами. О том, что знаю сам.</p>
            {musicArticles}
        </div>)
}

export default Music;