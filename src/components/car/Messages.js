import React from "react";
import { observer } from "mobx-react";
import { ui } from "../../store/uiStore";

const Messages = observer(() => {
  return (
    <>
      <p className={ui.errorMessage ? "error" : null}>
        {ui.errorMessage && "Car Brand and Car Model cannot be empty!"}
      </p>
      <p className={ui.imageWarning ? "warning" : null}>
        {ui.imageWarning && "Invalid image url"}
      </p>
      <p className={ui.imageSuccess ? "success" : null}>
        {ui.imageSuccess && "Image url is Valid"}
      </p>
    </>
  );
});

export default Messages;
