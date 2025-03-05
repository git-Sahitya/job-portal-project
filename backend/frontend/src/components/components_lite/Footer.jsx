import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Generate the footer for the website */}

      <div className="text-center p-5 bg-[#f1f1f1]">
        <p>© Copyright 2025. All rights reserved.</p>
        <p>
          Powered by <a href="https://github.com/git-Sahitya">Sahitya Singh</a>
        </p>
        <p>
          <Link to={"/PrivacyPolicy"}>Privacy Policy </Link> |
          <Link to={"/TermsofService"}> Terms of Service</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
