import logo from './logo.svg';
import './App.scss';
import StatBox from './components/stat-box/stat-box';
import ReportBox from './components/report-box/report-box';
import CreditBox from './components/credit-box/credit-box';

function App() {
  return (
    <div className="App">
      <div>
        <p className="user-header">Paul's Dashboard</p>
        <div>
          <img className="icon-img" src={logo} alt="A"/>
        </div>
      </div>
      <div>
        <div>
          <StatBox type="used" amount="345 L"/>
          <StatBox type="reserve" amount="345 L"/>
          <StatBox type="require" amount="345 L"/>
        </div>
      </div>
      <div>
        <CreditBox amount="+17 Lt/m"/>
        <ReportBox type="yes"/>
      </div>
    </div>
  );
}

export default App;
