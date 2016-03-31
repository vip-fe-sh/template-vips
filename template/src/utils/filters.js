// filter to addClass
let addClass = (item) => {
  switch (item.class) {
    case 'a':
      return '<em class="font-red">' + item.name + '</em>';
    case 'b':
      return '<em class="font-yellow">' + item.name + '</em>';
    case 'c':
      return '<em class="font-blue">' + item.name + '</em>';
  }
};

module.exports = {
  addClass: addClass
};
