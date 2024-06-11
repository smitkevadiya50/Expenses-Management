import React, { useState, useContext, createContext, ReactNode, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";

interface SidebarContextValue {
  expanded: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
}

const SidebarContext = createContext<SidebarContextValue>({
  expanded: true,
  setIsMobileOpen: () => {},
});

interface SidebarProps {
  children: ReactNode;
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
}

export const Sidebar = ({ children, isMobileOpen, setIsMobileOpen }: SidebarProps) => {
  const [expanded, setExpanded] = useState(true);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setExpanded(true);
    }
  };

  useEffect(() => {
    handleResize(); // Set the initial state based on screen size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const isMobile = () => window.innerWidth <= 768;
  return (
    <>
      <aside className={`h-screen ${isMobileOpen ? "absolute z-20" : "hidden md:block"}`}>
        <nav className={`h-full flex flex-col bg-white border-r shadow-sm ${isMobileOpen ? "w-64" : ""}`}>
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src="https://img.logoipsum.com/243.svg"
              className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
              alt=""
            />
            <button
              onClick={() => {
                if (isMobile()) {
                  setIsMobileOpen(false);
                } else {
                  setExpanded((curr) => !curr);
                }
              }}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded, setIsMobileOpen }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
              <div className="leading-4">
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}
    </>
  );
};

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  to: string;
  active?: boolean;
  alert?: boolean;
}

export const SidebarItem = ({ icon, text, to, active, alert }: SidebarItemProps) => {
  const { expanded, setIsMobileOpen } = useContext(SidebarContext);

  return (
    <li className="relative flex items-center py-2 px-1 my-1 font-medium rounded-md cursor-pointer transition-colors group">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 flex items-center w-full rounded-xl p-2"
            : "hover:bg-indigo-50 text-gray-600 flex items-center w-full rounded-xl p-2"
        }
        onClick={() => setIsMobileOpen(false)}
      >
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
          {text}
        </span>
        {alert && (
          <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />
        )}

        {!expanded && (
          <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
            {text}
          </div>
        )}
      </NavLink>
    </li>
  );
};
