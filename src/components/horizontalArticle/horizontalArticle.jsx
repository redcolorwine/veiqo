import cmedia from './horizontalArticle.module.css'
import viewEye from './../../media/logo/eye.png';
import { useLocation, useHistory, useNavigate } from 'react-router-dom';
const HorizontalArticle = (props) => {

    let navigate = useNavigate();

    const goToContent = () => {
       
        navigate(`/${props.id}`)
    }

    return (
        <div className={cmedia.horizontalArticle} onClick={goToContent}>
            <img src={props.image} alt="" />
            <div className={cmedia.textBlock}>
                <h4>{props.title}</h4>
                <p>{props.genre.map(genre => {
                    return (<span>{genre} </span>)
                })} </p>
                <p><span>{props.rate ? <> &#9734; {props.rate}</> : ''} {props.views ? <><img src={viewEye} alt="" /> {props.views}</> : ''}</span></p>
            </div>
        </div>
    )
}

export default HorizontalArticle;