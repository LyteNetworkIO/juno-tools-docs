"use strict";(self.webpackChunkjunotools_docs=self.webpackChunkjunotools_docs||[]).push([[3],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,f=p["".concat(d,".").concat(h)]||p[h]||c[h]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2977:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:1},d="Introduction",l={unversionedId:"dashboards/airdrop/introduction",id:"dashboards/airdrop/introduction",title:"Introduction",description:"What's an Airdrop?",source:"@site/docs/03-dashboards/02-airdrop/01-introduction.md",sourceDirName:"03-dashboards/02-airdrop",slug:"/dashboards/airdrop/introduction",permalink:"/docs/dashboards/airdrop/introduction",editUrl:"https://github.com/CosmosContracts/juno-tools-docs/edit/main/docs/03-dashboards/02-airdrop/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pinned Codes",permalink:"/docs/pinned-codes"},next:{title:"Guide",permalink:"/docs/dashboards/airdrop/guide"}},u=[{value:"What&#39;s an Airdrop?",id:"whats-an-airdrop",children:[],level:2},{value:"Junotools and Airdrops",id:"junotools-and-airdrops",children:[],level:2},{value:"Why Merkle Airdrop?",id:"why-merkle-airdrop",children:[],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],c={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"whats-an-airdrop"},"What's an Airdrop?"),(0,i.kt)("p",null,"Simply put, an airdrop is a way of distributing tokens to a set of addresses. It's a concept heavily used in the blockchain community to create a decentralized distribution of tokens."),(0,i.kt)("p",null,"An airdrop lets you reach a wide audience of people, promote your project, and help people get started with your project. Junotools uses Merkle Airdrop to distribute the tokens which are explained below."),(0,i.kt)("h2",{id:"junotools-and-airdrops"},"Junotools and Airdrops"),(0,i.kt)("p",null,"Junotools helps you easily create airdrops and distribute your tokens without writing a line of code."),(0,i.kt)("p",null,"Using JunoTools you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create,"),(0,i.kt)("li",{parentName:"ul"},"register,"),(0,i.kt)("li",{parentName:"ul"},"and fund your airdrops.")),(0,i.kt)("h2",{id:"why-merkle-airdrop"},"Why Merkle Airdrop?"),(0,i.kt)("p",null,"Merkle Airdrop method is an efficient way of distributing tokens and is based on creating a Merkle tree (hash tree) using the user addresses and their claimable amount."),(0,i.kt)("p",null,"Unlike traditional methods, it lets the addresses registered in the Merkle tree claim the tokens instead of dropping the tokens directly to their addresses. This provides a cheaper way to distribute your tokens and prevents sending tokens to addresses that are no longer accessible by anyone."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"To learn how to manage your airdrop on JunoTools, jump to our ",(0,i.kt)("a",{parentName:"p",href:"/docs/dashboards/airdrop/guide"},"guide"),"."))}p.isMDXComponent=!0}}]);