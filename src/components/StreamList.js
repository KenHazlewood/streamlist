import React from "react";

function StreamList({ streams, deleteStream, completeStream }) {
  return (
    <div className="list-container">
      <h3>Stream Events</h3>
      <ul>
        {streams.map((stream, index) => (
          <li
            key={index}
            className={stream.completed ? "completed" : ""}
          >
            {stream.name}
            <div className="buttons">
              <button onClick={() => completeStream(index)}>
                {stream.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteStream(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
