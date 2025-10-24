import React from "react";

const SidebarLeft: React.FC = () => {
  return (
    <aside className="sidebar-left">
      <h3>UML Editor</h3>
      <div className="menu">
        <button>Add Class</button>
        <button>Import Diagram</button>
        <button>Export Diagram</button>
      </div>
    </aside>
  );
};

export default SidebarLeft;
