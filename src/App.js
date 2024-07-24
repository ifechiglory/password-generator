import style from "./style.module.css"
import { PasswordGeneratorCard } from "./components/PasswordGeneratorCard/PasswordGeneratorCard.jsx";
function App() {
  return (
    <div className={style.root}>
      <PasswordGeneratorCard />
    </div>
  );
}

export default App;
