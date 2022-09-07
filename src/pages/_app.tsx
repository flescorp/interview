import React, {ReactElement, ReactNode} from 'react';
import {NextPage} from 'next';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ThemeProvider} from 'styled-components';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import theme from '@/styles/theme';
import {GlobalStyle} from '@/styles/global';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <DndProvider backend={HTML5Backend}>
          <main role="main" style={{minWidth: '1260px'}}>
            <Component {...pageProps} />
          </main>
        </DndProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
