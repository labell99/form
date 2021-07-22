import React from 'react';
import styled from 'styled-components';

import { AppBar, Toolbar, Typography, useTheme } from '@material-ui/core';
import { GitHub, AccountCircle } from '@material-ui/icons';
import { IconButton, Link } from 'gatsby-theme-material-ui';
import { ImageSrc } from '../../images/logo1.png';

const AppBarStyled = styled(AppBar)`
  background: #0073BF;
`;

const Header = ({ siteTitle }) => {
  const theme = useTheme();

  return (
    <header>
      <AppBarStyled position="static" theme={theme} elevation={0}>
        <Toolbar variant="dense">
          <img
            src="https://unsplash.it/40/40"
            style={{ alignSelf: 'left' }
          />
          <Typography
            variant="h6"
            color="inherit"
            component={Link}
            to="/"
            style={{ flexGrow: 1, color: 'white', textDecoration: 'none' }}
          >
            {siteTitle}
          </Typography>
          <IconButton
            href=""
            edge="start"
            color="inherit"
            aria-label="menu"
            rel="noopener noreferrer"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBarStyled>
    </header>
  );
};

export default Header;
