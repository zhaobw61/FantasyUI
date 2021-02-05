<template>
    <div class="cascaderItems">
       <div class="left">
            <div v-for="item in items" :key="item.name" @click="leftSelected = item">
                {{item.name}}
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :items="rightItems"></cascader-items>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cascaderItems',
    props: {
        items: {
            type: Array
        }
    },
    data () {
        return {
            leftSelected: null
        }
    },
    computed: {
        rightItems(){
            if(this.leftSelected && this.leftSelected.children) {
                return this.leftSelected.children;
            } else {
                return null;
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .cascaderItems {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        .right {
            margin-top: -1px;
        }
    }
</style>

