import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>home</h1>}>
          <Route path="login" element={<h1>login</h1>}>
            <Route path="recruiter" element={<h1>recruiter</h1>} />
            <Route path="professional" element={<h1>professional</h1>} />
          </Route>
          <Route path="signup" element={<h1>signup</h1>}>
            <Route path="recruiter" element={<h1>recruiter</h1>}>
              <Route path="step1" element={<h1>step1</h1>} />
              <Route path="step2" element={<h1>step2</h1>} />
            </Route>
            <Route path="professional" element={<h1>professional</h1>}>
              <Route path="step1" element={<h1>step1</h1>} />
              <Route path="step2" element={<h1>step2</h1>} />
              <Route path="step3" element={<h1>step3</h1>} />
            </Route>
          </Route>
        </Route>
        <Route path="/dashboard" element={<h1>dashboard</h1>}>
          <Route path="recruiter" element={<h1>recruiter</h1>}>
            <Route path="post-job" element={<h1>post-job</h1>}>
              <Route path="category:name" element={<h1>category:name</h1>} />
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
        <Route path="/logout" element={<h1>logout</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
