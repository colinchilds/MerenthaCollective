import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const UpdatedBy = (children) => {
  return (
    <Grid item>
      <Typography>Updated by {children.name}</Typography>
    </Grid>
  );
};

export default UpdatedBy;
