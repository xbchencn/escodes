(function () {
  var input = document.createElement('input');

  window.supports = {
    // 检测input是否支持placeholder特性
    placeholder: 'placeholder' in input
  }
})();

// 绑定input的placeholder
function bindPlaceholder(input) {
  if(!window.supports.placeholder) {
    var jqInput = $(input),
      placeholder = jqInput.attr("placeholder");

    if(placeholder) {
      jqInput.focus(function() {
        if(this.value === placeholder) {
          $(this).removeClass("placeholder");
          this.value = "";
        }
      }).blur(function() {
        if(this.value === "") {
          $(this).addClass("placeholder");
          this.value = placeholder;
        }
      });

      if(input.value === "") {
        input.value = placeholder;
        $(input).addClass("placeholder");
      }
    }
  }
}

// $("input[placeholder], textarea[placeholder]").each(function() {
//   bindPlaceholder(this);
// });
