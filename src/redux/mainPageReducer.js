import anyImg from './../media/images/ama.jpg';

let initialState = {
    articles: [{
        id: 1, genre: 'Путешествия', rate: 5, views: 1, title: 'Невероятная история путешествия по Хабаровскому краю', image: anyImg
    }]

}
const MainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return {
            ...state
        }
    }
}

export default MainPageReducer;