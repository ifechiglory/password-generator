import style from "./style.module.css";
import copyPasteIcon from "../../assets/clipboard.svg";
import { useState } from "react";
export function PasswordGeneratorFooter(props) {
  function saveInCLipboard() {
    navigator.clipboard.writeText(props.password);

    props.setIsCopied(state => !state);
  }
  return (
    <div>
      <div className={style.root}>
        <div className={style.root_text}>
          <input className={style.password} value={props.password} readOnly />
          <div className={style.tooltip_container}>
            <span className={style.tooltip}>{props.isCopied ?"Copied" : "Copy"}</span>
            <img
              className={style.icon}
              src={copyPasteIcon}
              alt="Copy paste icom"
              onClick={saveInCLipboard}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
