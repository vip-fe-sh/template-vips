let addClass = (item) => {
  let result;
  switch (item.class) {
    case 'a':
      result = '<em class="font-red">' + item.name + '</em>';
      break;
    case 'b':
      result = '<em class="font-yellow">' + item.name + '</em>';
      break;
    case 'c':
      result = '<em class="font-blue">' + item.name + '</em>';
      break;
  }
  return result;
};

module.exports = {
  addClass: addClass
};
