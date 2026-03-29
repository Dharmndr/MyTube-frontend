import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import VideoPlayer from "./pages/VideoPlayer";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        
        {/* Routes */}
        <div className="flex-grow">
          <Routes>

            {/* Public Welcome Page */}
            <Route path="/" element={<Welcome />} />

            {/* Protected User Dashboard */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />

            {/* Protected Admin */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Public */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/video/:id" element={<VideoPlayer />} />

          </Routes>
        </div>

        {/* ✅ Footer everywhere */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;