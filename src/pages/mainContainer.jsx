import { connect } from "react-redux"
import Main from "./main"

let mapStateToProps = (state) => {
    return {
        articles: state.main.articles
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;