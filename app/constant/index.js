import { MdDashboard } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { SiEventstore } from "react-icons/si";
import { SiZcash } from "react-icons/si";
import { FaDonate } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/admin-dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Members",
        path: "/admin-dashboard/Members",
        icon: <HiOutlineUsers />,
      },
      {
        title: "Events",
        path: "/admin-dashboard/Events",
        icon: <SiEventstore />,
      },
      {
        title: "Finances",
        path: "/admin-dashboard/Finances",
        icon: <SiZcash />,
      },
      {
        title: "Donate",
        path: "/admin-dashboard/Donate",
        icon: <FaDonate />,
      },
      {
        title: "Sermons",
        path: "/admin-dashboard/Sermons",
        icon: <FaServicestack />,
      },
      {
        title: "Settings",
        path: "/admin-dashboard/Settings",
        icon: <IoSettingsOutline />,
      },
    ],
  },
];
