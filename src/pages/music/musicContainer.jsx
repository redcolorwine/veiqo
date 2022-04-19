import { connect } from "react-redux"
import Music from "./music"

let mapStateToProps = (state) => {
    return {
        articles: state.main.articles
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export default MusicContainer;