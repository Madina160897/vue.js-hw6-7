<script>
</script>

<template>
    <div class="fon">
        <h1>Главная страница</h1>
        <div class="icon-fon">
            <div class="block-icon">
                <router-link to="/gallery">
                    <img src="../img/1.png">
                </router-link>
            </div>
            <div class="block-icon">
                <router-link to="/contacts">
                    <img src="../img/2.png">
                </router-link>
            </div>
        </div>
    </div>
</template>

<style>
.fon{
    width: 1800px;
    height: 800px;
    margin: 50px auto;
}

h1{
    font-size: 60px;
    color: cornflowerblue;
    text-align: center;
}

.icon-fon{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.block-icon{
    width: 500px;
    height: 400px;
    border: 2px solid transparent;
    box-shadow: 0 0 5px gray;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}

img{
    width: 400px;
    height: 300px;
}
</style>
