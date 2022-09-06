<template>
<div>
    <div class="asu"><h1 class="asu">ASU CONFIGURATOR</h1></div> 

    <div class="col-lg-4 m-auto"><br><br>

        <form>
            <div class="card column">

                <div class="login">
                    <h1 class="text-white">LOGIN</h1>
                </div>
                <br>

                <input type="text" name="name" class="form-control" placeholder="Username" required><br>

                <input type="password" name="password" class="form-control" placeholder="Password" required><br>

                <!-- <button class = "btn" type = "submit" name="done"> Submit </button> -->
                <router-link :to="{ name: 'FrontBtn'}" class="btn"><b>Submit</b></router-link>

                <br>

            </div>

        </form>

    </div>
</div>
</template>

<script>
export default {
    name: "LoginPage"
}
</script>

<style scoped>
.form-control {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    margin-right: 10%;
    margin-right: 10%;
    border-radius: none;
    background-color: #f4f4f4;
    padding: 15px 15px;
}

.btn {
    background: #008bce;
    margin-right: 10%;
    margin-left: 10%;
    color: #f4f4f4;
    border: none;
    margin-bottom: 30px;
    margin-top: 26px;
    padding: 17px 17px;
    font-size: 20px;
}

.card {
    background-color: rgba(68, 68, 68, 0.9);
    color: #f4f4f4;
    max-width: 100%;
    margin-right: 10px;
}


.login {
    display: block;
    font-family: 'Bodoni MT';
    font-size: 26px;
    color: white;
    line-height: 1.2;
    text-align: left;
    margin-bottom: 20px;
    margin-top: 36px;
    margin-left: 10%;
}
.asu{
    text-align: center;
}
</style>
