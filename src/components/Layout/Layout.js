import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Container from '../Container';
import Navbar from '../Navbar';
import './layout.css';

library.add(fab, faExternalLinkAlt);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query staticTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            { name: 'keywords', content: 'sample something' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Container>
          <Navbar />
        </Container>
        <div>{children}</div>
      </>
    )}
  />
);

export default Layout;
