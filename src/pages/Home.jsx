import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [portfolioCount, setPortfolioCount] = useState(0);
  const [clubCount, setClubCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);

    // Animated counter
    const animateCounter = (setter, end, duration) => {
      let start = 0;
      const increment = end / (duration / 30);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setter(Math.floor(start));
      }, 30);
    };

    animateCounter(setPortfolioCount, 50, 2000);
    animateCounter(setClubCount, 100, 2000);
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
          position: "relative",
          display: "flex",
          alignItems: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Dark overlay to reduce contrast */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            zIndex: 1,
          }}
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: { xs: "center", md: "left" }, // Center on mobile
            px: { xs: 2, sm: 4 },
            py: { xs: 6, md: 8 },
          }}
        >
          {/* Heading Section */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "300",
              mb: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            AI ENABLED INCUBATOR
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontWeight: "bold",
              lineHeight: 1.2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              maxWidth: { md: "600px" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            BUILT BY FOUNDERS, <br /> FOR THE FOUNDERS
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontWeight: "300",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              maxWidth: { md: "600px" },
              mx: { xs: "auto", md: 0 },
              color: "#e0e0e0",
            }}
          >
            Our core value is simple: helping new and budding startups not just grow,
            but truly excel.
          </Typography>

          {/* Responsive Stats Cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: { xs: 2, sm: 3, md: 4 },
              mt: 4,
            }}
          >
            {[
              { label: "Portfolio Startups", value: portfolioCount, suffix: "+" },
              { label: "Cofounder Club", value: clubCount, suffix: "+" },
            ].map((card, index) => (
              <Box
                key={index}
                sx={{
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "16px",
                  p: { xs: 2, sm: 3 },
                  minWidth: { xs: 160, sm: 180 },
                  textAlign: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    background: "rgba(255,255,255,0.18)",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  {card.value}
                  {card.suffix}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    color: "#f1f1f1",
                    fontFamily: "Nunito, sans-serif",
                  }}
                >
                  {card.label}
                </Typography>
              </Box>
            ))}
          </Box>
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
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
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
              The Leap Behind the Catalyst
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#333",
                mb: 3,
                fontFamily: "Nunito, sans-serif",
              }}
            >
              An Ecosystem for Innovation.
            </Typography>
            <Typography
              variant="h5"
              sx={{
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
                color: "#666",
                lineHeight: 1.8,
                mb: 3,
                fontFamily: "Nunito, sans-serif",
              }}
            >
              Leap Catalyst is an AI-enabled incubation platform built by founders, for founders.
              We exist to bridge a critical gap in India’s startup ecosystem — the lack of awareness, access, and structured support that often leads to premature startup failure.
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
            At Leap Catalyst, we believe the most successful startups of tomorrow will
            be those solving meaningful problems while building a sustainable future.
            Sustainability isn’t a trend — it’s a principle embedded in our incubation
            philosophy.
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
            As an AI-enabled incubation platform built by founders, for founders, Leap
            Catalyst is where technology, sustainability, and entrepreneurship converge
            — to create businesses that are not only profitable but also purposeful.
            </Typography>

            <Button
            variant="contained"
            href="/apply"
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
            Join the Green Revolution with Us
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

      {/* CTA - Get Involved Section */}
      <Box
        sx={{
            background: `linear-gradient(135deg, rgba(210, 70, 80, 0.25), rgba(255, 230, 230, 0.85)),
            url("https://www.transparenttextures.com/patterns/diamond-upholstery.png")`,
            py: { xs: 6, md: 8 },
            overflowX: "hidden",
            textAlign: "center",
            color: "#fff",
        }}
        >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: "bold",
              mb: 2,
              fontFamily: "Nunito, sans-serif",
              letterSpacing: 0.5,
            }}
          >
            LET'S BUILD SOMETHING AMAZING TOGETHER
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "650px",
              mx: "auto",
              opacity: 0.9,
              mb: 6,
              color: "#C41E3A",
              fontSize: { xs: "1rem", md: "1.1rem" },
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Ready to turn your startup vision into reality? Choose how you'd
            like to connect with us.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                icon: <LightbulbOutlinedIcon sx={{ color: "#C41E3A", fontSize: 40 }} />,
                title: "Idea Submission",
                desc: "Have a startup idea? Submit it for initial review and feedback.",
                button: "Submit Idea",
                link: "/apply",
              },
              {
                icon: <AttachMoneyOutlinedIcon sx={{ color: "#C41E3A", fontSize: 40 }} />,
                title: "Connect With Us",
                desc: "Looking for funding? Let’s discuss your investment requirements.",
                button: "Contact With Us",
                link: "/contact",
              },
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    backdropFilter: "blur(8px)",
                    background:
                      "linear-gradient(115deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
                    border: "1px solid rgba(255,255,255,0.25)",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{card.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 1, color: "#C41E3A", fontFamily: "Nunito" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      opacity: 0.9,
                      mb: 2,
                      color: "#C41E3A",
                      fontSize: "0.95rem",
                      fontFamily: "Nunito",
                    }}
                  >
                    {card.desc}
                  </Typography>
                  <Button
                    href={card.link}
                    variant="outlined"
                    sx={{
                     color: "#C41E3A",
                      borderColor: "#fff",
                      textTransform: "none",
                      borderRadius: "30px",
                      px: 2.5,
                      py: 0.6,
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#C41E3A",
                      },
                    }}
                  >
                    {card.button}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
