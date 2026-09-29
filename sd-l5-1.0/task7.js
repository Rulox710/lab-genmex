import { rubricExcellent } from './task6.js';

export function rubricPerfect(grade) {
  grade = Number(grade);
  if(grade === 11) return 'Perfect';
  else return rubricExcellent(grade);
}
