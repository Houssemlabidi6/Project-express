const currentDate = new Date();
const currentDates = (req, res, next) => {
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 9 &&
    currentHour < 17
  ) {
    next(); // Continue to the next middleware
  } else {
    res.send(
      "The web application is only available during working hours (Mon-Fri, 9AM to 5PM)."
    );
  }
};

module.exports = currentDates;
