import { useState } from 'react';
// material
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------
import {
  AppTasks,
} from '../sections/@dashboard/app';

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="Dashboard: Create App">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Create App
        </Typography>
        <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>
          </Grid>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
<p> s</p>
  
          </Stack>
        </Stack>

      </Container>
    </Page>
  );
}
