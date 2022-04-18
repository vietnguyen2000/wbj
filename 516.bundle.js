(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[516],{254:function(t,e,i){t.exports=i(158)},327:function(t,e,i){t.exports=i(558)},565:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return H}});var a=i(10),n=i(9),r=i(0),o=i(8),p=i.n(o),u=i(25),s=i.n(u),l=i(254),d=i.n(l),h=i(1),c=i(162),v=i(95),m=i.n(v),I={active:!0,blendMode:0,collideBottom:!0,collideLeft:!0,collideRight:!0,collideTop:!0,frequency:0,gravityX:0,gravityY:0,maxParticles:0,name:"",on:!0,particleBringToTop:!0,radial:!0,timeScale:1,trackVisible:!1,visible:!0,accelerationX:0,accelerationY:0,angle:{min:0,max:360},alpha:1,bounce:0,delay:0,lifespan:1e3,maxVelocityX:1e4,maxVelocityY:1e4,moveToX:0,moveToY:0,quantity:1,rotate:0,scaleX:1,speedX:0,speedY:0,tint:16777215,x:0,y:0},f={folder:"Primitive",props:[{key:"active"},{key:"visible"},{key:"on"},{key:"particleBringToTop"},{key:"radial"},{key:"frequency",steps:1},{key:"gravityX",steps:1},{key:"gravityY",steps:1},{key:"maxParticles",steps:1},{key:"timeScale",steps:.01}]},E={folder:"Complex",props:[{key:"speedX",steps:1},{key:"speedY",steps:1},{key:"accelerationX",steps:1},{key:"accelerationY",steps:1},{key:"maxVelocityX",steps:1},{key:"maxVelocityY",steps:1},{key:"moveToX",steps:1},{key:"moveToY",steps:1},{key:"x",steps:1},{key:"y",steps:1},{key:"angle",steps:1},{key:"delay",steps:1},{key:"lifespan",steps:1},{key:"quantity",steps:1},{key:"alpha",steps:.01},{key:"scaleX",steps:.01},{key:"scaleY",steps:.01}]},y=i(327),x=i.n(y),V=i(160),g=i.n(V),S=[{text:"None",value:"None"},{text:"Linear",value:"Linear"},{text:"Stepped",value:"Stepped"},{text:"Quad.easeIn",value:"Quad.easeIn"},{text:"Cubic.easeIn",value:"Cubic.easeIn"},{text:"Quart.easeIn",value:"Quart.easeIn"},{text:"Quint.easeIn",value:"Quint.easeIn"},{text:"Sine.easeIn",value:"Sine.easeIn"},{text:"Expo.easeIn",value:"Expo.easeIn"},{text:"Circ.easeIn",value:"Circ.easeIn"},{text:"Elastic.easeIn",value:"Elastic.easeIn"},{text:"Back.easeIn",value:"Back.easeIn"},{text:"Bounce.easeIn",value:"Bounce.easeIn"},{text:"Quad.easeOut",value:"Quad.easeOut"},{text:"Cubic.easeOut",value:"Cubic.easeOut"},{text:"Quart.easeOut",value:"Quart.easeOut"},{text:"Quint.easeOut",value:"Quint.easeOut"},{text:"Sine.easeOut",value:"Sine.easeOut"},{text:"Expo.easeOut",value:"Expo.easeOut"},{text:"Circ.easeOut",value:"Circ.easeOut"},{text:"Elastic.easeOut",value:"Elastic.easeOut"},{text:"Back.easeOut",value:"Back.easeOut"},{text:"Bounce.easeOut",value:"Bounce.easeOut"},{text:"Quad.easeInOut",value:"Quad.easeInOut"},{text:"Cubic.easeInOut",value:"Cubic.easeInOut"},{text:"Quart.easeInOut",value:"Quart.easeInOut"},{text:"Quint.easeInOut",value:"Quint.easeInOut"},{text:"Sine.easeInOut",value:"Sine.easeInOut"},{text:"Expo.easeInOut",value:"Expo.easeInOut"},{text:"Circ.easeInOut",value:"Circ.easeInOut"},{text:"Elastic.easeInOut",value:"Elastic.easeInOut"},{text:"Back.easeInOut",value:"Back.easeInOut"},{text:"Bounce.easeInOut",value:"Bounce.easeInOut"}],P=GameCore.Utils.Object.hasOwn,O=GameCore.Utils.Valid.isObject,k=GameCore.Utils.Valid.isNumber,M=function(){function t(t){var e=this;this.particleEmitter=void 0,this.propKey=void 0,this.root=void 0,this.folder=void 0,this.propValueInput=void 0,this.inputStep=void 0,this.valueInput=void 0,this.valueInputs=void 0,this.valueInputsMap=new(d()),this.valueInputIndex=0,this.arrayInput=void 0,this.randomInput=void 0,this.minMaxInput=void 0,this.startEndStepsInput=void 0,this.ease=void 0,this.addValueInput=function(t){var i=e.inputStep,a=Math.round(x()(1/i)),n={step:i,format:function(t){return t.toFixed(a)}},r={value:t},o=e.valueInputIndex;e.valueInputsMap.set(o,r);var p=e.valueInputs.addInput(r,"value",n);p.controller_.view.labelElement.addEventListener("click",(function(){1!==e.valueInputsMap.size&&(e.valueInputsMap.delete(o),p.hidden=!0,e.update())})),e.valueInputIndex+=1,e.update()},this.update=function(t){var i,a;t&&t.target instanceof c.ListApi&&"ease"===t.target.label&&(e.propValueInput.ease=t.target.value),e.updateProp();var n=e.toPropValue();null==(i=e.particleEmitter)||null==(a=i[e.propKey])||a.onChange(n)};var i=t.root,a=t.particleEmitter,n=t.propKey,r=t.inputStep,o=void 0===r?1:r;this.root=i,this.particleEmitter=a,this.propKey=n,this.inputStep=o,this.propValueInput={value:0,values:[],composite:!1,array:!1,random:!1,startEndSteps:{x:0,y:0,z:0},minMax:{x:0,y:0},ease:"None"},this.fetchPropValue()&&this.createInput()}var e=t.prototype;return e.fetchPropValue=function(){var t,e,i=null==(t=this.particleEmitter)||null==(e=t[this.propKey])?void 0:e.propertyValue;if(void 0===i)return!1;if(Array.isArray(i))return this.propValueInput.composite=!1,this.propValueInput.array=!0,this.propValueInput.value=i[0],this.propValueInput.values=i,!0;if(k(i))return this.propValueInput.composite=!1,this.propValueInput.array=!1,this.propValueInput.value=i,this.propValueInput.values=[i],!0;if(O(i)){if(P(i,"start")&&P(i,"end")){this.propValueInput.composite=!0;var a=this.propValueInput.startEndSteps;return a.x=i.start,a.y=i.end,P(i,"random")?this.propValueInput.random=!0:P(i,"steps")?a.z=i.steps:P(i,"ease")?this.propValueInput.ease=i.ease:this.propValueInput.ease="Linear",!0}if(P(i,"min")&&P(i,"max")){this.propValueInput.random=!0;var n=this.propValueInput.minMax;return n.x=i.min,n.y=i.max,!0}}return!1},e.createInput=function(){var t=this;this.folder=this.root.addFolder({title:this.propKey});var e=this.inputStep,i=Math.round(x()(1/e)),a={step:e,format:function(t){return t.toFixed(i)}},n=this.folder;n.addInput(this.propValueInput,"composite"),this.arrayInput=n.addInput(this.propValueInput,"array"),this.valueInput=this.folder.addInput(this.propValueInput,"value",a),this.valueInputs=n.addFolder({title:"values"}),this.valueInputs.addButton({title:"Add value"}).on("click",(function(){t.addValueInput(t.propValueInput.value)})),this.randomInput=n.addInput(this.propValueInput,"random"),this.minMaxInput=n.addInput(this.propValueInput,"minMax",{x:a,y:a}),this.startEndStepsInput=n.addInput(this.propValueInput,"startEndSteps",{x:a,y:a,z:a}),this.ease=n.addBlade({view:"list",label:"ease",options:S,value:this.propValueInput.ease}),g()(this.propValueInput).forEach((function(e){return t.addValueInput(e)})),this.updateProp(),n.on("change",this.update)},e.updateProp=function(){this.propValueInput.composite?(this.valueInputs.hidden=!0,this.valueInput.hidden=!0,this.arrayInput.hidden=!0,this.randomInput.hidden=!1,this.propValueInput.random?(this.minMaxInput.hidden=!1,this.startEndStepsInput.hidden=!0,this.ease.hidden=!0):(this.minMaxInput.hidden=!0,this.startEndStepsInput.hidden=!1,this.ease.hidden=!1)):(this.randomInput.hidden=!0,this.startEndStepsInput.hidden=!0,this.minMaxInput.hidden=!0,this.ease.hidden=!0,this.arrayInput.hidden=!1,this.propValueInput.array?(this.valueInputs.hidden=!1,this.valueInput.hidden=!0):(this.valueInputs.hidden=!0,this.valueInput.hidden=!1))},e.toPropValue=function(){var t,e=[];if(this.valueInputsMap.forEach((function(t){e.push(t.value)})),this.propValueInput.composite)if(this.propValueInput.random){var i=this.propValueInput.minMax;t={min:i.x,max:i.y}}else{var a=this.propValueInput.startEndSteps,n=a.x,r=a.y,o=a.z,p=this.propValueInput.ease;t=p&&"None"!==p?{start:n,end:r,ease:p}:{start:n,end:r,steps:o}}else t=this.propValueInput.array?e:this.propValueInput.value;return t},t}(),F=M,w=Phaser.Input.Events,C=w.POINTER_DOWN,b=w.POINTER_MOVE,B=function(){function t(t){this.particleEmitter=void 0,this.propKey=void 0,this.root=void 0,this.folder=void 0,this.propValueInput=void 0;var e=t.root,i=t.particleEmitter,a=t.propKey;this.root=e,this.particleEmitter=i,this.propKey=a,this.propValueInput={clickToExplode:!1,emitterFollowPointer:!1,count:10,x:0,y:0},this.createInput(),this.listenEvents()}var e=t.prototype;return e.listenEvents=function(){var t=this;if(this.particleEmitter){var e=this.particleEmitter.manager.scene.input;e.on(C,(function(e){if(t.particleEmitter){var i=t.propValueInput,a=i.clickToExplode,n=i.emitterFollowPointer,r=i.count,o=e.worldX,p=e.worldY;if(a){var u=t.particleEmitter.frequency;t.particleEmitter.explode(r,o,p),t.particleEmitter.setFrequency(u),t.propValueInput.x=o,t.propValueInput.y=p}n&&t.particleEmitter.setPosition(o,p)}})),e.on(b,(function(e){if(t.particleEmitter&&e.isDown){var i=t.propValueInput.emitterFollowPointer,a=e.worldX,n=e.worldY;i&&t.particleEmitter.setPosition(a,n)}}))}},e.createInput=function(){this.particleEmitter&&(this.folder=this.root.addFolder({title:"Explosion options"}),this.createExplodeButton(),this.folder.addInput(this.propValueInput,"clickToExplode"),this.folder.addInput(this.propValueInput,"emitterFollowPointer"),this.folder.addInput(this.propValueInput,"count",{step:1}),this.folder.addMonitor(this.propValueInput,"x"),this.folder.addMonitor(this.propValueInput,"y"))},e.createExplodeButton=function(){var t=this;this.folder.addButton({title:"Explode"}).on("click",(function(){if(t.particleEmitter){var e=t.particleEmitter.frequency,i=t.propValueInput,a=i.x,n=i.y,r=i.count;t.particleEmitter.explode(r,a,n),t.particleEmitter.setFrequency(e)}}))},t}(),T=i(45),K=i.n(T),N=function(){function t(t){var e=this;this.particleEmitter=void 0,this.frames=void 0,this.propKey=void 0,this.root=void 0,this.folder=void 0,this.propValueInput=void 0,this.inputStep=void 0,this.valueInputsMap=new(d()),this.valueInputIndex=0,this.randomInput=void 0,this.quantityInput=void 0,this.addValueInput=function(t){var i,a={frame:t},n=e.valueInputIndex;e.valueInputsMap.set(n,a);var r=K()(i=e.frames).call(i,(function(t){return{text:t,value:t}})),o=e.folder.addBlade({view:"list",label:"frame",options:r,value:t});o.controller_.view.labelElement.addEventListener("click",(function(){1!==e.valueInputsMap.size&&(e.valueInputsMap.delete(n),o.hidden=!0,e.update())})),e.valueInputIndex+=1,o.on("change",(function(t){a.frame=t.value}))},this.update=function(){var t,i=[];e.valueInputsMap.forEach((function(t){var a;null!=(a=e.particleEmitter)&&a.texture.get(t.frame)&&i.push(t.frame)}));var a=e.propValueInput,n=a.random,r=a.quantity;null==(t=e.particleEmitter)||t.setFrame(i,n,r)};var i=t.root,a=t.particleEmitter,n=t.propKey,r=t.inputStep,o=void 0===r?1:r;this.root=i,this.particleEmitter=a,this.propKey=n,this.inputStep=o,this.propValueInput={random:!0,quantity:1,frames:[]},this.fetchPropValue()&&this.createInput()}var e=t.prototype;return e.fetchPropValue=function(){var t,e=null==(t=this.particleEmitter)?void 0:t.frames;return!(!e||!this.particleEmitter)&&(this.frames=this.getEffectFrames(),this.propValueInput.frames=K()(e).call(e,(function(t){return t.name})),!0)},e.createInput=function(){var t=this;this.folder=this.root.addFolder({title:this.propKey});var e=this.folder;this.randomInput=e.addInput(this.propValueInput,"random"),this.quantityInput=e.addInput(this.propValueInput,"quantity",{step:1}),e.addButton({title:"Add frame"}).on("click",(function(){t.addValueInput(t.propValueInput.frames[0])})),this.propValueInput.frames.forEach((function(e){return t.addValueInput(e)})),e.on("change",this.update)},e.getEffectFrames=function(){var t,e=null==(t=this.particleEmitter)?void 0:t.texture.frames;if(!e)return[];var i=[];for(var a in e)"__BASE"!==a&&i.push(e[a].name);return i},t}(),A=GameCore.Utils.Valid,Q=A.isNumber,X=A.isString,Y=A.isBoolean,L=function(){function t(t){this.particleEmitter=void 0,this.propKey=void 0,this.root=void 0,this.propValueInput=void 0,this.inputStep=void 0;var e=t.root,i=t.particleEmitter,a=t.propKey,n=t.inputStep,r=void 0===n?1:n;this.root=e,this.particleEmitter=i,this.propKey=a,this.inputStep=r,this.propValueInput={value:0},this.fetchPropValue()&&this.createInput()}var e=t.prototype;return e.fetchPropValue=function(){var t,e=this.propKey,i=null==(t=this.particleEmitter)?void 0:t[e];return void 0!==i&&(!!(Q(i)||X(i)||Y(i))&&(this.propValueInput.value=i,!0))},e.createInput=function(){if(this.particleEmitter){var t=this.inputStep,e=Math.round(x()(1/t)),i={step:t,format:function(t){return t.toFixed(e)}},a=this.propKey;this.root.addInput(this.particleEmitter,a,i)}},t}(),_=GameCore.Utils.Object.hasOwn,q=GameCore.Utils.Valid.isObject,R=GameCore.Utils.Valid.isNumber,z=function(){function t(t){var e=this;this.particleEmitter=void 0,this.propKey=void 0,this.root=void 0,this.folder=void 0,this.propValueInput=void 0,this.inputStep=void 0,this.valueInput=void 0,this.valueInputs=void 0,this.valueInputsMap=new(d()),this.valueInputIndex=0,this.arrayInput=void 0,this.randomInput=void 0,this.minMaxInput=void 0,this.startEndStepsInput=void 0,this.ease=void 0,this.addValueInput=function(t){var i=e.inputStep,a=Math.round(x()(1/i)),n={step:i,format:function(t){return t.toFixed(a)}},r={value:t},o=e.valueInputIndex;e.valueInputsMap.set(o,r);var p=e.valueInputs.addInput(r,"value",n);p.controller_.view.labelElement.addEventListener("click",(function(){1!==e.valueInputsMap.size&&(e.valueInputsMap.delete(o),p.hidden=!0,e.update())})),e.valueInputIndex+=1,e.update()},this.update=function(t){var i,a;t&&t.target instanceof c.ListApi&&"ease"===t.target.label&&(e.propValueInput.ease=t.target.value),e.updateProp();var n=e.toPropValue();null==(i=e.particleEmitter)||null==(a=i[e.propKey])||a.onChange(n)};var i=t.root,a=t.particleEmitter,n=t.propKey,r=t.inputStep,o=void 0===r?1:r;this.root=i,this.particleEmitter=a,this.propKey=n,this.inputStep=o,this.propValueInput={value:"",values:[],composite:!1,array:!1,random:!1,startEndSteps:{x:0,y:0,z:0},minMax:{x:0,y:0},ease:"None"},this.fetchPropValue()&&this.createInput()}var e=t.prototype;return e.fetchPropValue=function(){var t,e,i=null==(t=this.particleEmitter)||null==(e=t[this.propKey])?void 0:e.propertyValue;if(void 0===i)return!1;if(Array.isArray(i))return this.propValueInput.composite=!1,this.propValueInput.value="#"+i[0].toString(16),this.propValueInput.values=K()(i).call(i,(function(t){return"#"+t.toString(16)})),!0;if(R(i))return this.propValueInput.composite=!1,this.propValueInput.value="#"+i.toString(16),this.propValueInput.values=[this.propValueInput.value],!0;if(q(i)){if(_(i,"start")&&_(i,"end")){this.propValueInput.composite=!0;var a=this.propValueInput.startEndSteps;return a.x=i.start,a.y=i.end,_(i,"random")?this.propValueInput.random=!0:_(i,"steps")?a.z=i.steps:_(i,"ease")?this.propValueInput.ease=i.ease:this.propValueInput.ease="Linear",!0}if(_(i,"min")&&_(i,"max")){this.propValueInput.random=!0;var n=this.propValueInput.minMax;return n.x=i.min,n.y=i.max,!0}}return!1},e.createInput=function(){var t=this;this.folder=this.root.addFolder({title:this.propKey});var e=this.inputStep,i=Math.round(x()(1/e)),a={step:e,format:function(t){return t.toFixed(i)}},n=this.folder;n.addInput(this.propValueInput,"composite"),this.arrayInput=n.addInput(this.propValueInput,"array"),this.valueInput=n.addInput(this.propValueInput,"value"),this.valueInputs=n.addFolder({title:"values"}),this.valueInputs.addButton({title:"Add value"}).on("click",(function(){t.addValueInput(t.propValueInput.value)})),this.randomInput=n.addInput(this.propValueInput,"random"),this.minMaxInput=n.addInput(this.propValueInput,"minMax"),this.startEndStepsInput=n.addInput(this.propValueInput,"startEndSteps",{z:a}),this.ease=n.addBlade({view:"list",label:"ease",options:S,value:this.propValueInput.ease}),g()(this.propValueInput).forEach((function(e){return t.addValueInput(e)})),this.updateProp(),n.on("change",this.update)},e.updateProp=function(){this.propValueInput.composite?(this.valueInputs.hidden=!0,this.valueInput.hidden=!0,this.arrayInput.hidden=!0,this.randomInput.hidden=!1,this.propValueInput.random?(this.minMaxInput.hidden=!1,this.startEndStepsInput.hidden=!0,this.ease.hidden=!0):(this.minMaxInput.hidden=!0,this.startEndStepsInput.hidden=!1,this.ease.hidden=!1)):(this.randomInput.hidden=!0,this.startEndStepsInput.hidden=!0,this.minMaxInput.hidden=!0,this.ease.hidden=!0,this.arrayInput.hidden=!1,this.propValueInput.array?(this.valueInputs.hidden=!1,this.valueInput.hidden=!0):(this.valueInputs.hidden=!0,this.valueInput.hidden=!1))},e.toPropValue=function(){var t,e=this,i=[];if(this.valueInputsMap.forEach((function(t){i.push(e.colorToInt(t.value))})),this.propValueInput.composite)if(this.propValueInput.random){var a=this.propValueInput.minMax;t={min:a.x,max:a.y}}else{var n=this.propValueInput.startEndSteps,r=n.x,o=n.y,p=n.z,u=this.propValueInput.ease;t=u&&"None"!==u?{start:r,end:o,ease:u}:{start:r,end:o,steps:p}}else t=this.propValueInput.array?i:this.colorToInt(this.propValueInput.value);return t},e.colorToInt=function(t){return Phaser.Display.Color.HexStringToColor(t).color},t}(),J=z,G=function(){function t(t,e){var i=this;this.particleEmitter=void 0,this.particle=void 0,this.root=void 0,this.configParam={config:"{}"},this.updateMonitorConfig=function(){if(i.particleEmitter){var t=i.particleEmitter.toJSON();i.configParam.config=m()(t)}},this.exportEmitterToJSON=function(){if(i.particleEmitter){var t=i.particleEmitter.toJSON();i.downloadConfig(t,"emitterConfig")}},this.particleEmitter=e,this.root=t.addFolder({title:"Editor"}),this.particleEmitter&&(this.createExportButton(),this.createMonitorConfig(),this.createResetDefaultButton(),this.createOptions(),this.createPrimitiveProp(),this.createFramesProp(),this.createTintProp(),this.createComplexProp())}var e=t.prototype;return e.createExportButton=function(){this.root.addButton({title:"Export JSON"}).on("click",this.exportEmitterToJSON)},e.createMonitorConfig=function(){this.particleEmitter&&(this.root.addMonitor(this.configParam,"config"),this.root.on("change",this.updateMonitorConfig),this.updateMonitorConfig())},e.createResetDefaultButton=function(){var t=this;this.root.addButton({title:"Reset default"}).on("click",(function(){var e;null==(e=t.particleEmitter)||e.fromJSON(I)}))},e.importEmitterFromJSON=function(t){var e,i;null==(e=this.particleEmitter)||e.fromJSON(t),null==(i=this.particleEmitter)||i.setRadial(t.radial||!0)},e.downloadConfig=function(t,e){var i="data:text/json;charset=utf-8,"+encodeURIComponent(m()(t)),a=document.createElement("a");a.setAttribute("href",i),a.setAttribute("download",e+".json"),document.body.appendChild(a),a.click(),a.remove()},e.createOptions=function(){new B({root:this.root,propKey:"Explosion options",particleEmitter:this.particleEmitter})},e.createComplexProp=function(){var t=this,e=this.root.addFolder({title:E.folder,expanded:!1});E.props.forEach((function(i){new F({root:e,propKey:i.key,particleEmitter:t.particleEmitter,inputStep:i.steps})}))},e.createTintProp=function(){new J({root:this.root,propKey:"tint",particleEmitter:this.particleEmitter,inputStep:1})},e.createFramesProp=function(){new N({root:this.root,propKey:"frames",particleEmitter:this.particleEmitter})},e.createPrimitiveProp=function(){var t=this,e=this.root.addFolder({title:f.folder});f.props.forEach((function(i){new L({root:e,propKey:i.key,particleEmitter:t.particleEmitter,inputStep:i.steps})}))},e.show=function(){this.root.hidden=!1},e.hide=function(){this.root.hidden=!0},t}(),U=i(35),j=function(t){function e(){for(var e,i,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(i=t.call.apply(t,s()(e=[this]).call(e,n))||this).pane=void 0,i.element=void 0,i.configFolder=void 0,i.pickEmitterTab=void 0,i.selectParticle=void 0,i.index=0,i.editorFolderMap=void 0,i.editorFolder=void 0,i.addSampleEmitter=function(){var t=window.game.globalScene.gameZone,e=t.width,a=t.height,n={angle:{min:140,max:400},gravityY:-100,speedX:50,speedY:50,lifespan:{min:750,max:1e3},alpha:{min:.5,max:.8},scale:{start:1,end:.6,ease:"Linear"},frame:[h.default.EFFECTS.FRAME.FX_STAR_WHITE],x:e/2,y:a/2},r=i.createParticleEmitter(n);i.setParticleEmitter("Sample "+i.index,r)},i}(0,r.default)(e,t);var i=e.prototype;return i.configure=function(){var t=(0,n.default)(p().mark((function t(e){var i,a,n,r,o,u,s;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=(i=e||{}).Expanded,n=void 0!==a&&a,r=i.AutoRefresh,o=void 0===r||r,u=i.Opacity,s=void 0===u?.8:u,this.pane=new c.Pane({title:"Particle Editor",expanded:n}),this.element=this.pane.element,this.initConfig(s),this.createPickEmitter(),o&&this.update(),this.isOnMobile()&&(this.pane.expanded=!1);case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),i.initConfig=function(t){var e=this;this.configFolder=this.pane.addFolder({title:"Config",expanded:!1});var i={opacity:t,x:-8,y:-8,width:300,hide:this.hide.bind(this)};this.element.parentElement&&(this.element.parentElement.style.top=-i.y+"px",this.element.parentElement.style.left=-i.x+"px",this.element.parentElement.style.width=i.width+"px"),this.element.style.opacity=""+i.opacity,this.configFolder.addInput(i,"opacity",{min:0,max:1,step:.1}).on("change",(function(t){e.element.style.opacity=""+t.value})),this.configFolder.addInput(i,"x",{step:1}).on("change",(function(t){e.element.parentElement&&(e.element.parentElement.style.left=-t.value+"px")})),this.configFolder.addInput(i,"y",{step:1}).on("change",(function(t){e.element.parentElement&&(e.element.parentElement.style.top=-t.value+"px")})),this.configFolder.addInput(i,"width",{min:200,max:500,step:1}).on("change",(function(t){e.element.parentElement&&(e.element.parentElement.style.width=t.value+"px")})),this.configFolder.addButton({title:"Hide Panel"}).on("click",i.hide),this.element.onwheel=function(t){var a=t.deltaY;i.y<=-8&&a<0||i.y>=e.element.clientHeight-document.body.clientHeight-8&&a>0||(i.y+=a/2)}.bind(this)},i.createPickEmitter=function(){var t=this.pane.addTab({pages:[{title:"Pick emitter"}]});this.pickEmitterTab=t.pages[0],this.createListParticle(),this.createSampleParticleEmitterButton()},i.update=function(){this.pane.refresh(),requestAnimationFrame(this.update.bind(this))},i.isOnMobile=function(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)},i.createListParticle=function(){var t=this;this.editorFolderMap=new(d()),this.selectParticle=this.pickEmitterTab.addBlade({view:"list",label:"List",options:[],value:""}),this.selectParticle.on("change",(function(e){var i=t.editorFolderMap.get(e.value);i&&(t.editorFolder.hide(),t.editorFolder=i,i.show())}))},i.createSampleParticleEmitterButton=function(){var t=this.pickEmitterTab.addFolder({title:"Creation folder"});t.addButton({title:"Create sample emitter"}).on("click",this.addSampleEmitter),this.createImportParticle(t)},i.createParticleEmitter=function(t){var e=window.game.globalScene.add.particles(h.default.EFFECTS.KEY);e.setDepth(U.default.ON_TOP);var i=e.createEmitter((0,a.default)({frame:[h.default.EFFECTS.FRAME.FX_STAR_WHITE]},t));return i.setRadial(!0),i},i.createImportParticle=function(t){var e=this,i=t.addButton({title:"Import config"}),a={config:"{}"};t.addInput(a,"config"),i.on("click",(function(){try{var t=JSON.parse(a.config);if(GameCore.Utils.Valid.isObject(t)){var i=e.createParticleEmitter(t);e.setParticleEmitter("Sample "+e.index,i),e.editorFolder.importEmitterFromJSON(t)}}catch(n){alert("Invalid config")}}))},i.addToSelectParticle=function(t,e){if(!this.editorFolderMap.has(t)){this.editorFolderMap.set(t,e),this.selectParticle.options.push({text:t,value:t});var i=this.selectParticle.controller_.view.element.getElementsByTagName("select")[0];i.innerHTML+='<option data-index="'+this.index+'" value="'+t+'">'+t+"</option>",i.value=t,i.dispatchEvent(new Event("change")),this.index++}},i.hide=function(){this.pane.hidden=!0},i.show=function(){this.pane.hidden=!1},i.setParticleEmitter=function(t,e){var i;null==(i=this.editorFolder)||i.hide(),this.editorFolder=new G(this.pane,e),this.addToSelectParticle(t,this.editorFolder)},i.addParticleEmitter=function(t,e){var i=new G(this.pane,e);i.hide(),this.addToSelectParticle(t,i)},e}(Phaser.Plugins.BasePlugin),H=j},559:function(t,e,i){i(566);var a=i(15);t.exports=a.Math.log10},560:function(t){var e=Math.log,i=Math.LOG10E;t.exports=Math.log10||function(t){return e(t)*i}},566:function(t,e,i){i(2)({target:"Math",stat:!0},{log10:i(560)})},558:function(t,e,i){var a=i(559);t.exports=a}}]);