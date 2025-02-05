import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { Navbar } from './Components/Navbar/Navbar'


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar
          empresa="Gift-API"
          id_fb={61567038896683}
          user_insta="Betuko.35"
          user_git="Betuko37"
          num_wha={6621324345}
        />
        <main className="main-content">
          <AppRouter />
        </main>
      </div>
    </Router>
  );
};
  
  export default App;