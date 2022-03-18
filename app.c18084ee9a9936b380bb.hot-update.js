webpackHotUpdate("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './scss/custom.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './scss/style.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './css/style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-jquery-ui */ \"./node_modules/webpack-jquery-ui/index.js\");\n/* harmony import */ var webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery/dist/jquery.min */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var popper_js_dist_popper_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popper.js/dist/popper.min */ \"./node_modules/popper.js/dist/popper.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min */ \"./node_modules/@fortawesome/fontawesome-free/js/all.min.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var webpack_jquery_ui_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! webpack-jquery-ui/css */ \"./node_modules/webpack-jquery-ui/css.js\");\n/* harmony import */ var webpack_jquery_ui_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(webpack_jquery_ui_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var jquery_ui_touch_punch_jquery_ui_touch_punch_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery-ui-touch-punch/jquery.ui.touch-punch.min.js */ \"./node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js\");\n/* harmony import */ var jquery_ui_touch_punch_jquery_ui_touch_punch_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_touch_punch_jquery_ui_touch_punch_min_js__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$(function(){\n\t$('[data-toggle=\"tooltip\"]').tooltip()\n    $('.add-to-cart-btn').click(function(){\n        alert('أضيف النتج إلى عربة الشراء');\n    });\n\n    $('#copyright').text(\"جميع الحقوق محفوظة للمتجر سنة\" + new Date().getFullYear());\n\n\n    $('.product-option input[type=\"radio\"]').change(function() {\n        $(this).parents('.product-option').siblings().removeClass('active');\n        $(this).parents('.product-option').addClass('active');\n    });\n\n    // عندما تتغير كمية المنتج\n  $('[data-product-quantity]').on( \"change\",function() {\n      \n    // اجلب الكمية الجديدة\n    var newQuantity = $(this).val();\n\n    // ابحث عن السّطر الّذي يحتوي معلومات هذا المُنتج\n    var $parent = $(this).parents('[data-product-info]');\n\n    // اجلب سعر القطعة الواحدة من معلومات المنتج\n    var pricePerUnit = $parent.attr('data-product-price');\n\n    // السعر الإجمالي للمنتج هو سعر القطعة مضروبًا بعددها\n    var totalPriceForProduct = newQuantity * pricePerUnit;\n\n    // عين السعر الجديد ضمن خليّة السّعر الإجمالي للمنتج في هذا السطر\n    $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');\n\n   // حدث السعر الإجمالي لكل المُنتجات\n   calculateTotalPrice();\n});\n\n$('[data-remove-from-cart]').click(function(){\n    $(this).parents('[data-product-info]').remove();\n    //أعد حساب السعر الإجمالي بعد حذف المنتجات\n    calculateTotalPrice();\n});\nfunction calculateTotalPrice() {\n    \n  // أنشئ متغيّرًا جديدًا لحفظ السعر الإجمالي\n  var totalPriceForAllProducts = 0;\n\n  // لكل سطر يمثل معلومات المُنتج في الصّفحة\n  $('[data-product-info]').each(function() {\n\n      // اجلب سعر القطعة الواحدة من الخاصّية الموافقة\n      var pricePerUnit = $(this).attr('data-product-price');\n\n      // اجلب كمية المنتج من حقل اختيار الكمية\n      var quantity = $(this).find('[data-product-quantity]').val();\n\n      var totalPriceForProduct = pricePerUnit * quantity;\n\n      // أضف السعر الإجمالي لهذا المنتج إلى السعر الإجمالي لكل المُنتجات، واحفظ القيمة في المتغير نفسه\n      totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForProduct);\n      \n  });\n\n    // حدث السعر الإجمالي لكل المُنتجات في الصفحة\n  $('#total-price-for-all-products').text(totalPriceForAllProducts + '$');\n}\nvar citiesByCountry = {\n    sa: ['الرياض','جدة'],\n    eg: ['القاهرة','الإسكندرية'],\n    jo: ['عمان','الزرقاء'],\n    sy: ['دمشق','حلب','حماه']\n};\n     // عندما يتغير البلد\n  $('#form-checkout select[name=\"country\"]').on( \"change\",function() {\n      // اجلب رمز البلد\n    var country = $(this).val();\n    // اجلب مدن هذا البلد من المصفوفة\n    var cities = citiesByCountry[country];\n    // فرّغ قائمة المدن\n    $('#form-checkout select[name=\"city\"]').empty();\n    //إضافة خيار اختر مدينه\n    $('#form-checkout select[name=\"city\"]').append(\n        '<option disabled selected value=\"\">اختر المدينة</option>'\n    );\n     // أضف المدن إلى قائمة المدن\n     cities.forEach(function(city) {\n        var newOption = $('<option></option>');\n        newOption.text(city);\n        newOption.val(city);\n        $('#form-checkout select[name=\"city\"]').append(newOption);\n      });\n\n  });\n  // عندما تتغير طريقة الدفع\n  $('#form-checkout input[name=\"payment_method\"]').change(function() {\n\n    // اجلب القيمة المُختارة حاليًا\n    var paymentMethod = $(this).val();\n\n    if (paymentMethod === 'on_delivery') {\n\n      // إذا كانت عند الاستلام، فعطّل حقول بطاقة الائتمان\n      $('#credit-card-info input').prop('disabled', true);\n\n    } else {\n\n      // وإلا ففعلّها\n      $('#credit-card-info input').prop('disabled', false);\n    }\n  \n    // بدل معلومات بطاقة الائتمان بين الظهور والإخفاء\n    $('#credit-card-info').toggle();\n  });\n  \n     //مكون البحث حسب السعر\n  \n    $( \"#price-range\" ).slider({\n      range: true,\n      min: 50,\n      max: 1000,\n      step: 50,\n      values: [ 250, 800 ],\n      slide: function( event, ui ) {\n      $('#price-min').text(ui.values[0]);\n      $('#price-max').text(ui.values[1]);\n  } \n});\n\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

})