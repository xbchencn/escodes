String.prototype.httpHtml = function(){
  var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-|:)+)/g;

  return this.replace(reg, '<a href="$1$2">$1$2</a>');
};
