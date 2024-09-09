


// import React, { useState } from 'react';
// import { Container, Typography, Box, List, ListItem, ListItemText, Divider, Pagination } from '@mui/material';

// const BlogListPage = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 2; // 每页显示的博客数量

//   const blogPosts = [
//     {
//       date: 'September 5, 2024',
//       title: 'Mastering the New Interactive Writing Question Type in Duolingo English Test 2024',
//       author: 'Sophie Wodzak'
//     },
//     {
//       date: 'August 29, 2024',
//       title: 'Introducing new and updated DET Subscores',
//       author: 'Sophie Wodzak'
//     },
//     {
//       date: 'August 26, 2024',
//       title: 'How well does the Duolingo English Test predict academic success?',
//       author: 'Masha Kostromitina, Ph.D.'
//     },
//     // 假设有更多的博客文章
//   ];

//   const pageCount = Math.ceil(blogPosts.length / postsPerPage);

//   const handleChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   // 计算当前页面上显示的博客文章
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ mt: 4, mb: 4,color:'black' }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Blog Articles
//         </Typography>
//         <List sx={{ width: '100%' }}>
//           {currentPosts.map((post, index) => (
//             <React.Fragment key={index}>
//               <ListItem sx={{ py: 2, px: 0, alignItems: 'flex-start' }}>
//                 <ListItemText
//                   primary={<Typography variant="h6" sx={{ fontWeight: 'bold' }}>{post.title}</Typography>}
//                   secondary={
//                     <>
//                       <Typography variant="body2" color="text.secondary">{post.date}</Typography>
//                       <Typography variant="body2" color="text.secondary">{post.author}</Typography>
//                     </>
//                   }
//                 />
//               </ListItem>
//               {index < currentPosts.length - 1 && <Divider />}
//             </React.Fragment>
//           ))}
//         </List>
//         <Pagination
//           count={pageCount}
//           page={currentPage}
//           onChange={handleChange}
//           sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}
//           color="primary"
//         />
//       </Box>
//     </Container>
//   );
// };

// export default BlogListPage;


import React, { useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Divider, Pagination, Stack } from '@mui/material';

const BlogListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    const blogPosts = [
        {
            date: 'September 5, 2024',
            title: 'Is the Duolingo English Test accepted in Brazil?',
            intro: 'Explore the acceptance of DET in Brazil and its implications for students and professionals.',
            author: 'Sophie Wodzak'
        },
        {
            date: 'August 29, 2024',
            title: 'Introducing new and updated DET Subscores',
            intro: 'Get the latest insights on the new DET scoring system and how it can affect your preparation.',
            author: 'Sophie Wodzak'
        },
        {
            date: 'August 26, 2024',
            title: 'How well does the Duolingo English Test predict academic success?',
            intro: 'A detailed analysis on the effectiveness of DET in predicting academic success in higher education.',
            author: 'Masha Kostromitina, Ph.D.'
        },
    ];

    const pageCount = Math.ceil(blogPosts.length / postsPerPage);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, mb: 4, color: 'black' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Blog Articles
                </Typography>
                <List sx={{ width: '100%' }}>
                    {currentPosts.map((post, index) => (
                        <React.Fragment key={index}>
                            <ListItem sx={{ py: 2, px: 0, alignItems: 'flex-start' }}>
                                <ListItemText
                                    primary={<Typography variant="h6" sx={{ fontWeight: 'bold' }}>{post.title}</Typography>}
                                    secondary={
                                        <>
                                            <Typography variant="body2" sx={{ display: 'block', mb: 1 }}>{post.intro}</Typography>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Typography variant="body2" color="text.secondary">{post.date}</Typography>
                                                <Typography variant="body2" color="text.secondary">{post.author}</Typography>
                                            </Stack>

                                        </>
                                    }
                                />
                            </ListItem>
                            {index < currentPosts.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
                <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={handleChange}
                    sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}
                    color="primary"
                />
            </Box>
        </Container>
    );
};

export default BlogListPage;
