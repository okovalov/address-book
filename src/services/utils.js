export const getSafeDateString = (dateToParse, toIso = false) => {
  const dobValue = new Date(dateToParse);

  const isDateValid = !Number.isNaN(dobValue.valueOf());

  const givenDate = isDateValid ? dobValue : undefined;

  const selectedDate = givenDate || null;

  let selectedDateString = selectedDate ? selectedDate.toDateString() : '';

  if (toIso) {
    selectedDateString = selectedDate ? selectedDate.toISOString() : '';
  }

  return selectedDateString;
};
