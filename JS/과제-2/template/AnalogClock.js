const CLOCK_TEXT = `      
  <div class="hand hour"></div>
  <div class="hand minute"></div>
  <div class="hand second"></div>
  <div class="time time1">|</div>
  <div class="time time2">|</div>
  <div class="time time3">|</div>
  <div class="time time4">|</div>
  <div class="time time5">|</div>
  <div class="time time6">|</div>
  <div class="time time7">|</div>
  <div class="time time8">|</div>
  <div class="time time9">|</div>
  <div class="time time10">|</div>
  <div class="time time11">|</div>
  <div class="time time12">|</div>
`;

const getNowTimeDeg = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const degH = hours * 30 + minutes * 0.5 + seconds * (1 / 120);
  const degM = minutes * 6 + seconds * 0.1;
  const degS = seconds * 6;

  return [degH, degM, degS];
}

const showDeg = ($container, degH, degM, degS) => {
  $container.querySelector('.hand.hour').style.setProperty('--deg', Math.ceil(degH));
  $container.querySelector('.hand.minute').style.setProperty('--deg', Math.ceil(degM));
  $container.querySelector('.hand.second').style.setProperty('--deg', Math.ceil(degS));
}

const moveDegBySec = ($container) => {  
  setInterval(() => {
    const [degH, degM, degS] = getNowTimeDeg();
    showDeg($container, degH, degM, degS);
  }, 1000);
}

const AnalogClock = $container => {
  $container.innerHTML += CLOCK_TEXT;
  const [degH, degM, degS] = getNowTimeDeg();
  showDeg($container, degH, degM, degS);
  moveDegBySec($container);
};

export default AnalogClock;
