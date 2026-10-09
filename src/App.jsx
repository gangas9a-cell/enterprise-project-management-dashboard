import { useState, useEffect } from "react";
import "./App.css";
function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [search, setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [newProject, setNewProject] = useState("");
    const [projects, setProjects] = useState(() => {
  const savedProjects = localStorage.getItem("projects");
  return savedProjects ? JSON.parse(savedProjects) : [];
});
    
useEffect(() => {
  localStorage.setItem("projects", JSON.stringify(projects));
}, [projects]);

    const [newProjectStatus, setNewProjectStatus] = useState("In Progress");
   
const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  return savedTasks ? JSON.parse(savedTasks) : [
    { title: "Design Homepage", assignedTo: "Alex", status: "To Do" },
    { title: "Prepare Documentation", assignedTo: "Sarah", status: "To Do" },
    { title: "Develop Login Page", assignedTo: "John", status: "In Progress" },
    { title: "API Integration", assignedTo: "Emma", status: "In Progress" },
    { title: "Database Setup", assignedTo: "David", status: "Done" },
    { title: "Project Planning", assignedTo: "Mia", status: "Done" }
  ];
});
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
const [showTaskForm, setShowTaskForm] = useState(false);
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
  Notifications <span className="notification-badge">3</span>
</button>
</nav>
      </aside>

      <main id="dashboard" className="main-content">
        <div className="top-header">
  <div>
    <h2>Welcome back, Admin!</h2>
    <p>Here's what's happening with your projects today.</p>
  </div>

  <input
  type="text"
  className="search-bar"
  placeholder="Search projects or tasks..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
</div>
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
  <div className="projects-title">
    <h2>Recent Projects</h2>
    <button
  className="add-project-button"
  onClick={() => setShowForm(true)}
>
  + Add Project
</button>
  </div>
  {showForm && (
  <div className="add-project-form">
   <input
  type="text"
  placeholder="Project name"
  value={newProject}
  onChange={(e) => setNewProject(e.target.value)}
/>
<select
  value={newProjectStatus}
  onChange={(e) => setNewProjectStatus(e.target.value)}
>
  <option value="In Progress">In Progress</option>
  <option value="Completed">Completed</option>
  <option value="Pending">Pending</option>
</select>
  <button
  onClick={() => {
    if (newProject.trim() !== "") {
      setProjects([
        ...projects,
        {
          name: newProject,
          status: newProjectStatus
        }
      ]);
      setNewProject("");
      setNewProjectStatus("In Progress");
      setShowForm(false);
    }
  }}
>
  Add
</button>
    <button onClick={() => setShowForm(false)}>Cancel</button>
  </div>
)}

  {("Website Redesign".toLowerCase().includes(search.toLowerCase())) && (
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
  )}

  {("Mobile App Development".toLowerCase().includes(search.toLowerCase())) && (
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
  )}

  {("Marketing Campaign".toLowerCase().includes(search.toLowerCase())) && (
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
  )}
  {projects.filter((project) =>
  project.name.toLowerCase().includes(search.toLowerCase())
).map((project, index) => (
  <div className="project" key={index}>
    <div className="project-header">
      <h3>{project.name}</h3>
<div>
<span
  className={`status ${
    project.status === "Completed"
      ? "completed"
      : project.status === "Pending"
      ? "pending"
      : "in-progress"
  }`}
>
  {project.status}
</span>
  <button
    className="delete-project-button"
    onClick={() => {
      setProjects(projects.filter((_, i) => i !== index));
    }}
  >
    Delete
  </button>
</div>
    </div>
    <p>Project progress</p>
    <div className="progress-bar">
  <div
    className="progress"
    style={{
      width:
        project.status === "Completed"
          ? "100%"
          : project.status === "In Progress"
          ? "50%"
          : "0%"
    }}
  ></div>
</div>

<p>
  {project.status === "Completed"
    ? "100% completed"
    : project.status === "In Progress"
    ? "50% completed"
    : "0% completed"}
</p>
  </div>
))}
</div>
        <div className="status-section">
          <h2>Project Status Overview</h2>

          <div className="status-cards">
            <div className="status-card">
              <h3>Completed</h3>
              <p>8 Projects</p>
            </div>

            <div className="status-card">
              <h3>In Progress</h3>
              <p>3 Projects</p>
            </div>

            <div className="status-card">
              <h3>Pending</h3>
              <p>1 Project</p>
            </div>
          </div>
        </div>
 <div id="tasks" className="kanban-section">
  <div className="kanban-title">
    <h2>Kanban Board</h2>
    <button
  className="add-task-button"
  onClick={() => setShowTaskForm(true)}
