import Segment from './Segment';

class Centipede {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 1;
    this.radius = 30;
    this.centipedeArray = []
  }

  populate(c) {

    let x = -30;
    let y = 30;
    

    for (let i = 0; i < 10; i++) {
      x += 60;
      const segment = new Segment(x, y);

      this.centipedeArray.push(segment);

      c.beginPath();
      c.arc(segment.x, segment.y, segment.radius, 0, Math.PI * 2, false);
      c.fill();
    }
  }

  move(c) {
    this.centipedeArray.forEach(segment => {

      segment.x += segment.dx * 4;

      c.beginPath();
      c.arc(segment.x, segment.y, segment.radius, 0, Math.PI * 2, false);
      c.fill();

      if (segment.x + segment.radius > 1000) {
        segment.y += segment.radius * 2;
        segment.dx = -segment.dx;
      } else if (segment.x - segment.radius < 0) {
        segment.y += segment.radius * 2;
        segment.dx = -segment.dx;
      }

      if (segment.y > 540 && segment.x < segment.radius * 2) {
        segment.y = 30;
        segment.dx = -segment.dx;
      }
    })
  }
}

export default Centipede;