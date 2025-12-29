import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { Box, IconButton, Paper, Typography, Divider, Chip, Stack, CircularProgress, Button, Grid } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import MapViewerCanvas from 'components/Mapper/MapViewerCanvas';
import { getMapData, hasMapData } from 'data/Maps';

/**
 * MapViewerPage - Page view for both interactive and static maps
 *
 * Routes:
 * - /map/:mapName - Interactive map from registry
 * - /map/static?url=...&name=... - Static image map
 */
const MapViewerPage = () => {
  const { mapName } = useParams();
  const history = useHistory();
  const location = useLocation();
  const canvasRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [mapData, setMapData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Parse query params for static images
  const queryParams = new URLSearchParams(location.search);
  const staticUrl = queryParams.get('url');
  const staticName = queryParams.get('name');

  // Determine if this is a static image or interactive map
  const isStatic = mapName === 'static' && staticUrl;
  const isInteractive = mapName && mapName !== 'static' && hasMapData(mapName);

  const displayName = isStatic
    ? staticName || 'Map'
    : mapName?.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) || 'Map';

  const breadcrumbs = [
    { label: 'Main', link: '/' },
    { label: 'Maps', link: '/areas/maps' },
    { label: displayName, isActive: true },
  ];

  // Load map data on mount (for interactive maps)
  useEffect(() => {
    if (isStatic) {
      setLoading(false);
      return;
    }

    const loadMap = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMapData(mapName);
        // Support both wrapped and raw formats
        const diagramData = data?.diagram || data;
        if (diagramData && diagramData.nodeDataArray) {
          setMapData(diagramData);
        } else {
          setError('Map data not found or invalid');
        }
      } catch (err) {
        console.error('Failed to load map:', err);
        setError('Failed to load map');
      } finally {
        setLoading(false);
      }
    };

    if (mapName && isInteractive) {
      loadMap();
    } else if (!isStatic) {
      setLoading(false);
      setError('Map not found');
    }
  }, [mapName, isStatic, isInteractive]);

  const handleRoomClick = (roomData) => {
    if (selectedRoom && selectedRoom.key === roomData.key) {
      setSelectedRoom(null);
    } else {
      setSelectedRoom(roomData);
    }
  };

  const handleCloseDetail = () => {
    setSelectedRoom(null);
  };

  const handleBack = () => {
    history.goBack();
  };

  const roomInfo = selectedRoom?.roomInfo || {};

  if (loading) {
    return (
      <PageContainer breadcrumbs={breadcrumbs} heading={displayName}>
        <GridContainer>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
              }}>
              <CircularProgress size={60} />
            </Box>
          </Grid>
        </GridContainer>
      </PageContainer>
    );
  }

  if (error || (!isStatic && !mapData)) {
    return (
      <PageContainer breadcrumbs={breadcrumbs} heading={displayName}>
        <GridContainer>
          <Grid item xs={12}>
            <CmtCard>
              <CmtCardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 8,
                    gap: 2,
                  }}>
                  <Typography variant="h5" color="error">
                    {error || 'Map not found'}
                  </Typography>
                  <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={handleBack}>
                    Go Back
                  </Button>
                </Box>
              </CmtCardContent>
            </CmtCard>
          </Grid>
        </GridContainer>
      </PageContainer>
    );
  }

  // Render static image viewer
  if (isStatic) {
    return (
      <PageContainer breadcrumbs={breadcrumbs} heading={displayName}>
        <GridContainer>
          <Grid item xs={12}>
            <CmtCard>
              <CmtCardContent>
                <StaticImageViewer url={staticUrl} />
              </CmtCardContent>
            </CmtCard>
          </Grid>
        </GridContainer>
      </PageContainer>
    );
  }

  // Render interactive map viewer
  return (
    <PageContainer breadcrumbs={breadcrumbs} heading={displayName}>
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardContent>
              {/* Toolbar */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  mb: 1,
                  gap: 0.5,
                }}>
                <IconButton onClick={() => canvasRef.current?.zoomIn()} aria-label="zoom in" size="small">
                  <ZoomInIcon />
                </IconButton>
                <IconButton onClick={() => canvasRef.current?.zoomOut()} aria-label="zoom out" size="small">
                  <ZoomOutIcon />
                </IconButton>
                <IconButton onClick={() => canvasRef.current?.zoomToFit()} aria-label="fit to screen" size="small">
                  <FitScreenIcon />
                </IconButton>
              </Box>

              {/* Map Canvas */}
              <Box
                sx={{ position: 'relative', height: '70vh', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                <MapViewerCanvas ref={canvasRef} data={mapData} onRoomClick={handleRoomClick} height="100%" />

                {/* Room Detail Panel */}
                {selectedRoom && (
                  <Paper
                    elevation={3}
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: 16,
                      width: 320,
                      maxHeight: '50%',
                      overflow: 'auto',
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                    }}>
                    <Box sx={{ p: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                          {roomInfo.name || selectedRoom.text || 'Room'}
                        </Typography>
                        <IconButton size="small" onClick={handleCloseDetail} aria-label="close">
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      {roomInfo.description && (
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {roomInfo.description}
                        </Typography>
                      )}

                      {(roomInfo.exits || roomInfo.npcs || roomInfo.notes) && <Divider sx={{ my: 1.5 }} />}

                      <Stack spacing={1.5}>
                        {roomInfo.exits && roomInfo.exits.length > 0 && (
                          <Box>
                            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                              Exits
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mt: 0.5 }}>
                              {roomInfo.exits.map((exit, idx) => (
                                <Chip key={idx} label={exit} size="small" variant="outlined" />
                              ))}
                            </Box>
                          </Box>
                        )}

                        {roomInfo.npcs && roomInfo.npcs.length > 0 && (
                          <Box>
                            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                              NPCs
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mt: 0.5 }}>
                              {roomInfo.npcs.map((npc, idx) => (
                                <Chip key={idx} label={npc} size="small" color="primary" variant="outlined" />
                              ))}
                            </Box>
                          </Box>
                        )}

                        {roomInfo.notes && (
                          <Box>
                            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                              Notes
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 0.5 }}>
                              {roomInfo.notes}
                            </Typography>
                          </Box>
                        )}
                      </Stack>
                    </Box>
                  </Paper>
                )}
              </Box>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

