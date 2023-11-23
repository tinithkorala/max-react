import React from "react";

function Button({ children, textOnly, cssName, ...props }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + cssName;
  return (
    <butto className={cssClasses} {...props}>
      {children}
    </butto>
  );
}

export default Button;
