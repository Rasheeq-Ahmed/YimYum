import React from 'react';
import {SocialIcon} from 'react-social-icons';




class FooterNav extends React.Component {
    render() {
        return (
          <div className="footer-all">
            <div>
              <SocialIcon
                url="https://www.linkedin.com/in/rasheeq-ahmed-53b7aa91/"
                bgColor="#ffffff"
              />
            </div>
            <div>
              <SocialIcon
                url="https://github.com/Rasheeq-Ahmed/"
                bgColor="#ffffff"
              />
            </div>
            <div className="trademark">© 2020 YimYum</div>
          </div>
        );
    }
}

export default FooterNav;