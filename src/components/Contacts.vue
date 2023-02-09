<script>
export default {
  data() {
    return {
      contacts: [
        {
          name: "Madina",
          number: 87000000000,
        },
        {
          name: "Elya",
          number: 87000000001,
        },
        {
          name: "Anara",
          number: 87000000002,
        },
        {
          name: "Aslan",
          number: 87000000003,
        },
        {
          name: "Danik",
          number: 87000000004,
        },
        {
          name: "Gleb",
          number: 87000000005,
        },
        {
          name: "Iliyas",
          number: 87000000006,
        }
      ],
      name: "",
      number: "",
    };
  },
  methods: {
    add() {
      if (this.name === "" || this.number === "") {
        return;
      }

      let newContact = {
        id: this.contacts.length + 1,
        name: this.name,
        number: this.number,
      };

      this.contacts.push(newContact);
      this.name = "";
      this.number = "";
    },
    deleteCon(id) {
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].id == id) {
          this.contacts.splice(i, 1);
        }
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
        <router-link to="/gallery">
          <button class="btn">Галерея</button>
        </router-link>
      </div>
    </header>
    <div>
      <form class="Post" @submit.prevent>
        <input v-model="name" type="text" placeholder="Имя пользователя" />
        <input
          v-model="number"
          type="number"
          placeholder="Номер пользователя"
        />
        <button class="btn" @click="add">Добавить</button>
      </form>
      <br />
      <div class="fon-cont">
        <div class="contact" v-for="con in contacts" :key="con.id">
          <b>{{ con.name }}:</b>
          <div>{{ con.number }}</div>
          <button class="btn-con" @click="deleteCon(con.id)">X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.Post {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 1% auto;
  border: 2px solid #2dcdd3;
  background-color: #f4f7f7;
  border-radius: 20px;
  padding: 5%;
  font-size: 16px;
  margin-top: 50px;
}

input {
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #5c9ea1;
  background-color: #ffffff9c;
  border-radius: 15px;
}

.contact {
  display: flex;
  justify-content: space-around;
  border: 2px solid #2dcdd3;
  background-color: #f4f7f7;
  border-radius: 20px;
  padding: 2%;
  font-size: 16px;
  width: 20%;
  margin-top: 10px;
}

.fon-cont {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
}

.btn-con {
  background-color: transparent;
  border: 1px solid transparent;
}
</style>
