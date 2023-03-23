import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import {alpha} from '@mui/system';
import {grey} from '@mui/material/colors';
import {useKBar} from 'kbar';
import KBarProvider from '../src/provider/KBarProvider';

interface IndexProps {}

const Index: React.FC<IndexProps> = (props) => {
  const {query} = useKBar();

  const handleClickSearch = () => query.toggle();

  return (
    <KBarProvider>
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
    </KBarProvider>
  );
};

export default Index;
