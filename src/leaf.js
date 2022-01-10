class Leaf {
  constructor(cx, cy, id){
    this.cx = cx;
    this.cy = cy;
    this.rx = 20;
    this.ry = 30;
    this.theta = 45;
    this.fillColor = '#32ff7e';
    this.fillOpacity = 0.9;
    this.borderColor = '#32ff7e';
    this.borderOpacity = 1;
    this.borderSize = 5;
    this.type = 'ellipse';
    this.id = id;
  }
}

export default Leaf;