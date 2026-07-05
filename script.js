const clock = document.querySelector("#clock");

const pad = (value) => String(value).padStart(2, "0");

const updateClock = () => {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Warsaw",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(now);

  const get = (type) => parts.find((part) => part.type === type)?.value || "";
  const day = get("day");
  const month = get("month");
  const year = get("year");
  const hour = pad(get("hour"));
  const minute = get("minute");
  const period = get("dayPeriod").toLowerCase();

  if (clock) {
    clock.textContent = `${day}/${month}/${year} ${hour}:${minute}${period} WAW`;
  }
};

updateClock();
if (clock) {
  window.setInterval(updateClock, 30000);
}
