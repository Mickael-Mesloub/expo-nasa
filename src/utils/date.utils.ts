/**
 * Returns a new Date representing the date n days before the given date without modifying it
 *
 * @param givenDate - The reference date
 * @param n - The number of days to subtract
 * @returns A new Date object set to n days before the given date
 */
export const getDateNDaysBefore = (givenDate: Date, n: number): Date => {
  const dateCopy = new Date(givenDate);
  dateCopy.setDate(dateCopy.getDate() - n);

  return dateCopy;
};
