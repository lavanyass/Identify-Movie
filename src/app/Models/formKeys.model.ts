const FIRST_NAME = 'firstName';
const LAST_NAME = 'lastName';
const FULL_NAME = 'fullName';
const SUBSCRIBE_NEWS_LETTER = 'subscribeNewsLetter';
const DEPARTMENT = 'department';
export const formKeys = {
  FIRST_NAME,
  LAST_NAME,
  FULL_NAME,
  SUBSCRIBE_NEWS_LETTER,
  DEPARTMENT,
};

export interface employeeForm {
  [FIRST_NAME]: string;
  [LAST_NAME]: string;
  [FULL_NAME]: string;
  [DEPARTMENT]: string;
  [SUBSCRIBE_NEWS_LETTER]: boolean;
}
