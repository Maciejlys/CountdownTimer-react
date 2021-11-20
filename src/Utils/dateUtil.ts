const getTotalTime = (dueDate: string, dueTime: string) => {
  return new Date(dueDate + " " + dueTime).getTime();
};

export const countDownInterval = (dueDate: string, dueTime: string) => {
  const now = new Date().getTime();

  var distance = getTotalTime(dueDate, dueTime) - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};
