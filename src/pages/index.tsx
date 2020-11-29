import { Container, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import React from 'react';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      marginTop: 50,
    },
    blogTitle: {
      fontWeight: theme.typography.fontWeightBold
    },
  })
);

export default function HomePage({ data }) {
  const classes = useStyles();
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description

  return (
    <div className={classes.root}>
      <SEO title={data.site.siteMetadata.title} description={description}/>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h2" component="h1" className={classes.blogTitle}>
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </Container>
    </div>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "DD MMMM, YYYY")
            title
          }
          excerpt
        }
      }
    }
  }
`;
