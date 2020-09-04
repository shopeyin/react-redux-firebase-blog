import React from "react";
import "./footer.style.scss";

function Footer() {
  const style = {
    textAlign: "center",
    minHeight: "5rem",
  };
  return (
    <footer
      style={style}
      className="border d-flex justify-content-center align-items-center"
    >
      {" "}
      Copyright &copy;2020 BlogWithFirebase .All Rights Reserved
    </footer>
  );
}

export default Footer;
