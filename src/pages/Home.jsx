import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: "90vh",
          backgroundImage: 'url("/hero-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Empowering Startups to Scale
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: "600px" }}>
            Partnering with early-stage startups to provide strategic guidance,
            capital, and mentorship.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Learn More
          </Button>
        </Container>
      </Box>

      {/* Who We Are Section */}
      <Box
        sx={{
          backgroundColor: "#F8F7F5",
          py: { xs: 6, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 8 },
          gap: 4,
        }}
      >
        {/* Text */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition:
                "opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                fontWeight: "bold",
                color: "#C41E3A",
                mb: 2,
                fontFamily: "Nunito, sans-serif",
              }}
            >
              Who We Are?
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                color: "#333333",
                mb: 3,
                fontFamily: "Nunito, sans-serif",
              }}
            >
              An Ecosystem for Innovation.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                fontWeight: "bold",
                color: "#C41E3A",
                mb: 2,
                fontFamily: "Nunito, sans-serif",
              }}
            >
              A Platform for Impact.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                color: "#666666",
                lineHeight: 1.8,
                mb: 3,
                fontFamily: "Nunito, sans-serif",
              }}
            >
              Born in Rajasthan, Leap Catalyst is redefining how India builds
              startups. We back the bold, the small-town dreamers, the
              garage-hustlers who dare to solve big problems from quiet corners.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                fontWeight: "bold",
                color: "#C41E3A",
                mb: 2,
                fontFamily: "Nunito, sans-serif",
              }}
            >
              Good Things Don’t Come to Those Who Wait; They Build.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                color: "#666666",
                lineHeight: 1.8,
                fontFamily: "Nunito, sans-serif",
              }}
            >
              With mentorship, funding, co-founder matchmaking, and investor
              access, we’re here to be the wind beneath every founder’s wings.
            </Typography>
          </Box>
        </Box>

        {/* Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="/WhoWeAre.jpeg"
            alt="Who We Are - Founders"
            sx={{
              width: "100%",
              aspectRatio: "4/3",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
              maxHeight: "450px",
            }}
          />
        </Box>
      </Box>

      {/* Grow With Us Section */}
      <Box
        sx={{
          backgroundColor: "#F8F7F5",
          py: { xs: 6, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 8 },
          gap: 4,
        }}
      >
        {/* Text */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: "bold",
              color: "#C41E3A",
              mb: 2,
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Grow Bold. Grow Smart. Build What Matters.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "#666666",
              lineHeight: 1.8,
              fontFamily: "Nunito, sans-serif",
              mb: 3,
            }}
          >
            At Leap Catalyst, we believe the most successful startups of tomorrow
            will be those solving meaningful problems while building a sustainable
            future. Sustainability isn’t a trend — it’s a principle embedded in our
            incubation philosophy.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "#666666",
              lineHeight: 1.8,
              fontFamily: "Nunito, sans-serif",
              mb: 3,
            }}
          >
            As an AI-enabled incubation platform built by founders, for founders,
            Leap Catalyst is where technology, sustainability, and entrepreneurship
            converge — to create businesses that are not only profitable but also
            purposeful.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#C41E3A",
              color: "#FFFFFF",
              borderRadius: "4px",
              fontWeight: "normal",
              fontSize: { xs: "0.9rem", md: "1rem" },
              textTransform: "none",
              fontFamily: "Arial, sans-serif",
              px: 3,
              py: 1,
              mt: 2,
              "&:hover": {
                backgroundColor: "#B91C1C",
                transform: "scale(1.05)",
              },
            }}
          >
            Join the Green Revolution
          </Button>
        </Box>

        {/* Image */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="/plant-tree.jpeg"
            alt="Grow With Us"
            sx={{
              width: "100%",
              aspectRatio: "4/3",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
              maxHeight: "450px",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Home;
