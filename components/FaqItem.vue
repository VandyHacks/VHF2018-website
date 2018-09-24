<style lang="scss" scoped>
.faq-item {
  margin: 10px 0 10px 10px;
}

.question {
  cursor: pointer;
  display: flex;
  font-size: 1.1em;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.05);

    // Remove scaling and filtering if device doesn't support hover
    @media (hover: none) {
      transform: none;
    }
  }
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}

.title {
  display: inline-block;
  line-height: 1em;
  font-weight: normal;
  font-size: 1em;

  @media screen and (max-width: 768px) {
    font-size: 1.1em;
    line-height: 24px;
  }
}

.answer {
  margin-left: 22px;
  margin-bottom: 1.5em;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transform-origin: top;
}

.slide-fade-enter-active {
  transition: all 0.25s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.25s ease-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-12px);
  opacity: 0;
}

.slide-fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.arrow-wrapper {
  margin-right: 10px;
}

.arrow {
  height: 26px;
  width: 12px;
  transition: transform 0.25s ease-out;

  &.right {
    transform: rotate(90deg);
  }
}
</style>

<template>
  <div class="faq-item noselect">
    <div class="question" @click="open = !open">
      <div class="arrow-wrapper">
        <img :class="arrowDirection" class="arrow" src="~assets/img/arrow.svg">
      </div>
      <h4 class="title">{{ title }}</h4>
    </div>
    <transition name="slide-fade">
      <div v-if="open" class="answer">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Question"
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    arrowDirection() {
      return this.open ? "right" : "down"
    }
  }
}
</script>
