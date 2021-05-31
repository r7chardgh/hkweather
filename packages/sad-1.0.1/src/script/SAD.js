export const init =  function (forceView) {
  
      const target = document.getElementsByTagName("div");
      const movers = Object.values(target).filter((t) =>
        t.hasAttribute("data-sad")
      );
      var lastScrollY = window.scrollY,
        ticking = false;
      var WindowHeight = window.innerHeight * 0.6;
      if(forceView) WindowHeight = window.innerHeight;
      update();
      function onScroll() {
        lastScrollY = window.scrollY;
        requestTick();
      }

      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      }
      function update() {
        var mover = null,
          moverTop = [];

        for (var m = 0; m < movers.length; m++) {
          mover = movers[m];
          moverTop[m] = mover.offsetTop;
        }

        for (var n = 0; n < movers.length; n++) {
          mover = movers[n];
          if (
            lastScrollY > moverTop[n] - WindowHeight &&
            mover.getAttribute("data-view") != "true"
          ) {
            mover.setAttribute("data-view", "true");
          } else if (
            lastScrollY <= moverTop[n] - WindowHeight &&
            mover.getAttribute("data-view") == "true" &&
            mover.getAttribute("data-fill-mode") != "forwards"
          ) {
            mover.setAttribute("data-view", "false");
          }
        }

        ticking = false;
      }
      window.addEventListener("scroll", onScroll, false);
      
    }

