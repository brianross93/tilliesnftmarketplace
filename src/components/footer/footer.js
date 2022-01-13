import './footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
      <div class='footer p-4'>
        &copy; TiLLiES 2022
        <a
          className='gh'
          href='https://github.com/brianross93/tilliesnftmarketplace'
          target='blank'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href='https://www.linkedin.com/company/tillies/about/'
          target='blank'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
