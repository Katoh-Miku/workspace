"use strict";

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    addText(document.querySelector(".js-addText"));
    addNode(document.querySelectorAll(".js-addNode"));
  }, 2000);

  observeListChanges();
});

function addText (el) {
  console.log('要素を追加しました。');
  el.textContent = "2秒後に要素を追加します。【追加しました】"
}

function addNode (els) {
  els.forEach((el) => {
    el.innerHTML = `
      <section class="grid__item card">
        <a href="" class="card__inner">
          <figure class="card__thumb"><img src="https://placehold.jp/500x500.png" alt="" /></figure>
        </a>
      </section>
    `;
  });
}

function removeNodes(parentNode) {
  const childNodes = Array.from(parentNode.children);
  childNodes.forEach(node => {
    if (!node.classList.contains('js-addNode')) {
      node.remove();
    }
  });
}

function observeListChanges() {
  const targetNodes = document.querySelectorAll('.js-target');
  
  const observer = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'childList') {
        removeNodes(mutation.target.parentElement);
      }
    });
    observer.disconnect();
  });

  const config = { childList: true, subtree: true };
  targetNodes.forEach(targetNode =>{
    observer.observe(targetNode, config);
  })
}