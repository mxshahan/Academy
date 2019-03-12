import Home from "../Components/Home";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import TrainerDashboard from '../Components/Trainer/Dashboard';
import TrainerTest from '../Components/Trainer/Test';
import StudentDashboard from '../Components/Student/Dashboard';
import AddCourse from "../Components/Trainer/AddCourse";
import { Authorized } from "../Components/Paritials/Authorized";
import BecomeInstructor from "../Components/Trainer/Become";

export const Private = [
  { path: '/profile', exact: true, component: ''},
  { path: '/trainer/dashboard', exact: true, component: TrainerDashboard },
  { path: '/trainer/test', exact: true, component: TrainerTest },
  { path: '/trainer/addcourse', exact: true, component: AddCourse },
  { path: '/student/dashboard', exact: true, component: StudentDashboard },
]

export const Public = [
  { path: '/login', exact: true, component: Login },
  { path: '/signup', exact: true, component: Signup }
]

export const indexRouter = [
  { path: '/', exact: true, component: Home},
  { path: '/contact', exact: true, component: Contact},
  { path: '/about', exact: true, component: About },
  { path: '/become-instructor', exact: true, component: BecomeInstructor },
  { path: '/authorized', exact: true, component: Authorized }
]