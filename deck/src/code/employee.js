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
 * @param {number} hours
 * @param {Employee} employee
 * @returns {number}
 */
export const pay = (hours, { wage }) => hours * wage;
