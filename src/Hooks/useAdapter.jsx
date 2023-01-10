const useAdapter = ({ isData }) => {
  return [
    isData.map((item) => {
      return {
        id: item._id || "",
        quote: item.quote || "",
        author: item.author || "",
        authorSlug: item.authorSlug || "",
      };
    }),
  ];
};

export default useAdapter;
