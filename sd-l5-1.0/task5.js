export function rubricPassFail(grade) {
  grade = Number(grade);
  return (grade > 4)? 'Pass': 'Fail';
}
