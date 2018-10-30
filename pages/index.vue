<template>
  <div class="main">
    <div class="top-background">
      <main class="landing-section page">
        <img class="logo" alt="VandyHacks V" src="~assets/img/horLogo.svg">
        <CountdownTimer class='countdown' />
        <h2>Co-hosted by
          <a href="https://fulcrum-gt.com">Fulcrum GT</a>
          and
          <a href="https://www.microstrategy.com/us">MicroStrategy</a>
        </h2>
        <a ontouchstart="" class="apply-btn">Apply</a>
        <aside class="sponsor-prospectus">
          Interested in being a sponsor? <br> Check out our
          <a href="https://apply.vandyhacks.org/sponsorship">sponsorship prospectus</a>!
        </aside>
        <img class="scrollarrow" src="~assets/img/arrow.svg" onClick="document.getElementsByClassName('welcome-page')[0].scrollIntoView({behavior: 'smooth'});">
      </main>
      <section class="welcome-page page">
        <h2 class="heading-text">WELCOME</h2>
        <content class="welcome">
          <p>Welcome to Music City! Founded in the spring of 2015, VandyHacks was the first collegiate hackathon to call Nashville, Tennessee home. Now, we're proud to bring you VandyHacks V! </p>
          &nbsp;
          <p>From November 2-4, 400+ students from colleges and universities across the nation will gather at Vanderbilt University’s Engineering and Science Building for a weekend of collaboration, innovation, and entrepreneurship. For 36 hours, participants will work together to bring their ideas to life - and have lots of fun doing it! We also have some great workshops lined up to help kickstart your projects. VandyHacks welcomes beginners, and we encourage students of all majors and disciplines to apply!</p>
        </content>
      </section>
    </div>
    <section class="faq page">
      <h2 class="heading-text">FAQ</h2>
      <section class="faq-column faq-left">
        <h3 class="faq-header">General</h3>
        <faqitem title="What is a hackathon?">
          Hackathons are events where students from across the country come together for a weekend of innovation and creativity. Participants have 36 hours to create anything that shows off their creativity and passion for development. You may choose any platform, programming language, or format to show your stuff. You can even present a storyboard or idea; there’s no end to the possibilities!
        </faqitem>
        <faqitem title="I have no idea how to code. Can I still attend?">
          Even more reason for you to come! We will be hosting beginners' workshops for you to get started, and our mentors can help you out along the way. We greatly encourage new hackers to attend, and no prior experience is necessary!
        </faqitem>
        <faqitem title="What if I've never been to a hackathon?">
          Not to worry! A few weeks before the event, you’ll receive an email with a link to our hacker guide, which will contain all the information you need to make the most out of your weekend. During the event, the VandyHacks Team will be around to help answer any questions. As always, feel free to email us at
          <a href="mailto:info@vandyhacks.org">info@vandyhacks.org</a> with any questions you may have.
        </faqitem>
        <h3 class="faq-header">Event</h3>
        <faqitem title="What should I bring?">
          Be sure to bring your photo ID, laptop, phone, chargers, a change of clothes, toiletries, and any other devices you want to use. A government-issued ID is required to rent any hardware.
        </faqitem>
        <faqitem title="Where will I sleep?">
          We will have designated quiet rooms, so bring a blanket and pillow!
        </faqitem>
        <faqitem title="What will I eat?">
          Meals will be provided throughout the event, starting with Friday dinner and ending with lunch on Sunday. Snacks will also be provided periodically. Vegetarian and gluten-free options are available. Please indicate any allergies or dietary restrictions on your application.
        </faqitem>
        <faqitem title="How are teams formed? Do I need a team?">
          Teams are limited to four people. If you're applying with a team, we will review all of your team members' applications to determine admission. We will also have a pitch session where attendees can share their ideas and find potential teammates. However, teams are not required, so feel free to work individually.
        </faqitem>
        <faqitem title="Will there be other activities besides hacking?">
          Of course! This year, we've planned a bunch of fun events for attendees to relax. Stay tuned for more info!
        </faqitem>
        <faqitem title="Do I need to stay the entire time?">
          Vanderbilt students are free to enter and leave the venue at all times. Students from other schools are asked to remain inside the venue throughout the entire event.
        </faqitem>
        <faqitem title="What if I’m interested in being a mentor?">
          Send us an email at
          <a href="mailto:info@vandyhacks.org">info@vandyhacks.org</a>.
        </faqitem>
      </section>
      <section class="faq-column faq-right">
        <h3 class="faq-header">Applying</h3>
        <faqitem title="Who can apply?">
          Anyone who is 18 years or older (we will be checking ID) and is currently enrolled in college or university with a valid student ID. International students are invited to apply and attend, but we cannot guarantee full travel reimbursement.
        </faqitem>
        <faqitem title="How does registration work?">
          Applications are now open! Acceptance is determined by a variety of factors, and applications will be reviewed by our board on a rolling basis. Once you’re accepted, you’ll receive an email from the VandyHacks team. If you're curious, email us for more info at
          <a href="mailto:info@vandyhacks.org">info@vandyhacks.org</a>
        </faqitem>
        <faqitem title="What if I'm a Vanderbilt student?">
          All Vanderbilt students are encouraged to attend, regardless of major or background.
        </faqitem>
        <faqitem title="Are walk-ins allowed?">
          We ask that everyone complete an application, but walk-ins will be accepted if space allows. We cannot guarantee swag for walk-ins.
        </faqitem>
        <h3 class="faq-header">Logistics</h3>
        <faqitem title="How do I get there?">
          Cars, buses, or flights, depending on location! We'll be sending buses to specific schools with large numbers of applicants.
        </faqitem>
        <faqitem title="Will travel reimbursements be provided?">
          Travel reimbursements outside of the bus routes are tentative and will be awarded on a rolling basis.
        </faqitem>
        <faqitem title="How do I get there if I'm not near a bus stop?">
          We will be providing gas reimbursements for cars with 3+ hackers in them. Additionally, we may partially subsidize Greyhound and plane tickets. Contact us at
          <a href="mailto:travel@vandyhacks.org">travel@vandyhacks.org</a> if you have any questions.
        </faqitem>
        <faqitem title="Will there be parking available for attendees?">
          Yes! Attendees will be able to find parking at the 25th Avenue Garage, conveniently located next to Vanderbilt’s Engineering and Science Building. You can find it
          <a href="https://goo.gl/maps/qST6JAvvQAz">here</a>.
        </faqitem>
        <h3 class="faq-header">Other</h3>
        <faqitem title="I have more questions!">
          Send us an email at
          <a href="mailto:info@vandyhacks.org">info@vandyhacks.org</a>! We'll be happy to answer!
        </faqitem>
      </section>
    </section>
    <section class="schedule page">
      <h2 class="heading-text">SCHEDULE</h2>
      <schedule />
    </section>
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
  overflow: hidden;
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

