(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{406:function(e,t,n){"use strict";n.r(t),n.d(t,"Home",(function(){return c}));var o=n(0),a=n(469),l=n(23),r=n(35);class s extends o.Component{constructor(){super(...arguments),this.handleLocaleChange=e=>{e.preventDefault();const{props:t}=this;t.storeI18N.switchLocale({locale:t.storeI18N.locale===r.a["sv-SE"]?r.a["en-US"]:r.a["sv-SE"]})}}componentDidMount(){this.props.storeNavigationMenuMain.hideAllDisable()}render(){const{props:e}=this;return o.createElement("div",null,o.createElement(a.a,{id:"Common.Route.home.title",defaultMessage:"Home",description:"Route home title"}),o.createElement("br",null),o.createElement("br",null),'Current locale: "',e.storeI18N.locale,'"',o.createElement("br",null),o.createElement("br",null),o.createElement("button",{"data-testid":"button-change-language",onClick:this.handleLocaleChange,type:"button"},"change locale"))}}const c=Object(l.c)(({stores:{storeI18N:e,storeNavigationMenuMain:t}})=>({storeI18N:e,storeNavigationMenuMain:t}),s)(s)}}]);