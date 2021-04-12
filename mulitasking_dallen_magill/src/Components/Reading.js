import data from "./Data/data.json";
// import React, { useState } from "react";

function Reading() {
  const readingTitle = data[0].reading.title;
  const readingSubTitle = data[0].reading.subtitle;
  const readingContent = data[0].reading.text;

  return (
    <div>
      <h1>{readingTitle}</h1>
      <h2><i>{readingSubTitle}</i></h2>
      <p>{readingContent}</p>

    </div>
  );
}
export default Reading;
