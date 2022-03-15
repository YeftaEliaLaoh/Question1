class Screen { 
    constructor(height,width) {  // Constructor
      this.height = height;
      this.width = width;
    }
  
    diagonal() {
      return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
    }
    
    dimensions(definition) {
      var dimensions = definition.split('x')
      this.width = parseInt(dimensions[0]);
      this.height = parseInt(dimensions[1]);
    }
    
    width(width) {
      this.width = width;
    }
  }
  
  var screen = new Screen(0, 0);
  screen.dimensions = '500x300';
  screen.width = 400;
  console.log(screen.diagonal); // Should print 500


