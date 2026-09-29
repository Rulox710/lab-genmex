import { getServerURL } from './task1.js';

// Task 3: addUser(first_name, last_name, email)

export function addUser(firstName, lastName, email) {
  fetch(getServerURL() + '/users', {
    method: "POST",
    body: JSON.stringify({
      'first_name': firstName,
      'last_name': lastName,
      'email': email
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  });
}
