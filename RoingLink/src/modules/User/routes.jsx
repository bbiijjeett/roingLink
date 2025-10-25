import { Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";

import Home from "./pages/Home";
import TaskForm from "./pages/TaskForm";
import MyTasks from "./pages/MyTasks";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="task-form" element={<TaskForm />} />
        <Route path="my-tasks" element={<MyTasks />} />
        <Route path="chat" element={<Chat />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
