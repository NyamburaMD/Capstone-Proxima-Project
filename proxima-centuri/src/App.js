import React from "react";
import "./App.css";
import CreateGroupForm from "./components/Group components/CreateGroupForm";
import Dashboard from "./components/Dashboard";
import GroupList from "./components/Group components/GroupList";
import Login from "./components/User components/Login";
import Signup from "./components/User components/Signup";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🌌 Proxima Centauri</h1>
        <p>Your decentralized savings and investment hub</p>
      </header>

      <main>
        <Dashboard />
        <GroupList />
      </main>

      <footer>
        <CreateGroupForm />
        <Login />
        <Signup />
      </footer>
    </div>
  );
}

export default App;
