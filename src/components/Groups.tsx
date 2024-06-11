import React, { useState } from 'react';

const Groups: React.FC = () => {
  const [groupName, setGroupName] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  const handleCreateGroup = () => {
    // Logic to create a group
    console.log('Group created:', groupName);
  };

  const handleJoinGroup = () => {
    // Logic to join a group using invite code
    console.log('Joined group with code:', inviteCode);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Groups</h1>
      <div className="mb-4">
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Group Name"
          className="border p-2 w-full mb-2"
        />
        <button onClick={handleCreateGroup} className="bg-blue-500 text-white px-4 py-2">
          Create Group
        </button>
      </div>
      <div>
        <input
          type="text"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
          placeholder="Invite Code"
          className="border p-2 w-full mb-2"
        />
        <button onClick={handleJoinGroup} className="bg-green-500 text-white px-4 py-2">
          Join Group
        </button>
      </div>
    </div>
  );
};

export default Groups;
