import React from 'react';
import GridContainer from '@jumbo/components/GridContainer';
import PageContainer from '@jumbo/components/PageComponents/layouts/PageContainer';
import Grid from '@mui/material/Grid';
import CmtCard from '@coremat/CmtCard';
import CmtCardContent from '@coremat/CmtCard/CmtCardContent';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, TableContainer, Paper } from '@mui/material';
import CmtCardHeader from '@coremat/CmtCard/CmtCardHeader';
import { alchemyRecipes, ingredients } from 'data/Alchemy';

const breadcrumbs = [
  { label: 'Main', link: '/' },
  { label: 'Alchemy', isActive: true },
];

// Alchemy recipe data organized by circles

const Alchemy = () => {
  const renderRecipeSection = (title, recipes, bgColor) => (
    <React.Fragment>
      <TableRow>
        <TableCell
          colSpan={13}
          sx={{
            backgroundColor: bgColor,
            py: 1,
          }}>
          <Typography variant="subtitle1" fontWeight="bold">
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
          <TableCell align="center" sx={{ backgroundColor: recipe.water ? '#FFF176' : 'grey.300' }}>
            {recipe.water || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.oil ? '#FFF176' : 'grey.300' }}>
            {recipe.oil || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.vinegar ? '#FFF176' : 'grey.300' }}>
            {recipe.vinegar || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.blood ? '#FFF176' : 'grey.300' }}>
            {recipe.blood || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.clay ? '#FFF176' : 'grey.300' }}>
            {recipe.clay || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.bark ? '#FFF176' : 'grey.300' }}>
            {recipe.bark || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.root ? '#FFF176' : 'grey.300' }}>
            {recipe.root || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.limestone ? '#FFF176' : 'grey.300' }}>
            {recipe.limestone || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.bone ? '#FFF176' : 'grey.300' }}>
            {recipe.bone || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.mushroom ? '#FFF176' : 'grey.300' }}>
            {recipe.mushroom || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.iron ? '#FFF176' : 'grey.300' }}>
            {recipe.iron || ''}
          </TableCell>
          <TableCell align="center" sx={{ backgroundColor: recipe.acorn ? '#FFF176' : 'grey.300' }}>
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
