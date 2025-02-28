import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Registration from "./pages/registration/Registraion";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import CourseSuccess from "./pages/coursessucess/CoursesSucess";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./pages/notfound/NotFound";
import AllBlogs from "./pages/allblogs/AllBlogs";
import BlogDetails from "./pages/detailsblogevent/BlogDetails";
import AllCourses from "./pages/allcourses/AllCourses";
import CourseDetails from "./pages/detailscourses/DetailsCourses";
import AccountPage from "./pages/account/Account";
import CreateBlog from "./pages/createblog/CreateBlog";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coursesuccess" element={<CourseSuccess/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/allblogs" element={<ProtectedRoute><AllBlogs /></ProtectedRoute>} />
        <Route path="/blog/:id" element={<ProtectedRoute><BlogDetails /></ProtectedRoute>} />
        <Route path="/allcourses" element={<ProtectedRoute><AllCourses /></ProtectedRoute>} />
        <Route path="/courses/:id" element={<ProtectedRoute><CourseDetails /></ProtectedRoute>}/>
        <Route path="/myaccount" element={<ProtectedRoute><AccountPage /></ProtectedRoute>}/>
        <Route path="/create-blog" element={<ProtectedRoute><CreateBlog /></ProtectedRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;
