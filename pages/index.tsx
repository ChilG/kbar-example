import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import {alpha} from '@mui/system';
import {grey} from '@mui/material/colors';
import {createAction, Priority, useKBar, useRegisterActions} from 'kbar';
import {MdDarkMode, MdLogin} from 'react-icons/md';

interface IndexProps {}

const Index: React.FC<IndexProps> = (props) => {
  const {query} = useKBar();

  const signupAction = createAction({
    name: 'Sign Up',
    perform: () => {},
    section: 'Recents',
    priority: Priority.LOW,
  });

  const loginAction = createAction({
    name: 'Login',
    perform: () => {},
    priority: Priority.HIGH,
    icon: <MdLogin />,
  });

  const themeAction = createAction({
    name: 'Dark mode',
    perform: () => {},
    icon: <MdDarkMode />,
    section: {
      name: 'Settings',
      priority: Priority.HIGH,
    },
  });

  useRegisterActions([signupAction, loginAction, themeAction]);

  const handleClickSearch = () => query.toggle();

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{width: 300}}>
        <TextField
          id="search-app"
          fullWidth
          placeholder="Search"
          variant="outlined"
          onClick={handleClickSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Box
                  sx={{
                    border: `1px solid ${alpha(grey[500], 0.1)}`,
                    borderRadius: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pr: 0.5,
                    pl: 0.2,
                    background: alpha(grey[500], 0.1),
                  }}
                >
                  <KeyboardCommandKeyIcon fontSize="small" /> K
                </Box>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>
  );
};

export default Index;
