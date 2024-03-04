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
      // {
      //   title: "Dashboard",
      //   path: "/Admin/Dashboard",
      //   icon: <MdDashboard />,
      // },
      {
        title: "Members",
        path: "/Admin/Members",
        icon: <HiOutlineUsers />,
      },
      {
        title: "Events",
        path: "/Admin/Events",
        icon: <SiEventstore />,
      },
      {
        title: "Finances",
        path: "/Admin/Finances",
        icon: <SiZcash />,
      },
      {
        title: "Donate",
        path: "/Admin/Donate",
        icon: <FaDonate />,
      },
      {
        title: "Sermons",
        path: "/Admin/Sermons",
        icon: <FaServicestack />,
      },
      {
        title: "Settings",
        path: "/Admin/Settings",
        icon: <IoSettingsOutline />,
      },
    ],
  },
];
