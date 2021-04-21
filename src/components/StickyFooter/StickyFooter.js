import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './StickyFooter.css';

import {FaFacebook , FaLinkedin , FaGithub } from 'react-icons/fa';

export default function StickyFooter() {

  return (
    <Router>
      <div className="stickyFooterMainDIv">
        <div className="footerPart-AboutSite">
          <h2>Shikkhok...</h2>
          <br/>
          <p>Online Learning Platform</p>
          <p>Educate The Nation</p>
        </div>
        <div className="footerPart-SiteLocation">
          <h2>Useful Links...</h2>
          <br/>
          <Link className="links" to='/instructors'>
            <p><strong>Our Instructors</strong></p>
          </Link>
          <Link className="links" to='/courses'>
            <p><strong>Our Courses</strong></p>
          </Link>
          
        </div>
        <div className="footerPart-SocialPlatforms">
          <a target="blank" href="https://www.facebook.com/profile.php?id=100009732251679"><FaFacebook className="socialLinks"/></a>
          <a target="blank" href="https://github.com/shadreza"><FaGithub className="socialLinks"/></a>
          <a target="blank" href="https://www.linkedin.com/in/shad-reza-1484621b5/"><FaLinkedin className="socialLinks"/></a>
        </div>
      </div>
      <Switch>
        <Route path="/instructors">
          {/* <KnowInstructorsPage></KnowInstructorsPage> */}
        </Route>
        <Route path="/courses">
          {/* <CourseGalleryPage></CourseGalleryPage> */}
        </Route>
      </Switch>
    </Router>
  );
}