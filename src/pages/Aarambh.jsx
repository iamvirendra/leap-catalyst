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
import { motion } from "framer-motion";

const steps = [
  {
    month: 1,
    title: "Strong Start with Expert Onboarding",
    desc: "The first month focuses on early grooming, business foundation building, and startup health check-ups to identify growth opportunities.",
  },
  {
    month: 2,
    title: "Structured Growth Path",
    desc: "Month two brings expert-led strategy sessions, goal mapping, and KPI design to align your startup toward measurable success.",
  },
  {
    month: 3,
    title: "Personalized Mentorship & Founder Community Access",
    desc: "Gain one-on-one guidance from experienced founders who understand the challenges of building from scratch. Engage with a vibrant peer network of innovators and startup leaders to share insights and build collaborations.",
  },
  {
    month: 4,
    title: "Demo Day & Funding Gateway",
    desc: "End the 3–4 month journey with a high-impact demo day, connecting you to investors and potential partners ready to back your vision.",
  },
];

const Aarambh = () => {
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
              fontWeight: 600,
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
              title: "Idea Nurturing and Startup Health Check-up",
              desc: "Receive expert mentoring to refine your idea, validate your concept, and evaluate your startup’s overall health for a confident and structured beginning.",
            },
            {
              title: "Strategic Guidance on Business Model and Growth",
              desc: "Develop a solid business model, craft an effective go-to-market strategy, and apply practical customer acquisition methods that drive measurable growth.",
            },
            {
              title: "Funding Support up to ₹25 Lakhs",
              desc: "Access exclusive funding opportunities through investors, government grants, and startup funds designed to accelerate your entrepreneurial journey rapidly.",
            },
            {
              title: "Access to Premium Community Network",
              desc: "Join a high-value network of investors, successful founders, mentors, and experts who share insights, resources, and opportunities to fuel your business growth.",
            },
            {
              title: "AI-Powered Insights and Decision Tools",
              desc: "Utilize Leap Catalyst’s AI-driven platforms and data intelligence tools to gain actionable insights, optimize operations, and make confident, informed decisions.",
            },
            {
              title: "Professional Compliance and Certification Support",
              desc: "Access expert assistance for legal, financial, and IPR compliance, including trademark, patent, ISO certification, and DPIIT recognition for startup credibility.",
            },
          ].map((h, idx) => (
            <Grid item xs={12} key={idx}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card
                  sx={{
                    width: "100%",
                    borderRadius: 3,
                    p: 2,
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
                      transform: "translateY(-5px)",
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
                    <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.7 }}>
                      {h.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* ---------- Program Timeline ---------- */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#B2454D",
              fontWeight: "bold",
              mb: 6,
              textAlign: "center",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Program Timeline
          </Typography>

          <Box
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                left: "20px",
                top: 0,
                bottom: 0,
                width: "3px",
                backgroundColor: "#B2454D",
              },
            }}
          >
            {steps.map((step) => (
              <Box
                key={step.month}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  position: "relative",
                  mb: 6,
                  pl: 8,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: "9px",
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    backgroundColor: "#B2454D",
                    boxShadow: "0 0 0 5px #FCEBEC",
                  }}
                />
                <Box
                  sx={{
                    background: "#fff",
                    borderRadius: 2,
                    p: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#B2454D" }}
                  >
                    Month {step.month}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.8 }}>
                    {step.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ---------- Call to Action ---------- */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button
            variant="contained"
            size="large"
            href="/apply"
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

export default Aarambh;
