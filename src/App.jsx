import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NoRequireAuth } from "./services/NoRequireAuth";
import { RequireAuth } from "./services/RequireAuth";
import { DashboardView, EditProfile, Profile } from "./views/dashboard";
import {
  Applies,
  Company,
  FilterJob,
  FindJob,
  Following,
  Job,
  JobApply,
  Professional,
} from "./views/dashboard/professional";
import {
  CreateJob,
  PostCategory,
  PostJob,
  Recruiter,
  ShowJob,
} from "./views/dashboard/recruiter";
import { HomeView, Login, Signup } from "./views/home";
import { LoginForm } from "./views/home/components";
import { SignupForm } from "./views/home/components/SignupForms";

function App() {
  return (
    <Routes>
      {/* home */}
      <Route
        path="/"
        element={
          <NoRequireAuth>
            <HomeView />
          </NoRequireAuth>
        }
      >
        <Route path="login" element={<Login />}>
          <Route path="recruiter" element={<LoginForm user="recruiter" />} />
          <Route
            path="professional"
            element={<LoginForm user="professional" />}
          />
        </Route>
        <Route path="signup" element={<Signup />}>
          <Route path="recruiter" element={<SignupForm />} />
          <Route path="professional" element={<SignupForm />} />
        </Route>
      </Route>
      {/* dashboard */}

      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<h1>loading...</h1>}>
            <RequireAuth>
              <DashboardView />
            </RequireAuth>
          </Suspense>
        }
      >
        {/* recruiter routes */}
        <Route path="recruiter" element={<Recruiter />}>
          <Route path="post-job" element={<PostJob />}>
            <Route path="category/:category" element={<PostCategory />} />
            <Route path="show/:job" element={<ShowJob />} />
          </Route>
          <Route path="create-job" element={<CreateJob />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Route>
        {/* professional routes */}
        <Route path="professional" element={<Professional />}>
          <Route path="find-job" element={<FindJob />}>
            <Route
              path=":filter"
              element={
                <Suspense fallback={<h1>loading...</h1>}>
                  <FilterJob />
                </Suspense>
              }
            />
            <Route path="job/:id" element={<Job />} />
            <Route path="job-apply/:id" element={<JobApply />} />
            <Route path="company/:id" element={<Company />} />
          </Route>
          <Route path="applies/:category" element={<Applies />} />
          <Route path="following" element={<Following />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Route>
      </Route>

      {/* logout */}
      {/* <Route path="/logout" element={<Logout />} /> */}
    </Routes>
  );
}

export default App;
