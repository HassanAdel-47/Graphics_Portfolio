import{D as r}from"./entry.-27T8I5j.js";import{af as t,L as d,O as s,T as l,a4 as i}from"./swiper-vue.NMAPkY43.js";var u={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=r.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function p(e,f,n,m,o,a){return a.inline?t(e.$slots,"default",{key:0}):o.mounted?(d(),s(l,{key:1,to:n.appendTo},[t(e.$slots,"default")],8,["to"])):i("",!0)}u.render=p;export{u as s};
