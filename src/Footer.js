const Footer = () => {
  const today = new Date();
  
  return (
    <footer className="App-footer">
      <p>Copyright &copy; {today.getFullYear()} Yogi Social Media. All rights reserved.</p>
    </footer>
  );
}

export default Footer;