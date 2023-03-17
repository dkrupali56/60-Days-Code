function clock() {
    const hour = document.querySelector('.hour');
    const minute = document.querySelector('.minute');
    const second = document.querySelector('.second');
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    let hDeg = (h * 30) + (m / 2);
    let mDeg = (m * 6);
    let sDeg = (s * 6);
    
    hour.style.transform = `rotate(${hDeg}deg)`;
    minute.style.transform = `rotate(${mDeg}deg)`;
    second.style.transform = `rotate(${sDeg}deg)`;
  }
  
  setInterval(clock, 1000);
  