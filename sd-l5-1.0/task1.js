export function costCalculator(amount) {
  amount = Number(amount);
  let fee = 3 + (amount * 0.01);
  return amount + fee;
}
