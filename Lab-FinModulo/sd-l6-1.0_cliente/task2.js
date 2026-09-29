import { getServerURL } from './task1.js';

// Task 2: listUsers()

export function listUsers() {
  fetch(getServerURL() + '/users').then(response => response.json()).then(data => console.log(data));
}
