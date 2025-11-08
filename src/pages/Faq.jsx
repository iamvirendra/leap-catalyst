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
import faqImage from "../assets/faq-image.jpg"; // replace with your image

const faqs = [
  {
    question: "What is Leap Catalyst?",
    answer:
      "Leap Catalyst is an AI-enabled incubation platform built by founders, for founders. We support early-stage startups with mentorship, resources, and investment opportunities.",
  },
  {
    question: "Who can apply for the Thrive Accelerator Program?",
    answer:
      "Any startup with a strong founding team, innovative idea, and market potential can apply for our Thrive Accelerator Program.",
  },
  {
    question: "Is there any fee to join the accelerator?",
    answer:
      "There are no upfront charges. We invest our resources in exchange for equity based on the program structure.",
  },
  {
    question: "What kind of support does Leap Catalyst provide?",
    answer:
      "We provide business mentorship, investor connections, market access, operational guidance, and community support.",
  },
  {
    question: "Where is Leap Catalyst located?",
    answer:
      "We are headquartered in Jodhpur, with offices in Bengaluru, Mumbai, and Jaipur.",
  },
  {
    question: "How can I contact the team?",
    answer:
      "You can reach us through the Contact Us page or directly via email at office@marwaricatalysts.com.",
  },
  {
    question: "Do you invest in startups?",
    answer:
      "Yes, we partner with select startups through our accelerator programs and investor network.",
  },
  {
    question: "How long is the Thrive program?",
    answer:
      "Typically, the program runs for 3-6 months, depending on the startup’s stage and progress.",
  },
  {
    question: "What stage of startups do you support?",
    answer:
      "We focus primarily on early-stage startups (pre-seed to seed level) but also collaborate with growth-stage ventures.",
  },
  {
    question: "How can I apply?",
    answer:
      "You can apply through the Apply page on our website. Fill out the form and upload your pitch deck to get started.",
  },
];

const Faq = () => {
  return (
    <Box sx={{ backgroundColor: "#F8F7F5", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        {/* Image */}
        <Box
          component="img"
          src={faqImage}
          alt="FAQ Illustration"
          sx={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
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
              boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
              "&::before": { display: "none" },
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