>
  + Add Task
</button>
  </div>
  {showTaskForm && (
  <div className="add-task-form">
    <input
      type="text"
      placeholder="Task name"
      id="taskName"
    />

    <input
      type="text"
      placeholder="Assigned to"
      id="taskAssignee"
    />

    <select id="taskStatus">
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>

    <button
      onClick={() => {
        const name = document.getElementById("taskName").value;
        const assignee = document.getElementById("taskAssignee").value;
        const status = document.getElementById("taskStatus").value;

        if (name.trim() !== "" && assignee.trim() !== "") {
          setTasks([
            ...tasks,
            {
              title: name,
              assignedTo: assignee,
              status: status
            }
          ]);

          setShowTaskForm(false);
        }
      }}
    >
      Add
    </button>

    <button onClick={() => setShowTaskForm(false)}>
      Cancel
    </button>
  </div>
)}

  <div className="kanban-board">

    <div className="kanban-column">
  <h3>To Do</h3>

  {tasks
    .filter((task) => task.status === "To Do")
    .map((task, index) => (
      
<div className="task" key={index}>
  <h4>{task.title}</h4>
  <p>Assigned to: {task.assignedTo}</p>

  <select
    value={task.status}
    onChange={(e) => {
      setTasks(
        tasks.map((item) =>
          item === task
            ? { ...item, status: e.target.value }
            : item
        )
      );
    }}
  >
    <option value="To Do">To Do</option>
    <option value="In Progress">In Progress</option>
    <option value="Done">Done</option>
  </select>

  <button
    className="delete-task-button"
    onClick={() => {
      setTasks(tasks.filter((item) => item !== task));
    }}
  >
    Delete
  </button>
</div>
    ))}
</div>

    <div className="kanban-column">
  <h3>In Progress</h3>

  {tasks
    .filter((task) => task.status === "In Progress")
    .map((task, index) => (
      <div className="task" key={index}>
  <h4>{task.title}</h4>
  <p>Assigned to: {task.assignedTo}</p>
  
<select
  value={task.status}
  onChange={(e) => {
    setTasks(
      tasks.map((item) =>
        item === task
          ? { ...item, status: e.target.value }
          : item
      )
    );
  }}
>
  <option value="To Do">To Do</option>
  <option value="In Progress">In Progress</option>
  <option value="Done">Done</option>
</select>

<button
  className="delete-task-button"
  onClick={() => {
    setTasks(tasks.filter((item) => item !== task));
  }}
>
  Delete
</button>
</div>
    ))}
</div>

    <div className="kanban-column">
  <h3>Done</h3>

  {tasks
    .filter((task) => task.status === "Done")
    .map((task, index) => (
    
<div className="task" key={index}>
  <h4>{task.title}</h4>
  <p>Assigned to: {task.assignedTo}</p>

  <select
    value={task.status}
    onChange={(e) => {
      setTasks(
        tasks.map((item) =>
          item === task
            ? { ...item, status: e.target.value }
            : item
        )
      );
    }}
  >
    <option value="To Do">To Do</option>
    <option value="In Progress">In Progress</option>
    <option value="Done">Done</option>
  </select>

  <button
    className="delete-task-button"
    onClick={() => {
      setTasks(tasks.filter((item) => item !== task));
    }}
  >
    Delete
  </button>
</div>
    ))}
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
          <div className="notification-title">
  <h2>Notification Center</h2>
  <span className="notification-count">3 New</span>
</div>

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