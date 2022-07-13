import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DashboardView } from "./views/dashboard";
import { PostCategory, PostJob, Recruiter } from "./views/dashboard/recruiter";
import { HomeView, Login, Signup } from "./views/home";
import { LoginForm } from "./views/home/components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path="/" element={<HomeView />}>
          <Route path="login" element={<Login />}>
            <Route path="recruiter" element={<LoginForm user="recruiter" />} />
            <Route
              path="professional"
              element={<LoginForm user="professional" />}
            />
          </Route>
          <Route path="signup" element={<Signup />}>
            <Route path="recruiter" element={<h1>recruiter</h1>} />
            <Route path="professional" element={<h1>professional</h1>} />
          </Route>
        </Route>
        {/* dashboard */}
        <Route path="/dashboard" element={<DashboardView />}>
          <Route path="recruiter" element={<Recruiter />}>
            <Route path="post-job" element={<PostJob />}>
              <Route path="category:category" element={<PostCategory />} />
              <Route path="show:job-id" element={<h1>show:job-id</h1>} />
            </Route>
            <Route path="create-job" element={<h1>create-job</h1>} />
            <Route path="profile" element={<h1>profile</h1>}>
              <Route path="edit" element={<h1>edit</h1>} />
            </Route>
          </Route>
          <Route path="professional" element={<h1>professional</h1>}>
            <Route path="find-job" element={<h1>find-job</h1>}>
              <Route path=":filter" element={<h1>:filter</h1>} />
              <Route path="job:id" element={<h1>job:id</h1>}>
                <Route path="apply" element={<h1>apply</h1>} />
              </Route>
              <Route path="company:id" element={<h1>company:id</h1>} />
            </Route>
            <Route path="applies:category" element={<h1>applies</h1>} />
            <Route path="following" element={<h1>applies</h1>} />
            <Route path="profile" element={<h1>profile</h1>}>
              <Route path="edit" element={<h1>edit</h1>} />
            </Route>
          </Route>
        </Route>
        {/* logout */}
        <Route path="/logout" element={<h1>logout</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
