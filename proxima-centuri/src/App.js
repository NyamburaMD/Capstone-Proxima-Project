import React from "react";
import "./App.css";
import CreateGroupForm from "./components/CreateGroupForm";
import Dashboard from "./components/Dashboard";
import GroupList from "./components/GroupList";

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
      </footer>
    </div>
  );
}

export default App;
