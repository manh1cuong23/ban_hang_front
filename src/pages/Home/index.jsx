import Header from "../Header";
import Styles from "./Home.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Styles);
function Home() {
  return (
    <div className={cx('container')}>
      <Header />
    </div>
  );
}

export default Home;
