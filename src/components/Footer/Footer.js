import './Footer.css';



function Footer() {

    return (

<div>
        <footer className="footer">
            <div className="footer__copyright--wrapper">
            <p className="footer__copyright">Учебный проект Яндекс.Практикум х BeatFilm.</p>
</div>
            <div className="footer__info">
                <p className="footer__year">&copy; 2020.</p>
            <nav>
                <ul className="footer__links">
                    <li className="footer__list"><a href="https://praktikum.yandex.ru/" className="footer__link"
                                                    target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__list"><a href="https://github.com/" className="footer__link"
                                                    target="_blank" rel="noreferrer">Github</a>
                    </li>
                    <li className="footer__list"><a href="https://www.facebook.com/" className="footer__link"
                                                    target="_blank" rel="noreferrer">Facebook</a>
                    </li>
                </ul>
            </nav>
            </div>
        </footer>
</div>

    )};
export default Footer;