<template>
<div class="container">
    <h3 class="asu">ASU CONFIGURATOR</h3>
    <div class="col-md-12 spc">

        <form method = "POST" @submit.prevent="addItem">
            <table class="mytable">
                <tr>
                    <td class="bt"> Project Code(TM Number)
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

                    <td><span class="bt">Component Library Type </span>
                        <span><select style="-webkit-appearance: none; select;" v-model="componentlibrary">
                                <option selected>Individual Facility Wise</option>
                                <option>Project Wise</option>
                                <option>Universal (Shared across projects)</option>
                            </select>
                        </span>
                    </td>

                </tr>

            </table>

            <div>
                <!-- <button class="sub" @click="addItem(post.id)">Submit</button> -->
                <!-- <router-link :to="{ name: 'FrontBtn'}" class="sub"><b>Submit</b></router-link> -->
                <button class="sub" >Submit</button>
                
            </div>
        </form>
    </div>
</div>
</template>

<!-- <script>
import {
    ref
} from 'vue'
import {
    useRouter
} from 'vue-router'
export default {
    name: "FormCre",
    setup() {
        const projectcode = ref('');
        const facilitycode = ref('');
        const projectname = ref('');
        const clientname = ref('');
        const facilityname = ref('');
        const plantname = ref('');
        const creoprojectcode = ref('');
        const componentlibrary = ref('');
        const router = useRouter();
        const submit = async () => {
            await fetch('http://localhost:7000/api/employee/', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    projectcode: projectcode.value,
                    facilitycode: facilitycode.value,
                    projectname: projectname.value,
                    clientname: clientname.value,
                    facilityname: facilityname.value,
                    plantname: plantname.value,
                    creoprojectcode: creoprojectcode.value,
                    componentlibrary: componentlibrary.value,
                })
            });
            await router.push('/Formtab');
        }

        return {
            projectcode,
            facilitycode,
            projectname,
            clientname,
            facilityname,
            plantname,
            creoprojectcode,
            componentlibrary,
            submit
        }
    }

}
</script> -->

<script setup>
       import { storeToRefs } from 'pinia'
       import { PostStore } from '../store/PostStore'
       const { projectcode,
            facilitycode,
            projectname,
            clientname,
            facilityname,
            plantname,
            cereoprojectcode,
            componentlibrary } = storeToRefs(PostStore());
       const { addItem, fetchPosts } = PostStore()
       fetchPosts();
   
</script>
<!-- <script setup>
    import { storeToRefs } from 'pinia'
    import { PostStore } from '../store/PostStore'

    const { posts } = storeToRefs(PostStore())

    const { fetchPosts } = PostStore()
    fetchPosts();
</script> -->
<style>
.bt {
    /* margin-left: 10px;
    margin-right: 50px; */
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
    /* width: 80%;
    max-width: 50%; */
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
    background: rgb(31, 101, 182);
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
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    padding-left: 50px;
    display: block;
    float: right;
    border-radius: 5px;
    background-color: #f4f4f4;
}
</style>
