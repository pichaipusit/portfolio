import { IconButton } from "@mui/material";
import React from "react";
import "../component.css";

function Contact({ icon, url }) {
  return (
    <div>
      <div className="contact-container">
        <IconButton
          sx={{
            color: "rgb(240, 170, 105)",
            boxShadow: "0 0 10px #ff96c5",
            marginLeft: "20px",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
          href={url}
          target="_blank"
        >
          {icon}
        </IconButton>
      </div>
    </div>
  );
}

export default Contact;
