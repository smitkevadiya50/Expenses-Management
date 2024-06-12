import { AddPhotoAlternate } from "@mui/icons-material";
import { MutableRefObject } from "react";

interface CreateGroupCardProps {
    isCreating: boolean;
    setIsCreating: React.Dispatch<React.SetStateAction<boolean>>;
    newGroupName: string;
    setNewGroupName: React.Dispatch<React.SetStateAction<string>>;
    handleCreateGroup: () => void;
    inputRef: MutableRefObject<HTMLInputElement | null>;
  }
  
  export const CreateGroupCard: React.FC<CreateGroupCardProps> = ({
    isCreating,
    setIsCreating,
    newGroupName,
    setNewGroupName,
    handleCreateGroup,
    inputRef
  }) => {
    return (
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-custom">
        <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <AddPhotoAlternate/>
        </div>
        <div className="p-4 text-right">
          {isCreating ? (
            <input
              ref={inputRef}
              type="text"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              placeholder="Enter Group Name"
              className="p-2 w-full text-right focus:outline-none focus:ring-0 border-0 caret-black"
              autoFocus
            />
          ) : (
            <p
              className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600 cursor-pointer"
              onClick={() => setIsCreating(true)}
            >
              Create New Group
            </p>
          )}
          <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
            $0k
          </h4>
        </div>
        <div className="border-t border-blue-gray-50 p-4 flex">
          <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
            <strong className="text-green-500">0%</strong>&nbsp;than last week
          </p>
          <div className='flex ml-auto'>
            <button
              className={`font-bold ${newGroupName ? 'text-blue-700' : 'text-gray-300'}`}
              onClick={handleCreateGroup}
              disabled={!newGroupName}
            >
              Create New Group
            </button>
          </div>
        </div>
      </div>
    );
  };