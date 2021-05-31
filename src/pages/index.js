import Head from "next/head";
import Sun from "../containers/sun.js";
import Footer from "../containers/footer.js";
import { init } from "../../packages/sad-1.0.1/";
import { useEffect } from "react";
export default function Home({ times }) {
  useEffect(() => {
    init(true);
  }, []);
  return (
    <>
      <Head>
        <title>HK Weather</title>
        <meta
          name="description"
          content="A simple design website integrated with HKO API and Unsplash API"
        />
        <link rel="icon" href="/icon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/favicon-16x16.png"
        />
        <link rel="manifest" href="/icon/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Sun times={times} getTime={getCurrentTime} />
      <Footer />
    </>
  );
}
//get current time
const getCurrentTime = () => {
  const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const now = new Date();
  now.setUTCHours(now.getUTCHours() + 8);
  const result = { year: 0, month: 0, day: 0, weekday: "sun" };
  result.year = now.getUTCFullYear();
  result.month = now.getUTCMonth() + 1;
  result.day = now.getUTCDate();
  result.weekday = week[now.getDay()];
  return result;
};
//nextjs function - fetch data at build time on server side
//currently getStaticProps is not allowed to be used on layer component (e.g. sun.js)
export async function getStaticProps() {
  const { year, month, day } = getCurrentTime();
  const res = await fetch(
    `https://data.weather.gov.hk/weatherAPI/opendata/opendata.php?dataType=SRS&lang=en&rformat=json&year=${year}&month=${month}&day=${day}`
  );
  const times = await res.json();
  if (!times)
    return {
      props: {},
    };
  return {
    props: { times },
  };
}
