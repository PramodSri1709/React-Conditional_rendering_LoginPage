import React from "react";

function App() {
  return (
    <div className="container">
      <h1>Welcome to React Login Page</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
