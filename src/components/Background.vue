<template>
  <div class="background-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style>
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>

<script>
export default {
  name: 'Background',
  mounted() {
    this.drawBackground();
  },
  methods: {
    drawBackground() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      const width = window.innerWidth;
      const height = window.innerHeight;

      // 设置 Canvas 宽度和高度
      canvas.width = width;
      canvas.height = height;

      // 定义线条数组
      const lines = [];

      // 定义线条对象
      class Line {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.length = Math.random() * 10;
          this.radian = Math.random()  * (2 * Math.PI);
          this.vx = Math.sin(this.radian) * this.length;
          this.vy = Math.cos(this.radian) * this.length;
          this.lineWidth = Math.random() * 3;
          this.color = generateRandomColor();
          this.speed = Math.random() * 0.5 + 0.5;
        }

        // 绘制线条
        draw() {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x + this.vx * 10, this.y + this.vy * 10);
          ctx.lineWidth = this.lineWidth;
          ctx.strokeStyle = this.color;
          ctx.stroke();
        }

        // 更新线条位置
        update() {
          this.x += this.vx * this.speed;
          this.y += this.vy * this.speed;

          // 边界检测，使线条在 Canvas 范围内反弹
          if (this.x < 0 || this.x > canvas.width) {
            this.vx *= -1;
          }
          if (this.y < 0 || this.y > canvas.height) {
            this.vy *= -1;
          }
        }
      }

      // 生成随机浅色调
      function generateRandomColor() {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 50) + 50; // 控制饱和度在 50%-100% 之间
        const lightness = Math.floor(Math.random() * 25) + 75; // 控制亮度在 75%-100% 之间
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      }

      // 创建线条对象并添加到线条数组中
      for (let i = 0; i < 100; i++) {
        lines.push(new Line());
      }

      // 绘制线条
      function drawLines() {
        ctx.clearRect(0, 0, width, height);
        for (const line of lines) {
          line.draw();
          line.update();
        }
      }

      // 定期绘制线条
      function animate() {
        requestAnimationFrame(animate);
        drawLines();
      }

      // 开始动画
      animate();
    },
  },
};
</script>