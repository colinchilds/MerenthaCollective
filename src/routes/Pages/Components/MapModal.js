import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CmtImage from '@coremat/CmtImage';

const buttonStyle = {
  minWidth: 20,
  textTransform: 'none',
};

const mapStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxHeight: '95%',
  maxWidth: '95%',
  width: 'auto',
  height: 'auto',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  outline: 'none',
  overflow: 'visible',
};

const closeButtonStyle = {
  position: 'absolute',
  top: -20,
  right: -20,
  bgcolor: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  zIndex: 1000,
  '&:hover': {
    bgcolor: 'rgba(0, 0, 0, 0.9)',
  },
};

const zoomButtonStyle = {
  position: 'absolute',
  top: 10,
  bgcolor: 'rgba(0, 0, 0, 0.6)',
  color: 'white',
  zIndex: 1000,
  '&:hover': {
    bgcolor: 'rgba(0, 0, 0, 0.8)',
  },
  marginRight: 1,
};

const imageContainerStyle = {
  width: '100%',
  minHeight: '400px',
  maxHeight: '80vh',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'grab',
};

export default function MapModal(props) {
  const { name, url } = props;

  const [open, setOpen] = React.useState(false);
  const [scale, setScale] = React.useState(1);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.5, 0.5));
    if (scale <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      // Scroll up - zoom in
      setScale((prev) => Math.min(prev + 0.2, 3));
    } else {
      // Scroll down - zoom out
      setScale((prev) => {
        const newScale = Math.max(prev - 0.2, 0.5);
        if (newScale <= 1) {
          setPosition({ x: 0, y: 0 });
        }
        return newScale;
      });
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={buttonStyle}>
        {name}
      </Button>
      <Modal open={open} onClose={handleClose} aria-describedby="modal-modal-image">
        <Box sx={mapStyle}>
          <IconButton onClick={handleClose} sx={closeButtonStyle} aria-label="close">
            <CloseIcon />
          </IconButton>
          <IconButton onClick={zoomIn} sx={{ ...zoomButtonStyle, left: 10 }} aria-label="zoom in">
            <ZoomInIcon />
          </IconButton>
          <IconButton onClick={zoomOut} sx={{ ...zoomButtonStyle, left: 60 }} aria-label="zoom out">
            <ZoomOutIcon />
          </IconButton>
          <Box
            sx={{
              ...imageContainerStyle,
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onWheel={handleWheel}>
            <CmtImage
              id="modal-modal-image"
              src={url}
              draggable={false}
              style={{
                width: '100%',
                height: 'auto',
                minHeight: '400px',
                objectFit: 'contain',
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transition: isDragging ? 'none' : 'transform 0.2s ease',
                transformOrigin: 'center center',
              }}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
