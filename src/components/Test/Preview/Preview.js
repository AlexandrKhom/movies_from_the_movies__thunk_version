import { Button } from "@material-ui/core";
import styles from './Preview.module.css';

export const Preview = ({ setStart }) => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h2>Чтобы увидеть
              source code моего проекта,
              необходимо пройти небольшое тестирование. <br/>
              Это займёт не более 2-х минут.</h2>
          <Button onClick={() => setStart(true)} variant="outlined" color="primary">Start</Button>
        </div>
      </div>
  );
}
