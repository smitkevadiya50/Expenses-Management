import React, { useEffect, useRef, useState } from 'react';
import { GroupCard } from './groups/GroupCard';
import { CreateGroupCard } from './groups/CreateGroupCard';
import EditGroupModal from './groups/EditGroupModal';

const Groups: React.FC = () => {
  const [groupData, setGroupData] = useState([
    {
      groupName: "Group 1",
      groupMoney: "$53k",
      groupGrowth: "than last week",
      growthPercentage: "+55%",
      members: ["Alice", "Bob"]
    },
    {
      groupName: "Group 2",
      groupMoney: "$76k",
      groupGrowth: "than last week",
      growthPercentage: "+30%",
      members: ["Charlie", "Dave"]
    },
    {
      groupName: "Group 3",
      groupMoney: "$23k",
      groupGrowth: "than last week",
      growthPercentage: "+20%",
      members: ["Eve", "Frank"]
    }
  ]);

  const [newGroupName, setNewGroupName] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedGroupIndex, setSelectedGroupIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateGroup = () => {
    if (newGroupName) {
      setGroupData([
        ...groupData,
        {
          groupName: newGroupName,
          groupMoney: "$0k",
          groupGrowth: "than last week",
          growthPercentage: "0%",
          members: []
        }
      ]);
      setNewGroupName("");
      setIsCreating(false);
    }
  };

  const handleEditGroup = (index: number) => {
    setSelectedGroupIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGroupIndex(null);
  };

  const handleSetGroupName = (name: string) => {
    if (selectedGroupIndex !== null) {
      const updatedGroups = [...groupData];
      updatedGroups[selectedGroupIndex].groupName = name;
      setGroupData(updatedGroups);
    }
  };

  const handleAddMember = (member: string) => {
    if (selectedGroupIndex !== null) {
      const updatedGroups = [...groupData];
      updatedGroups[selectedGroupIndex].members.push(member);
      setGroupData(updatedGroups);
    }
  };

  const handleRemoveMember = (member: string) => {
    if (selectedGroupIndex !== null) {
      const updatedGroups = [...groupData];
      updatedGroups[selectedGroupIndex].members = updatedGroups[selectedGroupIndex].members.filter(m => m !== member);
      setGroupData(updatedGroups);
    }
  };

  useEffect(() => {
    if (isCreating && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isCreating]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Groups</h1>
      <div className='mt-12'>
        <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-1 xl:grid-cols-2'>
          {groupData.map((group, index) => (
            <GroupCard
              key={index}
              groupName={group.groupName}
              groupMoney={group.groupMoney}
              groupGrowth={group.groupGrowth}
              growthPercentage={group.growthPercentage}
              onEdit={() => handleEditGroup(index)}
            />
          ))}
          <CreateGroupCard
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            newGroupName={newGroupName}
            setNewGroupName={setNewGroupName}
            handleCreateGroup={handleCreateGroup}
            inputRef={inputRef}
          />
        </div>
      </div>
      <EditGroupModal
        open={isModalOpen}
        onClose={handleCloseModal}
        groupName={selectedGroupIndex !== null ? groupData[selectedGroupIndex].groupName : ""}
        setGroupName={handleSetGroupName}
        members={selectedGroupIndex !== null ? groupData[selectedGroupIndex].members : []}
        addMember={handleAddMember}
        removeMember={handleRemoveMember}
      />
      <p className='flex justify-center text-green-500 text-base font-bold'>Join The New Group!</p>
    </div>
  );
};

export default Groups;
