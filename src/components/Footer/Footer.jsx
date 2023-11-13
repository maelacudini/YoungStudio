import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.row}>
        <div className={style.col}>
          <h2>helloyoung@studio.com</h2>
          <p>© Young Studio - 2023</p>
        </div>
        <div className={style.col}>
          <div>
            <img src="./arrow.svg" alt="arrow" width={"20px"} height={"20px"} />
            <a href="">LinkedIn</a>
          </div>
          <div>
            <img src="./arrow.svg" alt="arrow" width={"20px"} height={"20px"} />
            <a href="">Twitter</a>
          </div>
          <div>
            <img src="./arrow.svg" alt="arrow" width={"20px"} height={"20px"} />
            <a href="">Instagram</a>
          </div>
          <div>
            <img src="./arrow.svg" alt="arrow" width={"20px"} height={"20px"} />
            <a href="">helloyoung@studio.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