/**
 * StaticImageViewer - Image viewer with zoom/pan for static maps
 */
function StaticImageViewer({ url }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  // Calculate dimensions to fit image in container
  const calculateFit = () => {
    if (!containerRef.current || !imageRef.current) return;

    const container = containerRef.current;
    const image = imageRef.current;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;

    if (!containerWidth || !containerHeight || !imageWidth || !imageHeight) return;

    // Calculate size to fit image in container
    const scaleX = containerWidth / imageWidth;
    const scaleY = containerHeight / imageHeight;
    const fitScale = Math.min(scaleX, scaleY);

    // Set the fitted dimensions
    setImageDimensions({
      width: imageWidth * fitScale,
      height: imageHeight * fitScale,
    });
    setImageLoaded(true);
  };

  // Recalculate on container resize
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      if (imageRef.current?.complete && imageRef.current?.naturalWidth) {
        calculateFit();
      }
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  // Reset when URL changes
  useEffect(() => {
    setImageLoaded(false);
    setImageDimensions({ width: 0, height: 0 });
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [url]);

  const handleImageLoad = () => {
    // Use requestAnimationFrame to ensure container is laid out
    requestAnimationFrame(() => {
      calculateFit();
    });
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 4));
  const zoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.25, 0.5);
      if (newScale <= 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newScale;
    });
  };
  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
      e.preventDefault();
    }
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
      zoomIn();
    } else {
      zoomOut();
    }
  };

  return (
    <Box>
      {/* Toolbar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          mb: 1,
          gap: 0.5,
        }}>
        <IconButton onClick={zoomIn} aria-label="zoom in" size="small">
          <ZoomInIcon />
        </IconButton>
        <IconButton onClick={zoomOut} aria-label="zoom out" size="small">
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={resetZoom} aria-label="reset zoom" size="small">
          <FitScreenIcon />
        </IconButton>
      </Box>

      {/* Image container */}
      <Box
        ref={containerRef}
        sx={{
          height: '70vh',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#f5f5f5',
          cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}>
        <img
          ref={imageRef}
          src={url}
          alt="Map"
          draggable={false}
          onLoad={handleImageLoad}
          style={{
            width: imageDimensions.width || 'auto',
            height: imageDimensions.height || 'auto',
            maxWidth: imageLoaded ? 'none' : '100%',
            maxHeight: imageLoaded ? 'none' : '100%',
            opacity: imageLoaded ? 1 : 0,
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transition: isDragging ? 'none' : 'transform 0.2s ease, opacity 0.2s ease',
            transformOrigin: 'center center',
          }}
        />
      </Box>
    </Box>
  );
}

export default MapViewerPage;
