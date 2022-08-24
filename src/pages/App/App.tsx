import React from "react";
import { Link } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <div>
      <Link to="/add">
        <h1>APP</h1>
      </Link>
    </div>
  );
};

// NO DEFAULT EXPORT
// export default App;
