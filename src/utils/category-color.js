export const categoryColor = (categoryId) => {
  switch (categoryId) {
    case 1:
      return 'green';
    case 2:
      return 'orange';
    case 3:
      return 'violet';
    case 4:
      return 'blue';
    default:
      return null
  }
};