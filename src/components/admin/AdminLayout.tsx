import React, { useState } from "react";
import {
  Home,
  Building,
  Camera,
  Gift,
  Users,
  Calendar,
  Settings,
  Menu,
  X,
  Bell,
  ChevronDown,
  Heart,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  badge?: number;
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: <Home size={20} />,
  },
  {
    title: "Venues",
    path: "/admin/venues",
    icon: <Building size={20} />,
    badge: 3,
  },
  {
    title: "Photographers",
    path: "/admin/photographers",
    icon: <Camera size={20} />,
  },
  {
    title: "Gift Registry",
    path: "/admin/gifts",
    icon: <Gift size={20} />,
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: <Users size={20} />,
    badge: 5,
  },
  {
    title: "Bookings",
    path: "/admin/bookings",
    icon: <Calendar size={20} />,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon: <Settings size={20} />,
  },
];

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 z-40 h-screen w-64 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 bg-white border-r border-gray-200
      `}
      >
        {/* Logo */}
        <div className="h-16 flex items-center gap-2 px-6 border-b border-gray-200">
          <Heart className="text-pink-500 h-8 w-8" />
          <span className="font-great-vibes text-2xl text-gray-800">
            SmartWedding
          </span>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-pink-50 text-pink-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }
                `}
              >
                {item.icon}
                <span className="font-medium">{item.title}</span>
                {item.badge && (
                  <span className="ml-auto bg-pink-100 text-pink-600 text-xs font-medium px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="md:ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-600 font-medium">A</span>
                </div>
                <span className="font-medium text-gray-700">Admin</span>
                <ChevronDown size={20} className="text-gray-500" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
