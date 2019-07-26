import React, { Component } from 'react';
import Navbar from 'components/Navbars/AdminNavbar.jsx';
import Sidebar from 'components/Sidebar/Sidebar.jsx';
import Footer from 'components/Footers/AdminFooter.jsx';
import Header from 'components/Headers/Header.jsx';
import Home from 'components/AdminHome.jsx';
import { Container } from 'reactstrap';

/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from 'AuthHelperMethods.js';
//Our higher order component
import withAuth from 'withAuth.js';

class Dashboard extends Component {
  render() {
    return (
      <>
        <Sidebar
          logo={{
            innerLink: '/admin/home',
            imgSrc: require('assets/img/brand/argon-react.png'),
            imgAlt: '...',
          }}
        />
        <div className="main-content" ref="mainContent">
          <Navbar />
          <Header />
          <Home />
          <Container fluid>
            <Footer />
          </Container>
        </div>
      </>
    );
  }
}
export default withAuth(Dashboard);