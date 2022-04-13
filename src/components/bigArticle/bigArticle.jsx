import cmedia from './bigArticle.module.css'

const BigArticle = (props) => {
    return (
        <div className={cmedia.bigArtItem}>
            <img src={props.image} alt="" />
            <div className={cmedia.bigItemText}>
                <h4>{props.title}</h4>
                <p>{props.about}</p>
            </div>
        </div>
    )
}

export default BigArticle;