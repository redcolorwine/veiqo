import anyImg from './../media/images/ama.jpg';
import any2 from './../media/images/notepad.jpg';
import mnogoznaal from './../media/images/mnogoznaal.jpg';
import p1 from './../media/images/tableImg/2.heic';
import p2 from './../media/images/tableImg/4.heic';
import p3 from './../media/images/tableImg/10.HEIC';
import p4 from './../media/images/tableImg/5.jpg';
import p5 from './../media/images/tableImg/6.jpg';
import p6 from './../media/images/tableImg/7.JPG';
import p7 from './../media/images/tableImg/8.JPG';
import p8 from './../media/images/tableImg/9.jpg';
import p9 from './../media/images/tableImg/11.JPG';
let initialState = {
    articles: [
        {
            id: 1, genre: ['Путешествия', 'Фотография'], rate: 5, views: 12, title: 'Невероятная история путешествия по Хабаровскому краю', content: 'Тут невероятно интересный контент', image: anyImg
        },
        {
            id: 2, genre: ['Путешествия'], rate: 5, views: 15, title: 'Невероятная история путешествия по Амурской области', content: 'Тут невероятно интересный контент', image: p1
        },
        {
            id: 3, genre: ['Путешествия'], rate: 3, views: 1, title: 'Гуляем по Хабаровску', content: 'Тут невероятно интересный контент', image: p3
        },
        {
            id: 4, genre: ['Музыка'], rate: 5, views: 1, title: 'Mnogoznaal - новый взгляд на рэп-индустрию', content: 'Тут невероятно интересный контент', image: mnogoznaal
        },
        {
            id: 5, genre: ['Фотография'], rate: 5, views: 12, title: 'Основы мобильной фотографии', content: 'Тут невероятно интересный контент', image: p9
        },
        {
            id: 6, genre: ['Фотография'], rate: 5, views: 15, title: 'Фотография как искусство', content: 'Тут невероятно интересный контент', image: p4
        },
        {
            id: 7, genre: ['Разное'], rate: 3, views: 10, title: 'Что такое с тобой?', content: 'Тут невероятно интересный контент', image: p2
        },
        {
            id: 8, genre: ['Разное'], rate: 5, views: 1, title: 'Невероятная история...', content: 'Тут невероятно интересный контент', image: p7
        },
        {
            id: 9, genre: ['Путешествия', 'Фотография'], rate: 5, views: 19, title: 'Простые прогулки по Амурску', content: 'Тут невероятно интересный контент', image: p5
        },
        {
            id: 10, genre: ['Путешествия'], rate: 5, views: 15, title: 'Невероятная история путешествия по Амурской области', content: 'Тут невероятно интересный контент', image: p6
        },
        {
            id: 11, genre: ['Путешествия'], rate: 4, views: 12, title: 'Гуляем по Владивостоку', content: 'Тут невероятно интересный контент', image: p8
        },
        {
            id: 12, genre: ['Музыка'], rate: 4, views: 1, title: 'Mnogoznaal основатель litalima', content: 'Тут невероятно интересный контент', image: mnogoznaal
        },
        {
            id: 13, genre: ['Фотография'], rate: 5, views: 120, title: 'Фотографируем на айфон', content: 'Тут невероятно интересный контент', image: p9
        },
        {
            id: 14, genre: ['Фотография'], rate: 4, views: 112, title: 'Фотография и искусство', content: 'Тут невероятно интересный контент', image: p4
        },
        {
            id: 15, genre: ['Разное'], rate: 5, views: 1, title: 'Коралловый цвет', content: 'Тут невероятно интересный контент', image: p2
        },
        {
            id: 16, genre: ['Разное'], rate: 3, views: 1, title: 'Жизнь как жизнь', content: 'Тут невероятно интересный контент', image: p7
        },
        {
            id: 17, genre: ['Разное'], rate: 2, views: 122, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 18, genre: ['Разное'], rate: 2, views: 142, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 19, genre: ['Разное'], rate: 4, views: 152, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 20, genre: ['Разное'], rate: 1, views: 121, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 21, genre: ['Разное'], rate: 3, views: 129, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 22, genre: ['Разное'], rate: 3, views: 43, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 23, genre: ['Разное'], rate: 2, views: 52, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 24, genre: ['Разное'], rate: 5, views: 18, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 25, genre: ['Разное'], rate: 1, views: 94, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 26, genre: ['Разное'], rate: 4, views: 32, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 27, genre: ['Разное'], rate: 2, views: 63, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 28, genre: ['Разное'], rate: 2, views: 75, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 29, genre: ['Разное'], rate: 3, views: 127, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 30, genre: ['Разное'], rate: 2, views: 34, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 31, genre: ['Разное'], rate: 3, views: 76, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
        {
            id: 32, genre: ['Разное'], rate: 4, views: 83, title: 'Обычное что-то', content: 'Тут невероятно интересный контент', image: any2
        },
    ],
    currentArticle: '',
    contentIsLoading: true
}
const MainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ARTICLE_BY_ID': {
            return {
                ...state,
                currentArticle: state.articles.filter(article => article.id == action.id)
            }
        }
        case 'CONTENT_IS_LOADING': {
            return {
                ...state,
                contentIsLoading: action.contentIsLoading
            }
        }
        default: return {
            ...state
        }
    }
}
export const getArticleById = (id) => { return { type: 'GET_ARTICLE_BY_ID', id } }
export const setContentIsLoading = (contentIsLoading) => { return { type: 'CONTENT_IS_LOADING', contentIsLoading } }
export default MainPageReducer;