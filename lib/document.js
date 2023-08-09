

function createDocument(ShapeItem, TextItem) {
    const newShapeItem = new ShapeItem();
    const newTextItem = new TextItem();
    const Collective = items.map(items => {
      return new Collective([items.textItem], items.hexdecimal);
    })
  
    return `<svg viewbox="0 0 200 300">
  
      <svg viewBox="0 0 1200 400"
       xmlns="http://www.w3.org/2000/svg" version="1.1">
  
      ${TextItem.render()}

  
      ${ShapeItem.render()}
      ${color.render()}
  
  
      </svg>
      `;
  }

  module.exports = { createDocument };