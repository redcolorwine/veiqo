import { connect } from "react-redux"
import Travel from "./travel"

let mapStateToProps = (state) => {
    return {
        articles: state.main.articles
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const TravelContainer = connect(mapStateToProps, mapDispatchToProps)(Travel);

export default TravelContainer;