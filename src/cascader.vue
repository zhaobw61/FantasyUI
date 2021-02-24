<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <cascader-items :items="source" class="popover"
                :height="popoverHeight" :selected="selected" @update:selected="onUpateSelected"></cascader-items>
        </div>
    </div>
</template>
<script>
import CascaderItems from './cascader-items';
export default {
    name: "GuluCascader",
    components:{
        CascaderItems
    },
    props: {
        source: {
            type: Array
        },
        popoverHeight: {
            type: String
        },
        selected: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data () {
        return {
            popoverVisible: false,
            level1Selected: null,
            level2Selected: null
        }
    },
    computed:{
        level2Items() {
            if (this.level1Selected) {
                return this.level1Selected.children;
            } else {
                return [];
            }
        },
        level3Items() {
            if (this.level2Selected) {
                return this.level2Selected.children ? this.level2Selected.children : [];
            } else {
                return [];
            }
        }
    },
    methods: {
        onUpateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
        }
    },
}
</script>
<style scoped lang="scss">
@import "var";
.cascader {
    position: relative;
    .trigger {
        height: 32px;
        width: 100px;
        border: 1px solid black;
    }
    .popover-wrapper {
        position: absolute;
        background: #fff;
        height: 200px;
        overflow: auto;
        display: flex;
        @extend .box-shadow;
    }
}
</style>