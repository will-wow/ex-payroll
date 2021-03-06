export interface Employee {
  firstName: string;
  lastName: string;
  title: string;
  wage: number;
}

export const displayName = ({ firstName, lastName, title }: Employee): string =>
  `${firstName} ${lastName}: ${title}`;

export const pay = ({ wage }: Employee, hours: number): number => hours * wage;
