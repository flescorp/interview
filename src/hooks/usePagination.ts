function usePagination(data: any) {
  let obj = {
    from: 0,
    to: 0,
    total: 0,
    current_page: 0,
    per_page: 0,
    data: [],
  };

  if (data) {
    obj = {
      ...data,
    };
  }

  return obj;
}

export default usePagination;
