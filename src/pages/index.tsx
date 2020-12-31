import { Container, Typography } from '@material-ui/core';
import { Link, graphql } from 'gatsby';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import Img from 'gatsby-image';
import React from 'react';
import SEO from '../components/SEO';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      marginTop: 50,
    },
    blogTitle: {
      fontWeight: theme.typography.fontWeightBold,
    },
    postList: {
      marginTop: 50,
    },
    post: {
      marginBottom: 50,
    },
    postTitle: {
      fontWeight: theme.typography.fontWeightBold,
    },
    excerpt: {
      marginTop: 20,
    },
  })
);

export default function HomePage({ data }) {
  const classes = useStyles();
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;

  return (
    <div className={classes.root}>
      <SEO title={data.site.siteMetadata.title} description={description} />
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h2" component="h1" className={classes.blogTitle}>
          {title}
        </Typography>
        <Typography>{description}</Typography>
        <div className={classes.postList}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className={classes.post}>
              <Typography
                variant="h5"
                className={classes.postTitle}
                component={Link}
                to={node.fields.slug}
              >
                {node.frontmatter.title}
              </Typography>
              <Img
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              />
              <Typography variant="subtitle2">
                {`${node.frontmatter.date} - ⏰ ${node.timeToRead} min read`}
              </Typography>
              <Typography className={classes.excerpt}>
                {node.excerpt}
              </Typography>
            </div>
          ))}
        </div>
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
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;
