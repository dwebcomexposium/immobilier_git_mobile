/**
 * Created by Boubou on 28/06/2016.
 * Updated By Guillaume on 10/11/2016.
 */
(function ($) {
  var $newsletterBtn = $('<li class="ql-item ql-item-custom added-by-js">' +
    '  <a class="btn-primary btn-newsletter" href="#newsletter">' +
    '   <span class="icon icon-email"></span>' +
    '   <span class="txt-btn">Newsletter</span>' +
    '  </a>' +
    '</li>');
  var $newsletterClose = $('<a />').attr('href', '#close').addClass('btn-close');
  var $newsletterBlock = $('.block.newsletter-form').hide();


  $(document).ready(function () {
    $newsletterBtn.appendTo(".quicklinks.links .ql-list");
    $newsletterClose.insertBefore($newsletterBlock.find(".nf-main-content .box-dark"));
  });

  $newsletterBtn.click(function (e) {
    e.preventDefault();
    $newsletterBlock.show();
  });

  $newsletterClose.click(function (e) {
    e.preventDefault();
    $newsletterBlock.hide();
  });

  // click outside
  $(document).on('click', '.block-page.newsletter-form', function (e) {
    if (e.target != this) return;
    $newsletterBlock.hide();
  });

})(jQuery);
