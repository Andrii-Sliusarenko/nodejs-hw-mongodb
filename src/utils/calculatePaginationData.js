export const calculatePaginationData = (count, perPage, page) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNexPage = Boolean(totalPages - page);
  const hasPrevPage = page !== 1;

  return {
    page,
    perPage,
    totalItems: count,
    totalPages,
    hasNexPage,
    hasPrevPage,
  };
};