.heading-text {
  @media (min-width: $break-l) {
    padding-left: 30px; // Added to .page's 30px
  }
  font: bold 4em SofiaProCondBold, serif;
  color: $header-color;
}

.main {
  max-width: 100%;
  height: 100vh;
  background: $background;

  display: block;

  overflow: auto;

  -webkit-overflow-scrolling: touch;
  // Skip all iOS devices
  @supports not (-webkit-overflow-scrolling: touch) {
    // Scroll snapping
    scroll-snap-type: y proximity; // Chrome
    scroll-snap-type-y: proximity; // Firefox compat
  }
}

.page {
  min-height: 100vh;
  width: 100%;

  -webkit-overflow-scrolling: touch;
  // Skip all iOS devices
  @supports not (-webkit-overflow-scrolling: touch) {
    // Scroll snapping
    scroll-snap-coordinate: 0% 0%; // Firefox
    scroll-snap-align: start; // Chrome
  }

  padding: 30px;
  overflow: visible;
}

.footer {
  scroll-snap-coordinate: 100% 100%; //Firefox
  scroll-snap-align: end; // Chrome
}

.landing-section {
  padding: 30px 18px;
  padding-top: 10vh;

  display: grid;
  grid-template-areas: "logo logo" "countdown countdown" "apply apply" "sponsor-us arrow";
  grid-template-columns: 35vw 55vw;
  grid-template-rows: 1fr 2fr auto auto;
  justify-content: center;
  align-items: center;

  // Hosted by text
  h2 {
    font-family: SofiaProSemiBold;
    font-size: 1.2em;
  }

  @media (max-width: $break-xl) {
    grid-template-areas: "logo logo" "countdown countdown" "apply apply" "hosts hosts" "sponsor-us arrow";
    grid-template-rows: 1fr 1fr auto auto auto;

    h2 {
      text-align: center;
      grid-area: hosts;
      font-size: 1.6em;
    }

    @media (min-width: $break-l) {
      h2 {
        font-size: 1em;
      }
    }
  }

  @media (min-width: $break-l) {
    height: 100vh;
  }
}

