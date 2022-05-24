import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "TextUtils" about = "About Us"/>
      <div className="container">
        <TextForm heading = "Enter the text to analyse below"/>
      </div>
    </>
  );
}

export default App;
