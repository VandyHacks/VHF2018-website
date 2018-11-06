<template>
  <div class="main">
    <main class="landing-section page">
      <img class="logo" alt="VandyHacks V" src="~assets/img/horLogo.svg">
      <CountdownTimer class='countdown' />
      <h2 class="hosts">VandyHacks V was Co-hosted by
        <a href="https://fulcrum-gt.com">Fulcrum GT</a>
        and
        <a href="https://www.microstrategy.com/us">MicroStrategy</a>
      </h2>
    </main>
    <section class="sponsors page">
      <h2 class="heading-text">SPONSORS</h2>
      <sponsors />
    </section>
    <sitefooter class="footer" />
    <mlhbadge />
  </div>
</template>

<script>
import MlhBadge from "~/components/MlhBadge.vue";
import Schedule from "~/components/Schedule.vue";
import FaqItem from "~/components/FaqItem.vue";
import Footer from "~/components/Footer.vue";
import Sponsors from "~/components/Sponsors.vue";
import CountdownTimer from "~/components/CountdownTimer.vue";

export default {
  components: {
    mlhbadge: MlhBadge,
    schedule: Schedule,
    faqitem: FaqItem,
    sitefooter: Footer,
    sponsors: Sponsors,
    CountdownTimer: CountdownTimer
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";
@font-face {
  font-family: SofiaProCondBold;
  src: url("/fonts/SofiaProCondMedium.woff");
}
@font-face {
  font-family: SofiaProSemiBold;
  src: url("/fonts/SofiaProSemiBold.woff");
}
@font-face {
  font-family: SofiaPro;
  src: url("/fonts/SofiaProRegular.woff");
}

body {
  width: 100%;
  height: 100%;
  overflow: auto;
  color: $text-color;
  font-size: 1.4em;
  font-family: SofiaPro;

  a {
    color: $text-color;
  }

  @media screen and (max-width: $break-l) {
    font-size: 1em;
  }
}

.main {
  height: 100vh;
  overflow: auto;
  background-image: url("~/assets/img/bg-top.svg");
  background-size: cover;
  background-position: right bottom;
}

.heading-text {
  @media (min-width: $break-l) {
    padding-left: 60px; // Added to .page's 30px
  }
  font: bold 4em SofiaProCondBold, serif;
  color: $header-color;
}

.landing-section {
  min-height: 100vh;
  padding: 40px;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
}

.hosts {
  align-self: flex-end;
}

.logo {
  max-width: 95%;
  max-height: 95%;
  margin-bottom: 20px;
  justify-self: flex-start;

  @media (orientation: landscape) and (min-width: 1024px) {
    width: 50%;
    align-self: flex-start;
  }
}

.sponsors {
  min-height: calc(100vh - 60px);
  justify-content: flex-start;

  scroll-snap-coordinate: 0% 0%;
  background: url(~assets/img/sponsors-background.svg) no-repeat;
  background-position: center center;
  background-size: cover;

  display: flex;
  flex-flow: column nowrap;

  padding: 30px;
}

.top-background {
  background-image: url("~/assets/img/bg-portrait-lighter-4.svg");
  background-size: cover;
  background-position: right bottom;

  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(100vh, auto));

  @media (orientation: landscape) and (min-width: $break-l) {
    background-image: url("~/assets/img/bg-top.svg");
    background-position: right bottom;
  }
}
</style>
