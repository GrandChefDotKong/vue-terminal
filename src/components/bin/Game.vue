<template>
    <div class="world" ref="worldEl">
        <div class="score" ref="scoreEl">0</div>
        <div class="start-screen" ref="startScreenEl">Press any key to start</div>
        <img src="@/assets/game/ground.png" alt="ground" class="ground" ref="groundEl1">
        <img src="@/assets/game/ground.png" alt="ground" class="ground" ref="groundEl2">
        <img src="@/assets/game/dino-stationary.png" alt="dino" class="dino" ref="dinoEl">
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import useProccess from '@/composables/useProcess';
import { updateGround, setupGround } from "@/composables/game/ground";
import { updateDino, setupDino, getDinoRect, setDinoLose } from "@/composables/game/dino";
import { updateCactus, setupCactus, getCactusRects } from "@/composables/game/cactus";

export default defineComponent ({
  name: 'game',
  setup() {
    const worldEl = ref<HTMLElement | null>(null);
    const scoreEl = ref<HTMLElement | null>(null);
    const startScreenEl = ref<HTMLElement | null>(null);
    const groundEl1 = ref<Element | null>(null);
    const groundEl2 = ref<Element | null>(null);
    const dinoEl = ref<HTMLImageElement | null>(null);

    const WORLD_WIDTH = 100;
    const WORLD_HEIGHT = 30;
    const SPEED_SCALE_INCREASE = 0.00001

    onMounted(() => {

      let lastTime: number | null;
      let speedScale: number;
      let score: number;

      const setPixelToWorldScale = () => {
        let worldToPixelScale;
        if(window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
          worldToPixelScale = window.innerWidth / WORLD_WIDTH;
        } else {
          worldToPixelScale = window.innerHeight /WORLD_HEIGHT;
        }

        if(!worldEl.value) return;

        worldEl.value.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
        worldEl.value.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
      }

      setPixelToWorldScale()
      window.addEventListener("resize", setPixelToWorldScale)
      document.addEventListener("keydown", handleStart, { once: true })


      function update(time: number) {
        if (lastTime == null) {
            lastTime = time
            window.requestAnimationFrame(update)
            return
        }

        const delta = time - lastTime

        if(groundEl1.value && groundEl2.value) {
          updateGround([groundEl1.value, groundEl2.value], delta, speedScale)
        }
        if(dinoEl.value) {
          updateDino(dinoEl.value, delta, speedScale);
        }
        if(worldEl.value) {
          updateCactus(worldEl.value, delta, speedScale)
        }
        updateSpeedScale(delta)
        updateScore(delta)
        if (checkLose()) return handleLose();

        lastTime = time
        window.requestAnimationFrame(update)
      }

      function checkLose() {
        if(dinoEl.value) {
          const dinoRect = getDinoRect(dinoEl.value)
          return getCactusRects().some(rect => isCollision(rect, dinoRect))
        }
      }

      function isCollision(rect1: DOMRect, rect2: DOMRect) {
        return (
          rect1.left < rect2.right &&
          rect1.top < rect2.bottom &&
          rect1.right > rect2.left &&
          rect1.bottom > rect2.top
        )
      }

      function updateSpeedScale(delta: number) {
        speedScale += delta * SPEED_SCALE_INCREASE
      }

      function updateScore(delta: number) {
        score += delta * 0.01;
        if(!scoreEl.value) return;
        scoreEl.value.textContent = Math.floor(score).toString();
      }

      function handleStart() {
        lastTime = null;
        speedScale = 1;
        score = 0;
        if(groundEl1.value && groundEl2.value) {
          setupGround([groundEl1.value, groundEl2.value]);
        }
        if(dinoEl.value) {
          setupDino(dinoEl.value);
        }
        setupCactus();
        if(startScreenEl.value) {
          startScreenEl.value.classList.add("hide");
        }

        window.requestAnimationFrame(update);
      }

      function handleLose() {
        if(dinoEl.value) setDinoLose(dinoEl.value);
        setTimeout(() => {
          document.addEventListener("keydown", handleStart, { once: true })
          startScreenEl.value?.classList.remove("hide")
        }, 100);
      }
    });

    return { worldEl, scoreEl, startScreenEl, groundEl1, groundEl2, dinoEl }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*, *::before, *::after {
    box-sizing: border-box;
    user-select: none;
}
body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow-x: hidden;
    
}
.world {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 150px;
}
.score {
    position: absolute;
    font-size: 3vmin;
    right: 1vmin;
    top: 1vmin;
}
.start-screen {
    position: absolute;
    font-size: 3vmin;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.hide {
    display: none;
}
.ground {
    --left: 0;
    position: absolute;
    width: 300%;
    bottom: 0;
    left: calc(var(--left) * 1%);
}
.dino {
    --bottom: 0;
    position: absolute;
    left: 1%;
    height: 20%;
    bottom: calc(var(--bottom) * 1%);
}
</style>
<style>
.cactus {
    position: absolute;
    left: calc(var(--left) * 1%);
    bottom: 0;
    height: 20%;
}
</style>
























