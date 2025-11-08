import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { LocationOn, LinkedIn, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const programs = ['Thrive', 'VSM'];
  const resources = ['Blog', 'Contact'];
  const locations = [{ name: 'Lucknow' }, { name: 'Gurugram' }];
  const socialLinks = [
    { icon: LinkedIn, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#FFFFFF',
        py: { xs: 4, sm: 5, md: 6 },
        mt: 'auto',
        borderTop: '1px solid #E5E5E5',
      }}
    >
      <Container maxWidth="lg">
        {/* ---------- ROW 1: Logo + Description ---------- */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            justifyContent: 'space-between',
            gap: { xs: 2, sm: 3, md: 5 },
            mb: { xs: 5, sm: 6 },
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/leap-catalyst-logo.png"
              alt="LEAP CATALYST Logo"
              style={{
                height: isMobile ? '60px' : '80px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: '#666666',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              lineHeight: 1.6,
              fontFamily: 'Arial, sans-serif',
              textAlign: { xs: 'center', sm: 'left' },
              maxWidth: '700px',
            }}
          >
            Leap Catalyst is an AI-enabled incubation platform built by founders, for the founders. 
            We exist to solve a critical challenge facing India’s entrepreneurial ecosystem — 
            the lack of awareness and access to essential resources that often leads to premature startup failure.
          </Typography>
        </Box>

        {/* ---------- ROW 2: Programs | Resources | Locations ---------- */}
        <Grid container spacing={4} justifyContent="space-between">
          {/* Programs */}
          <Grid item xs={6} sm={4} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: '#333333',
                mb: 2,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Programs
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {programs.map((program) => (
                <Link
                  key={program}
                  href="#"
                  sx={{
                    color: '#666666',
                    textDecoration: 'none',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontFamily: 'Arial, sans-serif',
                    transition: 'color 0.2s ease-in-out',
                    '&:hover': {
                      color: '#DC2626',
                      fontWeight: 'bold',
                    },
                  }}
                >
                  {program}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Resources */}
          <Grid item xs={6} sm={4} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: '#333333',
                mb: 2,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {resources.map((resource) => (
                <Link
                  key={resource}
                  href="#"
                  sx={{
                    color: '#666666',
                    textDecoration: 'none',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontFamily: 'Arial, sans-serif',
                    transition: 'color 0.2s ease-in-out',
                    '&:hover': {
                      color: '#DC2626',
                      fontWeight: 'bold',
                    },
                  }}
                >
                  {resource}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Locations + Social */}
          <Grid item xs={12} sm={4} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: '#333333',
                mb: 2,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Our Locations
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
              {locations.map((location) => (
                <Box
                  key={location.name}
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  <LocationOn
                    sx={{ color: '#DC2626', fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 'bold',
                      color: '#333333',
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      fontFamily: 'Arial, sans-serif',
                    }}
                  >
                    {location.name}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Social Media */}
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: '#DC2626',
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        backgroundColor: '#B91C1C',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: '1.25rem' }} />
                  </Link>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
