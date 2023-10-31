const getDateAndTime = (date: Date) => {
  function addZero(num: number) {
    return (num + "").length === 2 ? num : "0" + num;
  }

  const h = date.getHours();
  const m = date.getMinutes();

  const timeString = addZero(h) + ":" + addZero(m);

  const dateString =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  return { date: dateString, time: timeString };
};

export default getDateAndTime;
