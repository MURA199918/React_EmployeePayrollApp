import logo from './logo.svg';
import './App.css';
import PayrollForm from './components/payrollform/PayrollForm';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <AppRouter/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
