<template>
    <div>
        <g-cascader :source="source"
            :selected.sync="selected"
            @update:selected="xxx"
            :load-data="loadData"
            ></g-cascader>
    </div>
</template>
<script>
import Cascader from './cascader'
import db from './db'
function ajax(parent_id = 0, success) {
    let res =  db.filter(item => item.parent_id == parent_id);
    let id = setTimeout(() => {
        success(res);
    }, 1000);
    console.log('id', id);
    return id;
}
export default {
    name:'demo',
    components: {
        'g-cascader': Cascader
    },
    data() {
        return {
            selected:[],
            source: []
        }
    },
    created() {
        ajax(0, (res)=>{
            this.source = res;
        })
    },
    methods: {
        loadData(node, callback){
            let {name, id, parent_id } = node;
            console.log(name, id, parent_id);
            ajax(id, (result) => {
                callback(result);
            })
        },
        xxx(selected){
            console.log(selected);
            // ajax(selected[0].id,(res)=>{
            //     this.source = res;
            // })
        }
    },
}
</script>