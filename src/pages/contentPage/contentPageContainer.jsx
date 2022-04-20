import { connect } from "react-redux"
import { getArticleById, setContentIsLoading } from "../../redux/mainPageReducer"
import ContentPage from "./contentPage"

let mapStateToProps = (state) => {
    return {
        articles: state.main.articles,
        currentArticle: state.main.currentArticle,
        contentIsLoading: state.main.contentIsLoading
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getContent: (id) => {
            dispatch(getArticleById(id));
        },
        setIsLoading: (contentIsLoading) => {
            dispatch(setContentIsLoading(contentIsLoading));
        }
    }
}

const ContentPageContainer = connect(mapStateToProps, mapDispatchToProps)(ContentPage);

export default ContentPageContainer;