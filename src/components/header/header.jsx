import { NavLink } from 'react-router-dom';
import cmedia from './header.module.css';
const Header = (props) => {
    return (
        <div className={cmedia.header}>
            <h1><NavLink to="/">Veiqo</NavLink></h1>
            <nav>
                <li><NavLink to="/photography">Фотография</NavLink></li>
                <li><NavLink to="/travel">Путешествия</NavLink></li>
                <li><NavLink to="/music">Музыка</NavLink></li>
                <li><NavLink to="/other">Разное</NavLink></li>
                <div className={cmedia.search}><button>
                    &#128270;</button>
                    <input type="search" placeholder='Поиск'/></div>

            </nav>
        </div>
    )
}

export default Header;