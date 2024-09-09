import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material';

const BlogListPage = () => {
  const blogPosts = [
    {
      date: 'September 5, 2024',
      title: 'Is the Duolingo English Test accepted in Brazil?',
      author: 'Sophie Wodzak'
    },
    {
      date: 'August 29, 2024',
      title: 'Introducing new and updated DET Subscores',
      author: 'Sophie Wodzak'
    },
    {
      date: 'August 26, 2024',
      title: 'How well does the Duolingo English Test predict academic success?',
      author: 'Masha Kostromitina, Ph.D.'
    }
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 ,color:'black'}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blog Articles
        </Typography>
        <List sx={{ width: '100%' }}>
          {blogPosts.map((post, index) => (
            <React.Fragment key={index}>
              <ListItem sx={{ py: 2, px: 0, alignItems: 'flex-start' }}>
                <ListItemText
                  primary={<Typography variant="h6" sx={{ fontWeight: 'bold' }}>{post.title}</Typography>}
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">{post.date}</Typography>
                      <Typography variant="body2" color="text.secondary">{post.author}</Typography>
                    </>
                  }
                />
              </ListItem>
              {index < blogPosts.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default BlogListPage;
