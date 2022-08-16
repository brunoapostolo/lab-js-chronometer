class Chronometer {
  constructor() {
    this.currentTime =0;
    this.intervalId =null;
  }
  
  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++
      if(printTimeCallback){
        printTimeCallback();
      }
    },1000)
  }

  getMinutes() {
    return (Math.floor(this.currentTime/60));
  }

  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    return(("0")+value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }
 
  reset() {
    clearInterval(this.intervalId);
    return this.currentTime=0;
  }

  split() {
    let minuto = this.computeTwoDigitNumber(this.getMinutes());
    let segundo = this.computeTwoDigitNumber(this.getSeconds());
    return `${minuto}:${segundo}`
  }
}