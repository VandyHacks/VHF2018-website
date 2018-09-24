module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "VandyHacks V",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The official website for VandyHacks V, Tennessee's premiere hackathon."
      },
      { name: "theme-color", content: "#07889b" },
      { "written-by": "Matt Leon" },
      {
        property: "og:image",
        content: "https://vandyhacks.org/vh-preview.png"
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "604" }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "preload",
        href: "fonts/SofiaProSemiBold.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: ""
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    // extend(config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  css: ["flexboxgrid/dist/flexboxgrid.css"]
}
