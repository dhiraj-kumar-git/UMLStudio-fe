import React from "react";

const SidebarRight: React.FC = () => {
  return (
    <aside className="sidebar-right">
      <h3>Class Details</h3>
      <div className="details">
        <label>Class Name:</label>
        <input type="text" placeholder="Student" />
        <label>Type:</label>
        <select>
          <option>Class</option>
          <option>Abstract</option>
          <option>Interface</option>
        </select>
      </div>
    </aside>
  );
};

export default SidebarRight;
