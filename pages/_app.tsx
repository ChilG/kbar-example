import * as React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from 'kbar';
import {
  Backdrop,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import {alpha} from '@mui/system';
import {grey} from '@mui/material/colors';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>kbar-example</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <KBarProvider>
          <KBarPortal>
            <Backdrop
              open
              sx={{
                'div > div': {
                  maxWidth: 500,
                  width: '100%',
                },
              }}
            >
              <KBarPositioner>
                <KBarAnimator>
                  <Box
                    sx={{
                      borderWidth: 1,
                      borderStyle: 'solid',
                      borderColor: alpha(grey[500], 0.2),
                      borderRadius: 1,
                      background: theme.palette.background.paper,
                      input: {
                        width: '100%',
                        outline: 'none',
                        border: 'none',
                        background: 'transparent',
                        padding: theme.spacing(2),
                      },
                      '#kbar-listbox div': {},
                    }}
                  >
                    <KBarSearch id="input-kbar" />
                    <RenderResults />
                  </Box>
                </KBarAnimator>
              </KBarPositioner>
            </Backdrop>
          </KBarPortal>
          <Component {...pageProps} />
        </KBarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

function RenderResults() {
  const {results} = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({item, active}) =>
        typeof item === 'string' ? (
          <Box sx={{px: 1, mb: 0.5}}>
            <Typography variant="caption" color="textSecondary">
              {item}
            </Typography>
          </Box>
        ) : (
          <MenuItem sx={{borderRadius: 1}}>
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText>{item.name}</ListItemText>
          </MenuItem>
        )
      }
    />
  );
}
