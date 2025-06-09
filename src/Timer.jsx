import React, { useCallback, useEffect, useRef, useState } from "react";
import garden from "./assets/garden.svg";
import luna_reading from "./assets/luna-reading.svg";
import { Expand, Maximize } from "lucide-react";
import Counter from "./Clock";

function Timer() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [timeString, setTimeString] = useState("");
  const componentRef = useRef(null);
  const overlayRef = useRef(null);

  const handleFullscreen = useCallback(() => {
    const element = componentRef.current;
    if (!document.fullscreenElement && element) {
      element.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error("Error attempting to exit fullscreen:", err);
      });
    }
  }, []);

  const updateGradient = useCallback(() => {
    const now = new Date();
    const hours = now.getHours() ;
    const element = componentRef.current;
    const overlay = overlayRef.current;

    if (!element || !overlay) return;

    // Remove all gradient classes first
    const gradientClasses = [
      "sunrise-6-8am",
      "mid-morning-8-10am",
      "late-morning-10am-12pm",
      "early-afternoon-12-4pm",
      "late-afternoon-4-5pm",
      "golden-hour-5-6pm",
      "sunset-6-7pm",
      "dusk-7-8pm",
      "twilight-8-10pm",
      "early-night-10pm-12am",
      "deep-night-12-2am",
      "late-night-2-4am",
      "dawn-approach-4-5am",
      "pre-dawn-5-6am",
    ];

    element.classList.remove(...gradientClasses);
    overlay.classList.remove(...gradientClasses);
    element.classList.add("gradient-container");
    // overlay.classList.add("gradient-overlay");

    // Apply the correct gradient based on time
    let timeClass = "";
    if (hours >= 5 && hours < 6) {
      timeClass = "pre-dawn-5-6am";
    } else if (hours >= 6 && hours < 8) {
      timeClass = "sunrise-6-8am";
    } else if (hours >= 8 && hours < 10) {
      timeClass = "mid-morning-8-10am";
    } else if (hours >= 10 && hours < 12) {
      timeClass = "late-morning-10am-12pm";
    } else if (hours >= 12 && hours < 16) {
      timeClass = "early-afternoon-12-4pm";
    } else if (hours >= 16 && hours < 17) {
      timeClass = "late-afternoon-4-5pm";
    } else if (hours >= 17 && hours < 18) {
      timeClass = "golden-hour-5-6pm";
    } else if (hours >= 18 && hours < 19) {
      timeClass = "sunset-6-7pm";
    } else if (hours >= 19 && hours < 20) {
      timeClass = "dusk-7-8pm";
    } else if (hours >= 20 && hours < 24) {
      timeClass = "early-night-10pm-12am";
    } else if (hours >= 0 && hours < 2) {
      timeClass = "deep-night-12-2am";
    } else if (hours >= 2 && hours < 4) {
      timeClass = "late-night-2-4am";
    } else if (hours >= 4 && hours < 5) {
      timeClass = "dawn-approach-4-5am";
    }

    if (timeClass) {
      element.classList.add(timeClass);
      overlay.classList.add(timeClass);
    }
  }, []);

  const formatTime = useCallback(() => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, "0")} : ${now
      .getMinutes()
      .toString()
      .padStart(2, "0")} : ${now.getSeconds().toString().padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    setTimeString(formatTime());
    updateGradient();

    const timeInterval = setInterval(() => {
      setTimeString(formatTime());
    }, 1000);

    const gradientInterval = setInterval(updateGradient, 60000); // 1 minute

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      clearInterval(timeInterval);
      clearInterval(gradientInterval);
    };
  }, [formatTime, updateGradient]);

  return (
    <div ref={componentRef} className="timer-box">
      <div className="gradient-container">
        <img src={garden} alt="Background" className="background-img" />

        <div className="clock">
          {/* <div className="time">{timeString}</div> */}

          {timeString.split(" : ").map((t, index) => {
            return (
              <div className="timer-kawaii">
                <Counter
                  value={t}
                  fontSize={70}
                  // textColor="#8b4b6b"
                  fontWeight={900}
                />
                {/* {index !== timeString.split(" : ").length - 1 && (
                  <span style={{ color: "#fff", fontSize: "40px" }}>:</span>
                )} */}
              </div>
            );
          })}
        </div>

        {!isFullscreen && (
          <button onClick={handleFullscreen}>
            <Maximize />
          </button>
        )}

        {(() => {
          const hour = new Date().getHours();
          return hour >= 19 || hour <= 5 ? (
            <div ref={overlayRef} className="gradient-night"></div>
          ) : (
            <div ref={overlayRef}></div>
          );
        })()}

        <div className="character">
          <img src={luna_reading} alt="Luna reading" className="img" />
        </div>
      </div>
    </div>
  );
}

export default Timer;
