import React, { useState } from 'react';
import { GroupCard } from './groups/GroupCard';

const Groups: React.FC = () => {

    const groupData = [
      {
        groupName: "Group 1",
        groupMoney: "$53k",
        groupGrowth: "than last week",
        growthPercentage: "+55%"
      },
      {
        groupName: "Group 2",
        groupMoney: "$76k",
        groupGrowth: "than last week",
        growthPercentage: "+30%"
      },
      {
        groupName: "Group 3",
        groupMoney: "$23k",
        groupGrowth: "than last week",
        growthPercentage: "+20%"
      },
      {
        groupName: "Group 4",
        groupMoney: "$89k",
        groupGrowth: "than last week",
        growthPercentage: "+70%"
      }
    ];
  
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups;
