import React, { useEffect } from "react";

const DanaMojo = () => {
  useEffect(() => {
    const container = document.getElementById("ngoContentContainer");
    if (container) {
      container.setAttribute("iNGOId", "982");
      container.setAttribute("oDisplay", "product");
      container.setAttribute("oDisplayTab", "once,monthly");
      container.setAttribute("oQRCode", "YES");
    }

    // Dynamically load DanaMojo script
    const script = document.createElement("script");
    script.src = "https://danamojo.org/dm/js/widget.js";
    script.async = true;
    script.onload = () => {
      console.log("DanaMojo widget loaded");
    };
    script.onerror = () => {
      console.error("Failed to load DanaMojo widget");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="ngoContentContainer">
        <center>
          <img
            alt="please wait..."
            src="https://danamojo.org/dm/css/images/loading.gif"
          />
        </center>
      </div>
    </div>
  );
};

export default DanaMojo;
