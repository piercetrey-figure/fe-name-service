(this["webpackJsonpfe-invoice"]=this["webpackJsonpfe-invoice"]||[]).push([[0],{119:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(16),a=t(25),c=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,[{key:"toJson",value:function(){return JSON.stringify(this)}}]),e}()},125:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return h}));var r=t(18),a=t(1),c=t.n(a),i=t(6),o=t(16),s=t(25),u=t(178),l=t(158),d=t(281),f=t(63),b=t(282),j=t(94),p=t(17),h=function(){function n(e){Object(o.a)(this,n),this.wasmService=new l.a,this.contractAddress=null,this.rootName=void 0,this.rootName=e}return Object(s.a)(n,[{key:"getContractAddress",value:function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==this.contractAddress){e.next=2;break}return e.abrupt("return",this.contractAddress);case 2:return e.next=4,this.wasmService.lookupContractByName(this.rootName);case 4:return this.contractAddress=e.sent,e.abrupt("return",this.contractAddress);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getContractConfig",value:function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this.wasmService,e.next=3,this.getContractAddress();case 3:return e.t1=e.sent,e.t2=new j.c,e.abrupt("return",e.t0.queryWasmCustom.call(e.t0,e.t1,e.t2));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"listNames",value:function(){var e=Object(i.a)(c.a.mark((function e(n){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this.wasmService,e.next=3,this.getContractAddress();case 3:return e.t1=e.sent,e.t2=new u.b(n),e.next=7,e.t0.queryWasmCustom.call(e.t0,e.t1,e.t2);case 7:return t=e.sent,e.abrupt("return",t.names);case 9:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"resolveName",value:function(){var e=Object(i.a)(c.a.mark((function e(n){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this.wasmService,e.next=3,this.getContractAddress();case 3:return e.t1=e.sent,e.t2=new u.a(n),e.next=7,e.t0.queryWasmCustom.call(e.t0,e.t1,e.t2);case 7:return t=e.sent,e.abrupt("return",t.address);case 9:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"generateNameRegisterBase64Message",value:function(){var n=Object(i.a)(c.a.mark((function n(t,a){var i,o,s,u,l,h;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([this.getContractAddress(),this.getContractConfig()]);case 2:return i=n.sent,o=Object(r.a)(i,2),s=o[0],u=o[1],l=(new d.MsgExecuteContract).setMsg(e.from((new j.d).setName(t).toJson(),"utf-8").toString("base64")).setFundsList([(new f.Coin).setAmount(u.fee_amount).setDenom(p.c)]).setContract(s).setSender(a),h=(new b.Any).setTypeUrl("/cosmwasm.wasm.v1.MsgExecuteContract").setValue(l.serializeBinary()),n.abrupt("return",e.from(h.serializeBinary()).toString("base64"));case 9:case"end":return n.stop()}}),n,this)})));return function(e,t){return n.apply(this,arguments)}}()}]),n}()}).call(this,t(15).Buffer)},158:function(e,n,t){"use strict";var r=t(267);t.d(n,"a",(function(){return r.a}))},17:function(e,n,t){"use strict";t.d(n,"b",(function(){return r.a})),t.d(n,"d",(function(){return r.e})),t.d(n,"c",(function(){return r.b})),t.d(n,"a",(function(){return a}));var r=t(47),a=t(74)},178:function(e,n,t){"use strict";var r=t(94);t.d(n,"a",(function(){return r.a})),t.d(n,"b",(function(){return r.b}));t(119)},267:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return l}));var r=t(16),a=t(25),c=t(280),i=t(160),o=t(47),s=t(279),u=t(159),l=function(){function n(){Object(r.a)(this,n),this.nameQueryClient=new s.QueryClient(o.c,null),this.wasmQueryClient=new c.QueryClient(o.c,null)}return Object(a.a)(n,[{key:"lookupContractByName",value:function(e){var n=this;return new Promise((function(t,r){n.nameQueryClient.resolve((new u.QueryResolveRequest).setName(e),null,(function(e,n){e?r(new Error("wasmService.lookupContractByName error: Code: ".concat(e.code," Message: ").concat(e.message))):t(n.getAddress())}))}))}},{key:"queryWasmCustom",value:function(n,t){var r=this;return new Promise((function(a,c){var o=e.from(JSON.stringify(t),"utf-8").toString("base64");r.wasmQueryClient.smartContractState((new i.QuerySmartContractStateRequest).setAddress(n).setQueryData(o),null,(function(n,t){n?c(new Error("wasmService.queryWasmCustom error: Code: ".concat(n.code," Message: ").concat(n.message))):a(JSON.parse(e.from(t.getData_asU8()).toString("utf-8")))}))}))}}]),n}()}).call(this,t(15).Buffer)},299:function(e,n){},315:function(e,n){},317:function(e,n){},320:function(e,n){},346:function(e,n){},347:function(e,n){},367:function(e,n){},369:function(e,n){},380:function(e,n){},382:function(e,n){},409:function(e,n){},411:function(e,n){},416:function(e,n){},418:function(e,n){},424:function(e,n){},426:function(e,n){},438:function(e,n){},441:function(e,n){},469:function(e,n,t){},47:function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return i})),t.d(n,"f",(function(){return o})),t.d(n,"e",(function(){return s})),t.d(n,"b",(function(){return u}));var r="testnet",a="mainnet"==r,c=a?"https://explorer.provenance.io":"https://explorer.test.provenance.io",i=a?"https://wallet.provenance.io/proxy":"https://wallet.test.provenance.io/proxy",o=a?"https://wallet.provenance.io":"https://wallet.test.provenance.io",s="wallettest2.pb",u="nhash"},470:function(e,n,t){"use strict";t.r(n);var r,a,c=t(269),i=t.n(c),o=t(478),s=t(479),u=t(2),l=t(1),d=t.n(l),f=t(6),b=t(18),j=t(9),p=t(181),h=t(480),m=t(7),x=t(3),O=m.a.button(r||(r=Object(j.a)(["\n  flex-basis: ",";\n  ",";\n  align-items: center;\n  background: ",";\n  white-space: nowrap;\n  border-radius: 6px;\n  border: 1px solid ",";\n  text-shadow: 0 1px 0px rgba(0, 0, 0, 0.5), 0 -1px 0px rgba(0, 0, 0, 0.5), 1px 0 0px rgba(0, 0, 0, 0.5), -1px 0 0px rgba(0, 0, 0, 0.5);\n  color: white;\n  cursor: ",";\n  display: flex;\n  justify-content: center;\n  letter-spacing: 0.07rem;\n  transition: 250ms all;\n  user-select: none;\n  font-size: 1.2rem;\n  height: 40px;\n  padding: 0 30px;\n  &:hover:not(:disabled) {\n    filter: contrast(200%);\n  }\n  &:active:not(:disabled) {\n    filter: contrast(90%);\n  }\n  &:disabled {\n    filter: grayscale(80%);\n  }\n"])),(function(e){return e.width}),(function(e){return"auto"===e.width&&"min-width: 150px"}),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.disabled?"not-allowed":"pointer"})),v=m.a.div(a||(a=Object(j.a)([""]))),g=function(e){var n=e.className,t=e.color,r=e.onClick,a=e.children,c=e.disabled,i=e.width,o=e.title,s=e.type,u=e.loading,l=function(){c||r()};return Object(x.jsx)(O,{title:o,className:n,onClick:l,color:t.toUpperCase(),onKeyPress:function(e){"Enter"===e.key&&l()},disabled:c||u,width:i,type:s,children:Object(x.jsx)(v,{children:u?Object(x.jsx)(ne,{}):a})})};g.defaultProps={className:"",color:"#42368E",onClick:function(){},disabled:!1,width:"auto",title:"",type:"button",loading:!1};var w,C,y,A,k,S,N=g,E=m.a.div(w||(w=Object(j.a)(["\n  position: fixed;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  z-index: 100;\n"]))),R=Object(m.b)(C||(C=Object(j.a)(["\n  from { transform: translate(0, -100%); }\n  to { transform: translate(0, 0); }\n"]))),T=Object(m.b)(y||(y=Object(j.a)(["\n  from { transform: translate(0, 0); }\n  to { transform: translate(0, -100%); }\n"]))),D=m.a.div(A||(A=Object(j.a)(["\n  padding: 20px;\n  width: 100%;\n  background: ",";\n  box-shadow: '1px 1px 4px 1px rgba(0,0,0,0.10)';\n  border-radius: 0 0 3px 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  animation: 250ms linear ",";\n  animation-fill-mode: both;\n  opacity: 0.95;\n"])),(function(e){var n=e.status;return"error"===n||"failure"===n?"#FFAAAA":"warning"===n?"#FFFFAA":"success"===n?"#AAFFAA":"#DDDDDD"}),(function(e){return e.isClosing?T:R})),L=m.a.div(k||(k=Object(j.a)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 3rem;\n  transform: rotate(45deg);\n  cursor: pointer;\n"]))),_=m.a.div(S||(S=Object(j.a)(["\n  font-size: 1.4rem;\n  font-weight: 700;\n"]))),F=function(e){var n=e.className,t=e.children,r=e.onClose,a=e.status,c=e.delay,i=Object(u.useState)(!1),o=Object(b.a)(i,2),s=o[0],l=o[1];return Object(u.useEffect)((function(){var e="";return s?setTimeout((function(){r()}),1e3):e=setTimeout((function(){l(!0)}),c),function(){e&&clearTimeout(e)}}),[s,r,c]),Object(x.jsx)(E,{className:n,children:Object(x.jsxs)(D,{status:a.toLowerCase(),isClosing:s,children:[Object(x.jsx)(L,{onClick:function(){return l(!0)},children:"+"}),Object(x.jsx)(_,{children:t})]})})};F.defaultProps={className:"",children:null,onClose:function(){},status:"warning",delay:2e3};var M,P,z,B=F,W=t(17),K=m.a.div(M||(M=Object(j.a)(["\n  position: relative;\n  flex-basis: ",";\n  display: flex;\n"])),(function(e){return e.width})),I=m.a.input(P||(P=Object(j.a)(["\n  padding: 4px 10px;\n  height: 30px;\n  width: 100%;\n  box-sizing: content-box;\n  border-radius: 0;\n  margin-right: 4px;\n  margin-bottom: 10px;\n  border: 1px solid ",";\n"])),W.a.DARK),J=m.a.label(z||(z=Object(j.a)(["\n  font-size: 1rem;\n  font-weight: 700;\n  position: absolute;\n  top: -16px;\n  left: 0;\n"]))),q=function(e){var n=e.className,t=e.label,r=e.value,a=e.onChange,c=e.placeholder,i=e.width,o=e.disabled;return Object(x.jsxs)(K,{width:i,className:n,children:[t&&Object(x.jsx)(J,{children:t}),Object(x.jsx)(I,{value:r,placeholder:c,onChange:function(e){var n=e.target;return a(n.value)},disabled:o})]})};q.defaultProps={className:"",width:"100%",label:"",value:"",onChange:function(){},placeholder:"Enter Value"};var H,U=q,Q=m.a.svg(H||(H=Object(j.a)(["\n  margin: auto;\n  display: block;\n"]))),G=function(e){var n=e.className,t=e.color,r=e.height,a=e.width;return Object(x.jsx)(Q,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:n,height:r,width:a,children:Object(x.jsx)("circle",{cx:"50",cy:"50",fill:"none",stroke:t,strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",children:Object(x.jsx)("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})})})};G.defaultProps={className:"",color:"#eeeeee",height:"20px",width:"20px"};var Y,X,V,Z,$,ee,ne=G,te=m.a.div(Y||(Y=Object(j.a)(["\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]))),re=m.a.div(X||(X=Object(j.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: flex-start;\n  flex-basis: 100%;\n"]))),ae=m.a.div(V||(V=Object(j.a)(["\n  position: relative;\n  width: 100%;\n"]))),ce=m.a.select(Z||(Z=Object(j.a)(["\n  width: 100%;\n  padding: 14px 18px;\n  border-radius: 4px;\n  margin: 0;\n  border: 1px solid ",";\n  font-size: 1.4rem;\n  flex-grow: ",";\n  font-weight: bold;\n  background: ",";\n  cursor: pointer;\n  color: ",";\n  &:focus,\n  &:focus-visible,\n  &:active {\n    outline-color: ",";\n  }\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n"])),W.a.DARK,(function(e){return"radio"===e.type?"initial":"1"}),W.a.LIGHT,W.a.DARK,W.a.DARK),ie=m.a.div($||($=Object(j.a)(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 18px;\n  color: ",";\n  pointer-events: none;\n  cursor: pointer;\n  font-size: 1.8rem;\n  text-align: middle;\n  font-weight: bold;\n"])),W.a.TEXT),oe=m.a.label(ee||(ee=Object(j.a)(["\n  margin-bottom: 16px;\n  font-weight: bold;\n  font-size: 1.8rem;\n  display: inline-block;\n  color: #333333;\n"]))),se=function(e){var n=e.className,t=e.label,r=e.options,a=e.name,c=e.value,i=e.onChange;return Object(x.jsxs)(te,{className:n,children:[t&&Object(x.jsx)(oe,{htmlFor:a,children:t}),Object(x.jsx)(re,{children:Object(x.jsxs)(ae,{children:[Object(x.jsx)(ce,{value:c||r[0],onChange:function(e){var n=e.target;return i(n.value)},children:r.map((function(e,n){return Object(x.jsx)("option",{value:e,disabled:0===n,children:e},e)}))}),Object(x.jsx)(ie,{children:"^"})]})})]})};se.defaultProps={className:"",label:"",value:null};var ue,le=se,de=t(273),fe=m.a.div(ue||(ue=Object(j.a)(["\n  padding: 20px;\n  border: 2px solid ",";\n  background: ",";\n  border-radius: 5px;\n  display: flex;\n  max-width: 100%;\n  align-items: center;\n  justify-content: ",";\n  ","\n  box-shadow: 1px 1px 3px 1px ",";\n"])),(function(e){return e.color}),(function(e){var n=e.color;return e.isLoading?"#CCCCCC":"".concat(n,"50")}),(function(e){return e.justify}),(function(e){return!e.noMargin&&"margin-bottom: 30px;"}),(function(e){return e.color})),be=function(e){var n=e.children,t=e.color,r=e.justify,a=e.loading,c=e.noMargin;return Object(x.jsx)(fe,{color:t,justify:r,isLoading:a,noMargin:c,children:n})};be.defaultProps={color:"#42368E",children:null,justify:"center",loading:!1,noMargin:!1};var je;(function(e){var n=e.method,t=e.setPopup,r=e.fields,a=e.buttonTxt,c=e.windowMessage,i=Object(o.b)(),s=i.walletConnectService,l=i.walletConnectState["".concat(n,"Loading")],d=function(e){return["".concat(p.a["".concat(e,"_COMPLETE")]),"".concat(p.a["".concat(e,"_FAILED")])]}(c),f=Object(b.a)(d,2),j=f[0],h=f[1],m={};r.forEach((function(e){var n=e.name,t=e.value;m[n]=t}));var O=Object(u.useState)(m),v=Object(b.a)(O,2),g=v[0],w=v[1];Object(u.useEffect)((function(){return s.addListener(j,(function(e){console.log("WalletConnectJS | ".concat(n," Complete | Result: "),e),t("".concat(n," Complete! See console for result details"),"success",5e3)})),s.addListener(h,(function(e){var r=e.error;console.log("WalletConnectJS | ".concat(n," Failed | Result: "),e),t("".concat(n," Failed! ").concat(r," | See console for more details"),"failure",5e3)})),function(){s.removeAllListeners(j),s.removeAllListeners(h)}}),[s,t,j,h,n]);return Object(x.jsxs)(be,{loading:l,children:[r.map((function(e){var n=e.name,t=e.width,r=e.label,a=e.placeholder;return Object(x.jsx)(U,{width:t,value:g[n],label:r,placeholder:a,onChange:function(e){return function(e,n){var t=Object(de.a)({},g);t[e]=n,w(t)}(n,e)}},n)})),Object(x.jsx)(N,{loading:l,onClick:function(){return s[n](Object.keys(g).length>1?g:g[Object.keys(g)[0]])},children:a})]})}).defaultProps={fields:[]};var pe,he,me,xe,Oe,ve,ge,we,Ce,ye,Ae,ke,Se,Ne,Ee,Re,Te,De=m.a.div(je||(je=Object(j.a)(["\n  font-size: 1.4rem;\n  margin-right: 40px;\n"]))),Le=function(e){var n=e.walletConnectService,t=e.setPopup,r="#498AFD";return Object(u.useEffect)((function(){return n.addListener(p.a.CONNECTED,(function(e){console.log("WalletConnectJS | Connected | Result: ",e),t("Wallet Connected","success")})),function(){n.removeAllListeners(p.a.CONNECTED)}}),[n,t]),Object(x.jsxs)(be,{color:r,noMargin:!0,children:[Object(x.jsx)(De,{children:"Connect Wallet"}),Object(x.jsx)(N,{width:"20%",color:r,onClick:n.connect,children:"Connect"})]})},_e=m.a.div(pe||(pe=Object(j.a)(["\n  font-size: 1.4rem;\n  margin-right: 40px;\n"]))),Fe=function(e){var n=e.walletConnectService,t=e.setPopup,r="#FFAAAA";return Object(u.useEffect)((function(){return n.addListener(p.a.DISCONNECT,(function(e){console.log("WalletConnectJS | Disconnect | Result: ",e),t("Wallet Disconnected","failure")})),function(){n.removeAllListeners(p.a.DISCONNECT)}}),[n,t]),Object(x.jsxs)(be,{color:r,justify:"space-between",children:[Object(x.jsx)(_e,{children:"Disconnect the connected wallet"}),Object(x.jsx)(N,{width:"20%",color:r,onClick:n.disconnect,children:"Disconnect"})]})},Me=t(74),Pe=m.a.h1(he||(he=Object(j.a)(["\n  font-size: 3rem;\n  line-height: 3rem;\n  font-weight: bold;\n  letter-spacing: 0.25rem;\n  margin-bottom: 40px;\n  transition: 6s all;\n"]))),ze=m.a.h2(me||(me=Object(j.a)(["\n  font-size: 2rem;\n  line-height: 2rem;\n  font-weight: bold;\n"]))),Be=function(e){var n=e.onRegister,t=Object(u.useState)(""),r=Object(b.a)(t,2),a=r[0],c=r[1],i=Object(u.useState)(!1),o=Object(b.a)(i,2),s=o[0],l=o[1],d=""!=a.trim();return Object(x.jsxs)(We,{children:[Object(x.jsx)(ze,{children:"Register a new name"}),Object(x.jsx)(U,{disabled:s,value:a,onChange:function(e){return c(e)}}),Object(x.jsx)(N,{disabled:s||!d,type:"submit",onClick:function(){l(!0),n(a).then((function(){c("")})).finally((function(){l(!1)}))},children:"Register"})]})},We=m.a.div(xe||(xe=Object(j.a)(["\n    margin-bottom: 20px;\n"]))),Ke=(t(158),t(125)),Ie=t(16),Je=t(25),qe=function(){function e(){Object(Ie.a)(this,e)}return Object(Je.a)(e,null,[{key:"getHashBalance",value:function(e){if(!e)return null;var n=e.balancesList.find((function(e){return"nhash"===e.denom}));if(!(null===n||void 0===n?void 0:n.amount))return null;try{return this.convertNanoHashToHash(+n.amount)}catch(t){return console.log("Failed to convert derived nano amount [".concat(null===n||void 0===n?void 0:n.amount,"] to hash: ").concat(t)),null}}},{key:"convertNanoHashToHash",value:function(e){return e/1e9}}]),e}(),He=m.a.div(Oe||(Oe=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n"]))),Ue=m.a.div(ve||(ve=Object(j.a)(["\n\n"]))),Qe=m.a.button(ge||(ge=Object(j.a)(["\n    border: 1px solid ",";\n    border-bottom: none;\n    display: inline-block;\n    padding: 4px;\n    background: ",";\n    cursor: pointer;\n    &:not(:last-child) {\n        border-right: none;\n    }\n    &:first-child {\n        border-top-left-radius: 5px;\n    }\n    &:last-child {\n        border-top-right-radius: 5px;\n    }\n    &:hover {\n        background: ",";\n    }\n"])),W.a.DARK,(function(e){return e.active?W.a.DARKEN:W.a.LIGHT}),W.a.DARKEN),Ge=m.a.div(we||(we=Object(j.a)(["\n    padding: 10px;\n    background-color: ",";\n\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n    border: 1px solid ",";\n"])),W.a.LIGHT,W.a.DARK),Ye=function(e){var n=e.tabs,t=Object(u.useState)(0),r=Object(b.a)(t,2),a=r[0],c=r[1];return Object(x.jsxs)(He,{children:[Object(x.jsx)(Ue,{children:n.map((function(e,n){return Object(x.jsx)(Qe,{active:a===n,onClick:function(){return c(n)},children:e.title},"tab-".concat(n))}))}),Object(x.jsx)(Ge,{children:n[a].element})]})},Xe=t(283),Ve=m.a.ul(Ce||(Ce=Object(j.a)(["\nlist-style-type: none;\npadding-left: 0;\nborder-radius: 5px;\nborder: 1px solid ",";\noverflow: hidden;\n"])),W.a.DARKEN),Ze=m.a.li(ye||(ye=Object(j.a)(["\nfont-weight: 600;\nfont-size: 1.2rem;\npadding: 10px;\nbackground: white;\n&:not(:last-child) {\n  border-bottom: 1px solid ",";\n}\n"])),W.a.DARKEN),$e=m.a.div(Ae||(Ae=Object(j.a)(["\n\n"]))),en=m.a.div(ke||(ke=Object(j.a)(["\n    background: ",";\n    padding: 10px;\n    font-size: 1.5rem;\n    margin: 10px 0;\n    border-radius: 5px;\n    color: ",";\n"])),W.a.WARN,W.a.LIGHT),nn=m.a.div(Se||(Se=Object(j.a)(["\n    max-width: 600px;\n"]))),tn=function(e){Object(Xe.a)(e);var n=Object(u.useState)(""),t=Object(b.a)(n,2),r=t[0],a=t[1],c=Object(u.useState)(!1),i=Object(b.a)(c,2),o=i[0],s=i[1],l=Object(u.useState)("name"),j=Object(b.a)(l,2),p=j[0],h=j[1],m=""!=r.trim(),O=Object(u.useState)([]),v=Object(b.a)(O,2),g=v[0],w=v[1],C=Object(u.useState)([]),y=Object(b.a)(C,2),A=y[0],k=y[1],S=Object(u.useState)(""),E=Object(b.a)(S,2),R=E[0],T=E[1],D=Object(u.useState)(""),L=Object(b.a)(D,2),_=L[0],F=L[1],M=new Ke.a(W.d),P=function(){var e=Object(f.a)(d.a.mark((function e(){var n,t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!0),w([]),T(r),F(""),k([]),e.prev=5,"name"!=p){e.next=17;break}return e.next=9,M.resolveName(r);case 9:return n=e.sent,w([n]),e.next=13,M.listNames(n);case 13:t=e.sent,k(t.filter((function(e){return e!=r}))),e.next=21;break;case 17:return e.next=19,M.listNames(r);case 19:c=e.sent,w(c);case 21:a(""),s(!1),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(5),e.t0 instanceof Error&&F(e.t0.message),s(!1);case 29:case"end":return e.stop()}}),e,null,[[5,25]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(nn,{children:[Object(x.jsx)(le,{label:"lookup type",name:"lookupType",value:p,options:["select a lookup type","name","address"],onChange:function(e){return h(e)}}),Object(x.jsxs)("form",{children:[Object(x.jsx)(U,{label:p.slice(0,1).toUpperCase()+p.slice(1),value:r,onChange:function(e){return a(e)}}),Object(x.jsx)(N,{type:"submit",disabled:!m||o,onClick:function(){return P()},children:"Lookup"})]}),_&&Object(x.jsx)(en,{children:_}),!_&&g.length>0&&Object(x.jsxs)($e,{children:[Object(x.jsxs)(ze,{children:["Results for ",R,":"]}),Object(x.jsx)(Ve,{children:g.map((function(e,n){return Object(x.jsx)(Ze,{children:e},"res-".concat(n))}))})]}),!_&&A.length>0&&Object(x.jsxs)($e,{children:[Object(x.jsx)(ze,{children:"Additional Names:"}),Object(x.jsx)(Ve,{children:A.map((function(e,n){return Object(x.jsx)(Ze,{children:e},"additional-".concat(n))}))})]})]})},rn=m.a.div(Ne||(Ne=Object(j.a)(["\n  background: ",";\n\n  a {\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n  }\n"])),Me.PRIMARY_BACKGROUND,Me.TEXT_ACCENT,Me.TEXT),an=m.a.div(Ee||(Ee=Object(j.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: center; */\n  max-width: 100%;\n  min-height: 100vh;\n  position: relative;\n"]))),cn=m.a.p(Re||(Re=Object(j.a)(["\n  font-size: 1.6rem;\n  line-height: 3rem;\n  margin: 0;\n"]))),on=m.a.div(Te||(Te=Object(j.a)(["\n  min-width: 600px;\n  padding: 30px 50px;\n  border-radius: 4px;\n  margin-bottom: 40px;\n"]))),sn=function(){var e=Object(u.useState)(""),n=Object(b.a)(e,2),t=n[0],r=n[1],a=Object(u.useState)("success"),c=Object(b.a)(a,2),i=c[0],l=c[1],j=Object(u.useState)(2500),m=Object(b.a)(j,2),O=m[0],v=m[1],g=Object(u.useState)(""),w=Object(b.a)(g,2),C=(w[0],w[1],Object(u.useState)(null)),y=Object(b.a)(C,2),A=y[0],k=y[1],S=Object(u.useState)(!1),N=Object(b.a)(S,2),E=N[0],R=N[1],T=Object(o.b)(),D=T.walletConnectService,L=T.walletConnectState,_=L.address,F=L.connected,M=L.peer,P=function(e,n,t){r(e),n&&l(n),t&&v(t)},z=new Ke.a(W.d),K=Object(u.useState)([]),I=Object(b.a)(K,2),J=I[0],q=I[1],H=function(){_?z.listNames(_).then((function(e){return q(e)})):q([])};Object(u.useEffect)((function(){H()}),[_]);var U=Object(s.b)().grpcService,Q=function(){_?U.getBalancesList(_).then((function(e){var n=qe.getHashBalance(e);n&&k(n)})):k(null)};return Object(u.useEffect)((function(){Q()}),[_]),Object(u.useEffect)((function(){E||(console.log("Adding event listeners"),R(!0),D.addListener(p.a.CUSTOM_ACTION_COMPLETE,(function(e){console.log("WalletConnectJS | Custom Action Complete | Result: ",e),H(),Q()})),D.addListener(p.a.CUSTOM_ACTION_FAILED,(function(e){var n=e.error;console.log("WalletConnectJS | Custom Action Failed | result, error: ",e,n)})))}),[E]),Object(x.jsx)(rn,{children:Object(x.jsxs)(an,{children:[t&&Object(x.jsx)(B,{delay:O,onClose:function(){return r("")},status:i,children:t}),Object(x.jsx)(Pe,{children:'Names "R" Us'}),Object(x.jsx)(on,{children:F?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Ye,{tabs:[{title:"Your Names",element:Object(x.jsxs)(x.Fragment,{children:[(null===M||void 0===M?void 0:M.name)&&Object(x.jsxs)(cn,{children:["Wallet:"," ",M.url?Object(x.jsx)("a",{href:M.url,target:"_blank",rel:"noreferrer",children:M.name}):M.name]}),Object(x.jsxs)(cn,{children:["Address:"," ",Object(x.jsx)("a",{href:"".concat(W.b,"/accounts/").concat(_),target:"_blank",rel:"noreferrer",children:_})]}),A&&Object(x.jsxs)(cn,{children:["Hash Balance: ",A]}),Object(x.jsx)(ze,{children:"Your registered names"}),Object(x.jsx)(Ve,{children:J.map((function(e){return Object(x.jsx)(Ze,{children:e},e)}))}),Object(x.jsx)(Be,{onRegister:function(){var e=Object(f.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=D,e.next=3,z.generateNameRegisterBase64Message(n,_);case 3:return e.t1=e.sent,e.t2="Register ".concat(n," to ").concat(_),e.t3={message:e.t1,description:e.t2,method:"provenance_sendTransaction"},e.abrupt("return",e.t0.customAction.call(e.t0,e.t3));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()})]})},{title:"Name Lookup",element:Object(x.jsx)(tn,{})}]}),Object(x.jsx)(Fe,{walletConnectService:D,setPopup:P})]}):Object(x.jsx)(Le,{walletConnectService:D,setPopup:P})}),Object(x.jsx)(h.a,{walletConnectService:D,walletConnectState:L,title:"Scan to initiate walletConnect-js session"}),Object(x.jsxs)("div",{children:["WalletConnect-JS Version: ","0.1.42"]})]})})},un=(t(469),t(47));i.a.render(Object(x.jsx)(u.StrictMode,{children:Object(x.jsx)(o.a,{network:un.d,children:Object(x.jsx)(s.a,{grpcServiceAddress:un.c,walletUrl:un.f,children:Object(x.jsx)(sn,{})})})}),document.getElementById("root"))},74:function(e,n,t){"use strict";t.r(n),t.d(n,"PRIMARY_BACKGROUND",(function(){return r})),t.d(n,"TEXT",(function(){return a})),t.d(n,"TEXT_ACCENT",(function(){return c})),t.d(n,"LIGHT",(function(){return i})),t.d(n,"DARKEN",(function(){return o})),t.d(n,"DARK",(function(){return s})),t.d(n,"WARN",(function(){return u}));var r="#F6F5F4",a="#000",c="#5184A4",i="#FFF",o="#EDEBE9",s="#655C53",u="#E53B10"},94:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u})),t.d(n,"c",(function(){return l})),t.d(n,"d",(function(){return d}));var r=t(25),a=t(58),c=t(57),i=t(16),o=t(119),s=function e(n){Object(i.a)(this,e),this.query_names_by_address=void 0,this.query_names_by_address={address:n}},u=function e(n){Object(i.a)(this,e),this.query_address_by_name=void 0,this.query_address_by_name={name:n}},l=function e(){Object(i.a)(this,e),this.query_request={}},d=function(e){Object(a.a)(t,e);var n=Object(c.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).register={name:""},e}return Object(r.a)(t,[{key:"setName",value:function(e){return this.register.name=e,this}}]),t}(o.a)}},[[470,1,2]]]);
//# sourceMappingURL=main.e5ed688b.chunk.js.map