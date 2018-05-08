import GamePiece from './GamePiece';
import BulletPieces from './BulletPieces';

class Exterminator extends GamePiece {
  constructor(x, y, radius, dx = 2, dy) {
    super(x, y, radius, dx, dy);
    this.radius = 20;
    this.bulletsArray = [];
  }

  move(string) {
  
    if (string === 'left' && this.x >= 60) {
      this.x -= this.dx * 3
    } else if (string === 'right' && this.x <= 940) {
      this.x += this.dx * 3
    } else if (string === 'up' && this.y >= 450) {
      this.y -= this.dy * 3
    } else if (string === 'down' && this.y <= 550) {
      this.y += this.dy * 3
    }
  }

  populate(c) {
  
    c.beginPath();
    // c.fillStyle = 'blue'
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
    c.closePath();
  }

  populateBullets(c) {
    for (let i = 0; i < 5; i++) {
      const bulletPieces = new BulletPieces(10, 10);

      bulletPieces.x = this.x;
      bulletPieces.y = this.y;

      c.beginPath();
      c.arc(bulletPieces.x, bulletPieces.y, bulletPieces.radius, 0,
        Math.PI * 2, false);
      c.fill();
      c.closePath();
      this.bulletsArray.push(bulletPieces);
    }
  }

  moveBullets(c) {
    this.bulletsArray.forEach(bullet => {

      bullet.y -= 13;

      c.beginPath();
      c.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2, false);
      c.fill();
      c.closePath();
    });
  }
}

export default Exterminator;