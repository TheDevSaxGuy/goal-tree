import Leaf  from "./leaf";
const BODY_COLOR = '#e84393'
const GROUND_COLOR = '#32ff7e'
const TRUNK_COLOR = '#FF5722'
const TEST_BORDER = '#0000000'
const PAPER_BG_COLOR = '#17212B'
const DARK_BLUE = '#0e2845'
const POINT_SIZE = 30
const TRUNK_SIZE = 80

const container = {
  color: PAPER_BG_COLOR,
  opacity: 1.0,
  xRange: 1000,
  yRange: 1000
}
const trunk = {
  x0: [0],
  y0: [-200],
  x1: [0],
  y1: [100],
  color: TRUNK_COLOR,
  opacity: 0.9,
  size: TRUNK_SIZE,
  type: 'lines',
  id: 'six-legs'
}
const ground = {
  x0: [-500],
  y0: [-200],
  x1: [500],
  y1: [-200],
  color: GROUND_COLOR,
  size: 100,
  type: 'lines',
  id:'ground'
}

const roots = {
  x: [-100, -40, 40, 100],
  y: [-200, -150, -150, -200],
  fillColor: TRUNK_COLOR,
  fillOpacity: 1.0,
  borderColor: TRUNK_COLOR,
  borderOpacity: 0,
  borderSize: 0,
  type: 'polygon',
  id: 'roots'
}
/*const ellipse1 = new Leaf(-50, 100, "1");
const ellipse2 = new Leaf(-25, 100, "2");
const leaf = new Leaf(0,100, "3");*/
let elements = [ground, roots, trunk]

const generateLeafs = (leafs) => {
  let y = 100;
  for (let index = 0; index < leafs; index++) {
        let x = -50 + ((index % 5) * 25);
        if(index % 5 == 0 && index != 0){
          y = y + 30;
          x = -50;
        }
        elements.push(new Leaf(x, y))
  }
}
generateLeafs(0);
const props = {
  container,
  data: elements
}

export default props;