import './App.css';
import image from './public_images/react.png';

function App() {
  return (
    <div className="App">
    <h1>Qspace : Your Own personalized Space</h1>

    <h2>Todos</h2>

    <ul>
      <li>User Login with Email and Password</li>
      <li>Personalized News Feed with Shorts</li>
      <li>Mini Social Media Appliation</li>
      <li>Expense Management System and Alert</li>
      <li>Fitness Montering and Activities</li>
      <li>Personalized NoteBook and SketchPad</li>
      <li>Top Products from all Ecommerce websites</li>
      <li>Unlimited Learning Resources</li>

    </ul>

    <img className="img__banner" src={image} alt=""/>
    </div>
  );
}

export default App;
