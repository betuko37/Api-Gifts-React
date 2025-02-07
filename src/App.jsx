import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { Navbar } from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar
          empresa="Gift-API"
          id_fb={61567038896683}
          user_insta="Betuko.35"
          user_git="betuko37"
          num_wha={6621324345}
        />
        <div className="app-container">
          <main className="main-content">
            <AppRouter />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
