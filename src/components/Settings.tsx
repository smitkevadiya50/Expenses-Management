import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdateProfile = () => {
    // Logic to update profile
    console.log('Profile updated:', { name, email, mobile });
  };

  const handleChangePassword = () => {
    // Logic to change password
    console.log('Password changed:', password);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 w-full mb-2"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 w-full mb-2"
        />
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile Number"
          className="border p-2 w-full mb-2"
        />
        <button onClick={handleUpdateProfile} className="bg-blue-500 text-white px-4 py-2">
          Update Profile
        </button>
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
          className="border p-2 w-full mb-2"
        />
        <button onClick={handleChangePassword} className="bg-green-500 text-white px-4 py-2">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Settings;
