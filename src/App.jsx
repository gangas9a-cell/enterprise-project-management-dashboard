
import "./App.css";
function App() {
  return (
    <div className="dashboard">

      <aside className="sidebar">
        <h2>Project Manager</h2>

        <nav>
          <p>Dashboard</p>
          <p>Projects</p>
          <p>Tasks</p>
          <p>Team</p>
          <p>Analytics</p>
          <p>Notifications</p>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Dashboard</h1>
        <p>Welcome to the Enterprise Project Management Dashboard</p>

        <div className="cards">
          <div className="card">
            <h3>Total Projects</h3>
            <p>12</p>
          </div>

          <div className="card">
            <h3>Active Tasks</h3>
            <p>28</p>
          </div>

          <div className="card">
            <h3>Team Members</h3>
            <p>16</p>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;