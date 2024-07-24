import style from "./style.module.css";
import lock from "../../assets/lock.svg"
export function PasswordGeneratorHeader() {
  return (
    <div className={style.root}>
      <div className={style.title}>Password Generator</div>
      <img src={lock} alt="lock icon" className={style.icon}/>
    </div>
  );
}
