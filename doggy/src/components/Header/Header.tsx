import "./Header.css";
import Tabs from "./Tabs/Tabs.tsx"

export default function Header() {
  return (
    <div className="header">
      <h1>DOGTEREST</h1>
      <div className="buttons">
        <Tabs />
      </div>
    </div>
  );
}
