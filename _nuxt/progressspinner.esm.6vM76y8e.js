import{s as i}from"./basecomponent.esm.xLjGjAV-.js";import{B as o}from"./entry.ZURvHRNo.js";import{L as n,M as s,C as r,X as p}from"./swiper-vue.EeBON-2_.js";var a=`
@layer primevue {
    .p-progress-spinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progress-spinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progress-spinner-svg {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
}
`,l={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},c=o.extend({name:"progressspinner",css:a,classes:l}),g={name:"BaseProgressSpinner",extends:i,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:c,provide:function(){return{$parentInstance:this}}},d={name:"ProgressSpinner",extends:g,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},m=["fill","stroke-width"];function u(e,v,f,h,y,t){return n(),s("div",r({class:e.cx("root"),role:"progressbar"},e.ptm("root"),{"data-pc-name":"progressspinner"}),[(n(),s("svg",r({class:e.cx("spinner"),viewBox:"25 25 50 50",style:t.svgStyle},e.ptm("spinner")),[p("circle",r({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,m)],16))],16)}d.render=u;export{d as default};
