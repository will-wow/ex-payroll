/**
 * @typedef {Object} Employee
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} title
 * @property {number} wage
 */

/**
 * @param {Employee} employee
 * @returns {string}
 */
export const displayName = ({ firstName, lastName, title }) =>
  `${firstName} ${lastName}: ${title}`;

/**
 * @param {Employee} employee
 * @param {number} hours
 * @returns {number}
 */
export const pay = ({ wage }, hours) => hours * wage;
