import React, { useState, useCallback } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Snackbar,
  Alert,
  MenuItem,
} from "@mui/material";

const Apply = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    company: "",
    website: "",
    revenue: "",
    description: "",
    expectations: "",
    hearAbout: "",
    pitchDeck: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState({
    open: false,
    ok: true,
    message: "",
  });

  const updateField = useCallback(
    (field) => (e) => {
      setForm((prev) => ({
        ...prev,
        [field]:
          e.target.type === "file" ? e.target.files[0] : e.target.value,
      }));
    },
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!form.name || !form.email || !form.company) {
      setResult({
        open: true,
        ok: false,
        message: "Please fill required fields (Name, Email, Company).",
      });
      setSubmitting(false);
      return;
    }

    const payload = {
      ...form,
      createdAt: new Date().toISOString(),
      pitchDeck: form.pitchDeck?.name || "Not uploaded",
    };

    let saved = false;

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbw14upUqagQIVEm-7RpNWGfdF2XImRIAmxICZWIE34I0WbscsXaol7Nfs5lcMZ6EilxMQ/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const result = await res.json();
      saved = result.success;
    } catch (err) {
      console.error(err);
    }

    setSubmitting(false);
    setResult({
      open: true,
      ok: saved,
      message: saved
        ? "Application submitted successfully!"
        : "Failed to save. Please try again.",
    });

    if (saved) {
      setForm({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        company: "",
        website: "",
        revenue: "",
        description: "",
        expectations: "",
        hearAbout: "",
        pitchDeck: null,
      });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F8F7F5",
        py: { xs: 6, md: 10 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, md: 6 },
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          p: { xs: 3, md: 5 },
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: 700,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            mb: 3,
            backgroundColor: "#B2454D",
            color: "#fff",
            px: 2,
            py: 1.5,
            borderRadius: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontFamily: "Nunito, sans-serif" }}
          >
            Start your application now!
          </Typography>
          <Typography variant="body2">
            Application Deadline:31 December 25
          </Typography>
        </Box>

        {/* Form Fields */}
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
              label="Founder's LinkedIn profile"
              value={form.linkedin}
              onChange={updateField("linkedin")}
              fullWidth
            />
          </Grid>

          <Grid item>
            <TextField
              label="Company's Name"
              value={form.company}
              onChange={updateField("company")}
              fullWidth
              required
            />
          </Grid>

          <Grid item>
            <TextField
              label="Company's Website URL"
              value={form.website}
              onChange={updateField("website")}
              fullWidth
            />
          </Grid>

          <Grid item>
            <TextField
              select
              label="Revenue generated in last 6 months"
              value={form.revenue}
              onChange={updateField("revenue")}
              fullWidth
              required
            >
              <MenuItem value="">-- Select --</MenuItem>
              <MenuItem value="Below ₹1 Lakh">Below ₹1 Lakh</MenuItem>
              <MenuItem value="₹1 Lakh - ₹5 Lakh">₹1 Lakh - ₹5 Lakh</MenuItem>
              <MenuItem value="₹5 Lakh - ₹25 Lakh">₹5 Lakh - ₹25 Lakh</MenuItem>
              <MenuItem value="Above ₹25 Lakh">Above ₹25 Lakh</MenuItem>
              <MenuItem value="Pre-revenue">Pre-revenue</MenuItem>
            </TextField>
          </Grid>

          <Grid item>
            <TextField
              label="Describe about your Startup"
              value={form.description}
              onChange={updateField("description")}
              fullWidth
              required
              multiline
              rows={4}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Expectations from our Thrive Accelerator Program"
              value={form.expectations}
              onChange={updateField("expectations")}
              fullWidth
              required
              multiline
              rows={3}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Upload Pitch Deck Drive Link"
              value={form.pitchDeck}
              onChange={updateField("pitchDeck")}
              fullWidth
            />
          </Grid>

          <Grid item>
            <TextField
              select
              label="How did you hear about Marwari Catalysts?"
              value={form.hearAbout}
              onChange={updateField("hearAbout")}
              fullWidth
              required
            >
              <MenuItem value="">-- Select --</MenuItem>
              <MenuItem value="LinkedIn">LinkedIn</MenuItem>
              <MenuItem value="Instagram">Instagram</MenuItem>
              <MenuItem value="Website">Website</MenuItem>
              <MenuItem value="Referral">Referral</MenuItem>
              <MenuItem value="Event">Event</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>

          <Grid item>
            <Button
              type="submit"
              variant="contained"
              disabled={submitting}
              fullWidth
              sx={{
                backgroundColor: "#B2454D",
                "&:hover": { backgroundColor: "#982E36" },
                mt: 1,
              }}
            >
              {submitting ? "Submitting…" : "Submit Application"}
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Snackbar for feedback */}
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

export default Apply;
