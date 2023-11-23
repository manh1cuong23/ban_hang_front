import classNames from "classnames/bind";
import Styles from "./Header.module.scss"
const cx = classNames.bind(Styles)
function Header() {
    return (
        <header className={cx('header_navbar')}>
            <div className={cx('header_logo')}>
                <p>Postlak.</p>
                <img src="" />
            </div>
            <nav>
                <ul className={cx('header_list_bar')}>
                    <li className={cx('header_item_bar')}>
                        <p>Home</p>
                    </li>
                    <li className={cx('header_item_bar')}>
                        <p>Menu</p>
                    </li>
                    <li className={cx('header_item_bar')}>
                        <p>Services</p>
                    </li>
                    <li className={cx('header_item_bar')}>
                        <p>About Us</p>
                    </li>
                </ul>
            </nav>
            <div className={cx('header_sign_btn')}>
                <button className={cx('header_signup_btn')}>
                    Sign Up
                </button>
                <button className={cx('header_signin_btn')}>
                    Log in
                </button>
            </div>
        </header>
      );
}

export default Header;