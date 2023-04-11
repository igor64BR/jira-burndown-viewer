export default (data) => {
  const outputData = {};
  const dates = new Set();

  data.data.forEach((dateStatusesObj) => {
    const day = Object.keys(dateStatusesObj)[0];
    const statusObjects = JSON.parse(Object.values(dateStatusesObj)[0]);

    Object.entries(statusObjects).forEach(([status, quantity]) => {
      if (!outputData.hasOwnProperty(status)) {
        outputData[status] = {};
      }
      outputData[status][day] = quantity;
      dates.add(day);
    });
  });

  for (const dateToAdd of dates) {
    for (const dateQuantityObj of Object.values(outputData)) {
      if (!dateQuantityObj.hasOwnProperty(dateToAdd)) {
        dateQuantityObj[dateToAdd] = 0;
      }
    }
  }

  return outputData;
};
