import cmedia from './basicArticle.module.css'
import viewEye from './../../media/logo/eye.png';
const BasicArticle = (props) => {
    return (
        <div className={cmedia.basicArticle}>
            <img src={props.image} alt="" />
            <h4>{props.title}</h4>
            <div className={cmedia.about}>
                <p>{props.genre.map(genre => {
                    return (<span>{genre} </span>)
                })} </p>
                {props.rate ? <> &#9734; {props.rate}</> : ''} {props.views ? <><img src={viewEye} alt="" /> {props.views}</> : ''}
            </div>
        </div>
    )
}

export default BasicArticle;