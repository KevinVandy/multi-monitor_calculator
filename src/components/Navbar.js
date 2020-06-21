import React from 'react';
import {
  AppBar,
  Toolbar as MuiToolbar,
  IconButton,
  styled,
  Typography,
  useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const theme = useTheme();

  const NavbarSpacer = styled('div')({
    width: '100%',
    height: '100px',
  });

  const Toolbar = styled(MuiToolbar)({
    display: 'grid',
    gridTemplateColumns: '2rem auto auto',
    gridGap: '1rem'
  })

  const Links = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'auto 4rem 4rem',
    alignContent: 'end',
    width: '100%',
    textAlign: 'right',
    gridGap: '2rem'
  });

  const StyledLink = styled(Link)({
    color: 'white',
    fontWeight: '700',
    textDecoration: 'none',
    transitionDuration: '300ms',
    '&:visited': {
      color: 'white',
    },
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  });

  return (
    <>
      <NavbarSpacer />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start">
            <MenuIcon style={{ color: '#fff' }} />
          </IconButton>
          <Typography variant="h4">Multi-Monitor Calculator</Typography>
          <Links>
          <span />
            <Typography variant="h6">
              <StyledLink to="/">Home</StyledLink>
            </Typography>
            <Typography variant="h6">
              <StyledLink to="/about">About</StyledLink>
            </Typography>
          </Links>
        </Toolbar>
      </AppBar>
    </>
  );
};
