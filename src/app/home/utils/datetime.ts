export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();

  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const thatDay = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

  let diffInDays = Math.floor((today - thatDay) / (1000 * 60 * 60 * 24));

  if (diffInDays < 0) diffInDays = 0;

  if (diffInDays === 0) {
    return "Today";
  } else if (diffInDays === 1) {
    return "Yesterday";
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
};
