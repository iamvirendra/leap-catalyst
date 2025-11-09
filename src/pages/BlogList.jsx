import React from "react";
import { Box, Container, Typography, Card, CardContent, CardMedia, Button, Grid } from "@mui/material";

// Mock blog data
const blogs = [ 
    { 
        id: 1, 
        title: "The Future of the Startup Ecosystem in India", 
        image: "The-Future-of-the-Startup-Ecosystem-in-India.png", 
        excerpt: "India’s startup ecosystem has entered a phase of real momentum. From being a niche activity...", 
    }, 
    { 
        id: 2, 
        title: "Why Most Startups in India Fail", 
        image: "/Why-Most-Startups-in-India-Fail.jpeg", 
        excerpt: "India is bursting with startup energy. Every day we see fresh ideas, bright teams, and bold ambitions. Yet, for all the enthusiasm...", 
    }, 
    { 
        id: 3, 
        title: "How to Choose the Right Investor Fit for Your Startup", 
        image: "/How-to-Choose-the-Right-Investor-Fit-for-Your-Startup.png", 
        excerpt: "Explore the evolution of startup incubation and how AI-driven accelerators are changing the gameFinding investors is not just....", 
    }, 
    { 
        id: 4, 
        title: "Foundation for Sustainable Growth in Early Startups", 
        image: "/Foundation-for-Sustainable.jpg", 
        excerpt: "Explore the evolution of startup incubation and how AI-driven accelerators are changing the gameExplore the evolution of startup iEvery startup begins with a spark of excitement. It starts with a dream, a simple idea that....", 
    }, 
    { 
        id: 5, 
        title: "The Rise of AI in Startup Incubation", 
        image: "/The-Rise-of-AI-in-Startup.jpg", 
        excerpt: "It’s no secret that the startup ecosystem in India is evolving faster than ever. With thousands....", 
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
                width: "330px", // ensures it takes full grid width
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
                    href={`/blog/${blog.id}`}
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
