(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{287:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var s=n(280);const i=[({hue:e=2,saturation:t=80,lightness:n=51,alpha:s=1,...i}={})=>`hsla(${r.getters.HLSA.hue({value:e,...i})}, ${r.getters.HLSA.saturation({value:t,...i})}%, ${r.getters.HLSA.lightness({value:n,...i})}%, ${r.getters.HLSA.alpha({value:s,...i})})`,({hue:e=22,saturation:t=82,lightness:n=56,alpha:s=1,...i}={})=>`hsla(${r.getters.HLSA.hue({value:e,...i})}, ${r.getters.HLSA.saturation({value:t,...i})}%, ${r.getters.HLSA.lightness({value:n,...i})}%, ${r.getters.HLSA.alpha({value:s,...i})})`,({hue:e=48,saturation:t=92,lightness:n=59,alpha:s=1,...i}={})=>`hsla(${r.getters.HLSA.hue({value:e,...i})}, ${r.getters.HLSA.saturation({value:t,...i})}%, ${r.getters.HLSA.lightness({value:n,...i})}%, ${r.getters.HLSA.alpha({value:s,...i})})`,({hue:e=84,saturation:t=71,lightness:n=58,alpha:s=1,...i}={})=>`hsla(${r.getters.HLSA.hue({value:e,...i})}, ${r.getters.HLSA.saturation({value:t,...i})}%, ${r.getters.HLSA.lightness({value:n,...i})}%, ${r.getters.HLSA.alpha({value:s,...i})})`,({hue:e=154,saturation:t=66,lightness:n=57,alpha:s=1,...i}={})=>`hsla(${r.getters.HLSA.hue({value:e,...i})}, ${r.getters.HLSA.saturation({value:t,...i})}%, ${r.getters.HLSA.lightness({value:n,...i})}%, ${r.getters.HLSA.alpha({value:s,...i})})`,({hue:e=194,saturation:t=78,lightness:n=55,alpha:s=1,...i}={})=>`hsla(${r.getters.HLSA.hue({value:e,...i})}, ${r.getters.HLSA.saturation({value:t,...i})}%, ${r.getters.HLSA.lightness({value:n,...i})}%, ${r.getters.HLSA.alpha({value:s,...i})})`,({hue:e=233,saturation:t=68,lightness:n=56,alpha:s=1,...i}={})=>`hsla(${r.getters.HLSA.hue({value:e,...i})}, ${r.getters.HLSA.saturation({value:t,...i})}%, ${r.getters.HLSA.lightness({value:n,...i})}%, ${r.getters.HLSA.alpha({value:s,...i})})`,({hue:e=293,saturation:t=78,lightness:n=57,alpha:s=1,...i}={})=>`hsla(${r.getters.HLSA.hue({value:e,...i})}, ${r.getters.HLSA.saturation({value:t,...i})}%, ${r.getters.HLSA.lightness({value:n,...i})}%, ${r.getters.HLSA.alpha({value:s,...i})})`,({hue:e=0,saturation:t=0,lightness:n=0,alpha:s=1,...i}={})=>`hsla(${r.getters.HLSA.hue({value:e,...i})}, ${r.getters.HLSA.saturation({value:t,...i})}%, ${r.getters.HLSA.lightness({value:n,...i})}%, ${r.getters.HLSA.alpha({value:s,...i})})`],a={phiGolden:1.618033988749895,PI:Math.PI,radianCircleDiv9:2*Math.PI/9};class r{static generateFibVortex({numFirst:e,numSecond:t,mirrorValue:n,limit:s=24}){const i=[e,t];for(let e=i.length;e<s;e++)i.push(r.getters.mirrorValue({input:i[i.length-1]+i[i.length-2],mirrorValue:n}));return i}static generateInbetweenFibVortex({numFirst:e,numSecond:t,mirrorValue:n,limit:s=24}){const i=[e,t,r.getters.mirrorValue({input:e+t,mirrorValue:n})],a=[r.getters.inbetweenValue({numFirst:i[0],numSecond:i[1],mirrorValue:n}),r.getters.inbetweenValue({numFirst:i[1],numSecond:i[2],mirrorValue:n})];for(let e=a.length;e<s;e++)a.push(r.getters.mirrorValue({input:a[a.length-1]+a[a.length-2],mirrorValue:n}));return a}}r.constants={goldenSpiralEGrowth:Math.log(a.phiGolden)/(a.PI/2),goldenAngle:2*(a.phiGolden/2-1)*a.PI,phiSilver:a.phiGolden/2-1,phiGolden:a.phiGolden,PI:a.PI,PI2:2*a.PI,PIDiv180:a.PI/180,radianCircleDiv9:a.radianCircleDiv9,mapVortexCircleRadianToNumber:{0:9,[1*a.radianCircleDiv9]:1,[2*a.radianCircleDiv9]:2,[3*a.radianCircleDiv9]:3,[4*a.radianCircleDiv9]:4,[5*a.radianCircleDiv9]:5,[6*a.radianCircleDiv9]:6,[7*a.radianCircleDiv9]:7,[8*a.radianCircleDiv9]:8,[9*a.radianCircleDiv9]:9},mapVortexCircleNumberToRadian:{1:1*a.radianCircleDiv9,2:2*a.radianCircleDiv9,3:3*a.radianCircleDiv9,4:4*a.radianCircleDiv9,5:5*a.radianCircleDiv9,6:6*a.radianCircleDiv9,7:7*a.radianCircleDiv9,8:8*a.radianCircleDiv9,9:9*a.radianCircleDiv9}},r.colors9=["hsla(2, 80%, 51%, 1)","hsla(22, 82%, 56%, 1)","hsla(48, 92%, 59%, 1)","hsla(84, 71%, 58%, 1)","hsla(154, 66%, 57%, 1)","hsla(194, 78%, 55%, 1)","hsla(233, 68%, 56%, 1)","hsla(293, 78%, 57%, 1)","hsla(0, 0%, 0%, 1)"],r.colors9Babylon=[new s.Color4(.901960784314,.145098039216,.117647058824,1),new s.Color4(.921568627451,.462745098039,.2,1),new s.Color4(.96862745098,.81568627451,.211764705882,1),new s.Color4(.639215686274,.878431372549,.282352941176,1),new s.Color4(.286274509804,.854901960784,.607843137255,1),new s.Color4(.2,.7372549019618,.901960784314,1),new s.Color4(.262745098039,.329411764706,.858823529412,1),new s.Color4(.827450980392,.235294117647,.905882352941,1),new s.Color4(0,0,0,1)],r.vortexes24={11:[1,1,2,3,5,8,4,3,7,1,8,9,8,8,7,6,4,1,5,6,2,8,1,9],16:[1,6,7,4,2,6,8,5,4,9,4,4,8,3,2,5,7,3,1,4,5,9,5,5],82:[8,2,1,3,4,7,2,9,2,2,4,6,1,7,8,6,5,2,7,9,7,7,5,3],36:[3,6,9,6,6,3,9,3],99:[9]},r.vortexesDouble={1:[1,2,4,8,7,5],2:[2,4,8,7,5,1],3:[3,6],4:[4,8,7,5,1,2],5:[5,1,2,4,8,7],6:[6,3],7:[7,5,1,2,4,8],8:[8,7,5,1,2,4],9:[9]},r.maps={doubleNumsToVortexIdentityAll:{11:"11",12:"11",13:"82",14:"16",15:"11",16:"16",17:"82",18:"11",19:"11",21:"82",22:"82",23:"11",24:"82",25:"16",26:"16",27:"82",28:"11",29:"82",31:"16",32:"16",33:"36",34:"82",35:"11",36:"36",37:"11",38:"82",39:"36",41:"11",42:"16",43:"11",44:"16",45:"16",46:"82",47:"82",48:"16",49:"16",51:"16",52:"82",53:"82",54:"16",55:"16",56:"11",57:"16",58:"11",59:"16",61:"82",62:"11",63:"36",64:"11",65:"82",66:"36",67:"16",68:"16",69:"36",71:"11",72:"82",73:"16",74:"16",75:"82",76:"11",77:"82",78:"82",79:"82",81:"11",82:"82",83:"16",84:"11",85:"16",86:"82",87:"11",88:"11",89:"11",91:"11",92:"82",93:"36",94:"16",95:"16",96:"36",97:"82",98:"11",99:"99"},doubleNumsToVortexIdentity11:{11:"11",12:"11",15:"11",18:"11",19:"11",23:"11",28:"11",35:"11",37:"11",41:"11",43:"11",56:"11",58:"11",62:"11",64:"11",71:"11",76:"11",81:"11",84:"11",87:"11",88:"11",89:"11",91:"11",98:"11"},doubleNumsToVortexIdentity16:{14:"16",16:"16",25:"16",26:"16",31:"16",32:"16",42:"16",44:"16",45:"16",48:"16",49:"16",51:"16",54:"16",55:"16",57:"16",59:"16",67:"16",68:"16",73:"16",74:"16",83:"16",85:"16",94:"16",95:"16"},doubleNumsToVortexIdentity82:{13:"82",17:"82",21:"82",22:"82",24:"82",27:"82",29:"82",34:"82",38:"82",46:"82",47:"82",52:"82",53:"82",61:"82",65:"82",72:"82",75:"82",77:"82",78:"82",79:"82",82:"82",86:"82",92:"82",97:"82"},doubleNumsToVortexIdentity36:{33:"36",36:"36",39:"36",63:"36",66:"36",69:"36",93:"36",96:"36"},doubleNumsToVortexIdentity99:{99:"99"}},r.getters={color9:i,goldenSpiralEGrowth:e=>Math.E**(e*r.constants.goldenSpiralEGrowth),vortexSpiralGrowthFn({vortexBody:e,targetValues:t}){const n=t.slice(0),s="number"==typeof e&&e>0;if(s)for(;e>n.length;)t.forEach(e=>{n.push(e)});const i=n.length-1,a={lastVortexValue:n[0],indexCurrent:0,vortexBodyCurrent:e||1},r=(e,t)=>{if(e>i){const n=e-i-1;return a[t]=n,n}return e},o=s?()=>{const e=n[r(++a.vortexBodyCurrent,"vortexBodyCurrent")],t=a.lastVortexValue/e;return a.lastVortexValue=n[r(++a.indexCurrent,"indexCurrent")],t}:()=>{const e=n[r(++a.indexCurrent,"indexCurrent")],t=e/a.lastVortexValue;return a.lastVortexValue=e,t};return e=>Math.E**(e*o())},HLSA:{hue:e=>r.getters.valueBetween({max:360,min:0,...e}),saturation:e=>r.getters.valueBetween({max:100,min:0,...e}),lightness:e=>r.getters.valueBetween({max:100,min:0,...e}),alpha:e=>r.getters.valueBetween({max:1,min:0,...e})},valueBetween:({max:e,min:t,resetToMax:n=!0,resetToMin:s=!1,value:i})=>i>e?s?t:i/e%1*e:i<t?n?e-i:t:i,valueBetweenFn:e=>t=>r.getters.valueBetween({...e,...t}),increaseNumberByMaxFn({intial:e,max:t,min:n,resetToMin:s=!1}){let i=e;return function({increaseBy:e}){const a=i+e;return i=a>t?s?n:a-t:a,i}},createGetNextArrayValueFn(e){if(!Array.isArray(e))throw new Error("Not an array.");const t=e.length-1;let n=-1;const s=({indexValue:e,reset:s=!0})=>e>t?(s&&(n=0),0):(n=e,e);return({indexTarget:t,reset:i}={})=>"number"==typeof t?e[s({indexValue:t,reset:i})]:e[s({indexValue:n+1})]},createGetNextValueFn({getNextValue:e}){let t=e();Boolean(t);return()=>{const n=e();return t=n,n}},createGetNextValueTransformFn(e,t){let n=e();return()=>{const s=e(),i=t({valueCurrent:n,valueNext:s});return n=s,i}},numberLength:e=>Math.floor(Math.log(e)/Math.LN10)+1,inbetweenValue({numFirst:e,numSecond:t,mirrorValue:n}){const s=e-t;if(0===s)return e;const i=Math.abs(s)/2,a=Math.abs(Math.min(e,t));return r.getters.mirrorValue({input:a+i,mirrorValue:n})},mirrorValue({input:e,mirrorValue:t=9}){if(e>t||!Number.isInteger(e)){let n=0;const s=String(Math.abs(e)).replace(".","");for(let e=0;e<s.length;e++){const i=n+ +s[e];n=i>t?i-t:i}return n}return Math.abs(e)},resonanceFibVortex({mirrorValue:e,vortex:t,vortexBody:n,limit:s=t.length}){const i=t.slice(0);for(;n>i.length;)t.forEach(e=>{i.push(e)});const a=i.length-1;let o=1;const l=e=>e>a?e-a-1:e;let h=n;const c=[];for(const t of i)if(c.push(r.getters.mirrorValue({mirrorValue:e,input:i[l(h++)]+t})),o++>=s)break;return c},vortexCircleDiff({numFrom:e,numTo:t}){const n=({numDiff:e})=>({diff:e,diffAngle:40*e,diffRadian:r.constants.mapVortexCircleNumberToRadian[e]});return n(e===t?{numDiff:9}:t>e?{numDiff:t-e}:{numDiff:9-e+t})}},r.utils={truncateToDecimals:(e,t=9)=>parseFloat(String(e).slice(0,2+t))}},307:function(e,t,n){"use strict";var s=n(0),i=n(280),a=n(286);const r={constructor:!0},o=e=>{for(const t in e)if("_"!==t[0]&&!r[t]){const n=e[t];"function"!=typeof n||n.name.startsWith("bound")||(e[t]=n.bind(e))}};var l=n(23),h=n(288),c=n(295),d=n(330);class u{constructor({canvas:e,engine:t,scene:n}){this.disposeAbles=[],this.disposeAbleFns=[()=>this.baseEventEmitter.detach()],this.baseEventEmitter=new c.AnyEvent,this.baseDefault={camera:({onCamera:e}={})=>{const t=new i.ArcRotateCamera("CameraDefault",-.85,1.4,6,new i.Vector3(0,0,0),this.scene);return t.lowerRadiusLimit=0,t.maxZ=2e4,e&&e({camera:t}),t.wheelPrecision=1/t.maxZ*1e5,t.attachControl(this.canvas,!0),this.disposeAbles.push(t),t},light:()=>{const e=new i.HemisphericLight("HemisphericLightDefault",new i.Vector3(0,1,0),this.scene);return e.intensity=.7,this.disposeAbles.push(e),e},groundGrid:({optionsCreateGround:e}={})=>{this.scene.clearColor=new i.Color4(1,1,1,1);const t=i.MeshBuilder.CreateGround("main-ground",{height:2e3,width:2e3,...e},this.scene);this.disposeAbles.push(t);const n=new d.GridMaterial("main-ground-grid",this.scene);return n.lineColor=new i.Color3(.7,.7,.7),n.mainColor=new i.Color3(1,1,1),t.material=n,this.disposeAbles.push(n),{mainGround:t,mainGroundGrid:n}}},this.baseUtils={createEventEmitter:()=>{const e=new c.AnyEvent;return this.disposeAbleFns.push(e.detach.bind(e)),e}},this.dispose=(...e)=>{Object(c.flush)(),this.disposeAbleFns.forEach(t=>t(...e)),this.disposeAbleFns.length=0,this.disposeAbles.forEach(t=>t.dispose(...e)),this.disposeAbles.length=0},this.canvas=e,this.engine=t,this.scene=n}}u.global={event:new c.AnyEvent},u.baseDefault={background({scene:e}){const t=new i.Color4(1,1,1,0);return e.clearColor=t,t},font:"Roboto"},u.baseUtils={getStandardEvent:({error:e,meta:t,payload:n,type:s})=>({error:e,meta:t||{},payload:n,type:s}),createGetStandardEvent:()=>e=>u.baseUtils.getStandardEvent(e),render:({engine:e,scene:t})=>e.runRenderLoop(t.render)};class p extends u{constructor(e){super(e),this.render=()=>{const e=i.Mesh.CreateLines("worldAxis-X",[new i.Vector3(-this.size,0,0),new i.Vector3(this.size,0,0),new i.Vector3(.95*this.size,.05*this.size,0),new i.Vector3(this.size,0,0),new i.Vector3(.95*this.size,-.05*this.size,0)],this.scene);e.color=new i.Color3(1,0,0),this.disposeAbles.unshift(e);const t=p.createAxis({color:"red",font:this.font,scene:this.scene,size:this.size/10,text:"X"});t.position=new i.Vector3(.9*this.size,-.05*this.size,0),this.disposeAbles.unshift(t);const n=i.Mesh.CreateLines("worldAxis-Y",[new i.Vector3(0,-this.size,0),new i.Vector3(0,this.size,0),new i.Vector3(-.05*this.size,.95*this.size,0),new i.Vector3(0,this.size,0),new i.Vector3(.05*this.size,.95*this.size,0)],this.scene);n.color=new i.Color3(0,1,0),this.disposeAbles.unshift(n);const s=p.createAxis({color:"green",font:this.font,scene:this.scene,size:this.size/10,text:"Y"});s.position=new i.Vector3(0,.9*this.size,-.05*this.size),this.disposeAbles.unshift(s);const a=i.Mesh.CreateLines("axworldAxis-Z",[new i.Vector3(0,0,-this.size),new i.Vector3(0,0,this.size),new i.Vector3(0,-.05*this.size,.95*this.size),new i.Vector3(0,0,this.size),new i.Vector3(0,.05*this.size,.95*this.size)],this.scene);a.color=new i.Color3(0,0,1),this.disposeAbles.unshift(a);const r=p.createAxis({color:"blue",font:this.font,scene:this.scene,size:this.size/10,text:"Z"});return r.position=new i.Vector3(0,.05*this.size,.9*this.size),this.disposeAbles.unshift(r),{x:e,y:n,z:a}};const{font:t=u.baseDefault.font,render:n=!0,scene:s,size:a}=e;this.font=t,this.size=a,this.scene=s,n&&this.render()}}p.createAxis=({color:e,font:t,scene:n,size:s,text:a})=>{const r=new i.DynamicTexture(`${p.name}-${a}`,50,n,!0);r.hasAlpha=!0,r.drawText(a,5,40,`bold 36px ${t}`,e,"transparent",!0);const o=i.Mesh.CreatePlane(`${p.name}-${a}`,s,n,!0);return o.material=new i.StandardMaterial(`${p.name}-${a}`,n),o.material.backFaceCulling=!1,o.material.specularColor=new i.Color3(0,0,0),o.material.diffuseTexture=r,o};class g extends u{constructor(e){super(e),this.gridAxisLines=[],this.addGrid=({height:e,label:t,linesHeight:n,linesWidth:s,position:a,rotation:r,width:o})=>{const l=2*e/n,h=2*o/s,c=[];for(let t=-o;t<=o;t+=h)c.push([new i.Vector3(-e,t,0),new i.Vector3(e,t,0)]);for(let t=-e;t<=e;t+=l)c.push([new i.Vector3(t,-o,0),new i.Vector3(t,o,0)]);const d=i.MeshBuilder.CreateLineSystem(`${g.name}-lines-${t}`,{lines:c,updatable:!1},this.scene);d.color=new i.Color3(.6,.6,.6),d.position=a,d.rotation=r,d.parent=this.bodyMesh,this.gridAxisLines.push(d),this.disposeAbles.push(d)},this.addLabel=({data:e,label:t,length:n,position:s})=>{const a=2*n/e.length,r=i.Vector3.Zero(),o=new i.Mesh(`${g.name}-addLabel-${t}`,this.scene);for(let n=0;n<e.length;n++){const s=this.getLabelText({label:String(e[n])});switch(s.position=r.clone(),t.toLowerCase()){case"x":r.subtractInPlace(new i.Vector3(a,0,0));break;case"y":r.addInPlace(new i.Vector3(0,a,0));break;case"z":r.subtractInPlace(new i.Vector3(0,0,a))}s.parent=o}o.position=s,o.parent=this.bodyMesh,this.disposeAbles.push(o)},this.getLabelText=({label:e})=>{const t=new i.DynamicTexture(`${g.name}-DynamicTexture-${e}`,512,this.scene,!0,i.DynamicTexture.TRILINEAR_SAMPLINGMODE);t.drawText(e,null,null,`normal 240px ${this.font}`,"black","transparent",!0),this.disposeAbles.push(t);const n=new i.StandardMaterial(`${g.name}-getLabelText-outputPlane-material`,this.scene);n.emissiveTexture=t,n.opacityTexture=t,n.backFaceCulling=!0,n.disableLighting=!0,n.freeze(),this.disposeAbles.push(n);const s=i.Mesh.CreatePlane(`${g.name}-getLabelText-outputPlane`,10,this.scene,!1);return s.billboardMode=i.AbstractMesh.BILLBOARDMODE_ALL,s.material=n,this.disposeAbles.push(s),s},this.setridAxisLinesColor=e=>{this.gridAxisLines.forEach(t=>{t.color=e})},this.render=()=>{const e={depth:Math.floor(this.dimensions.depth/2),height:Math.floor(this.dimensions.height/2),width:Math.floor(this.dimensions.width/2)},t=g.utils.isEven(this.labels.x.length),n=(g.utils.isEven(this.labels.y.length),g.utils.isEven(this.labels.z.length));this.addGrid({height:e.width,label:"wall-towards-minus-Z",linesHeight:this.labels.y.length,linesWidth:this.labels.x.length,position:new i.Vector3(0,e.height-this.dimensions.height/this.labels.y.length*Math.trunc(this.labels.y.length/2),-this.dimensions.width/this.labels.x.length*Math.trunc(this.labels.x.length/2)),rotation:i.Vector3.Zero(),width:e.height}),this.addGrid({height:e.width,label:"wall-towards-minus-Y",linesHeight:this.labels.x.length,linesWidth:this.labels.z.length,position:new i.Vector3(0,-this.dimensions.height/this.labels.y.length*Math.trunc(this.labels.y.length/2),0),rotation:new i.Vector3(Math.PI/2,0,0),width:e.depth}),this.addGrid({height:e.height,label:"wall-towards-minus-X",linesHeight:this.labels.y.length,linesWidth:this.labels.z.length,position:new i.Vector3(-e.depth,e.height-this.dimensions.height/this.labels.y.length*Math.trunc(this.labels.y.length/2),0),rotation:new i.Vector3(0,Math.PI/2,0),width:e.height}),this.addLabel({data:this.labels.x,length:e.width,label:"x",position:new i.Vector3(e.width-(t?2*e.width/this.labels.x.length:0),-(e.height+2),-e.depth)}),this.addLabel({data:this.labels.y,length:e.height,label:"y",position:new i.Vector3(e.width,-e.height,-(e.depth+4))}),this.addLabel({data:this.labels.z,length:e.depth,label:"z",position:new i.Vector3(e.width+2,-(e.height+2),e.depth-(n?2*e.depth/this.labels.x.length:0))})};const{dimensions:t,font:n=u.baseDefault.font,labels:s,render:a=!0,scene:r}=e;this.dimensions=t,this.font=n,this.labels=s,this.scene=r,this.bodyMesh=new i.Mesh(g.name,this.scene),this.disposeAbleFns.push(()=>{this.gridAxisLines.length=0}),a&&this.render()}}g.utils={isEven:e=>e%2==0},g.roundToDecimal=(e,t=2)=>+`${Math.round(`${e}e+${t}`)}e-${t}`;class m extends u{constructor(e){super(e),this.toggles={},this.addButton=({panel:e,text:t})=>{const n=a.Button.CreateSimpleButton(`${m.name}-addButton-text`,t);return n.widthInPixels=100,n.horizontalAlignment=a.Control.VERTICAL_ALIGNMENT_CENTER,n.height="30px",n.color="black",e.addControl(n),this.disposeAbles.push(n),n},this.getOrSetSlider=({control:e,name:t,onChangeSlider:n,width:s,initialValue:i,maxValue:r,minValue:o})=>{let l;!function(e){e.InputTextValueChanged="InputTextValueChanged",e.InputTextValueMaxChanged="InputTextValueMaxChanged",e.InputTextValueMinChanged="InputTextValueMinChanged",e.SliderChanged="SliderChanged"}(l||(l={}));const h=this.baseUtils.createEventEmitter(),c=m.baseUtils.createGetStandardEvent(),d=s||this.width,u=new a.TextBlock(`${m.name}-header-main-${t}`);u.text=t,u.heightInPixels=40,u.color="black",u.textHorizontalAlignment=a.TextBlock.HORIZONTAL_ALIGNMENT_CENTER,u.paddingTopInPixels=8,this.disposeAbles.push(u),e&&e.addControl(u);const p=new a.TextBlock(`${m.name}-header-value-${t}`);p.text="Value",p.heightInPixels=16,p.color="black",p.textHorizontalAlignment=a.TextBlock.HORIZONTAL_ALIGNMENT_LEFT,this.disposeAbles.push(p),e&&e.addControl(p);const g=new a.InputText(`${m.name}-input-value-${t}`);g.width=d,g.heightInPixels=40,g.text=i.toString(),g.color="white",g.background="black",g.onBeforeKeyAddObservable.add(e=>{m.normalizers.numbersBeforeKey(e)}),g.onTextChangedObservable.add(e=>{const t=parseFloat(e.text);Number.isNaN(t)||h.post(c({type:l.InputTextValueChanged,payload:{valueNumber:t,valueText:t.toString()}}))}),this.disposeAbles.push(g),e&&e.addControl(g);const x=new a.TextBlock(`${m.name}-header-value-min-${t}`);x.text="Min",x.heightInPixels=16,x.color="black",x.textHorizontalAlignment=a.TextBlock.HORIZONTAL_ALIGNMENT_LEFT,this.disposeAbles.push(x),e&&e.addControl(x);const b=new a.InputText(`${m.name}-input-value-min-${t}`);b.width=d,b.heightInPixels=40,b.text=o.toString(),b.color="white",b.background="black",b.onBeforeKeyAddObservable.add(e=>{m.normalizers.numbersBeforeKey(e)}),b.onTextChangedObservable.add(e=>{const t=parseFloat(e.text);Number.isNaN(t)||h.post(c({type:l.InputTextValueMinChanged,payload:{valueNumber:t,valueText:t.toString()}}))}),this.disposeAbles.push(b),e&&e.addControl(b);const w=new a.TextBlock(`${m.name}-header-value-max-${t}`);w.text="Max",w.heightInPixels=16,w.color="black",w.textHorizontalAlignment=a.TextBlock.HORIZONTAL_ALIGNMENT_LEFT,this.disposeAbles.push(w),e&&e.addControl(w);const v=new a.InputText(`${m.name}-input-value-max-${t}`);v.width=d,v.heightInPixels=40,v.text=r.toString(),v.color="white",v.background="black",v.onBeforeKeyAddObservable.add(e=>{m.normalizers.numbersBeforeKey(e)}),v.onTextChangedObservable.add(e=>{const t=parseFloat(e.text);Number.isNaN(t)||h.post(c({type:l.InputTextValueMaxChanged,payload:{valueNumber:t,valueText:t.toString()}}))}),this.disposeAbles.push(v),e&&e.addControl(v);const A=new a.Slider(`${m.name}-${t}`);return A.minimum=o,A.maximum=r,A.value=i,A.heightInPixels=20,A.width=d,A.onValueChangedObservable.add(e=>{h.post(c({type:l.SliderChanged,payload:{valueNumber:e,valueText:e.toString()}})),n&&n({valueNumber:e})}),this.disposeAbles.push(A),e&&e.addControl(A),h.attachSync(({payload:e,type:t})=>{if(!e)return;const n=e;switch(t){case l.InputTextValueChanged:const e=n.valueNumber>parseFloat(v.text),t=n.valueNumber<parseFloat(b.text);A.value=n.valueNumber,e&&(v.text=n.valueText),t&&(b.text=n.valueText);break;case l.InputTextValueMaxChanged:A.maximum=n.valueNumber,n.valueNumber<parseFloat(g.text)&&(g.text=n.valueText);break;case l.InputTextValueMinChanged:A.minimum=n.valueNumber,n.valueNumber>parseFloat(g.text)&&(g.text=n.valueText);break;case l.SliderChanged:g.text=n.valueText}}),{inputTextValue:g,inputTextValueHeader:p,inputTextValueMax:v,inputTextValueMaxHeader:w,inputTextValueMin:b,inputTextValueMinHeader:x,slider:A,textBlockHeader:u}},this.toggleScatterPlot=()=>{if(this.toggles.scatterPlot)this.toggles.scatterPlot.dispose(),this.toggles.scatterPlot=void 0;else{const e=Math.floor(this.tileSize/2),t=Array.from({length:this.tileSize}).map((t,n)=>n-e),n=t.slice(0).reverse(),s=this.tileSpacing*this.tileSize;this.toggles.scatterPlot=new g({...this.options,dimensions:{depth:s,height:s,width:s},font:this.font,labels:{x:n,y:t,z:n}})}},this.toggleWorldAxis=()=>{if(this.toggles.worldAxes)this.toggles.worldAxes.dispose(),this.toggles.worldAxes=void 0;else{const{scene:e}=this;this.toggles.worldAxes=new p({...this.options,size:this.tileSpacing*this.tileSize,scene:e})}},this.toggleDebug=()=>this.scene.debugLayer.show(),this.render=()=>{const{advancedDynamicTextureFullScreen:e,camera:t,canvas:n,scene:s}=this;s.clearColor=new i.Color4(.9,.9,.9,1);const r=e,o=new a.StackPanel(`${m.name}-panelMain`);o.background="hsla(360, 100%, 100%, 0.66)",o.fontSizeInPixels=16,o.leftInPixels=16,o.fontFamily=this.font,o.width=this.width,o.horizontalAlignment=a.Control.HORIZONTAL_ALIGNMENT_LEFT,o.verticalAlignment=a.Control.VERTICAL_ALIGNMENT_TOP,r.addControl(o),this.disposeAbles.push(o),this.onRenderPanel&&this.onRenderPanel({context:this,panel:o});const l=new a.TextBlock(`${m.name}-Display`);l.text="Display",l.heightInPixels=40,l.color="black",l.textHorizontalAlignment=a.Control.HORIZONTAL_ALIGNMENT_CENTER,l.paddingTopInPixels=8,o.addControl(l),this.disposeAbles.push(l),this.addButton({panel:o,text:"Debug"}).onPointerUpObservable.add(this.toggleDebug),this.addButton({panel:o,text:"Scatter plot"}).onPointerUpObservable.add(this.toggleScatterPlot),this.addButton({panel:o,text:"World axes"}).onPointerUpObservable.add(this.toggleWorldAxis);const h=new a.TextBlock(`${m.name}-View`);h.text="View",h.heightInPixels=40,h.color="black",h.textHorizontalAlignment=a.Control.HORIZONTAL_ALIGNMENT_CENTER,h.paddingTopInPixels=8,o.addControl(h),this.disposeAbles.push(h),this.addButton({panel:o,text:"3D"}).onPointerUpObservable.add(()=>{t.mode=i.Camera.PERSPECTIVE_CAMERA,t.attachControl(n,!0)}),this.addButton({panel:o,text:"2D"}).onPointerUpObservable.add(()=>{t.mode=i.Camera.ORTHOGRAPHIC_CAMERA,t.orthoTop=200,t.orthoBottom=-200,t.orthoLeft=-300,t.orthoRight=300,t.beta=Math.PI/2,t.alpha%(Math.PI/2)!=0?t.alpha=0:t.alpha+=Math.PI/2,t.detachControl(n)});const c=new a.TextBlock(`${m.name}-Plot_Color`);c.text="Plot Color",c.heightInPixels=40,c.color="black",c.paddingTopInPixels=8,c.textHorizontalAlignment=a.Control.HORIZONTAL_ALIGNMENT_CENTER,o.addControl(c),this.disposeAbles.push(c);const d=new a.ColorPicker(`${m.name}-colorPicker`);d.horizontalAlignment=a.Control.HORIZONTAL_ALIGNMENT_CENTER,d.value=new i.Color3(.6,.6,.6),d.heightInPixels=100,d.widthInPixels=100,d.onValueChangedObservable.add(e=>{this.toggles.scatterPlot&&this.toggles.scatterPlot.setridAxisLinesColor(e)}),o.addControl(d),this.disposeAbles.push(d);const u={context:this,colorPickerPlot:d,panel:o};return this.onRender&&this.onRender(u),this.toggleScatterPlot(),u},this.options=e;const{advancedDynamicTextureFullScreen:t,camera:n,canvas:s,font:r=u.baseDefault.font,onRender:o,onRenderPanel:l,render:h=!0,scene:c,tileSpacing:d=12,tileSize:x=12,width:b="200px"}=e;this.advancedDynamicTextureFullScreen=t,this.camera=n,this.canvas=s,this.font=r,this.onRender=o,this.onRenderPanel=l,this.scene=c,this.tileSpacing=d,this.tileSize=x,this.width=b,this.disposeAbleFns.push(()=>{Object.values(this.toggles).forEach(e=>e&&e.dispose())}),h&&this.render()}}m.regexes={number:/\d/},m.normalizers={numbersBeforeKey:e=>{let t=!1,n=!1;e.text.split("").forEach((e,s)=>{0===s&&"-"===e&&(t=!0),"."===e&&(n=!0)});let s=e.currentKey;const i=()=>{s=""};switch(e.currentKey){case"-":t&&i();break;case".":n&&i();break;default:m.regexes.number.test(e.currentKey)||i()}""===s?e.addKey=!1:(e.addKey=!0,e.currentKey=s)}};var x=n(306),b=n.n(x);class w extends u{constructor(e){super(e),this.render=({addToGlobalGUI:e=!0}={})=>{const t=new a.Rectangle(`${w.name}-RectangleContainerFPS`);t.adaptHeightToChildren=!0,t.adaptWidthToChildren=!0,t.alpha=.85,t.background="black",t.cornerRadius=6,t.leftInPixels=16,t.thickness=3,t.topInPixels=16,t.horizontalAlignment=a.Rectangle.HORIZONTAL_ALIGNMENT_LEFT,t.verticalAlignment=a.Rectangle.VERTICAL_ALIGNMENT_TOP,this.disposeAbles.push(t),e&&this.advancedDynamicTextureFullScreen&&this.advancedDynamicTextureFullScreen.addControl(t);const n=new a.TextBlock(`${w.name}-text`);n.color="white",n.fontFamily="Roboto",n.fontSizeInPixels=16,n.fontWeight="700",n.heightInPixels=30,n.widthInPixels=100,this.disposeAbles.push(n),t.addControl(n);const s=b()(()=>{n.text=`FPS: ${this.engine.getFps().toFixed()}`},500);return this.engine.runRenderLoop(s),this.disposeAbleFns.unshift(()=>this.engine.stopRenderLoop(s)),{containerRect:t,textFPS:n}};const{advancedDynamicTextureFullScreen:t,engine:n,render:s=!0}=e;this.advancedDynamicTextureFullScreen=t,this.engine=n,s&&this.render()}}n.d(t,"a",(function(){return C}));class v extends s.Component{componentDidMount(){requestAnimationFrame(async()=>{const{props:e}=this;e.menuMainHideAll();const t=new i.Engine(e.elCanvas,!0,e.engineOptions,e.adaptToDeviceRatio);t.displayLoadingUI();const n=new i.Scene(t),s=new u({canvas:e.elCanvas,engine:t,scene:n}),r=v.getters.transformers({canvas:e.elCanvas,componentBase:s,engine:t,scene:n});o(t),o(n);const l={engine:{runRenderLoop:t.runRenderLoop}},c={hasRenderedScene:!1};t.runRenderLoop=function(...e){c.hasRenderedScene||e[0]!==n.render||(c.hasRenderedScene=!0,t.runRenderLoop=l.engine.runRenderLoop);const s=l.engine.runRenderLoop(...e);return this.runRenderLoop=l.engine.runRenderLoop,requestAnimationFrame(t.hideLoadingUI),s},r.componentBase.disposeAbles.push(t),r.componentBase.disposeAbles.push(n);const d={GUI:{advancedDynamicTextureFullScreen:a.AdvancedDynamicTexture.CreateFullscreenUI("UIDefault",!0,n)},canvas:e.elCanvas,engine:t,scene:n,renderScene:()=>u.baseUtils.render({engine:t,scene:n}),transformers:r};({...v.defaults.onInitResult,...await e.onInit(d)}).shouldRenderScene&&!c.hasRenderedScene&&d.renderScene(),e.baseEvents.on({cb:t.resize,type:h.a.resize}),e.baseEvents.onceComponentWillUnmount({cb:r.componentBase.dispose})})}render(){return null}}v.defaults={onInitResult:{shouldRenderScene:!0}},v.getters={transformers(e){const{componentBase:t,scene:n}=e;return{componentBase:t,components:{ComponentBase:u,ComponentFPS:w,ComponentPlot:m},corePlot:({GUI:s,canvas:r,onRenderComponentPlot:o,width:l="150px"})=>{t.baseDefault.light();const h=new i.ArcRotateCamera("TestCamera",.33,1.33,350,i.Vector3.Zero(),n);h.attachControl(r,!0),h.fov=1,t.disposeAbles.push(new i.ArcRotateCamera("TestCamera",.33,1.33,350,i.Vector3.Zero(),n));const c=new w({...e,render:!1}),d=c.render();d.containerRect.adaptWidthToChildren=!1,d.containerRect.leftInPixels=0,d.containerRect.width=l,d.containerRect.horizontalAlignment=a.Control.HORIZONTAL_ALIGNMENT_CENTER,t.disposeAbles.push(c),t.disposeAbles.push(new m({...e,advancedDynamicTextureFullScreen:s.advancedDynamicTextureFullScreen,camera:h,onRender(...e){o&&o(...e)},onRenderPanel({panel:e}){e.addControl(d.containerRect)}}))}}}};const A=Object(l.c)(({stores:{storeNavigationMenuMain:e}})=>({menuMainHideAll:e.hideAllEnable}),v)(v),C=(Object(h.b)()(A),({optionsWithCanvasBase:e}={})=>Object(h.b)(e)(A))},427:function(e,t,n){"use strict";n.r(t),n.d(t,"Babylon1",(function(){return l}));var s=n(0),i=n(280),a=n(307),r=n(287);const o=Object(a.a)();class l extends s.Component{constructor(){super(...arguments),this.handleOnInitSpaceStringCircle=({GUI:e,canvas:t,engine:n,scene:s,transformers:a})=>{a.componentBase.disposeAbles.push(new a.components.ComponentFPS({advancedDynamicTextureFullScreen:e.advancedDynamicTextureFullScreen,canvas:t,engine:n,scene:s})),a.components.ComponentBase.baseDefault.background({scene:s}),a.componentBase.baseDefault.camera().setPosition(new i.Vector3(20,200,400));const r=[];for(let e=0;e<2e3;e++){const t=.1*e,n=.3*e;r.push(new i.Vector3(n*Math.cos(.1*e),0,n*Math.sin(t)))}const o=i.Mesh.CreateLines("whirlpool",r,s,!0);o.color=new i.Color3(1,1,1),a.componentBase.disposeAbles.push(o);const l=o.getVerticesData(i.VertexBuffer.PositionKind);if(!l)throw new Error("No position data available");let h=0;s.registerBeforeRender(()=>{for(let e=0;e<2e3;e++)l[3*e+1]=10*Math.sin(h+.1*e);o.updateVerticesData(i.VertexBuffer.PositionKind,l),h+=.05*s.getAnimationRatio()})},this.handleOnInitSpaceString=e=>{const{scene:t,transformers:n}=e,s=n.componentBase.baseDefault.camera();s.maxZ=4e4;const a=Math.floor(s.maxZ/2);s.setPosition(new i.Vector3(-a/2,.75*a,-a/2));const o=.6*s.maxZ,l=r.a.getters.vortexSpiralGrowthFn({targetValues:r.a.vortexes24[36]}),h=Math.floor(o/2*.8),c=Math.floor(h/2),d=r.a.getters.createGetNextArrayValueFn(r.a.colors9Babylon),u=11*r.a.constants.PI/h,p=(({meshUpdateOptions:e}={})=>{const{colorsWrapFirst:s,pointsCore:a,pointsWrapFirst:r}=(({angleOffset:e=0}={})=>{const t=[],n=[],s=[];for(let a=0;a<h;a++){const r=a-c,o=a*u+e,h=l(o);t.push(new i.Vector3(r,r,r)),s.push(d()),n.push(new i.Vector3(h*Math.cos(o)+r,h*Math.sin(o)+r,r))}return{colorsWrapFirst:s,pointsCore:t,pointsWrapFirst:n}})(e),o=i.MeshBuilder.CreateLines("pointsCore",{points:a,updatable:!0},t);o.color=new i.Color3(255,0,0),n.componentBase.disposeAbles.push(o);const p=i.MeshBuilder.CreateLines("pointsWrapFirst",{colors:s,points:r,updatable:!0},t);return p.color=new i.Color3(0,0,255),n.componentBase.disposeAbles.push(p),{meshLinesCore:o,meshLinesWrapFirst:p}})();if(!p)throw new Error("Expected intiial mesh lines to exist.");const g=p.meshLinesWrapFirst.getVerticesData(i.VertexBuffer.PositionKind),m=p.meshLinesWrapFirst.getVerticesData(i.VertexBuffer.ColorKind);if(!g||!m)throw new Error("No render data gotten.");const x=r.a.getters.createGetNextArrayValueFn(r.a.colors9Babylon);t.registerAfterRender(()=>{const e=[];for(let t=0;t<h;t++){const n=t-c,s=t*u,i=l(s),a=3*t;x().asArray().forEach(t=>{e.push(t)}),g[a]=i*Math.cos(s)+n,g[a+1]=i*Math.sin(s)+n}p.meshLinesWrapFirst.updateVerticesData(i.VertexBuffer.PositionKind,g),p.meshLinesWrapFirst.updateVerticesData(i.VertexBuffer.ColorKind,e)}),n.componentBase.baseDefault.light(),n.components.ComponentBase.baseDefault.background({scene:t})}}render(){return s.createElement(o,{onInit:this.handleOnInitSpaceString})}}}}]);