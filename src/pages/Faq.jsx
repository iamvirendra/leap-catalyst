import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What exactly is Leap Catalyst?",
    answer:
      "Leap Catalyst is an AI-powered startup incubation platform designed by founders, for founders. We help early-stage startups grow faster with smart tools, mentorship, and investor access.",
  },
  {
    question: "Why should I choose Leap Catalyst?",
    answer:
      "Because we’ve been in your shoes. Our programs blend real founder experience with AI-driven insights—so every piece of advice and connection truly fits your startup’s journey.",
  },
  {
    question: "Who can apply to join?",
    answer:
      "If you’re an early-stage founder or a team with a solid idea, strong intent, and passion to build something scalable—we’d love to hear from you.",
  },
  {
    question: "What kind of startups do you usually work with?",
    answer:
      "We’re sector-agnostic but passionate about innovation—whether it’s in AI, consumer tech, sustainability, or new-age D2C.",
  },
  {
    question: "How does Leap Catalyst support funding?",
    answer:
      "We connect you with our curated network of angels, VCs, and HNIs who invest in high-potential founders. We also help refine your pitch and fundraising strategy.",
  },
  {
    question: "What kind of mentorship can I expect?",
    answer:
      "You’ll work closely with experienced founders, domain experts, and industry mentors who’ve built and scaled startups themselves.",
  },
  {
    question: "Is the program online or in-person?",
    answer:
      "Both! You can join virtually or be part of our hybrid sessions, depending on what suits your startup best.",
  },
  {
    question: "How long does the incubation last?",
    answer:
      "Our core programs typically run for 3–6 months, but our community and support last well beyond that.",
  },
  {
    question: "Does Leap Catalyst take equity?",
    answer:
      "We believe in win–win partnerships. Equity terms vary by program and level of engagement, always keeping founders’ interests first.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just apply through our website. Once we review your application, our team will reach out for the next steps if there’s a potential fit.",
  },
];

const Faq = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: `
          linear-gradient(135deg, rgba(255, 240, 240, 0.6), rgba(255, 255, 255, 0.8)),
          url('https://www.transparenttextures.com/patterns/white-wall-3.png')
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundAttachment: "fixed",
      }}
    >
      <Container maxWidth="md">
        {/* Image */}
        <Box
          component="img"
          src="/faq-image.png"
          alt="FAQ Illustration"
          sx={{
            width: "100%",
            height: { xs: "180px", md: "250px" }, // reduced height
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
            mb: 4,
          }}
        />

        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
            color: "#B2454D",
            fontFamily: "Nunito, sans-serif",
          }}
        >
          Get answers to all your questions
        </Typography>

        {/* Accordions */}
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              borderRadius: "8px !important",
              backgroundColor: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
              "&::before": { display: "none" },
              transition: "transform 0.2s ease-in-out",
              "&:hover": { transform: "scale(1.01)" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#B2454D" }} />}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#333",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#555",
                  fontFamily: "Nunito, sans-serif",
                  lineHeight: 1.6,
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default Faq;
