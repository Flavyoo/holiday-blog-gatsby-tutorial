import { Container, Typography } from '@material-ui/core';
import { Link, graphql } from 'gatsby';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blogTitle: {
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);

export default function BlogPost({ data }) {
  const classes = useStyles();
  const post = data.markdownRemark;

  return (
    <Container maxWidth="sm">
      <Link to="/">Home</Link>
      <Typography variant="h3" component="h1" className={classes.blogTitle}>
        {post.frontmatter.title}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
