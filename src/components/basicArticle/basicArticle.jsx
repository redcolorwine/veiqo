import cmedia from './basicArticle.module.css'

const BasicArticle = (props) => {
    return (
        <div className={cmedia.basicArticle}>
            <img src={props.image} alt="" />
            <h4>{props.title}</h4>
            <p>{props.about}</p>
        </div>
    )
}

export default BasicArticle;