export const convertTimeStamp = (timestamp) => {
  const date = new Date(timestamp); // Convert to Date object

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const formatDate = (date) => {
  if (!date) return "";
  let formattedDate;

  if (date && typeof date.toDate === "function") {
    formattedDate = date.toDate();
  } else if (date instanceof Date) {
    formattedDate = date;
  } else {
    formattedDate = new Date(date);
  }

  const day = formattedDate.getDate().toString().padStart(2, "0");
  const month = formattedDate.toLocaleString("default", { month: "long" });
  const year = formattedDate.getFullYear();
  let hours = formattedDate.getHours();
  const minutes = formattedDate.getMinutes().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${day} ${month}, ${year} ${hours}:${minutes} ${ampm}`;
};

export default formatDate;
