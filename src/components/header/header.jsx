import { NavLink } from 'react-router-dom';
import cmedia from './header.module.css';
const Header = (props) => {
    return (
        <div className={cmedia.header}>
            <h1>Veiqo</h1>
            <nav>
                <li><NavLink to="">Фотография</NavLink></li>
                <li><NavLink to="">Музыка</NavLink></li>
                <li><NavLink to="">История</NavLink></li>
                <li><NavLink to="">Разное</NavLink></li>
                <div className={cmedia.search}><button>
                    &#128270;</button>
                    <input type="search" placeholder='Поиск'/></div>

            </nav>
        </div>
    )
}

export default Header;