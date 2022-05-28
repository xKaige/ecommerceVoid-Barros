import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import './index.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetin={"VOID"} />
    </>
  );
}

export default App;
