import React, { useState } from "react";

const Header = ({ term, setTerm }) => {
  const [hterm, setHterm] = useState("");

  return (
    <div>
      <div className="header">
        <h1>
          Viewing results for <h2>{term}</h2>
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTerm(hterm);
            setHterm("");
          }}
        >
          <input
            onChange={(e) => setHterm(e.target.value)}
            placeholder="search for articles..."
            value={hterm}
            type="text"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
