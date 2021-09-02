import styles from './ContactCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const ContactCV = () => {

  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'CONTACTS'}/>
        <div className={styles.wrapper}>
          <div>
            <b>E-mail : alex988andr@gmail.com</b>
            <a target="_blank" href='mailto:alex988andr@gmail.com' rel="noreferrer">alex988andr@gmail.com</a>
          </div>
          <div>
            <b>Phone : </b>
            <span>+38 (073) 020 12 85</span>
          </div>
          <div>
            <b>Telegram : </b>
            <a target="_blank" href='https://t.me/Ander988' rel="noreferrer">@Ander988</a>
          </div>
          <div>
            <b>GitHub : </b>
            <a target="_blank" href='https://github.com/AlexandrKhom' rel="noreferrer">https://github.com/AlexandrKhom</a>
          </div>
          <div>
            <b>Skype : </b>
            <span>alex7work</span>
          </div>
          {/*<div>*/}
          {/*  <b>Linkedin : </b>*/}
          {/*  <a target="_blank" href='https://www.linkedin.com'>https://www.linkedin.com</a>*/}
          {/*</div>*/}
        </div>
      </div>
  );
}
