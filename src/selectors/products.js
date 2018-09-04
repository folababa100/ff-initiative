export default (products, { text, sortBy }) => {
  return products.filter((product) => {
    const textMatch = product.name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'createdAt') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'name') {
      return a.name < b.name ? 1 : -1;
    }
  })
}
