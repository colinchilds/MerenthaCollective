import React, { useState } from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Divider,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  FileCopy as DuplicateIcon,
  ExpandMore as ExpandMoreIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const CharacterSelector = ({
  characters,
  activeCharacter,
  characterList,
  onAddCharacter,
  onDeleteCharacter,
  onRenameCharacter,
  onDuplicateCharacter,
  onSwitchCharacter,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogType, setDialogType] = useState(null);
  const [dialogCharacterId, setDialogCharacterId] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCharacterSelect = (characterId) => {
    onSwitchCharacter(characterId);
    handleClose();
  };

  const openDialog = (type, characterId = null, currentName = '') => {
    setDialogType(type);
    setDialogCharacterId(characterId);
    setInputValue(currentName);
    handleClose();
  };

  const closeDialog = () => {
    setDialogType(null);
    setDialogCharacterId(null);
    setInputValue('');
  };

  const handleDialogConfirm = () => {
    switch (dialogType) {
      case 'add':
        if (inputValue.trim()) {
          onAddCharacter(inputValue.trim());
        }
        break;
      case 'rename':
        if (inputValue.trim() && dialogCharacterId) {
          onRenameCharacter(dialogCharacterId, inputValue.trim());
        }
        break;
      case 'delete':
        if (dialogCharacterId) {
          const success = onDeleteCharacter(dialogCharacterId);
          if (!success) {
            alert('Cannot delete the last character');
            closeDialog();
            return;
          }
        }
        break;
      case 'duplicate':
        if (dialogCharacterId) {
          onDuplicateCharacter(dialogCharacterId);
        }
        break;
      default:
        break;
    }
    closeDialog();
  };

  const getCharacterDisplayName = (character) => {
    const className = character.charClass || 'Unknown';
    const raceName = (character.race && character.race.name) || character.race || 'Unknown';
    return `${character.name} (${className}/${raceName})`;
  };

  const renderDeleteConfirmDialog = () => {
    const character = characters[dialogCharacterId];
    return (
      <Dialog open={dialogType === 'delete'} onClose={closeDialog}>
        <DialogTitle>Delete Character</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete "{character && character.name}"? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={handleDialogConfirm} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const renderInputDialog = () => {
    const titles = {
      add: 'Add New Character',
      rename: 'Rename Character',
      duplicate: 'Duplicate Character',
    };

    const labels = {
      add: 'Character Name',
      rename: 'New Name',
      duplicate: 'New Character Name',
    };

    return (
      <Dialog open={['add', 'rename', 'duplicate'].includes(dialogType)} onClose={closeDialog}>
        <DialogTitle>{titles[dialogType]}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={labels[dialogType]}
            fullWidth
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleDialogConfirm();
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={handleDialogConfirm} variant="contained" disabled={!inputValue.trim()}>
            {dialogType === 'add' ? 'Add' : dialogType === 'rename' ? 'Rename' : 'Duplicate'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        startIcon={<PersonIcon />}
        sx={{
          minWidth: 250,
          justifyContent: 'space-between',
          textAlign: 'left',
          mb: 2,
        }}>
        <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {activeCharacter ? getCharacterDisplayName(activeCharacter) : 'Select Character'}
        </Box>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            minWidth: 300,
            maxHeight: 400,
          },
        }}>
        {characterList.map((character) => (
          <MenuItem
            key={character.id}
            onClick={() => handleCharacterSelect(character.id)}
            selected={character.id === (activeCharacter && activeCharacter.id)}
            sx={{ py: 1 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}>
              <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', flex: 1 }}>
                <Typography variant="body2" noWrap>
                  {character.name}
                </Typography>
                <Typography variant="caption" color="text.secondary" noWrap>
                  Level {character.level} {character.charClass}/{(character.race && character.race.name) || character.race}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', ml: 1 }}>
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    openDialog('rename', character.id, character.name);
                  }}
                  title="Rename character"
                  aria-label="Rename character">
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    openDialog('duplicate', character.id, `${character.name} (Copy)`);
                  }}
                  title="Duplicate character"
                  aria-label="Duplicate character">
                  <DuplicateIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    openDialog('delete', character.id);
                  }}
                  disabled={characterList.length <= 1}
                  title="Delete character"
                  aria-label="Delete character">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </MenuItem>
        ))}

        <Divider />

        <MenuItem onClick={() => openDialog('add', null, 'New Character')}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add New Character" />
        </MenuItem>
      </Menu>

      {renderInputDialog()}
      {renderDeleteConfirmDialog()}
    </Box>
  );
};

export default CharacterSelector;
