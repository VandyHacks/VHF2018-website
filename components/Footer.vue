<style lang="scss" scoped>
$footer-height: 60px;
$attr-break: 992px;
$hover-opacity: 0.75;

.footer {
  $footer-bg: #2d2d2d;
  background: $footer-bg;
  filter: drop-shadow(0px 2px 0px $footer-bg);
  color: #fff;
  text-align: center;
  height: 60px;

  @media (min-width: $attr-break) {
    text-align: inherit;
  }
  overflow: none;
}

.attribution {
  display: none;
  line-height: $footer-height;
  font-size: 15px;
  padding-left: 20px;
  @media (min-width: $attr-break) {
    display: inline-block;
  }
}

.attr-link {
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: opacity 0.25s;

  &:hover {
    opacity: $hover-opacity;
  }
}

.social-icons {
  padding-top: 1.5px;
  display: inline-block;

  @media (min-width: $attr-break) {
    float: right;
    padding-right: 5px;
  }
}

.icon {
  width: 54px;
  height: 54px;
  transition: opacity 0.25s;

  &:hover {
    opacity: $hover-opacity;
  }
}
</style>

<template>
  <div class="footer">
    <div class="attribution" v-html="'Made ' + ingredients + ' by the VandyHacks team'" />
    <div class="social-icons">
      <a href="https://www.facebook.com/vandyhacks/" target="_blank">
        <img class="icon" src="~assets/img/facebook-white.svg" alt="Facebook">
      </a>
      <a href="https://twitter.com/vandyhacks" target="_blank">
        <img class="icon" src="~assets/img/twitter-white.svg" alt="Twitter">
      </a>
      <a href="https://www.instagram.com/vandyhacks/" target="_blank">
        <img class="icon" src="~assets/img/instagram-white.svg" alt="Instagram">
      </a>
      <a href="https://www.github.com/VandyHacks/" target="_blank">
        <img class="icon" src="~assets/img/github-white.svg" alt="GitHub">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ingredients: ""
    }
  },
  mounted() {
    const ingredientsList = [
      "with blood, sweat, and tears",
      "at three in the morning the day of launch",
      "with excessively large pull requests",
      "with real cane sugar",
      "with juice from concentrate",
      "in an unreasonably short amount of time",
      "with certified webscale\u2122 technologies",
      "in a galaxy far, far away",
      "using iterative Agile\u00AE methodologies",
      "with this one weird trick",
      "with no warranty of any kind, either express or implied,"
    ]
    this.ingredients =
      ingredientsList[Math.floor(Math.random() * ingredientsList.length)]
  }
}
</script>
