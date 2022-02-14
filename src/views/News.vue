<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-12 news-div">
        <!-- Implementacija live vijesti -->
        <div class="div-header">
          <h2>News:</h2>
          <p class="news-settings">
            <ion-icon
              name="newspaper-outline"
              role="img"
              class="md hydrated"
              aria-label="newspaper outline"
            ></ion-icon>
          </p>
        </div>
        <iframe
          width="100%"
          scrolling="no"
          allowtransparency="true"
          frameborder="0"
          src="https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;currencies=BTC%2CETH%2CLTC%2CADA%2CBNB%2CSOL&amp;font_family=sans&amp;font_size=20&amp;header_bg_color=FFFFFF&amp;header_text_color=FFFFFF&amp;link_color=000000&amp;news_feed=trending&amp;posts_limit=10&amp;text_color=2C3E50&amp;"
          height="1000px"
        ></iframe>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px;
  }
}

.news-div {
  position: relative;
  margin-top: 24px;
  font-family: "Lato", sans-serif;
  width: 100%;
  background-color: #ffffff;
}

.div-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 30px;
}
.div-header h2 {
  font-size: 28px;
  font-weight: 700;
  color: #17171a;
}

.news-settings ion-icon {
  position: relative;
  font-size: 20px;
  color: #4376fe;
  font-family: "Lato", sans-serif;
  top: 2px;
}

.div-header .newspaper-setting {
  font-size: 20px;
  color: #b9c1d9;
}
</style>
