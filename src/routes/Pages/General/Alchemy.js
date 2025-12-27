import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
  Paper,
  useTheme,
} from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { alchemyRecipes, ingredients } from 'data/Alchemy';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Alchemy', isActive: true },
];

// Alchemy recipe data organized by circles

const Alchemy = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const emptyCell = isDark ? 'rgba(255, 255, 255, 0.05)' : 'grey.300';
  const filledCell = isDark ? '#5c5c1a' : '#FFF176';

  const renderRecipeSection = (title, recipes, bgColor) => (
    <React.Fragment>
      <TableRow>
        <TableCell
          colSpan={13}
          sx={{
            backgroundColor: bgColor,
            py: 1,
          }}>
          <Typography variant="subtitle1" fontWeight="bold" color="#000">
            {title}
          </Typography>
        </TableCell>
      </TableRow>
      {recipes.map((recipe, index) => (
        <TableRow key={index} hover>
          <TableCell sx={{ fontWeight: 'medium' }}>
            <Typography variant="body2" fontWeight="medium">
              {recipe.potion}
            </Typography>
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.water ? filledCell : emptyCell }}>
            {recipe.water || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.oil ? filledCell : emptyCell }}>
            {recipe.oil || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.vinegar ? filledCell : emptyCell }}>
            {recipe.vinegar || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.blood ? filledCell : emptyCell }}>
            {recipe.blood || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.clay ? filledCell : emptyCell }}>
            {recipe.clay || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.bark ? filledCell : emptyCell }}>
            {recipe.bark || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.root ? filledCell : emptyCell }}>
            {recipe.root || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.limestone ? filledCell : emptyCell }}>
            {recipe.limestone || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.bone ? filledCell : emptyCell }}>
            {recipe.bone || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.mushroom ? filledCell : emptyCell }}>
            {recipe.mushroom || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.iron ? filledCell : emptyCell }}>
            {recipe.iron || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.acorn ? filledCell : emptyCell }}>
            {recipe.acorn || ''}
          </TableCell>
        </TableRow>
      ))}
    </React.Fragment>
  );

  return (
    <PageContainer breadcrumbs={breadcrumbs} heading="Alchemy">
      <GridContainer>
        <Grid item xs={12}>
          <CmtCard>
            <CmtCardHeader title="Alchemy Recipes" />
            <CmtCardContent>
              <TableContainer component={Paper} sx={{ maxHeight: '80vh' }}>
                <Table size="small" stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ minWidth: 120 }}>
                        <Typography variant="subtitle2" fontWeight="bold">
                          Potion
                        </Typography>
                      </TableCell>
                      {ingredients.map((ingredient) => (
                        <TableCell key={ingredient} align="center" sx={{ minWidth: 70 }}>
                          <Typography variant="subtitle2" fontWeight="bold">
                            {ingredient}
                          </Typography>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {renderRecipeSection('Circle of Healing', alchemyRecipes.healing, '#90EE90')}
                    {renderRecipeSection('Circle of Support', alchemyRecipes.support, '#87CEEB')}
                    {renderRecipeSection('Circle of Damage', alchemyRecipes.damage, '#FFB6C6')}
                  </TableBody>
                </Table>
              </TableContainer>
            </CmtCardContent>
          </CmtCard>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Alchemy;
