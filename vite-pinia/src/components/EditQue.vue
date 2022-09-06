<template>
<div>
<div class="container">
    <h3 class="asu">ASU CONFIGURATOR</h3>
    <div class="col-md-12 spc">

        <form method = "POST" @submit.prevent="editItem">
            <table class="mytable">
                <tr>
                    <td class="bt">Project Code(TM Number)
                        <input type="text" v-model="projectcode"> 
                    </td>

                    <td><span class="bt">Facility Code</span>
                        <span><input type="text" v-model="facilitycode"> </span>
                    </td>
                </tr>

                <tr>
                    <td><span class="bt">Client Name</span>
                        <span><input type="text" v-model="clientname"> </span>
                    </td>

                    <td><span class="bt">Facility Name</span>
                        <span><input type="text" v-model="facilityname"></span>
                    </td>
                </tr>

                <tr>
                    <td><span class="bt">Plant Name</span>
                        <span><input type="text" v-model="plantname"></span>
                    </td>

                    <td><span class="bt">Project Code</span>
                        <span><input type="text" v-model="cereoprojectcode"></span>
                    </td>
                </tr>

                <tr>
                    <td><span class="bt">Project Name</span>
                        <span><input type="text" v-model="projectname"></span>
                    </td>

                    <td><span class="bt">Component Library Type</span>
                        <span><select style="-webkit-appearance: none; select" v-model="componentlibrary">
                                <option selected>Individual Facility Wise</option>
                                <option>Project Wise</option>
                                <option>Universal (Shared across projects)</option>
                            </select>
                        </span>
                    </td>

                </tr>

            </table>

            <div>
                <button class="sub" @click="editItem(post.id)">Update</button>
                <!-- <router-link :to="{ name: 'FrontBtn'}" class="sub"><b></b></router-link> -->
                
            </div>
        </form>
    </div>
</div></div>
</template>
<!-- 
<script>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
    name: "EditQue",
    props: ['id'],
    setup() {
        const projectcode = ref('');
        const facilitycode = ref('');
        const clientname = ref('');
        const facilityname = ref('');
        const plantname = ref('');
        const creoprojectcode = ref('');
         const projectname = ref('');
        const componentlibrary = ref('');
        const router = useRouter();
        const route = useRoute()
         onMounted(async() => {
           const res = await fetch(`http://localhost:7000/api/employee/${route.params.id}`);
           const product = await res.json();
                    projectcode.value = product.projectcode;
                    facilitycode.value = product.facilitycode;
                    clientname.value = product.clientname;
                    facilityname.value = product.facilityname;
                    plantname.value = product.plantname;
                    creoprojectcode.value = product.creoprojectcode;
                    projectname.value= product.projectname;
                    componentlibrary.value = product.componentlibrary;
         })
    

          const submit = async () => {
           await fetch(`http://localhost:7000/api/employee/${route.params.id}`, {
               method: 'PUT',
               headers: {"Content-type": "application/json"},
               body: JSON.stringify({ 
                    projectcode: projectcode.value,
                    facilitycode: facilitycode.value,
                    clientname: clientname.value,
                    facilityname: facilityname.value,
                    plantname: plantname.value,
                    creoprojectcode: creoprojectcode.value,
                     projectname: projectname.value,
                    componentlibrary: componentlibrary.value
                    
         })
           });

            await router.push('/FormEdit');
               
        }

        return {
            projectcode,
            facilitycode,
            clientname,
            facilityname,
            plantname,
            creoprojectcode,
            projectname,
            componentlibrary,
            submit
        }
    
    }}

</script> -->

<script setup>
    import { storeToRefs } from 'pinia'
    import { PostStore } from '../store/PostStore'
    const { posts, edit_id } = storeToRefs(PostStore());
    const { editItem, fetchPosts } = PostStore()
    fetchPosts();
    editItem();
    </script>

<style>
.bt {
    margin-left: 10px;
    margin-right: 50px;
    font-family: 'Open Sans', sans-serif;
    color: black;
    font-weight: bold;
}

.spc {
    border: 1px solid black;
    padding: 30px 0px;
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 10px;
}

.mytable {
    width: 80%;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    color: black;
}

.mytable td {
    padding: 5px;
}

.mytable td:first-child {
    border-right: 1px solid;
}

.sub {
    width: 13%;
    height: 25%;
    margin-left: 41%;
    margin-right: 35%;
   
    margin-top: 20px;
    padding: 5px 5px;
    font-size: 110%;
    background-color: #2c6779;
    border-radius: 5px;
}

.sub:hover {
    color: rgb(228, 95, 95);
}

.asu {
    text-align: center;
    font-size: 40px;
    margin: 100px;
    color: black;
}

input,
select {
    width: 50%;
    height: 30px;
    margin-bottom: 10px;
    padding-left: 10px;
    display: block;
    float: right;
    border-radius: 5px;
    background-color: #f4f4f4;
}
</style>
