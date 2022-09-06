import { defineStore } from 'pinia';
import axios from 'axios'

export const PostStore = defineStore({
    id: "post",
    state : () => ({
        posts : [],
        // id : null,
        edit_id : null,
        projectcode : null,
        facilitycode : null,
        projectname : null,
        clientname : null,
        facilityname : null,
        plantname : null,
        cereoprojectcode : null,
        componentlibrary : null,

        loading:false,
    }),

    getters: {

    },

    actions:{
        async fetchPosts(){
            console.log(28);
            this.posts = [];
            this.loading = true
            try{
                let posts = await axios.get('http://localhost:7000/api/employee/');
                console.log(33);
                this.posts = posts.data;
            }catch(error){
                console.log(error)
            }finally{
                //loader
                this.loading = false
            }
        // }
    },
    addItem(){
        let obj = {};
        console.log(44,this.projectcode,this.facilitycode,this.projectname,this.clientname);
        if(this.projectcode != '' && this.facilitycode != '' && this.projectname != '' && this.clientname != '' && this.facilityname != '' 
        && this.plantname != '' && this.cereoprojectcode != '' && this.componentlibrary != ''){
        
            console.log(48,this.projectcode,this.facilitycode,this.projectname,this.clientname);
            let form_data = new FormData();
            form_data.append('projectcode', this.projectcode);
            form_data.append('facilitycode', this.facilitycode);
            form_data.append('clientname', this.clientname);
            form_data.append('facilityname', this.facilityname);
            form_data.append('plantname', this.plantname);
            form_data.append('cereoprojectcode', this.cereoprojectcode);
            form_data.append('projectname', this.projectname);
            form_data.append('componentlibrary', this.componentlibrary);
            obj.projectcode = this.projectcode;
            obj.facilitycode = this.facilitycode;
            obj.projectname = this.projectname;
            obj.clientname = this.clientname;
            obj.facilityname = this.facilityname;
            obj.cereoprojectcode = this.cereoprojectcode;
            obj.componentlibrary = this.componentlibrary
            console.log("form data",form_data);
            // form_data.append('image', this.image);

            // let config  = {
            //     header:{
            //         'Content-Type' : 'image/png'
            //     }
            // }
            if(this.edit_id > 0){
                //Update
                form_data.append('_method','put');
           
                console.log(78,this.edit_id);
                axios.post('http://localhost:7000/api/employee/:id' + this.edit_id,obj).then(res=>{
                    console.log("hii");
                    console.log(res);
                    this.formReset()
                    this.fetchPosts()
                })
            }else{
                //add Post
                console.log(87);
                axios.post('http://localhost:7000/api/employee/', obj).then(res =>{
                    console.log("89");
                    console.log(res);
                    this.formReset()
                    this.fetchPosts()
                })
            }
        }
    },
    editItem(id){
        console.log(97,id);
        console.log(98,this.post);
        
        //Let = let
        let post = this.posts.find(post=>post.id == id)
        if(post){
            this.projectcode= post.projectcode
            this.facilitycode= post.facilitycode
            this.clientname= post.clientname
            this.facilityname= post.facilityname
            this.plantname= post.plantname
            this.cereoprojectcode= post.cereoprojectcode
            this.projectname= post.projectname
            this.componentlibrary= post.componentlibrary
            this.edit_id= post.id

    }},

        formReset(){
            this.edit_id = null
            this.projectcode = null
            this.facilitycode = null
            this.clientname = null
            this.facilityname = null
            this.plantname = null
            this.cereoprojectcode = null
            this.projectname = null
            this.componentlibrary = null
        }
    }
})

