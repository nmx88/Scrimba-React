import React from "react";

function TimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let xtimeOfDay;
  const styles = {
    fontSize: 35,
    color: "#DD3434"
  }

  if (hours >= 7 && hours < 12) {
    xtimeOfDay = "Morning";
    styles.color = "#835340";
  } else if (hours >= 12 && hours < 17) {
    xtimeOfDay = "Afternoon";
    styles.color = "#345934";
  } else {
    xtimeOfDay = "Night";
    styles.color = "#FF9349";
  }
  return <h3 style={styles}>Current part of the day is: {xtimeOfDay} </h3>;
}

export default TimeOfDay;
