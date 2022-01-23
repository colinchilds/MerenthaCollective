import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CmtImage from '@coremat/CmtImage';

const buttonStyle = {
  minWidth: 20,
  textTransform: 'none',
};

const mapStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxHeight: '90%',
  overflow: 'auto',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function MapModal(props) {
  const { name, url } = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={buttonStyle}>
        {name}
      </Button>
      <Modal open={open} onClose={handleClose} aria-describedby="modal-modal-image">
        <Box sx={mapStyle}>
          <CmtImage id="modal-modal-image" src={url} />
        </Box>
      </Modal>
    </div>
  );
}
