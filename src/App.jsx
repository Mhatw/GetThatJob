import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DashboardView, EditProfile, Profile } from "./views/dashboard";
import { Applies, FindJob, Professional } from "./views/dashboard/professional";
import {
  CreateJob,
  PostCategory,
  PostJob,
  Recruiter,
  ShowJob,
} from "./views/dashboard/recruiter";
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
              <Route path="category/:category" element={<PostCategory />} />
              <Route path="show/:job" element={<ShowJob />} />
            </Route>
            <Route path="create-job" element={<CreateJob />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit-profile" element={<EditProfile />} />
          </Route>
          <Route path="professional" element={<Professional />}>
            <Route path="find-job" element={<FindJob />}>
              <Route path=":filter" element={<h1>:filter</h1>} />
              <Route path="job:id" element={<h1>job:id</h1>}>
                <Route path="apply" element={<h1>apply</h1>} />
              </Route>
              <Route path="company:id" element={<h1>company:id</h1>} />
            </Route>
            <Route path="applies/:category" element={<Applies />} />
            <Route path="following" element={<h1>following</h1>} />
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
