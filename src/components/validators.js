export const required = value => value === undefined ? 'Required' : undefined;

export const isEmpty = value => value.trim() === '' ? 'Cannot be empty' : undefined;

export const isTrimmed = value => value.trim() === value ? undefined : 'Cannot start or end with whitespace';

export const isNumber = value => Number(value) ? undefined : 'Must be numbers only';

export const lengthCheck = length => value => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters long`;
  }
  if (length.max && value.length > length.max) {
    return `Must be at most ${length.max} characters long`;
  }
};

export const matchCheck = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined
    : 'Does not match';

export const classCheck = value => value === 'Choose a class' ? 'Required' : undefined;
