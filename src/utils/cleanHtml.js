const cleanHtml = ((text) => {
  const regex = RegExp(/<[^>]+>/g);
  return text.replace(regex, "");
});

export default cleanHtml;