<template>
    <div class="col" :class="colClass"
        :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
let validator = ( ) => {
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach(key => {
        if(!['span', 'offset'].includes(keys)) {
            valid = false;
        }
    })
    return valid;
}
export default {
    name: 'GuluCol',
    props: {
        span: {
            type: [Number, String]
        },
        offset: {
            type: [Number, String]
        },
        ipad: {
            type: Object,
            validator,
        },
        narrowPc: {
            type: Object,
            validator,
        },
        pc: {
            type: Object,
            validator,
        },
        widthPc: {
            type: Object,
            validator,
        }
    },
    data: {
        gutter: 0
    },
    computed: {
        colClass() {
            let {span, offset, ipad, narrowPc, pc, widthPc} = this;
            return [
                span && `col-${span}`,
                offset && `offset-${offset}`,
                ... (ipad ? [`col-ipad-${ipad.span}`] : []),
                ... (narrowPc ? [`col-narrowPc-${narrowPc.span}`] : []),
                ... (pc ? [`col-pc-${pc.span}`] : []),
                ... (widthPc ? [`col-widthPc-${widthPc.span}`] : [])
            ];
        },
        colStyle () {
            return {
                paddingLeft: gutter/2+'px',
                paddingRight: gutter/2+'px'
            }
        }
    }
}
</script>
<style scoped lang="scss">
    .col{
        height: 100px;
        background-color: gray;
        width: 50%;
        border: 1px solid red;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n /24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n /24) * 100%;
            }
        }
        @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n /24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n /24) * 100%;
                }
            }
        }
        @media (min-width: 769px) {
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n /24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n /24) * 100%;
                }
            }
        }
        @media (min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n /24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n /24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class-prefix: col-width-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n /24) * 100%;
                }
            }
            $class-prefix: offset-width-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n /24) * 100%;
                }
            }
        }
    }
</style>