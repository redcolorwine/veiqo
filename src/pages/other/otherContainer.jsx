import { connect } from "react-redux"
import Other from "./other"

let mapStateToProps = (state) => {
    return {
        articles: state.main.articles
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const OtherContainer = connect(mapStateToProps, mapDispatchToProps)(Other);

export default OtherContainer;