const Footer = () => {
  return (
    <footer className="footer">
      <div className="site-shell footer-inner">
        <span>© {new Date().getFullYear()} Adam Matthews</span>
        <span>Designed and built in Dublin.</span>
        <div className="footer-links">
          <a
            href="https://github.com/adammat2004"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adammat04/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
