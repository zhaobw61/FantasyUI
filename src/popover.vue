<template>
    <div ref="popover" class="popover" @click="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-show="visible" @click.stop >
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name: "GuluPopover",
    data () {
        return {
            visible: false
        }
    },
    methods: {
        positionContent() {
            document.body.appendChild(this.$refs.contentWrapper);
            let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
        },
        onClickDocument (e) {
            if(this.$refs.popover && (this.$refs.popover == e.target || this.$refs.popover.contains(e.target))) {
                return;
            }
            this.close();
        },
        open () {
            this.visible = true;
            this.positionContent();
            document.addEventListener('click', this.onClickDocument)
        },
        close(){
            this.visible = false;
            document.removeEventListener('click', this.onClickDocument);
        },
        onClick(event) {
            if (this.$refs.triggerWrapper.contains(event.target)) {
                if (this.visible === true) {
                    this.close();
                } else {
                    this.open();
                }
            } else {

            }
        }
    }
}
</script>
<style scoped lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        margin: 50px;
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        transform: translateY(-100%);
        margin-top: -10px;
        padding: 0.5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before{
            content: '';
            display: block;
            border: 10px solid red;
            border-top-color: black;
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
            width: 0;
            height: 0;
            position: absolute;
            top: 100%;
            left: 10px;
        }
        &::after{
            content: '';
            display: block;
            border: 10px solid red;
            border-top-color: white;
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
            width: 0;
            height: 0;
            position: absolute;
            top: calc(100% - 1px);
            left: 10px;
        }
    }
</style>
