import React from "react";
import { observer } from "mobx-react";
import { ui } from "../../store/uiStore";

const Messages = observer(() => {
  return (
    <>
      <p className={ui.errorMessage ? "error" : null}>
        {ui.errorMessage && "Brand cannot be empty!"}
      </p>
      <p className={ui.existingBrandName ? "error" : null}>
        {ui.existingBrandName && "Desired Brand Already Exists"}
      </p>
      <p className={ui.imageWarning ? "warning" : null}>
        {ui.imageWarning && "Invalid logo url"}
      </p>
      <p className={ui.imageSuccess ? "success" : null}>
        {ui.imageSuccess && "Logo url is Valid"}
      </p>
    </>
  );
});

export default Messages;
