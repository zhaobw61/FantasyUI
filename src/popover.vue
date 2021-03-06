<template>
    <div ref="popover" class="popover" @click="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-show="visible"
            :class="{[`position-${position}`]: true}">
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
    mounted () {
        if(this.trigger === 'click') {
            this.refs.popover.addEventListener('click', this.onClick);
        } else {
            this.refs.popover.addEventListener('mouseenter', this.open);
            this.refs.popover.addEventListener('mouseleave', this.close);
        }
    },
    destroyed() {
        if(this.trigger === 'click') {
            this.refs.popover.addEventListener('click', this.onClick);
        } else {
            this.refs.popover.addEventListener('mouseenter', this.open);
            this.refs.popover.addEventListener('mouseleave', this.close);
        }
    },
    computed: {
        openEvent () {
            if (this.trigger === 'click') {
                return 'click';
            } else {
                return 'mouseenter';
            }
        },
        closeEvent () {
            if (this.trigger === 'click') {
                return 'click';
            } else {
                return 'mouseleave';
            }
        }
    },
    props: {
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
            }
        },
        trigger: {
            type: String,
            default: 'click',
            validator(value) {
                return ['click', 'hover'].indexOf(value) >= 0;
            }
        }
    },
    methods: {
        positionContent() {
            const {contentWrapper, triggerWrapper} = this.$refs;
            document.body.appendChild(contentWrapper);
            let {width, height, top, left} = triggerWrapper.getBoundingClientRect();
            let {height: height2} = contentWrapper.getBoundingClientRect();
            if(this.position == 'top') {
                contentWrapper.style.left = left + window.scrollX + 'px';
                contentWrapper.style.top = top + window.scrollY + 'px';
            } else if(this.position == 'bottom') {
                contentWrapper.style.left = left + window.scrollX + 'px';
                contentWrapper.style.top = top + height + window.scrollY + 'px';
            } else if(this.position == 'left') {
                contentWrapper.style.left = left + window.scrollX + 'px';
                contentWrapper.style.top = top + window.scrollY -
                (height - height2)/2 + 'px';
            } else if(this.position == 'right') {
                contentWrapper.style.left = left + window.scrollX + width + 'px';
                contentWrapper.style.top = top + window.scrollY -
                (height - height2)/2 + 'px';
            }
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
        padding: 0.5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }
        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;
            filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
            &::before, &::after {
                left: 10px;
            }
            &::before{
                border-top-color: black;
                top: 100%;
            }
            &::after{
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }
        &.position-bottom {
            transform: 10px;
            margin-top: 10px;
            filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.5));
            &::before, &::after {
                left: 10px;
            }
            &::before{
                border-bottom-color: black;
                bottom: 100%;
            }
            &::after{
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            filter: drop-shadow(1px 0px 1px rgba(0, 0, 0, 0.5));
            &::before, &::after {
                left: 100%;
                transform: translateY(-50%);
                top: 50%;
            }
            &::before{
                border-left-color: black;
            }
            &::after{
                border-left-color: white;
                left: calc(100% - 1px);
            }
        }
        &.position-right {
            margin-left: 10px;
            filter: drop-shadow(-1px 0px 1px rgba(0, 0, 0, 0.5));
            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }
            &::before{
                border-right-color: black;
                right: 100%;
            }
            &::after{
                border-right-color: white;
                right: calc(100% - 1px);
            }
        }
    }
</style>
