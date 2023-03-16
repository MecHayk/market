export const searchItems = (obj, value) => {
  return obj.filter((item) => item.name.toLocaleLowerCase().includes(value.toLowerCase()));
}; 