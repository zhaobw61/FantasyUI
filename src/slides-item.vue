<template>
    <transition name="slide">
        <div class="g-slider-item" v-if="visible">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return  {
            visible: false
        }
    }
}
</script>
<style lang="scss" scoped>
.g-slide-item {
    position: absolute;
    left: 0;
    top: 0;
}
.slide-enter-active, .slide-leave-active {
    transition: all 1s;
}
.slide-enter {
    transform: translateX(100%);
}
.slide-leave-to {
    transform: translateX(-100%);
}
</style>
