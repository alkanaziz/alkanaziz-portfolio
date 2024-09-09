const Footer = () => {
  return (
    <footer>
      <div className="flex h-24 items-center justify-center text-center text-xs text-slate-400 md:text-sm">
        <p>
          © 2024 -{' '}
          <a href="https://www.alkanaziz.com" className="text-slate-300">
            Alkan Aziz
          </a>{' '}
          - All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
