let allWebsites = {
    english: {
      businesstoday: {
        url: "https://www.businesstoday.in/",
        element: "div",
        class: "widget-listing",
        categories: [
          "technology/news",
          "markets",
          "latest/corporate",
          "latest/economy",
          "entrepreneurship",
        ],
      },
    },
    hindi: {
      ichowk: {
        url: "https://www.ichowk.in/",
        element: "div",
        class: "box-caption",
        categories: ["technology", "economy", "sports", "politics"],
      },
    },
};

module.exports = { allWebsites };