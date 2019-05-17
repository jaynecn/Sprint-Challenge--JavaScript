// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
  constructor(info) {
    this.length = info.length;
    this.width = info.width;
    this.height = info.height;
  }
  volume() {
    return(this.length * this.width * this.height)
  }

  surfaceArea() {
    return((this.length * this.width + this.length * this.height + this.width * this.height) * 2);

  }
}

class CubeMaker extends CuboidMaker {
  constructor(info) {
    super(info);
  }

  volumeCube() {
    let result = Math.pow(this.width, 3);
    return result;
  }
  surfaceCube() {
    let squaring = Math.pow(this.width, 2);
    // console.log(squaring);
    let surfaceArea = squaring * 6;
    // console.log(surfaceArea);
    return surfaceArea;
  }
}

const cuboid = new CuboidMaker (
  {length: 4, width: 5, height: 5});

const cube = new CubeMaker ({
  length: 3, width: 3, height: 3});




// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volumeCube());
console.log(cube.surfaceCube());


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.