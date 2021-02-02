<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="item in source" v-bind:key="item.name">
                <cascader-item :sourceItem='item'></cascader-item>
            </div>
        </div>
    </div>
</template>
<script>
import CascaderItem from './cascader-item';
export default {
    name: "GuluCascader",
    components:{
        CascaderItem
    },
    props: {
        source: {
            type:Array
        }
    },
    mounted () {
        console.log(this.dataSource);
    }
}
</script>
<style scoped lang="scss">
</style>