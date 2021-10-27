export const computeQueryParameters = (search: string) => {
  if (!search || search[0] !== "?") return null;
  const cleanedSearch = search.slice(1);
  const computedObject: { [key: string]: string } = {};
  cleanedSearch.split("&").forEach((part) => {
    const [key, value] = part.split("=");
    computedObject[key] = value;
  });

  return computedObject;
};
