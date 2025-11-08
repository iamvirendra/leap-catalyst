import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        background: `
          linear-gradient(135deg, rgba(210, 70, 80, 0.25), rgba(255, 230, 230, 0.85)),
          url('http://www.transparenttextures.com/patterns/cubes.png')
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundAttachment: "fixed",
        overflowX: "hidden",
      }}
    >
      {/* 🔹 Banner Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "250px", md: "450px" },
          backgroundImage: `url(${isMobile ? "/about-banner-mobile.jpg" : "/about-banner-desktop.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "block",
          marginTop: 0,
        }}
      >
        {/* Overlay for text readability */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.1))",
          }}
        />

        {/* Banner Text */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "10px", md: "20px" },
            left: { xs: "10px", md: "30px" },
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              color: "#C41E3A",
              fontWeight: "bold",
              fontFamily: "Nunito, sans-serif",
              textShadow: "0 3px 8px rgba(0,0,0,0.5)",
            }}
          >
            About Us
          </Typography>
        </Box>
      </Box>

      {/* 🔹 Mission & Vision Cards */}
      <Grid
        container
        spacing={6}
        sx={{
          mt: { xs: 2, md: 5 }, // ✅ reduced gap here
          px: { xs: 2, md: 8 },
          justifyContent: "center",
        }}
      >
        {/* Our Mission */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              p: 2,
              "&:hover": { transform: "translateY(-5px)", transition: "0.2s" },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "#B2454D",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8 }}>
                Our mission is to empower early-stage founders with everything
                they need to build, grow, and scale successfully. We combine
                AI-driven insights with real-world experience from successful
                entrepreneurs to deliver tailored incubation, strategic
                mentorship, and access to a powerful investor network. At Leap
                Catalyst, we’re driven by the belief that every startup deserves
                a fair shot at success—beyond just funding. We focus on
                equipping founders with knowledge, community, and direction to
                turn their ideas into sustainable businesses. Our mission is to
                nurture the next generation of innovators who are not just
                chasing valuations, but creating lasting value for the world.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Our Vision */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              p: 2,
              "&:hover": { transform: "translateY(-5px)", transition: "0.2s" },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "#B2454D",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8 }}>
                At Leap Catalyst, our vision is to create an ecosystem where
                every founder—regardless of background, experience, or
                location—has access to the right tools, mentors, and capital to
                build world-changing companies. We envision a future where
                innovation is democratized and driven by data, creativity, and
                collaboration. By harnessing the power of AI and human
                experience, we aim to redefine startup incubation—making it
                smarter, faster, and more inclusive. We want to be the bridge
                that connects bold ideas to the right opportunities, turning raw
                potential into real impact. At Leap Catalyst, we believe
                founders are the true catalysts of progress—and our vision is to
                empower them to leap ahead with confidence and clarity.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 🔹 Our Values Section */}
      <Box
        sx={{
          mt: { xs: 6, md: 10 },
          px: { xs: 3, md: 12 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#B2454D",
            mb: 3,
            fontFamily: "Nunito, sans-serif",
          }}
        >
          Our Values
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#444",
            maxWidth: "900px",
            mx: "auto",
            lineHeight: 1.9,
          }}
        >
          Integrity, collaboration, and innovation form the foundation of all
          that we do. We are committed to supporting our partners and startups
          with transparency, empathy, and a deep sense of purpose — ensuring
          that every step we take drives collective success and societal
          progress.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
