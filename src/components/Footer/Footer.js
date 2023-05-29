import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../Footer/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <YouTubeIcon />
      </div>
      <p>
        &copy; 2023 techwithshubhs.com
      </p>
    </div>
  );
}

export default Footer;