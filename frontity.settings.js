const settings = {
  "name": "frontity-headless-wp",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Think outside the box.",
      "description": "MS Boilerplate - MK1"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Test Page 1",
              "/test-page-1/"
            ],
            [
              "Test Page 2",
              "/test-page-2/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://localhost:8888/wp/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
