"use strict";

// inviewAnimation
//--------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const _inviewAnimation = function(el, inview) {
    if (inview) {
      el.classList.add("is-inview");
    } else {
      el.classList.remove("is-inview");
    }
  }
  const ob_fadeinList = new ScrollObserver('.anime-fadeinList', _inviewAnimation);
  const ob_fadein = new ScrollObserver('.anime-fadein', _inviewAnimation);
  const ob_zoomin = new ScrollObserver('.anime-zoomin', _inviewAnimation);
});
