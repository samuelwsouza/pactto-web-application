import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";

export function DefaultLayout() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-[#232225] flex">
      <Sidebar />
      <Outlet />
    </div>
  )
}