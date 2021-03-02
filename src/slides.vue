<template>
    <div class="g-slider">
        <div class="g-slider-window" ref="window">
            <div class="g-slider-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$children);
        // this.$children[0].
    }
}
</script>
<style scoped lang="scss">
.g-slider {
    display: inline-block;
    border: 1px solid #ccc;
    &-window {
    }
    &-wrapper {
        position: relative;
    }
}
</style>
