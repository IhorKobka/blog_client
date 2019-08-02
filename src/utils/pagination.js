export const nextPage = ({current_page, total_pages}) => {
  if (!current_page) {
    return null
  }

  const nextPage = current_page + 1;
  return nextPage <= total_pages ? nextPage : null
};