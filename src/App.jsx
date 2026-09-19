import { useState } from "react";
import "./App.css";
function App() {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dashboard dark-mode" : "dashboard"}>

      <aside className="sidebar">
        <h2>Project Manager</h2>

       <nav>
  <button onClick={() => document.getElementById("dashboard").scrollIntoView()}>
    Dashboard
  </button>

  <button onClick={() => document.getElementById("projects").scrollIntoView()}>
    Projects
  </button>

  <button onClick={() => document.getElementById("tasks").scrollIntoView()}>
    Tasks
  </button>

  <button onClick={() => document.getElementById("team").scrollIntoView()}>
    Team
  </button>

  <button onClick={() => document.getElementById("analytics").scrollIntoView()}>
    Analytics
  </button>

  <button onClick={() => document.getElementById("notifications").scrollIntoView()}>
    Notifications
  </button>
</nav>
      </aside>

      <main id="dashboard" className="main-content">
        <h1>Dashboard</h1>
        <button
  className="theme-button"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>
        <p>Welcome to the Enterprise Project Management Dashboard</p>

        <div className="cards">
  <div className="card">
    <h3>Total Projects</h3>
    <p>12</p>
  </div>

  <div className="card">
    <h3>Completed Projects</h3>
    <p>8</p>
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
<div id="projects" className="projects-section">
  <h2>Recent Projects</h2>

  <div className="project">
    <div className="project-header">
      <h3>Website Redesign</h3>
      <span className="status in-progress">In Progress</span>
    </div>

    <p>Project progress</p>
    <div className="progress-bar">
      <div className="progress" style={{ width: "65%" }}></div>
    </div>
    <p>65% completed</p>
  </div>

  <div className="project">
    <div className="project-header">
      <h3>Mobile App Development</h3>
      <span className="status completed">Completed</span>
    </div>

    <p>Project progress</p>
    <div className="progress-bar">
      <div className="progress" style={{ width: "100%" }}></div>
    </div>
    <p>100% completed</p>
  </div>

  <div className="project">
    <div className="project-header">
      <h3>Marketing Campaign</h3>
      <span className="status in-progress">In Progress</span>
    </div>

    <p>Project progress</p>
    <div className="progress-bar">
      <div className="progress" style={{ width: "40%" }}></div>
    </div>
    <p>40% completed</p>
  </div>
</div>
<div id="tasks" className="kanban-section">
  <h2>Kanban Board</h2>

  <div className="kanban-board">

    <div className="kanban-column">
      <h3>To Do</h3>

      <div className="task">
        <h4>Design Homepage</h4>
        <p>Assigned to: Alex</p>
      </div>

      <div className="task">
        <h4>Prepare Documentation</h4>
        <p>Assigned to: Sarah</p>
      </div>
    </div>

    <div className="kanban-column">
      <h3>In Progress</h3>

      <div className="task">
        <h4>Develop Login Page</h4>
        <p>Assigned to: John</p>
      </div>

      <div className="task">
        <h4>API Integration</h4>
        <p>Assigned to: Emma</p>
      </div>
    </div>

    <div className="kanban-column">
      <h3>Done</h3>

      <div className="task">
        <h4>Database Setup</h4>
        <p>Assigned to: David</p>
      </div>

      <div className="task">
        <h4>Project Planning</h4>
        <p>Assigned to: Mia</p>
      </div>
    </div>

  </div>
</div>
        <div id="team" className="team-section">
          <h2>Team Management</h2>

          <div className="team-grid">

            <div className="team-card">
              <h3>Alex Johnson</h3>
              <p>UI/UX Designer</p>
              <span>Active</span>
            </div>

            <div className="team-card">
              <h3>Sarah Williams</h3>
              <p>Project Manager</p>
              <span>Active</span>
            </div>

            <div className="team-card">
              <h3>John Smith</h3>
              <p>Frontend Developer</p>
              <span>Active</span>
            </div>

            <div className="team-card">
              <h3>Emma Davis</h3>
              <p>Backend Developer</p>
              <span>Active</span>
            </div>

          </div>
        </div>
         <div id="analytics" className="analytics-section">
          <h2>Analytics & Reports</h2>

          <div className="analytics-cards">
            <div className="analytics-card">
              <h3>Project Completion</h3>
              <p>75%</p>
            </div>

            <div className="analytics-card">
              <h3>Task Completion</h3>
              <p>82%</p>
            </div>

            <div className="analytics-card">
              <h3>Team Productivity</h3>
              <p>89%</p>
            </div>
          </div>
        </div>
                <div className="chart-section">
          <h2>Project Performance</h2>

          <div className="chart">
            <div className="bar" style={{ height: "60%" }}>
              <span>Jan</span>
            </div>

            <div className="bar" style={{ height: "75%" }}>
              <span>Feb</span>
            </div>

            <div className="bar" style={{ height: "50%" }}>
              <span>Mar</span>
            </div>

            <div className="bar" style={{ height: "85%" }}>
              <span>Apr</span>
            </div>

            <div className="bar" style={{ height: "70%" }}>
              <span>May</span>
            </div>
          </div>
        </div>
          <div id="notifications" className="notification-section">
          <h2>Notification Center</h2>

          <div className="notification">
            <h3>New Task Assigned</h3>
            <p>You have been assigned a new task.</p>
            <span>5 minutes ago</span>
          </div>

          <div className="notification">
            <h3>Project Completed</h3>
            <p>Mobile App Development has been completed.</p>
            <span>1 hour ago</span>
          </div>

          <div className="notification">
            <h3>Team Meeting</h3>
            <p>Team meeting scheduled for tomorrow at 10:00 AM.</p>
            <span>3 hours ago</span>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;