import { rubricPassFail } from './task5.js';

export function rubricExcellent(grade) {
  grade = Number(grade);
  if(grade > 8) return 'Excellent';
  else return rubricPassFail(grade);
}
