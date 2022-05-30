import {
  incrementCustomProperty,
  setCustomProperty,
  getCustomProperty,
} from "./updateCustomProperty"

const JUMP_SPEED = 0.45;
const MOV_SPEED = 0.04;
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping: boolean;
let dinoFrame: number;
let currentFrameTime: number;
let yVelocity: number;
let xVelocity: number;

export function setupDino(dinoElem: HTMLImageElement) {
  isJumping = false;
  dinoFrame = 0;
  currentFrameTime = 0;
  yVelocity = 0;
  setCustomProperty(dinoElem, "--bottom", 0);
  document.removeEventListener("keydown", handleKeyDown);
  document.addEventListener("keydown", handleKeyDown);
  document.removeEventListener("keyup", handleKeyUp);
  document.addEventListener("keyup", handleKeyUp);
}

export function updateDino(dinoElem: HTMLImageElement, delta: number, speedScale: number) {
  handleRun(dinoElem, delta, speedScale);
  handleJump(dinoElem, delta);
}

export function getDinoRect(dinoElem: HTMLImageElement) {
  return dinoElem.getBoundingClientRect();
}

export function setDinoLose(dinoElem: HTMLImageElement) {
  dinoElem.src = "./game/dino-lose.svg"
}

function handleRun(dinoElem: HTMLImageElement, delta: number, speedScale: number) {
  if (isJumping) {
    dinoElem.src = `./game/dino-stationary.svg`;
    return;
  }

  incrementCustomProperty(dinoElem, "--left", xVelocity * delta);
  if (getCustomProperty(dinoElem, "--left") <= 0) {
    setCustomProperty(dinoElem, "--left", 0);
  }

  if (currentFrameTime >= FRAME_TIME) {
    dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
    dinoElem.src = `./game/dino-run-${dinoFrame}.svg`;
    currentFrameTime -= FRAME_TIME;
  }

  currentFrameTime += delta * speedScale;
}

function handleKeyDown(e: KeyboardEvent) {

  if(e.code === "ArrowRight" && !isJumping) {
    xVelocity = MOV_SPEED;
  }

  if(e.code === "ArrowLeft" && !isJumping) {
    xVelocity = -MOV_SPEED;
  }

  if (e.code !== "Space" || isJumping) return;

  yVelocity = JUMP_SPEED;
  isJumping = true;
}

function handleKeyUp(e: KeyboardEvent) {

  if((e.code === "ArrowRight" || e.code === "ArrowLeft") && !isJumping) {
    xVelocity = 0;
  }
}

function handleJump(dinoElem: HTMLImageElement, delta: number) {
  if (!isJumping) return;

  incrementCustomProperty(dinoElem, "--bottom", yVelocity * delta);

  if (getCustomProperty(dinoElem, "--bottom") <= 0) {
    setCustomProperty(dinoElem, "--bottom", 0);
    isJumping = false;
  }

  yVelocity -= GRAVITY * delta;
}

function onJump(e: KeyboardEvent) {
  if (e.code !== "Space" || isJumping) return;

  yVelocity = JUMP_SPEED;
  isJumping = true;
}