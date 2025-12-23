import React, { useState, useCallback } from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import { Box, Link, Typography } from '@mui/material';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import MapperCanvas from 'components/Mapper/MapperCanvas';
import MapperToolbar from 'components/Mapper/MapperToolbar';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Mapper', isActive: true },
];

const Mapper = () => {
  const [diagramRef, setDiagramRef] = useState(null);
  const [selectionType, setSelectionType] = useState('none'); // 'none', 'gridSquare', 'room', 'connection'
  const [selectedGridSquare, setSelectedGridSquare] = useState(null); // { x, y }
  const [selectedObject, setSelectedObject] = useState(null); // selected room or connection
  const [defaultFillColor, setDefaultFillColor] = useState('#f0f0f0');
  const [defaultBorderColor, setDefaultBorderColor] = useState('#000000');

  // New state for tool modes and undo/redo
  const [toolMode, setToolMode] = useState('addRoom'); // 'select' | 'pan' | 'addRoom'
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [textDialogOpen, setTextDialogOpen] = useState(false);

  // Callback for canvas to update undo/redo state
  const handleUndoRedoChange = useCallback(({ canUndo: newCanUndo, canRedo: newCanRedo }) => {
    setCanUndo(newCanUndo);
    setCanRedo(newCanRedo);
  }, []);

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Mapper (Beta)">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardContent>
              <MapperToolbar
                diagramRef={diagramRef}
                toolMode={toolMode}
                setToolMode={setToolMode}
                selectionType={selectionType}
                selectedObject={selectedObject}
                canUndo={canUndo}
                canRedo={canRedo}
                defaultFillColor={defaultFillColor}
                setDefaultFillColor={setDefaultFillColor}
                defaultBorderColor={defaultBorderColor}
                setDefaultBorderColor={setDefaultBorderColor}
                textDialogOpen={textDialogOpen}
                setTextDialogOpen={setTextDialogOpen}
              />
              <MapperCanvas
                onDiagramInit={setDiagramRef}
                toolMode={toolMode}
                setToolMode={setToolMode}
                selectionType={selectionType}
                setSelectionType={setSelectionType}
                selectedGridSquare={selectedGridSquare}
                setSelectedGridSquare={setSelectedGridSquare}
                selectedObject={selectedObject}
                setSelectedObject={setSelectedObject}
                defaultFillColor={defaultFillColor}
                defaultBorderColor={defaultBorderColor}
                onUndoRedoChange={handleUndoRedoChange}
                onOpenTextDialog={() => setTextDialogOpen(true)}
              />
              <Box sx={{ mt: 1, textAlign: 'right' }}>
                <Typography variant="caption" color="text.secondary">
                  Made with{' '}
                  <Link href="https://gojs.net/" target="_blank" rel="noopener noreferrer">
                    GoJS
                  </Link>
                </Typography>
              </Box>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Mapper;
