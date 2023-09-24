export function dataParaISO8601(data: string) {
  const formattedDate = data.replace(/\//g, '-');

  const day = data.slice(0, 2);
  const mont = data.slice(2, 4);
  const year = data.slice(4, 8);

  const completeData = `${year}-${mont}-${day}`;

  return new Date(formattedDate);
}

export function convertDate(data: string) {
  const day = data.slice(0, 2);
  const mont = data.slice(2, 4);
  const year = data.slice(4, 8);

  const completeData = `${day}/${mont}/${year}`;

  return completeData;
}
