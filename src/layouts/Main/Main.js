import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const navigation = [
    {
      title: 'About',
      id: 'about',
      href: '#',
      children: []
    },
    {
      title: 'FAQ',
      id: 'faq',
      href: '#',
      children: []
    }, {
      title: 'Roadmap',
      id: 'roadmap',
      href: '#',
      children: []
    }, {
      title: 'Store',
      id: 'store',
      href: '#',
      children: []
    }
  ]

  const pages = {
    landings: {
      title: 'About',
      id: 'landing-pages',
      children: {
        services: {
          groupTitle: 'Services',
          pages: [
            {
              title: 'Coworking',
              href: '/coworking',
            }
          ],
        }
      },
    },
    pages: {
      title: 'FAQ',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: 'Career',
          pages: [
            {
              title: 'Lising',
              href: '/career-listing',
            }
          ],
        }
      },
    },
    account: {
      title: 'RoadMap',
      id: 'account',
      children: {
        settings: {
          groupTitle: 'Settings',
          pages: [
            {
              title: 'General',
              href: '/account/?pid=general',
            }
          ],
        }
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} 
      navigation={navigation}
      pages={pages} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        navigation={navigation}
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      {/* <Footer pages={pages} /> */}
    </div>
  );
};

export default Main;
