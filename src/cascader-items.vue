<template>
    <div class="cascaderItems" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="item in items" :key="item.name" @click="leftSelected = item">
                {{item.name}}
                <icon class="icon" v-if="item.children" name="right"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :items="rightItems"  :height="height"></cascader-items>
        </div>
    </div>
</template>

<script>
import Icon from './icon'
export default {
    name: 'cascaderItems',
    components:{Icon},
    props: {
        items: {
            type: Array
        },
        height: {
            type: String
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
@import "var";
.cascaderItems {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    & .left {
        height: 100%;
        // padding: .3em 0;
    }
    & .right {
        height: 100%;
        border-left: 1px solid $border-color;
    }
    .label {
        padding: .3em 1em;
        align-items:center;
        .icon {
            margin-left: 1em;
        }
    }
}
</style>

