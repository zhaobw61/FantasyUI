<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    name: "GuluCollapse",
    props: {
        single: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Array
        }
    },
    data () {
        return {
            eventBus: new Vue()
        }
    },
    provide () {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        this.eventBus.$emit('update:selected', this.selected);
        this.eventBus.$on('update:addSelected', (name) => {
            this.selected.push(name);
            this.eventBus.$emit('update:selected', this.selected);
            this.$emit('update:selected', this.selected);
        });
        this.eventBus.$on('update:removeSelected', (name) => {
            let index = this.selected.indexOf(name);
            this.selected.splice(index, 1);
            this.eventBus.$emit('update:selected', this.selected);
            this.$emit('update:selected', this.selected);
        });
        this.$children.forEach((vm) => {
            vm.single = this.single;
        })
    }
}
</script>
<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius ;
    }
</style>


