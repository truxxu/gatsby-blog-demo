"use strict";(self.webpackChunkgatsby_starter_elemental=self.webpackChunkgatsby_starter_elemental||[]).push([[691],{3470:function(e,t,n){var r=n(7294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,s=l(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.createElement("polyline",{points:"12 5 19 12 12 19"}))}));o.displayName="ArrowRight",t.Z=o},7581:function(e,t,n){var r=n(7294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,i=e.size,c=void 0===i?24:i,s=l(e,["color","size"]);return r.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));o.displayName="Calendar",t.Z=o},1375:function(e,t,n){var r,a=(r=n(7294))&&"object"==typeof r&&"default"in r?r.default:r;function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var t=e.children,n=e.selector,r=e.smooth,c=void 0===r||r,s=e.style,u=void 0===s?{}:s,m=e.alignToTop,d=void 0!==m&&m,f=e.className,p=void 0===f?"":f,g=e.onClick,v=e.scrollOptions,h=void 0===v?{}:v,y=function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({behavior:c?"smooth":"instant"},function(e){var t={};return e instanceof Object&&Object.entries(e).forEach((function(e){var n=i(e,2),r=n[0],a=n[1];switch(r){case"behavior":"auto"!==a&&"smooth"!==a||(t[r]=a);case"block":case"inline":"start"!==a&&"center"!==a&&"end"!==a&&"nearest"!==a||(t[r]=a)}})),t}(h));d&&(e.block="start",e.inline="nearest"),document.querySelector(n).scrollIntoView(e)};return a.createElement("div",{style:u,className:p,onClick:function(e){"function"==typeof g?(g(e),setTimeout(y,1e3/60)):y()}},t)}},1642:function(e,t,n){var r=n(7294),a=n(5444),l=n(1496),o=n(7581);t.Z=function(e){var t=e.data,n=(0,r.useState)(!1),i=n[0],c=n[1];return r.createElement("div",{className:"blog-item w-full md:w-1/2 lg:w-1/3 p-4"},r.createElement("div",{className:"transition-all duration-300 hover:shadow-2xl shadow "+(i&&"focused")},r.createElement(a.rU,{to:t.fields.slug,title:t.frontmatter.title,onFocus:function(){return c(!0)},onBlur:function(){return c(!1)}},r.createElement("div",{className:"image"},r.createElement(l.Z,{fluid:t.frontmatter.image.childImageSharp.fluid,alt:t.frontmatter.title,className:"w-full"})),r.createElement("div",{className:"p-4 py-3"},r.createElement("h4",{className:"text-color-2 font-black text-3xl pt-1"},t.frontmatter.title),r.createElement("div",{className:"flex items-center text-secondary"},r.createElement(o.Z,{className:"stroke-current"}),r.createElement("p",{className:"pl-2 text-color-default font-sans"},t.frontmatter.date)),r.createElement("p",{className:"pt-3 text-color-default"},t.frontmatter.description)))))}},198:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(4942),a=n(7294),l=n(7838),o=n(1496),i=n(3470),c=n(1721);var s=function(e){function t(t){var n;return(n=e.call(this,t)||this).getWindowHeight=function(){var e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0];return e.innerHeight||n.clientHeight||r.clientHeight},n.getWindowWidth=function(){var e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0];return e.innerWidth||n.clientWidth||r.clientWidth},n.isScrolledIntoView=function(e,t,r){if(void 0===t&&(t=0),!r)return!1;var a=e.getBoundingClientRect().top-t,l=e.getBoundingClientRect().bottom+t;return a<=n.getWindowHeight()&&l>=0},n.onScroll=function(){var e=Date.now();e-n.timestamp>=20&&n.isScrolledIntoView(n.node.current,100,n.canUseDom)&&(n.props.changePercentage({percentage:1-n.getRelativePosition(n.node.current,n.canUseDom)}),n.timestamp=e)},n.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},n.getRelativePosition=function(e,t){if(!t)return 0;var r=e,a=r.getBoundingClientRect(),l=a.top,o=a.height,i=n.getNodeHeight(r),c=o>i?o:i,s=Math.round(l>c?c:l);return n.getPercentage(-o,c,s)},n.node=a.createRef(),n.timestamp=0,n.canUseDom=!("undefined"==typeof window||!window.document||!window.document.createElement),n.state={percentage:0},n}(0,c.Z)(t,e);var n=t.prototype;return n.getNodeHeight=function(e){return e&&"clientHeight"in e?e.clientHeight:this.getWindowHeight()},n.componentDidMount=function(){this.getWindowWidth()>1024&&window.addEventListener("scroll",this.onScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll)},n.render=function(){return a.createElement("div",{ref:this.node},this.props.children)},t}(a.Component);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.data,n=e.even,r=(0,a.useState)({animated:!1,percentage:0}),c=r[0],u=r[1],d=function(e){return u(m(m({},c),e))},f=(0,a.useRef)(0);return(0,a.useEffect)((function(){var e,t,n,r;f.current=Math.min((e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0],(e.innerHeight||n.clientHeight||r.clientHeight)/2),300)*Math.max(0,c.percentage-.3),function(){var e=window,t=document,n=t.documentElement,r=t.getElementsByTagName("body")[0];return e.innerWidth||n.clientWidth||r.clientWidth}()<1024&&d({animated:!0})}),[c.percentage]),c.percentage>.3&&!c.animated&&d({animated:!0}),a.createElement(s,{changePercentage:d},a.createElement("div",{className:"large-container mx-auto"},a.createElement("div",{className:"my-4 py-8 lg:py-24 portfolio-item md:flex "+(c.animated?"begin-animation":"")+" "+(n?"even flex-row-reverse":"")},a.createElement("div",{className:"relative flex-1"},a.createElement("div",{className:"image relative z-10",style:{transform:"translate(0px,"+f.current+"px)"}},a.createElement(o.Z,{fluid:t.frontmatter.image.childImageSharp.fluid,alt:t.frontmatter.title}))),a.createElement("div",{className:"flex-1 flex md:px-4 lg:px-6 items-center"},a.createElement("div",{className:"flex flex-1 flex-wrap  "+(n?"md:justify-end md:text-right":"")},a.createElement("h3",{className:"text-color-1 text-5xl font-black to-up"},t.frontmatter.title),a.createElement("p",{className:"lg:mt-4 to-up"},t.frontmatter.description),a.createElement(l.z,{to:t.fields.slug,label:"View "+t.frontmatter.title,title:"Ver más",iconRight:a.createElement(i.Z,null)}))))))}},6738:function(e,t,n){n.r(t);var r=n(7294),a=n(3470),l=n(1375),o=n.n(l),i=n(3678),c=n(7838),s=n(198),u=n(1642),m=n(5428);t.default=function(e){var t=e.data,n=e.location,a=t.site.siteMetadata,l=t.portfolio.edges.map((function(e,t){return r.createElement(s.Z,{data:e.node,key:"p-item-index-"+e.node.id,even:(t+1)%2==0})})),o=t.blog.edges.map((function(e){return r.createElement(u.Z,{data:e.node,key:"b-item-index-"+e.node.id})}));return r.createElement(i.Z,{front:!0,seo:{title:"Home",description:a.description},navPlaceholder:!1,location:n},r.createElement(d,{data:a}),""!==a.about&&r.createElement(f,{data:a.about}),r.createElement("div",{className:"px-4 lg:px-0",id:"portfolio"},l),r.createElement(p,null,o),r.createElement(g,{data:a.contact}))};var d=function(e){var t=e.data,n=(0,r.useRef)(null),l=t.twoColumnWall,i=(0,r.useState)({loaded:!1,supportsBlend:!1}),s=i[0],u=i[1];(0,r.useEffect)((function(){window.CSS&&!s.loaded&&CSS.supports("mix-blend-mode","screen")&&(n.current.classList.add("supports-blend"),u({loaded:!0,supportsBlend:!0}))}),[s.loaded]);var m={};!l&&t.titleImage&&(m.style={backgroundImage:"url('"+t.titleImage+"')"});var d=r.createElement(r.Fragment,null,r.createElement("div",{className:"title bg-bg"},r.createElement("h1",{className:"text-6xl relative lg:text-7xl "+(t.capitalizeTitleOnHome?"uppercase":"")},r.createElement("span",m),t.title)),r.createElement("p",{className:"text-base lg:text-lg mt-4"},t.description),r.createElement(o(),{selector:"#portfolio"},r.createElement(c.z,{title:"VER MAS",type:"button",iconRight:r.createElement(a.Z,null)})));return l?r.createElement("div",{className:"wall h-screen flex relative justify-center items-center overflow-hidden",ref:n},r.createElement("div",{className:"flex-1 lg:block absolute lg:relative w-full h-full top-0 left-0"},r.createElement("div",{className:"absolute left-0 top-0 w-full h-full lg:hidden",style:{background:"rgba(0,0,0,.75)"}}),r.createElement("img",{src:t.titleImage,alt:"",className:"h-full w-auto max-w-none lg:h-auto lg:w-full"})),r.createElement("div",{className:"flex-1 text-center p-3 relative z-10 lg:text-left lg:pl-8 text-white lg:text-color-default"},d)):r.createElement("div",{className:"wall h-screen flex flex-col justify-center items-center text-center",ref:n},d)},f=function(e){var t=e.data;return r.createElement("div",{className:"boxed"},r.createElement("div",{className:"px-4 py-20 text-center lg:py-40 lg:px-0"},r.createElement("h2",{className:"text-color-1 font-black text-5xl lg:text-6xl"},"Acerca de nosotros"),r.createElement("p",{className:"mt-5 text-lg"},t)))},p=function(e){var t=e.children;return r.createElement("div",{className:"container mx-auto px-0"},r.createElement("div",{className:"pt-20 pb-10 text-center lg:pt-40 lg:pb-20"},r.createElement("h2",{className:"text-color-1 font-black text-5xl lg:text-6xl"},"Blog")),r.createElement("div",{className:"flex flex-wrap"},t))},g=function(e){var t=e.data,n=t.api_url;return r.createElement("div",{className:"container mx-auto"},r.createElement("div",{className:"pt-20 pb-10 lg:pt-40 lg:pb-20 text-center"},r.createElement("h2",{className:"text-color-1 font-black text-5xl lg:text-6xl"},"Contacto")),r.createElement("div",{className:"flex flex-wrap pb-40"},n&&r.createElement("div",{className:"w-full lg:w-1/2 px-4 lg:pl-2 lg:pr-6"},r.createElement(m.l,{api:t.api_url})),r.createElement("div",{className:"w-full "+(n?"lg:w-1/2":"lg:w-2/3 mx-auto")+" px-6 pt-8"},r.createElement(m.d,{data:t}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-2a5e308f0caff0656806.js.map