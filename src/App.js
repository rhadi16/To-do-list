import "./App.css";
import Navbar from './component/Navbar';
import AddList from './component/AddList';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <AddList />
      </div>
    </>
  );
}

export default App;
