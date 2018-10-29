<template>
  <div class="countdown">
    <span class='timer'>
      <span class='unit'>
        <span class="time">&nbsp;{{state.day}}</span>
        <!-- &nbsp fixes spacing issue because only one char -->
        <span class="labels" id="day">D</span>
      </span>
      <span class='unit'>
        <span class="time">{{state.hour}}</span>
        <span class="labels" id="hour">H</span>
      </span>
      <span class='unit'>
        <span class="time">{{state.min}}</span>
        <span class="labels" id="min">M</span>
      </span>
      <span class='unit' id='secUnit'>
        <span class="time" id='secTime'>{{state.sec}}</span>
        <span class='labels' id="sec">S</span>
      </span>
    </span>
    <div class="remaining">
      Until Hacking Begins
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateTime: function() {
      const endDate = new Date("November 2, 2018 17:30:00");
      const now = new Date();
      const diff = endDate !== now ? endDate.getTime() - now.getTime() : 0;

      let days = Math.floor(diff / (1000 * 24 * 60 ** 2));
      let hours = Math.floor((diff / (1000 * 60 ** 2)) % 24);
      let minutes = Math.floor((diff % (1000 * 60 ** 2)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);

      this.state.day = days;
      this.state.hour = hours < 10 ? `0${hours}` : `${hours}`;
      this.state.min = minutes < 10 ? `0${minutes}` : `${minutes}`;
      this.state.sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    }
  },
  data: function() {
    return {
      state: {
        day: "0",
        min: "0",
        hour: "0",
        sec: "0",
        interval: 0
      }
    };
  },
  created: function() {
    this.updateTime();
    this.state.interval = setInterval(this.updateTime, 1000);
  },
  beforeDestroy: function() {
    clearInterval(this.state.interval);
  }
};
</script>

<style lang="scss" scoped>
.remaining {
  text-transform: uppercase;
}

.time {
  font-size: 4em;
  font-family: SofiaProSemiBold;
}

.labels,
.remaining {
  font-size: 1.5rem;
}

.countdown {
  text-align: center;
  // background: rgba(#fff, 0.4);
  border-radius: 16px;
  display: flex;
  flex-flow: column nowrap;
}
.timer {
  justify-self: center;
  align-self: center;
  display: flex;
  flex-flow: row nowrap;
  width: 50%;

  @media (orientation: portrait) and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 512px) {
    font-size: 0.8em;
    width: 100%;
  }
}
.unit {
  flex: 1 1 100px;
}

#day {
  flex: 1 1 50px;
}
</style>
