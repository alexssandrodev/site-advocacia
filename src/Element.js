class Element {

  create(element, className, id) {
    const el = document.createElement(element);
    el.classList.add(className);
    el.setAttribute('id', id);
    return el;
  }

  select(element) {
    return document.querySelector(element);
  }

  selectAll(elements) {
    return document.querySelectorAll(elements);
  }

}

export { Element }
