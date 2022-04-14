import cmedia from './middleArticle.module.css';

const MiddleArticle = (props) => {
    return (<div className={cmedia.middleArticle}>
        <img src={props.image} alt="" />
        <div className={cmedia.middleArtText}>
            <h4>{props.title}</h4>
            <p>{props.genre}</p>
        </div>
    </div>)
}

export default MiddleArticle;