import { useEffect } from "react";
export default function Sun({ times, getTime }) {
  useEffect(() => {
    const c = document.getElementById("clock");
    let clock = setInterval(() => {
      c.innerHTML = new Date().toString().slice(16, 24);
    }, 1000);
    return function cleanUp() {
      clearInterval(clock);
    };
  }, []);
  const date = getTime();
  if (!times)
    return (
      <>
        <section className="sun">
          <div className="date">
            <div className="text">
              {date.weekday}&nbsp;|&nbsp;{date.year}-{date.month}-{date.day}
              &nbsp;|&nbsp;
              <span id="clock"></span>
            </div>
            <div className="box"></div>
          </div>
          <div className="info sunrise">
            <div className="container" >
              <div className="title">SUNRISE</div>
              <div className="time">
                <span className="time-dot"></span>
                <span>NO DATA</span>
              </div>
            </div>
          </div>
          <div className="info sunset">
            <div className="container" >
              <div className="title">SUNSET</div>
              <div className="time">
                <span className="time-dot"></span>
                <span>NO DATA</span>
              </div>
            </div>
          </div>
          <img
            className="backdrop"
            src="https://source.unsplash.com/1280x720/?sunrise"
            alt="sunrise"
          />
        </section>
      </>
    );
  else
    return (
      <>
        <section className="sun">
          {/* <img
            className="backdrop"
            src="https://source.unsplash.com/1280x720/?sunrise"
            alt="sunrise"
          /> */}
          <div className="info sunrise">
            <div className="container"  >
              <div className="title" data-sad="fade-down" data-duration="slowest">SUNRISE</div>
              <div className="time" data-sad="flip-up" data-duration="slow">
                <span className="time-dot"></span>
                <span>{times.data[0][1]}</span>
              </div>
            </div>
          </div>
          <div className="info sunset">
            <div className="container" >
              <div className="title" data-sad="fade-up" data-duration="slowest">SUNSET</div>
              <div className="time" data-sad="flip-up" data-duration="slow">
                <span className="time-dot"></span>
                <span>{times.data[0][3]}</span>
              </div>
            </div>
          </div>
          <div className="date">
            <div className="text" data-sad="flip-up" data-duration="slowest">
              {date.weekday}&nbsp;|&nbsp;{date.year}-{date.month}-{date.day}
              &nbsp;|&nbsp;
              <span id="clock"></span>
            </div>
            <div className="box" data-sad="flip-up" data-duration="fast"></div>
          </div>
        </section>
      </>
    );
}
