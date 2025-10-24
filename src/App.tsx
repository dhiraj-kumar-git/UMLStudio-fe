import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import CanvasArea from "./components/CanvasArea";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="workspace">
        <SidebarLeft />
        <CanvasArea />
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
};

export default App;
