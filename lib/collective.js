
class Collective {
    constructor(children=[]){
  
      this.children = children;
    }
      render() {
        throw new Error('Child class must implement render() method.');
      }
      
      renderInnerHTMLString(){
        return this.children.map(function(child){
          if (typeof child === "String"){
            return child;
          }
          return child.render();
         }).join('')
      }
  
    }

    module.exports = Collective;