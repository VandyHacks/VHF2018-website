<template>
  <nuxt/>
</template>

<style>
body,
html,
#__nuxt {
  height: 100%;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaProRegular.woff2") format("woff2"),
    url("/fonts/SofiaProRegular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Sofia Pro";
  src: url("/fonts/SofiaProSemiBold.woff2") format("woff2"),
    url("/fonts/SofiaProSemiBold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}

html {
  font-family: "Sofia Pro", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: #565f86;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
