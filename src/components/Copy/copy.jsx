import style from "./style.module.css"

export function Copy() {
  return (
    <div className={style.tooltip_container}>
      <span className={style.tooltip}>Copied</span>
    </div>
  );
}
