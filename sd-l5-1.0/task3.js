export function ageCalculator(year, month, day) {
  const today = new Date();
  let age = today.getFullYear() - year;

  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  if (currentMonth < month || (currentMonth === month && currentDay < day)) age--;

  return age;
}
