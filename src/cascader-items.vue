<template>
    <div class="cascaderItems" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="item in items" :key="item.name"
                @click="onClickLabel(item)">
                {{item.name}}
                <icon class="icon" v-if="item.children" name="right"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :items="rightItems" :height="height"
                :level="level+1" :selected="selected" @update:selected="onUpateSelected"></cascader-items>
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
        },
        selected: {
            type: Array,
            default: ()=>{
                return [];
            }
        },
        level: {
            type: Number,
            default: ()=>{
                return 0;
            }
        }
    },
    data () {
        return {
            leftSelected: null
        }
    },
    computed: {
        rightItems(){
            let currentSelected = this.selected[this.level]
            if(currentSelected && currentSelected.children) {
                return currentSelected.children;
            } else {
                return null;
            }
        }
    },
    methods: {
        onClickLabel(item) {
            let copy =JSON.parse(JSON.stringify(this.selected));
            copy[this.level] = item;
            copy.splice(this.level + 1);
            this.$emit('update:selected', copy);
        },
        onUpateSelected(newSelected) {
            this.$emit('update:selected', newSelected);
        }
    },
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
        overflow: auto;
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

