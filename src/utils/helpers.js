import { formatDistance, parseISO, differenceInDays } from "date-fns";

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "EUR" }).format(
    value,
  );

export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const stringSlicer = (str, num = 15) => {
  if (str === null || str?.length < 15) return str;
  return str.slice(0, num) + "...";
};

export const fromatDateWithSuffix = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", {
    month: "long",
  });

  function getSuffix(day) {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return `${month} ${day}${getSuffix(day)}, ${year}`;
};
