import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ReactMarkdown from "react-markdown";

// Blog data (same as before)
const blogs = [
  {
    id: 1,
    title: "How AI is Transforming Startup Ecosystems",
    image: "/blog1.jpg",
    content: `
India’s startup ecosystem has entered a phase of real momentum. From being a niche activity reserved for a few metropolitan innovators, it is now becoming mainstream: ideas from Tier-2 and Tier-3 cities, niche deep-tech experiments, social impact ventures and consumer plays all share a place on the national stage. Research shows that India is now ranked among the top three startup ecosystems globally.

### Where we stand today
A few years ago a startup meant an app or a marketplace in one of the “big cities”. Now the canvas is much broader. Digital infrastructure—cheap mobile data and widespread internet—has unlocked new reach and made entrepreneurship less urban-bound.
    
### What’s next: growth with depth
Looking ahead, the future of startups in India is not just about more ventures—it’s about smarter ones.

1. **Regional expansion** – Expect growth to go beyond Bengaluru, Delhi-NCR, Mumbai.  
2. **Deep tech** – Enterprise SaaS, climate tech, biotech, AI, etc.  
3. **Sustainable models** – Growth with strong unit economics.

### Challenges that remain
- Early-stage capital is still a constraint.
- Regulatory complexity slows young ventures.
- Talent retention remains tricky.

### Our take at Leap Catalyst
If you’re a founder starting early, this is as exciting a time as any in India.
    `,
  },
  // ... other blogs
];

const BlogDetail = () => {
  const blogId = parseInt(window.location.hash.split("/")[2], 10);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h5">Blog not found.</Typography>
        <Button href="#/blog" sx={{ mt: 3 }} variant="outlined">
          Back to Blogs
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#FFF", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        {/* Blog Image */}
        <Box
          component="img"
          src={blog.image}
          alt={blog.title}
          sx={{
            width: "100%",
            borderRadius: "12px",
            mb: 4,
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          }}
        />

        {/* Blog Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: "#B2454D",
            fontFamily: "Nunito, sans-serif",
          }}
        >
          {blog.title}
        </Typography>

        {/* Blog Content rendered as Markdown */}
        <Box
          sx={{
            typography: "body1",
            lineHeight: 1.8,
            color: "#444",
            "& h3": {
              mt: 4,
              mb: 2,
              fontWeight: "bold",
              color: "#B2454D",
            },
            "& ul": { pl: 3 },
            "& li": { mb: 1 },
          }}
        >
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </Box>

        {/* Back Button */}
        <Button
          href="#/blog"
          sx={{
            mt: 4,
            backgroundColor: "#B2454D",
            color: "white",
            "&:hover": { backgroundColor: "#A03E47" },
          }}
        >
          ← Back to Blogs
        </Button>
      </Container>
    </Box>
  );
};

export default BlogDetail;
