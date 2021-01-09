export const getSafeDateString = (dateToParse) => {
  const dobValue = new Date(dateToParse);

  const isDateValid = !Number.isNaN(dobValue.valueOf());

  const givenDate = isDateValid ? dobValue : undefined;

  const selectedDate = givenDate || null;

  return selectedDate ? selectedDate.toDateString() : '';
};
