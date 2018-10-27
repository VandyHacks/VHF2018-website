<template>
  <div class="sponsor-images">
    <div class="sponsor-row tier-1">
      <a href="https://www.microstrategy.com/us" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/microstrategy.svg" alt="MicroStrategy">
      </a>
      <a href="https://fulcrum-gt.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/fulcrum.svg" alt="Fulcrum">
      </a>
    </div>
    <div class="sponsor-row tier-2">
      <a href="https://www.centene.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/centene.svg" alt="Centene Corporation">
      </a>
      <a href="https://www.tractorsupply.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/tsc.svg" alt="Tractor Supply Co.">
      </a>
      <a href="http://www.forcexinc.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/l3-forcex.svg" alt="L3 ForceX">
      </a>

    </div>
    <div class="sponsor-row tier-2">
      <a href="https://www.bnymellon.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/bnymellon.svg" alt="BNY Mellon">
      </a>
      <a href="https://www.redventures.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/redventures.svg" alt="RED Ventures">
      </a>

    </div>
    <div class="sponsor-row tier-3">
      <a href="https://careers.homedepot.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/homedepot.svg" alt="Home Depot">
      </a>
      <a href="https://campus.capitalone.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/capital-one.svg" alt="Capital One">
      </a>
      <a href="https://www.dollargeneral.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/dollargeneral.svg" alt="Dollar General">
      </a>
      <a href="https://www.bosframework.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/bosframework.svg" alt="BOS Framework">
      </a>
      <a href="https://www.eventbrite.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/eventbrite.svg" alt="Eventbrite">
      </a>
      <a href="https://commons.vanderbilt.edu/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/ingramcommons.svg" alt="The Martha Rivers Ingram Commons">
      </a>
      <a href="https://www.microsoft.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/microsoft.svg" alt="Google">
      </a>
      <a href="https://www.google.com/" target="_blank" rel="noopener">
        <img src="~assets/img/sponsors/google.svg" alt="Microsoft">
      </a>
    </div>
  </div>
</template>


<style lang="scss">
@import "~assets/scss/variables.scss";

.sponsor-row {
  width: 100%;
  text-align: center;

  img {
    width: 100%;
    padding: 10px;
    vertical-align: middle;
    @media (min-width: $break-m) {
      padding: 15px;
    }
    @media (min-width: $break-l) {
      padding: 20px;
    }
    transition: all 0.3s ease;
  }
  img:hover {
    transform: scale(1.04);

    // Remove scaling and filtering if device doesn't support hover
    @media (hover: none) {
      transform: none;
    }
  }

  &.tier-1 {
    img {
      width: 100%;
      max-width: 640px;
    }
  }
  &.tier-2 {
    img {
      width: 50%;
      max-width: 400px;
    }
  }
  &.tier-3 {
    img {
      width: 33.333%;
      height: auto;
      max-width: 250px;
    }
  }
}
</style>
