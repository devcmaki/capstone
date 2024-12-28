import React, { useState } from "react";
import "./dynamic-layout.css"; // Ensure your styles are properly imported
import CodeEditor from "./CodeEditor"; // Assume this is a valid component
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are properly imported

export default function DynamicLayout() {
  // State management for each panel
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [showMidPanel, setShowMidPanel] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);

  return (
    <div>
      {/* Main Container */}
      <div className="container">
        {/* Left Panel */}

          <div className="left-panel">
            <div className="camera-container">
              <div className="cameras">Camera 1</div>
              <div className="cameras">Camera 2</div>
              <div className="cameras">Camera 3</div>
            </div>
          </div>

        {/* Middle Panel */}
        {showMidPanel && (
          <div className="mid-panel">
            <div className="codeeditorContainer">
              <div className="topsection-codeeditor">
                {/* Additional content */}
              </div>
              <div className="codeeditor">
                <CodeEditor />
              </div>
            </div>
          </div>
        )}

        {/* Right Panel */}
        {showRightPanel && <div className="right-panel">Chat</div>}
      </div>

      {/* Bottom Panel with Buttons */}
      <div className="bottom-panel">
        <div className="features-container">
            <button className='bottom-panel-button' onClick={() => setShowMidPanel((prev) => !prev)}>
              {showMidPanel ? <i className="bi bi-file-code-fill"></i> : <i class="bi bi-code-square"></i>}
            </button>
            <button className='bottom-panel-button' onClick={() => setShowMidPanel((prev) => !prev)}>
              {showMidPanel ? <i className="bi bi-file-code-fill"></i> : <i class="bi bi-code-square"></i>}
            </button>
            <button className='bottom-panel-button' onClick={() => setShowMidPanel((prev) => !prev)}>
              {showMidPanel ? <i className="bi bi-file-code-fill"></i> : <i class="bi bi-code-square"></i>}
            </button>
            <button className='bottom-panel-button' onClick={() => setShowMidPanel((prev) => !prev)}>
              {showMidPanel ? <i className="bi bi-file-code-fill"></i> : <i class="bi bi-code-square"></i>}
            </button>
        </div>

        <div className="other-features-container">
            <button className='bottom-panel-button' onClick={() => setShowRightPanel((prev) => !prev)}>
              {showRightPanel ? <i className="bi bi-chat-left-text-fill"></i> : <i class="bi bi-chat-left-text"></i>}
            </button>
            <button className='bottom-panel-button' onClick={() => setShowRightPanel((prev) => !prev)}>
              {showRightPanel ? <i className="bi bi-chat-left-text-fill"></i> : <i class="bi bi-chat-left-text"></i>}
            </button>
             <button className='bottom-panel-button' onClick={() => setShowRightPanel((prev) => !prev)}>
              {showRightPanel ? <i className="bi bi-chat-left-text-fill"></i> : <i class="bi bi-chat-left-text"></i>}
            </button>
        </div>
      </div>



    </div>
  );
}
