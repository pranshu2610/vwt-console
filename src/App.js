import logo from './logo.svg';
import './App.scss';
import StatBox from './components/stat-box/stat-box';
import ReportBox from './components/report-box/report-box';
import CreditBox from './components/credit-box/credit-box';
import TaskBox from './components/task-box/task-box';

function App() {
  return (
    <div className="App">
      <div className="horizontal seperate">
        <p className="user-header">Paul's Dashboard</p>
        <div>
          <img className="icon-img" src={logo} alt="A"/>
        </div>
      </div>
      <div className="horizontal">
        <div className="vertical">
          <div className="horizontal">
            <StatBox type="used" amount="345 L"/>
            <StatBox type="reserve" amount="345 L"/>
            <StatBox type="require" amount="345 L"/>
          </div>
          <div className="horizontal">
            <TaskBox type="task"/>
            <TaskBox />
          </div>
        </div>
        <div className="vertical">
          <CreditBox amount="+17 Lt/m"/>
          <ReportBox type="yes"/>
        </div>
        </div>
    </div>
  );
}

export default App;
