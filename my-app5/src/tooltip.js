import React, { useState } from "react";
import "./tooltip.css";

const InfoIconTooltip = ({ titlefortooltip }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <>
      {visible && <div className="titlefortooltip">{titlefortooltip}</div>}
      <span onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        <img
          src=".\info.png"
          alt="tooltip"
          style={{ width: "30px", height: "30px", "margin-right": "5px" }}
        />
      </span>
    </>
  );
};

export default InfoIconTooltip;
