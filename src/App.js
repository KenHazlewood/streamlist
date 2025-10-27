import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StreamForm from "./components/StreamForm";
import StreamList from "./components/StreamList";
import "./App.css";

function App() {
  const [streams, setStreams] = useState([]);

  const addStream = (stream) => {
    setStreams([...streams, stream]);
  };

  const deleteStream = (index) => {
    const updated = streams.filter((_, i) => i !== index);
    setStreams(updated);
  };

  const completeStream = (index) => {
    const updated = streams.map((stream, i) =>
      i === index ? { ...stream, completed: !stream.completed } : stream
    );
    setStreams(updated);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h2>🎬 StreamList</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Stream</Link></li>
            <li><Link to="/list">Stream List</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h3>Welcome to StreamList!</h3>} />
          <Route path="/add" element={<StreamForm addStream={addStream} />} />
          <Route
            path="/list"
            element={
              <StreamList
                streams={streams}
                deleteStream={deleteStream}
                completeStream={completeStream}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;