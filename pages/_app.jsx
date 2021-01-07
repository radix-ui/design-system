import React from 'react';
import Head from 'next/head';
import '../styles.css';
import { darkThemeClass } from '../stitches.config';
import { Button } from '../components/Button';

function App({ Component, pageProps }) {
  const [theme, setTheme] = React.useState('theme-default');

  React.useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <Head>
        <title>Design System</title>
        <link
          rel="stylesheet"
          href="https://develop.modulz.app/fonts/fonts.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />

      <Button
        variant="ghost"
        style={{ position: 'fixed', zIndex: 999, left: 15, top: 15 }}
        onClick={() =>
          setTheme(theme === 'theme-default' ? darkThemeClass : 'theme-default')
        }
      >
        Toggle theme
      </Button>
    </div>
  );
}

export default App;
