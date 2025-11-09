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
    title: "Strategic Acceleration Onboarding",
    desc: "Kickstart your journey with in-depth business audits, performance assessments, and tailored roadmaps designed for structured and sustainable scaling.",
  },
  {
    month: 2,
    title: "Data-Driven Growth Sprint",
    desc: "Refine your business strategy using AI-powered insights, expert-led sessions, and performance tracking to accelerate traction and measurable outcomes.",
  },
  {
    month: 3,
    title: "Founder-Led Mentorship",
    desc: "Gain actionable guidance directly from experienced startup founders who have scaled successfully, sharing practical growth tactics and real-world learnings.",
  },
  {
    month: 4,
    title: "Collaborative Ecosystem",
    desc: "Connect with investors, entrepreneurs, and domain experts through exclusive meetups and community interactions that fuel collaboration and partnerships.",
  },
  {
    month: 5,
    title: "Investor-Ready Demo Day",
    desc: "Conclude the 5 month accelerator with a high-impact demo day featuring leading investors and partners eager to support emerging, high-potential ventures.",
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
            Scale from 10× to 50×
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
            AAROH — Leap Catalyst’s flagship program revives distressed businesses into thriving ventures through innovation, strategy, and leadership.
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
            What is AAROH?
          </Typography>

          <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8 }}>
            AAROH: The Next Leap is designed for growing startups that have gained traction of up to six lakh rupees in the past year. Through our AI-driven platform, founders access mentorship, investor networks, and peer communities to accelerate growth. Leap Catalyst helps them avoid common scaling pitfalls and equips them with the insights and strategies needed to take their venture to the next level with confidence.
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
              title: "Scaling, Structuring, and Strategic Growth",
              desc: "Accelerate your startup’s journey with practical guidance in business structuring, growth planning, and forming strategic partnerships for long-term scalability and success.",
            },
            {
              title: "Collaborative Workspace and Growth Environment",
              desc: "Access a vibrant co-working space built to inspire innovation, teamwork, and creativity — a thriving ecosystem that empowers founders to collaborate and grow together.",
            },
            {
              title: "Funding Opportunities up to ₹50 Lakhs",
              desc: "Gain curated funding access through private investors, institutional partners, and government grants tailored to help your startup achieve sustainable and scalable growth.",
            },
            {
              title: "Powerful Network of Investors and Industry Leaders",
              desc: "Engage directly with an exclusive community of investors, unicorn founders, and industry experts who offer insights, connections, and strategic opportunities for growth.",
            },
            {
              title: "Pro-Level AI Tools and Decision Reports",
              desc: "Leverage Leap Catalyst’s next-gen AI tools and analytics dashboards to gain data-driven insights, monitor performance, and make intelligent, growth-focused decisions.",
            },
            {
              title: "Comprehensive Professional and Compliance Support",
              desc: "Get expert guidance for legal, financial, and IPR compliance, including trademarks, patents, ISO certification, DPIIT recognition, and major startup competition support.",
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

export default Aarambh;
