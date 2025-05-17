import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useApiConfig from '@app/stores/apiConfig';

export default function LoginPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { apiBaseUrl } = useApiConfig.getState();

  const handleLogin = () => {
    const loginUrl = `${apiBaseUrl}/api/login?returnTo=${window.location.origin}`;
    window.location.href = loginUrl;
  };

  const handleLogout = () => {
    const logoutUrl = `${apiBaseUrl}/api/logout?returnTo=${window.location.origin}/login`;
    window.location.href = logoutUrl;
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            {params.get('type') === 'report' ? 'View Report' : 'Authentication Required'}
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Click below to log in using your account.
          </Typography>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Log In
          </Button>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}
