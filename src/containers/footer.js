export default function Footer() {
  return (
    <footer>
      <div
        className="footer-bar one"
        data-sad="fade-right"
        data-duration="fast"
      ></div>
      <div
        className="footer-bar two"
        data-sad="fade-right"
        data-duration="normal"
      >
        API:&nbsp;
        <a
          href="https://www.hko.gov.hk/en/weatherAPI/doc/files/HKO_Open_Data_API_Documentation.pdf"
          alt="hko api"
          target="_blank"
          rel="noreferrer noopener"
        >
          HKO
        </a>
        ,{" "}
        <a
          href="https://source.unsplash.com/"
          alt="unsplash api"
          target="_blank"
          rel="noreferrer noopener"
        >
          Unsplash
        </a>
      </div>
      <div
        className="footer-bar three"
        data-sad="fade-right"
        data-duration="slow"
      >
        Coded by{" "}
        <a style={{"color":"#499da7"}}
          href="https://r7chardgh.github.io/"
          alt="link to front page"
          target="_blank"
          rel="noopener noreferrer"
        >
          Richard Tsang
        </a>{" "}
        &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
