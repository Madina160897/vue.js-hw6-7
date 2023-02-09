<script>
export default {
    data() {
        return {
            images: [
                {
                    id: 1,
                    image: "/src/img/img1.jpg"
                },
                {
                    id: 2,
                    image: "/src/img/img2.jpg"
                },
                {
                    id: 3,
                    image: "/src/img/img3.jpg"
                },
                {
                    id: 4,
                    image: "/src/img/img4.jpg"
                },
                {
                    id: 5,
                    image: "/src/img/img5.jpg"
                },
            ]
        }
    }
}
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
            <div v-for="img in images">
                <img class="img-gal" :src="img.image">
            </div>
        </main>
        <div class="all-btn-gal">
            <button> <img class="icon" src="../img/left.png" ></button>
            <button> <img class="icon" src="../img/right.png" ></button>
        </div>
    </div>
</template>

<style>
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

.img-gal{
    width: 900px;
    height: 600px;
}

main{
    width: 100%;
    height: 800px;
    margin: 20px auto;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-icon{
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.btn{
    width: 250px;
    height: 50px;
    border: 2px solid transparent;
    box-shadow: 0 0 5px gray;
    border-radius: 20px;
    background-color: skyblue;
    font-size: 16px;
    font-weight: 600;
}

.all-btn-gal{
    width: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.icon{
    width: 50px;
    height: 50px;
}
</style>
