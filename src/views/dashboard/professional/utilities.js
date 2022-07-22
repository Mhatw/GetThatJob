export function postedString(created) {
  const posted = (new Date() - new Date(created)) / (1000 * 60);
  let string;
  if (posted < 60) {
    string = `${Math.round(posted)} min ago`;
  } else if (posted < 1440) {
    string = `${Math.round(posted / 60)} hours ago`;
  } else if (posted < 2880) {
    string = `${Math.round(posted / 1440)} day ago`;
  }
  return string;
}

export function salaryString(min, max) {
  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
  };
  const salary = `${formatCash(min)} - ${formatCash(max)}`;
  return `$${salary}`;
}
