/*! Built with http://stenciljs.com */
mycomponent.loadBundle("egjksajo",["exports"],function(t){var e=window.mycomponent.h,n=function(){function t(){this.start=1,this.max=100,this.min=0,this.step=1}return t.prototype.componentWillLoad=function(){this.value=this.start},t.prototype.increment=function(){var t=this.value+this.step;t>this.max?this.value=this.max:this.value=t},t.prototype.decrement=function(){var t=this.value-this.step;t<this.min?this.value=this.min:this.value=t},t.prototype.render=function(){var t=this;return e("div",null,e("button",{type:"button",onClick:function(){return t.increment()}},"+"),e("span",null,this.value),e("button",{type:"button",onClick:function(){return t.decrement()}},"-"))},Object.defineProperty(t,"is",{get:function(){return"my-component"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{max:{type:Number,attr:"max"},min:{type:Number,attr:"min"},start:{type:Number,attr:"start"},step:{type:Number,attr:"step"},value:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"my-component{font-family:monospace;padding:0 .5rem}button{background:red;color:#000;border:0;border-radius:6px;box-shadow:0 0 5px rgba(173,61,85,.5)}button:active{background:#ad3d55;color:#fff}"},enumerable:!0,configurable:!0}),t}();t.MyComponent=n,Object.defineProperty(t,"__esModule",{value:!0})});