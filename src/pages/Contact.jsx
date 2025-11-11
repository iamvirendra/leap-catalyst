import React, { useState, useCallback } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Snackbar,
  Alert,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState({ open: false, ok: true, message: "" });

  const updateField = useCallback(
    (field) => (e) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    },
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!form.name || !form.email) {
      setResult({
        open: true,
        ok: false,
        message: "Please fill required fields (Name, Email).",
      });
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("https://leap-catalyst-backend.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setSubmitting(false);

      if (res.ok) {
        setResult({ open: true, ok: true, message: "Thank you for contacting us!" });
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          message: "",
        });
      } else {
        setResult({ open: true, ok: false, message: data.error || "Failed to submit." });
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitting(false);
      setResult({
        open: true,
        ok: false,
        message: "Network error. Please try again.",
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url('/Contact.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{
          backgroundColor: "rgba(255,255,255,0.9)",
          borderRadius: 4,
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          overflow: "hidden",
          maxWidth: "1100px",
        }}
      >
        {/* Left: Contact Info */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            backgroundColor: "rgba(178,69,77,0.95)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: { xs: 3, md: 4 },
            maxWidth: "300px",
          }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <img
                src="/leap-catalyst-logo.png"
                alt="Leap Catalyst Logo"
                style={{
                  height: "60px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Typography sx={{ mb: 1.5 }}>
              We’d love to hear from you — reach out for partnerships, funding,
              or general queries.
            </Typography>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", mb: 2 }} />

            <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
              <EmailOutlinedIcon sx={{ mr: 1 }} />
              <Typography>leapcatalyst@gmail.com</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
              <PhoneOutlinedIcon sx={{ mr: 1 }} />
              <Typography>+91-6393198180, +91-8299669249</Typography>
            </Box>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", my: 2 }} />

            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
              <LocationOnOutlinedIcon sx={{ mr: 1, mt: 0.3 }} />
              <Typography variant="body2">
                <strong>Gurugram</strong> — AIPH Tower, Udyog Vihar Phase IV,
                Gurugram, Haryana
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
              <ApartmentOutlinedIcon sx={{ mr: 1, mt: 0.3 }} />
              <Typography variant="body2">
                <strong>Lucknow</strong> — 11th Floor, Summit Building, Vibhuti Khand, Gomti Nagar,
                Lucknow, Uttar Pradesh
              </Typography>
            </Box>
          </CardContent>
        </Grid>

        {/* Right: Contact Form */}
        <Grid item xs={12} md={8} sx={{ display: "flex" }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              flex: 1,
              backgroundColor: "#fff",
              borderRadius: { xs: 0, md: "0 16px 16px 0" },
              p: { xs: 3, md: 5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <BusinessOutlinedIcon sx={{ color: "#B2454D", fontSize: 36 }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Nunito, sans-serif",
                    color: "#B2454D",
                  }}
                >
                  Get in Touch with Us
                </Typography>
              </Box>

              <Grid container spacing={2} direction="column">
                <Grid item>
                  <TextField
                    label="Name"
                    value={form.name}
                    onChange={updateField("name")}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="email"
                    label="E-mail"
                    value={form.email}
                    onChange={updateField("email")}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Contact No."
                    value={form.phone}
                    onChange={updateField("phone")}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Company's Name"
                    value={form.company}
                    onChange={updateField("company")}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Company Website"
                    value={form.website}
                    onChange={updateField("website")}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Your Message"
                    value={form.message}
                    onChange={updateField("message")}
                    fullWidth
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
              </Grid>
            </Box>

            <Button
              type="submit"
              variant="contained"
              disabled={submitting}
              sx={{
                backgroundColor: "#B2454D",
                "&:hover": { backgroundColor: "#982E36" },
                mt: 3,
              }}
              fullWidth
            >
              {submitting ? "Submitting…" : "Send Message"}
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Snackbar */}
      <Snackbar
        open={result.open}
        autoHideDuration={3500}
        onClose={() => setResult((r) => ({ ...r, open: false }))}
      >
        <Alert
          onClose={() => setResult((r) => ({ ...r, open: false }))}
          severity={result.ok ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {result.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
