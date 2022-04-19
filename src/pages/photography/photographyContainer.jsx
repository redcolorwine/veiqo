import { connect } from "react-redux"
import Photography from "./photography"

let mapStateToProps = (state) => {
    return {
        articles: state.main.articles
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const PhotographyContainer = connect(mapStateToProps, mapDispatchToProps)(Photography);

export default PhotographyContainer;