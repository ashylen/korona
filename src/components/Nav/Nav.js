import React from 'react';

import styled from 'styled-components';

// Modules
// import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledWrapper = styled.nav`
  background-color: #111;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(props => <Link {...props} />)`
  display: flex;
  padding: 20px 10px;
  text-decoration: none;
  color: #fff;
`;

const StyledLogo = styled.div`
  display: flex;
`;

const StyledPages = styled.div`
  display: flex;
  text-decoration: none;
  color: #fff;
`;

const Nav = ({ isHomePage }) => {
  return (
    <StyledWrapper>
      <StyledLogo>
        <StyledLink to="/">Korona</StyledLink>
      </StyledLogo>
      <StyledPages>
        <StyledLink to="/kontakt/">Kontakt</StyledLink>
        <StyledLink to="/oferta/">Oferta</StyledLink>
        <StyledLink to="/cennik/">Cennik</StyledLink>
      </StyledPages>
      {/*
      <nav className={styles.nav}>
        <button
          className={styles.burgerButton}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className={cx(styles.ham, styles.hamRotate, styles.ham4, {
              [styles.active]: isMenuOpen,
            })}
            viewBox="0 0 100 100"
            width="60"
          >
            <path
              className={cx(styles.line, styles.top, {
                [styles.active]: isMenuOpen,
              })}
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path className={cx(styles.line, styles.middle)} d="m 70,50 h -40" />
            <path
              className={cx(styles.line, styles.bottom, {
                [styles.active]: isMenuOpen,
              })}
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className={styles.overlay}>
            <div className={styles.item}>
              <Link to={routes.home}>Strona główna</Link>
            </div>
            <div className={styles.item}>
              <Link to={routes.articles}>Artykuły</Link>
            </div>
            <div className={styles.item}>
              <Link to={routes.trips}>Wyjazdy</Link>
            </div>
            <div className={styles.item}>
              <Link to={routes.dictionary}>Słownik</Link>
            </div>
          </div>
        )}
      </nav> */}
    </StyledWrapper>
  );
};

Nav.propTypes = {
  siteTitle: PropTypes.string,
  isHomePage: PropTypes.bool,
};

Nav.defaultProps = {
  isHomePage: false,
  siteTitle: ``,
};

export default Nav;
