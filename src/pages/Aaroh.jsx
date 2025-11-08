import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { motion } from "framer-motion"; // For smooth animations

const Program = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #FFF7F7 0%, #F8F7F5 100%)",
        overflow: "hidden",
      }}
    >
      {/* ---------- Decorative Background ---------- */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(178,69,77,0.08), transparent 50%), radial-gradient(circle at 80% 80%, rgba(178,69,77,0.08), transparent 50%)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          py: { xs: 6, md: 12 },
        }}
      >
        {/* ---------- Hero Section ---------- */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              color: "#B2454D",
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2rem", md: "3.5rem" },
              letterSpacing: "0.5px",
            }}
          >
            Scale from 0× to 10×
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#444",
              maxWidth: "800px",
              mx: "auto",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            AARAMBH 2.0 — Leap Catalyst’s flagship incubation program empowering
            early-stage founders to validate ideas, refine models, and build
            impactful ventures with mentorship, capital, and growth guidance.
          </Typography>
        </Box>

        {/* ---------- About Section ---------- */}
        <Box
          sx={{
            mb: { xs: 6, md: 10 },
            backgroundColor: "#fff",
            borderRadius: 4,
            boxShadow: "0 4px 30px rgba(0,0,0,0.05)",
            p: { xs: 3, md: 5 },
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 6px 35px rgba(0,0,0,0.1)",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#B2454D", fontWeight: "bold", mb: 2 }}
          >
            What is AARAMBH 2.0?
          </Typography>

          <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8 }}>
            AARAMBH 2.0 is a flagship incubation program by Leap Catalyst crafted
            for early-stage startups at the idea or proof-of-concept stage. Our
            AI-enabled platform empowers founders to validate ideas, refine
            business models, and set the right foundation for growth. With expert
            guidance and tailored support, we help startups take confident first
            steps toward building impactful and scalable ventures.
          </Typography>
        </Box>

        {/* ---------- Program Highlights ---------- */}
        <Typography
          variant="h4"
          sx={{ color: "#B2454D", fontWeight: "bold", mb: 4 }}
        >
          Program Highlights
        </Typography>

        <Grid container spacing={3} sx={{ mb: { xs: 6, md: 10 } }}>
          {[
            {
              title: "₹25 L Kickstart Investment",
              desc: "Fuel your vision with the capital to move fast and make impact",
            },
            {
              title: "₹50 L Scale-up Funding",
              desc: "Get the boost you need to expand and grow stronger",
            },
            {
              title: "3–4 Months of Acceleration",
              desc: "An intensive journey to turn your startup into a scalable business",
            },
            {
              title: "Mentorship from Trailblazers",
              desc: "Learn directly from founders and investors who’ve done it before",
            },
            {
              title: "Investor Access",
              desc: "Connect with top VCs and angel networks ready to back bold ideas",
            },
            {
              title: "Co-working Access",
              desc: "Build, collaborate, and grow from the heart of India’s startup hubs",
            },
          ].map((h, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    p: 2,
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#B2454D",
                        mb: 1,
                      }}
                    >
                      {h.title}
                    </Typography>

                    <Typography variant="body2" sx={{ color: "#555" }}>
                      {h.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* ---------- Acceleration Timeline ---------- */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h4"
            sx={{ color: "#B2454D", fontWeight: "bold", mb: 4 }}
          >
            Acceleration Timeline
          </Typography>

          <Grid container spacing={2}>
            {[
              {
                month: 1,
                title: "Strong Start with Expert Onboarding",
                points: [
                  "Ecosystem Integration",
                  "Startup Health Check",
                  "Tool Access",
                ],
              },
              {
                month: 2,
                title: "Structured Growth Path",
                points: [
                  "Expert Sessions",
                  "KPI Identification",
                  "Strategic Planning",
                ],
              },
              {
                month: 3,
                title: "Personalized Mentorship & Founder Community Access",
                points: [
                  "Mentor Matching",
                  "Entrepreneur Insights",
                  "Community Networking",
                ],
              },
              {
                month: 4,
                title: "Demo Day & Funding Gateway",
                points: [
                  "Pitch Readiness",
                  "KPI Evaluation",
                  "Investor Connect",
                ],
              },
            ].map((step) => (
              <Grid item xs={12} md={3} key={step.month}>
                <motion.div whileHover={{ y: -5 }}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                      transition: "box-shadow 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#B2454D", mb: 1 }}
                    >
                      Month {step.month}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "medium", mb: 1 }}
                    >
                      {step.title}
                    </Typography>

                    {step.points.map((pt, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{ color: "#555", pl: 1 }}
                      >
                        • {pt}
                      </Typography>
                    ))}
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ---------- Call to Action ---------- */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button
            variant="contained"
            size="large"
            href="#/apply"
            sx={{
              background: "linear-gradient(90deg, #B2454D 0%, #A03E47 100%)",
              color: "#fff",
              borderRadius: "50px",
              px: 6,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 6px 20px rgba(178,69,77,0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                background:
                  "linear-gradient(90deg, #A03E47 0%, #902F3E 100%)",
                boxShadow: "0 8px 25px rgba(178,69,77,0.4)",
                transform: "translateY(-3px)",
              },
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Program;
