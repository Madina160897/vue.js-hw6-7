<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          image: "/src/img/img1.jpg",
        },
        {
          id: 2,
          image: "/src/img/img2.jpg",
        },
        {
          id: 3,
          image: "/src/img/img3.jpg",
        },
        {
          id: 4,
          image: "/src/img/img4.jpg",
        },
        {
          id: 5,
          image: "/src/img/img5.jpg",
        },
      ],
      numImg: 0,
    };
  },
  methods: {
    next() {
      if (this.numImg >= this.images.length - 1) {
        this.numImg = 0;
      }
      this.numImg++;
    },
    pev() {
      if (this.numImg >= 0) {
        this.numImg--;
      }
    },
  },
};
</script>

<template>
  <div>
    <header>
      <div class="header-icon">
        <router-link to="/mainPage">
          <button class="btn">Главная страница</button>
        </router-link>
        <router-link to="/contacts">
          <button class="btn">Контакты</button>
        </router-link>
      </div>
    </header>
    <main>
      <div class="wrapper">
        <div class="block" :style="{ 'margin-left': '-' + 100 * numImg + '%' }">
          <div class="scale" v-for="img in images" :key="img.id">
            <img class="img-gal" :src="img.image" />
          </div>
        </div>
      </div>
    </main>
    <div class="all-btn-gal">
      <button @click="pev"><img class="icon" src="../img/left.png" /></button>
      <button @click="next"><img class="icon" src="../img/right.png" /></button>
    </div>
  </div>
</template>

<style>
.scale {
  transition: 1s; /* Время эффекта */
}
.scale:hover {
  transform: scale(1.2); /* Увеличиваем масштаб */
}
.wrapper {
  max-width: 900px;
  max-height: 600px;
  overflow: hidden;
  margin: 0 auto;
}

.wrapper:hover{
   max-width: 2200px;
   max-height: 1900px;
}

.block {
  display: flex;
  transition: all ease 0.5s;
}
header {
  width: 100%;
  height: 70px;
  margin: 20px auto;
  border: 2px solid transparent;
  box-shadow: 0 0 5px gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.img-gal {
  width: 1900px;
  height: 1000px;
}

main {
  width: 100%;
  height: 700px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-icon {
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.btn {
  width: 250px;
  height: 50px;
  border: 2px solid transparent;
  box-shadow: 0 0 5px gray;
  border-radius: 20px;
  background-color: skyblue;
  font-size: 16px;
  font-weight: 600;
}

.all-btn-gal {
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.icon {
  width: 50px;
  height: 50px;
}
</style>
