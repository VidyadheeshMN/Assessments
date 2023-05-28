import logo from "./logo.svg";
import "./App.css";
import Task1 from "./Tasks/Task1";
import Task2 from "./Tasks/Task2";
import Task3 from "./Tasks/Task3";

function App() {
  return (
    <div className='App'>
      <div
        style={{
          padding: "3rem",
          borderBottom: "4px solid",
          marginBottom: "5px",
        }}
      >
        <h2>Task 1 - Fetch API every 5 seconds and show data</h2>
        <Task1 />
      </div>
      <div
        style={{
          padding: "3rem",
          borderBottom: "4px solid",
          marginBottom: "5px",
        }}
      >
        <h2>Task 2 - map, co ordinates and images</h2>
        <Task2 />
      </div>
      <div
        style={{
          padding: "3rem",
          borderBottom: "4px solid",
          marginBottom: "5px",
        }}
      >
        <h2>
          Task 3 - Tree view component with n nodes, n parents and n children
        </h2>
        <Task3 />
      </div>
    </div>
  );
}

export default App;
