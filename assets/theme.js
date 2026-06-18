/* PrimeLiva theme — light interactivity */
(function () {
  // FAQ <details> single-open behaviour (optional nicety)
  document.addEventListener('click', function (e) {
    var sum = e.target.closest('.faq__q');
    if (!sum) return;
    var open = sum.parentNode;
    document.querySelectorAll('.faq__item[open]').forEach(function (d) {
      if (d !== open) d.removeAttribute('open');
    });
  });
})();
