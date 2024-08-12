// Testing types : unit/functional, integration, e2e(end-two-end), visual
// Testing libraries : mocha, jasmine, jest, vitest, node, bun

import { useState } from "react";

function App() {
  const [name, setName] = useState("click me");
  return (
    <main>
      <h1>App</h1>
      <button onClick={() => setName("clicked")}>{name}</button>
    </main>
  );
}

export default App;
