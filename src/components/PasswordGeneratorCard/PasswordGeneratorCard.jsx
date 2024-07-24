import style from "./style.module.css";
import { PasswordGeneratorBody } from "../PasswordGeneratorBody/PasswordGeneratorBody.jsx";
import { PasswordGeneratorHeader } from "../PasswordGeneratorHeader/PasswordGeneratorHeader.jsx";
import { PasswordGeneratorFooter } from "../PasswordGeneratorFooter/PasswordGeneratorFooter.jsx";
import { useState } from "react";
export function PasswordGeneratorCard() {
  const [password, setPassword] = useState("Awesome");
  const [isCopied, setIsCopied] = useState(false)

  return (
    <div className={style.root}>
      <div className={style.main}>
        <PasswordGeneratorHeader />
        <PasswordGeneratorBody onSubmit={setPassword} clearClipboard={setIsCopied} />
      </div>
      <PasswordGeneratorFooter password={password} isCopied={isCopied} setIsCopied={setIsCopied}/>
    </div>
  );
}
