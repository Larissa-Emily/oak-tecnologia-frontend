import "./App.css";
import List from "./Components/List";
import Menu from "./Components/Menu";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Menu />
      <div>
        <ToastContainer />
        <List />
      </div>
    </div>
  );
}

export default App;
