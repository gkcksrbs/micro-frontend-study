import React, { lazy, Suspense } from "react";

import "./App.css";

const Header = lazy(() => import("HeaderApp/Header"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div className="App">main</div>
    </div>
  );
}

export default App;
