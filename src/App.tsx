import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Groups from './components/Groups';
import PersonalExpenses from './components/PersonalExpenses';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import { Sidebar, SidebarItem } from './components/Sidebar';
import { Home, Settings as SettingsIcon, Group, Menu } from '@mui/icons-material';

const App: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen ">
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-20 flex items-center justify-between px-4 py-2 md:hidden">
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <Menu />
          </button>
          <h1 className="text-lg font-semibold">App Name</h1>
        </div>
        <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen}>
          <SidebarItem icon={<Home />} text="Dashboard" to="/dashboard" />          
          <SidebarItem icon={<Group />} text="Groups" to="/groups" />
          <SidebarItem icon={<SettingsIcon />} text="Personal Expenses" to="/personal-expenses" />
          <SidebarItem icon={<SettingsIcon />} text="Settings" to="/settings" />
        </Sidebar>
        <div className="flex-grow p-4 overflow-auto mt-12 md:mt-0">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/personal-expenses" element={<PersonalExpenses />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
