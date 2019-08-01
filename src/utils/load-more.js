export const nextPage = (currentPage, totalPages) => {
  const nextPage = currentPage + 1;
  return nextPage <= totalPages ? nextPage : currentPage
};