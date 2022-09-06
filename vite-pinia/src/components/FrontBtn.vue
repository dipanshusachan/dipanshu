<template>
<div>
     <h1 class="asu">ASU CONFIGURATOR</h1>
    <div>
        <div class="container">
            <router-link :to="{ name: 'FormCre'}" class="btn"><b>Create Project</b></router-link>
            <router-link :to="{ name: 'FormEdit'}" class="btn"><b>Edit Project</b></router-link>
            <router-link :to="{ name: 'FormTab'}" class="btn"><b>List of all Project</b></router-link>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: 'FrontBtn'
}
</script>

<style scoped>
.btn {
    display: inline-block;
    background: white;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 15px;
    text-align: center;
    border: none;
    font-size: 30px;
    width: 300px;
    height: 300px;
    margin-left: 10px;
    margin-right: auto;
    font-family: 'Open Sans', sans-serif;
    padding-top: 8%;
    box-shadow: 3px 6px 14px -5px #000000;
    cursor: pointer;
    outline: none;
    color: black;
    background-size: cover;
}

.asu {
    text-align: center;
  
    font-family: "Trirong", serif;
    color: black;
    margin-left: auto;
    margin-right: auto;
}

.body {
    background-color: #f4f4f4;
}

body {
    margin: 0;
    padding: 0;
    background-size: cover;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.5em;
    background-color: #f4f4f4;
    color: #5a5656;
    background-repeat: no-repeat;
}

*{
    margin: 3px 0px 0px 0px;
    padding: 0px;
    box-sizing: border-box;
}

.container {
    margin-left: 26%;
    margin-right: 26%;
}
</style>
