import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchInpute from './SearchInpute';

interface EditGroupModalProps {
  open: boolean;
  onClose: () => void;
  groupName: string;
  setGroupName: (name: string) => void;
  members: string[];
  addMember: (member: string) => void;
  removeMember: (member: string) => void;
}

const EditGroupModal: React.FC<EditGroupModalProps> = ({
  open,
  onClose,
  groupName,
  setGroupName,
  members,
  addMember,
  removeMember,
}) => {
  const [newMember, setNewMember] = useState('');
  const [groupImage, setGroupImage] = useState<string | ArrayBuffer | null>(null);

  const handleAddMember = () => {
    if (newMember) {
      addMember(newMember);
      setNewMember('');
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGroupImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ 
        width: 400, 
        bgcolor: 'background.paper', 
        margin: 'auto', 
        padding: 4, 
        marginTop: '10%', 
        position: 'relative', 
        borderRadius: 2,
        boxShadow: 24
      }}>
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" mb={2}>
          Edit Group
        </Typography>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar src={groupImage ? groupImage.toString() : undefined} sx={{ width: 86, height: 86 }}>
          <IconButton component="label">
            <Avatar className=''></Avatar>
            <input type="file" hidden onChange={handleImageChange} />
            
          </IconButton>
          </Avatar>
        </Box>
        <TextField
          fullWidth
          label="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          margin="normal"
        />
        <Typography variant="body1" component="p" mb={2}>
          Members
        </Typography>
        {members.map((member, index) => (
          <Box key={index} display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography>{member}</Typography>
            <Button color="error" onClick={() => removeMember(member)}>
              Remove
            </Button>
          </Box>
        ))}
          <div className='items-center justify-center'>
            <div className='w-auto p-2 rounded mb-2'>
            <SearchInpute/>
            </div>
            <div className='bg-indigo-500 py-3 text-center rounded-xl text-white font-bold' onClick={handleAddMember}>
              Add
            </div>
        </div>
      </Box>
    </Modal>
  );
};

export default EditGroupModal;
