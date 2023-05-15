const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "28px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons">
      <a className="icon" style={styles.icon} href="https://github.com/hertsunday">
        <i className="fa-brands fa-github" aria-hidden="true" title="GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/daria-hertsun">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://t.me/heissonne">
        <i className="fa-brands fa-telegram" aria-hidden="true" title="Telegram Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
