import cmedia from './horizontalArticle.module.css'
import viewEye from './../../media/logo/eye.png';
const HorizontalArticle = (props) => {
    return (
        <div className={cmedia.horizontalArticle}>
            <img src={props.image} alt="" />
            <div className={cmedia.textBlock}>
                <h4>{props.title}</h4>
                <p>{props.genre.map(genre => {
                    return (<span>{genre} </span>)
                })} </p>
                <p>{props.rate ? <> &#9734; {props.rate}</> : ''} {props.views ? <><img src={viewEye} alt="" /> {props.views}</> : ''}</p>
            </div>
        </div>
    )
}

export default HorizontalArticle;