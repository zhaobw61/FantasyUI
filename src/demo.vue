<template>
    <div>
        <g-cascader :source="source"
            :selected.sync="selected"></g-cascader>
    </div>
</template>
<script>
import Cascader from './cascader'
import db from './db'
function ajax(parent_id = 0) {
    return db.filter(item => item.parent_id == parent_id);
}
export default {
    name:'demo',
    components: {
        'g-cascader': Cascader
    },
    data() {
        return {
            selected:[],
            source: ajax()
        }
    },
    methods: {
        test(item){
            console.log(item);
        }
    },
}
</script>