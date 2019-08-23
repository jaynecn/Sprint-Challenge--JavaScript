// // 1. Copy and paste your prototype in here and refactor into class syntax.

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
  constructor(length, width, height) {
    super(length, width, height);
  }
  cubeVolume() {
    return(this.length * this.width * this.height)
  }

  cubeSurfaceArea() {
    return((this.length * this.length) * 6);
  }
}

const cuboid = new CuboidMaker (
  {length: 4, width: 5, height: 5});

const jayneCube = new CubeMaker (
  {length: 4, width: 4, height: 4});

console.log(jayneCube.cubeVolume());
console.log(jayneCube.cubeSurfaceArea());


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.