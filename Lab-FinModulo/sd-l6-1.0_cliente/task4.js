import { getServerURL } from './task1.js';

// Task 4: delUser(number)

export function delUser(id) {
  fetch(getServerURL() + `/users/${id}`, {method: 'DELETE'});
}
