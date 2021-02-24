<template>
    <div>
        <div>{{selected}}</div>
        <g-cascader :source="source"
            :selected="selected" @update:selected="selected = $event"></g-cascader>
    </div>
</template>
<script>
import Cascader from './cascader'
// import Icon from './icon'
export default {
    name:'demo',
    components: {
        'g-cascader': Cascader
    },
    data() {
        return {
            selected:[],
            source: [
                {
                    name: '浙江',
                    children: [
                    {
                        name: '杭州',
                        children: [
                        {name: '杭州-1'},
                        {name: '杭州-2'},
                        {name: '杭州-3'},
                        {name: '杭州-4'}
                        ]
                    },
                    {
                        name: '嘉兴',
                        children: [
                        {name: '嘉兴-1'},
                        {name: '嘉兴-2'},
                        {name: '嘉兴-3'},
                        {name: '嘉兴-4'}
                        ]
                    },
                    {name: '湖州'}
                    ]
                },{
                    name: '福建',
                    children: [
                    {
                        name: '福州',
                        children: [
                        {name: '福州-1'},
                        {name: '福州-2'},
                        {name: '福州-3'}
                        ]
                    },
                    {name: '福建-2'},
                    {name: '福建-3'}
                    ]
                }
            ]
        }
    },
    methods: {
        test(item){
            console.log(item);
        }
    },
}
</script>