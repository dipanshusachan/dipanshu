<template>
<div>
    <h1 class="asu">ASU CONFIGURATOR</h1>
    <h5 class="pr">List of all Projects</h5>
    <table>
        <thead class="head">
            <tr>
                <th>S.No</th>
                <th>Project Code</th>
                <th>Facility Code</th>
                <th>Project Name</th>
                <th>Client Name</th>
                <th>Facility Name</th>
                <th>Creo Project Code</th>
                <th>Component Library</th>
                <th>Project Status</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="post in posts" :key="post.id">
                <td>{{post.id}}</td>
                <td>{{post.projectcode}}</td>
                <td>{{post.facilitycode}}</td>
                <td>{{post.projectname}}</td>
                <td>{{post.clientname}}</td>
                <td>{{post.facilityname}}</td>
                <td>{{post.cereoprojectcode}}</td>
                <td>{{post.componentlibrary}}</td>
                <td>{{post.projectstatus}}</td>
            </tr>
        </tbody>
    </table>
  
</div>
</template>

<script setup>
       import { storeToRefs } from 'pinia'
       import { PostStore } from '../store/PostStore'

       const { posts } = storeToRefs(PostStore())

       const { fetchPosts } = PostStore()
       fetchPosts();
</script>

<style scoped>
table {
    width: 90%;
    max-width: 90%;

    border-collapse: collapse;
    border-top: 1px solid #dee2e6;
    border-left: 1px solid #dee2e6;
    margin-left: auto;
    margin-right: auto;
}

table thead th {
    vertical-align: bottom;
}

th {
    padding: 0.3rem;
    border-bottom: 2px solid #dee2e6;
    border-right: 2px solid #dee2e6;
    background-color: #337ab7;
    color: white;
    font-family: 'Open Sans', sans-serif;
}
td{
    padding: 0.3rem;
    border-bottom: 2px solid #dee2e6;
    border-right: 2px solid #dee2e6;
    color: black;  
    
}

table td,
table th {
    padding: 0.75rem;
    vertical-align: top;
}

.asu {
    text-align: center;
    font-size: 40px;
    margin: 100px;
}

.pr {
    text-align: center;
    font-size: 30px;
    margin: 30px;
    color: black;
}

</style>