.countdown {
  grid-area: countdown;
}

.logo {
  grid-area: logo;
  max-width: 95%;
  max-height: 95%;
  margin-bottom: 20px;
  justify-self: flex-start;

  @media (orientation: landscape) and (min-width: 1024px) {
    width: 50%;
    align-self: flex-start;
  }
}

.apply-btn {
  grid-area: apply;
  color: $apply-btn-text-color;
  text-decoration: none;
  padding: 8px 40px;
  margin: 20px;
  background: $header-color;
  border-radius: 4px;
  justify-self: center;
  transition: all 0.2s ease-out;
  /*
  &:hover {
    transform: scale(1.05);
    filter: brightness(150%);
    filter: contrast(150%);

    // Remove scaling and filtering if device doesn't support hover
    @media (hover: none) {
      // Must use hover: none because ff doesn't recognize hover at all
      transform: none;
      filter: none;
    }
  }*/
  opacity: 0;  /* close applications */

  @media screen and (max-width: 768px) {
    padding: 8px 20px;
    font-size: 1.6em;
  }
  @media screen and (max-width: 481px) {
    padding: 4px 20px;
    font-size: 1.2em;
  }
}

.scrollarrow {
  grid-area: arrow;
  position: relative;
  left: calc(10vw - 24px);
  height: 104px;
  width: 48px;
  transform: rotate(90deg);
  align-self: center;
}

.sponsor-prospectus {
  justify-self: flex-start;
  align-self: flex-end;
}

.welcome-page {
  padding-top: 8vh;

  display: flex;
  flex-flow: column nowrap;

  @media screen and (min-width: $break-l) and (orientation: landscape) {
    justify-content: flex-end;

    p {
      margin-left: 30px;
    }

    .welcome {
      max-width: 60%;
    }
  }
}

.faq {
  // grid-row: 3;
  background-color: $background;
  background-image: url("~/assets/img/faq-background.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right bottom;

  display: inline-grid;
  flex: 1 0 auto;
  grid:
    [row1-start] "header" auto [row1-end]
    [row2-start] "left" auto [row2-end]
    [row3-start] "right" auto [row2-end]
    / 1fr;
  grid-gap: 0;

  .heading-text {
    padding-left: 30px;
    margin-bottom: 30px;
  }

  & > img {
    grid-area: header;
  }
  .faq-left {
    grid-area: left;
  }
  .faq-right {
    grid-area: right;
  }

  @media screen and (min-width: $break-l) and (orientation: landscape) {
    grid:
      [row1-start] "header header" auto [row1-end]
      [row2-start] "left right" 1fr [row2-end]
      / 1fr 1fr;
    line-height: 1.5em;
    grid-gap: 30px;

    padding: 30px 60px;
    .heading-text {
      margin-bottom: 0;
      padding-left: 0px;
    }
  }
}

.schedule {
  flex: 1 0 auto;
  display: inline-grid;
  grid:
    [row1-start] "header" auto [row1-end]
    [row2-start] "content" auto [row2-end]
    / auto;

  & > img {
    grid-area: header;
  }
}

.sponsors {
  min-height: calc(100vh - 60px);
  justify-content: flex-start;

  scroll-snap-coordinate: 0% 0%;
  background: $background url(~assets/img/sponsors-background.svg) no-repeat;
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
