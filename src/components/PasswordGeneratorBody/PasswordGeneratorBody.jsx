import style from "./style.module.css";
import { generatePassword } from "../../lib/password";
export function PasswordGeneratorBody(props) {
  const submit = (e) => {
    e.preventDefault();
    let formData = {};
    new FormData(e.currentTarget).forEach((value, key) => {
      formData[key] = value;
    });
    props.onSubmit(generatePassword(formData));
    props.clearClipboard(state => !state)
  };
  return (
    <form onSubmit={submit}>
      <div className={style.grid_container}>
        <div className={style.grid_item}>
          Password Length       
          <input name="size" className={style.length} defaultValue={8}/>
        </div>
        <div className={style.grid_item}>
          Uppercase
          <input name="uppercase" type="checkbox" defaultChecked />
        </div>
        <div className={style.grid_item}>
          Numbers
          <input name="number" type="checkbox" defaultChecked />
        </div>
        <div className={style.grid_item}>
          Specials
          <input name="special" type="checkbox" defaultChecked />
        </div>
      </div>
      <div className={style.btn_container}>
        <button type="submit" className={style.btn_generate}>
          GENERATE PASSWORD
        </button>
      </div>
    </form>
  );
}
