<style lang="scss" scoped>
@import "~assets/scss/variables.scss";

$date-color: #e89087;
$time-color: $accent;
$event-color: $header-color;

html {
  // Trash rule because @import was causing a bug where the first rule
  // wouldn't load
  height: auto;
}

.date {
  align-self: center;
  justify-self: center;
  color: $date-color;
  text-align: center;
  font-weight: 800;
  font-size: 32px;
}

.event {
  padding: 0.5em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
}

.event:nth-child(odd) {
  background: rgba(255, 255, 255, 0.15);
}

.events-wrapper {
  overflow: auto;
  padding: 20 30px;
  display: grid;
  grid-gap: 10px;
  grid-template-areas: "fri-date" "fri" "l-div" "sat-date" "sat" "r-div" "sun-date" "sun";
  grid-template-rows: auto min-content repeat(2, 0 auto min-content);
  grid-template-columns: auto;
  align-items: center;

  @media (min-width: $break-xl) and (orientation: landscape) {
    grid-template-areas:
      "fri-date fri-date sat-date sat-date sun-date"
      "fri      l-div    sat      r-div    sun     ";
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 10px 1fr 10px 1fr;
  }
}

#first-date {
  grid-area: fri-date;
}

#second-date {
  grid-area: sat-date;
}

#third-date {
  grid-area: sun-date;
}

.event-column {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.events {
  width: 100%;
}

.divider {
  height: 80%;
  background: $date-color;
  align-self: center;
  border-radius: 6px;
  margin: 0;
  padding: 0;
}

.event-name {
  color: $event-color;
}

.event-time {
  color: $time-color;
}
</style>

<template>
  <div class="events-wrapper">
    <h3 id="first-date" class="date">Friday, Nov 2</h3>
    <div class="events">
      <div class="event">
        <div class="event-name">check-in</div>
        <div class="event-time">5:30p</div>
      </div>
      <div class="event">
        <div class="event-name">dinner</div>
        <div class="event-time">6:00p</div>
      </div>
      <div class="event">
        <div class="event-name">opening ceremony</div>
        <div class="event-time">8:00p</div>
      </div>
      <div class="event">
        <div class="event-name">hacking begins</div>
        <div class="event-time">9:00p</div>
      </div>
      <div class="event">
        <div class="event-name">pitch session</div>
        <div class="event-time">9:00p</div>
      </div>
      <div class="event">
        <div class="event-name">git tech talk</div>
        <div class="event-time">9:00p</div>
      </div>
      <div class="event">
        <div class="event-name">beginner switch session</div>
        <div class="event-time">9:30p</div>
      </div>
      <div class="event">
        <div class="event-name">beginner tech talks</div>
        <div class="event-time">10:00p</div>
      </div>
    </div>
    <span class="divider" />
    <h3 id="second-date" class="date">Saturday, Nov 3</h3>
    <div class="events">
      <div class="event">
        <div class="event-name">midnight snack</div>
        <div class="event-time">12:00a</div>
      </div>
      <div class="event">
        <div class="event-name">sponsor tech talks</div>
        <div class="event-time">12:00a</div>
      </div>
      <div class="event">
        <div class="event-name">breakfast</div>
        <div class="event-time">8:00a</div>
      </div>
      <div class="event">
        <div class="event-name">advanced tech talks</div>
        <div class="event-time">9:00a</div>
      </div>
      <div class="event">
        <div class="event-name">lunch</div>
        <div class="event-time">12:00p</div>
      </div>
      <div class="event">
        <div class="event-name">dinner </div>
        <div class="event-time">5:30p</div>
      </div>
      <div class="event">
        <div class="event-name">wellness night</div>
        <div class="event-time">7:00p</div>
      </div>
      <div class="event">
        <div class="event-name">cup stacking, hosted by MLH</div>
        <div class="event-time">9:00p</div>
      </div>
    </div>
    <span class="divider" />
    <h3 id="third-date" class="date">Sunday, Nov 4</h3>
    <div class="events">
      <div class="event">
        <div class="event-name">midnight snack</div>
        <div class="event-time">12:00a</div>
      </div>
      <div class="event">
        <div class="event-name">breakfast</div>
        <div class="event-time">8:00a</div>
      </div>
      <div class="event">
        <div class="event-name">hacking ends</div>
        <div class="event-time">9:00a</div>
      </div>
      <div class="event">
        <div class="event-name">how to demo talk</div>
        <div class="event-time">10:00a</div>
      </div>
      <div class="event">
        <div class="event-name">project expo</div>
        <div class="event-time">10:00a</div>
      </div>
      <div class="event">
        <div class="event-name">lunch</div>
        <div class="event-time">12:00p</div>
      </div>
      <div class="event">
        <div class="event-name">closing ceremony</div>
        <div class="event-time">1:30p</div>
      </div>
      <div class="event">
        <div class="event-name">buses depart</div>
        <div class="event-time">3:00p</div>
      </div>
    </div>
  </div>
</template>
