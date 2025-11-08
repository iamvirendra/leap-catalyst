import React from "react";
import { Box, Container, Typography, Card, CardContent, CardMedia, Button, Grid } from "@mui/material";

// Mock blog data
const blogs = [ 
    { 
        id: 1, 
        title: "How AI is Transforming Startup Ecosystems", 
        image: "/blog1.jpg", 
        excerpt: "Discover how artificial intelligence is revolutionizing the startup world...", 
    }, 
    { 
        id: 2, 
        title: "5 Mistakes Early-Stage Founders Should Avoid", 
        image: "/blog2.jpg", 
        excerpt: "Launching your startup? Avoid these common mistakes that kill early traction...", 
    }, 
    { 
        id: 3, 
        title: "The Future of Incubation: From Traditional to AI-Enabled", 
        image: "/blog3.jpg", 
        excerpt: "Explore the evolution of startup incubation and how AI-driven accelerators are changing the game.", 
    }, 
    { 
        id: 4, 
        title: "The Future of Incubation", 
        image: "/blog4.jpg", 
        excerpt: "Explore the evolution of startup incubation and how AI-driven accelerators are changing the game.", 
    }, 
    { 
        id: 5, 
        title: "From Traditional to AI-Enabled", 
        image: "/blog5.jpg", 
        excerpt: "Explore the evolution of startup incubation and how AI-driven accelerators are changing the game.", 
    }
];

const BlogList = () => {
  return (
    <Box
    sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#F8F7F5",
    }}
    >
    <Container maxWidth="lg">
        {/* Page Title */}
        <Typography
        variant="h4"
        sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 6,
            color: "#B2454D",
            fontFamily: "Nunito, sans-serif",
        }}
        >
        Our Latest Blogs
        </Typography>

        {/* Blog Grid */}
        <Grid container spacing={4}>
        {blogs.map((blog) => (
            <Grid
            item
            key={blog.id}
            xs={12}   // 1 per row on mobile
            md={4}    // 3 per row on desktop
            sx={{ display: "flex" }}
            >
            <Card
                sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1, // fill the Grid cell width
                width: "100%", // ensures it takes full grid width
                transition: "transform 0.28s ease, box-shadow 0.28s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                },
                }}
            >
                <CardMedia
                component="img"
                image={blog.image}
                alt={blog.title}
                sx={{
                    height: { xs: 160, md: 200 },
                    objectFit: "cover",
                }}
                />
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {blog.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                    {blog.excerpt}
                    </Typography>
                </Box>

                <Box sx={{ mt: "auto" }}>
                    <Button
                    variant="contained"
                    href={`#/blog/${blog.id}`}
                    sx={{
                        backgroundColor: "#B2454D",
                        "&:hover": { backgroundColor: "#A03E47" },
                        textTransform: "none",
                        px: 3,
                    }}
                    >
                    Read More
                    </Button>
                </Box>
                </CardContent>
            </Card>
            </Grid>
        ))}
        </Grid>
    </Container>
    </Box>
  );
};

export default BlogList;
