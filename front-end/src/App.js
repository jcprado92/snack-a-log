import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Snacks from "./Components/Snacks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <main>
        <Routes>
            <Route path="/" element={< Snacks />} />
            <Route path="/snacks" element={<Snacks />} />
            <Route path="/snack/:id" element={<Show />} />
            <Route path="/snacks/new" element={<New />} />
            <Route path="/snacks/:id/edit" element={<Edit /> } />
            <Route path="*" element={<FourOFour />} />
        </Routes>
          </main>
      </div>
    </Router>
  );
}

export default App;
