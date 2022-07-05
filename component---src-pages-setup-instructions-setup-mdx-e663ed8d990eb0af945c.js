"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[6803],{9325:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return u}});var l=a(3366),n=(a(7294),a(4983)),r=a(4295),i=["components"],o={},s={_frontmatter:o},c=r.Z;function u(e){var t=e.components,a=(0,l.Z)(e,i);return(0,n.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",null,"Creating Virtual Machines for class"),(0,n.kt)("h2",null,"Step 1:"),(0,n.kt)("p",null,"Navigate and login to IBM Cloud."),(0,n.kt)("h2",null,"Step 2:"),(0,n.kt)("p",null,"Go to sidebar then Classic > Devices > Manage > Images "),(0,n.kt)("h2",null,"Step 3:"),(0,n.kt)("p",null,"Click on ausptw-mar22-master which is the master image "),(0,n.kt)("h2",null,"Step 4:"),(0,n.kt)("p",null,"Go to top right corner and click Actions > Order Public VSI"),(0,n.kt)("h2",null,"Step 5:"),(0,n.kt)("p",null,"Create a host name that is appropriate to the location of the class "),(0,n.kt)("h2",null,"Step 6:"),(0,n.kt)("p",null,"Choose quantity (20 Max)"),(0,n.kt)("h2",null,"Step 7:"),(0,n.kt)("p",null,"Change billing rate to Hourly "),(0,n.kt)("h2",null,"Step 8:"),(0,n.kt)("p",null,"Change profile to B1 2x8"),(0,n.kt)("h2",null,"Step 9:"),(0,n.kt)("p",null,"Click the Create button in the right-hand sidebar "),(0,n.kt)("h1",null,"Once Virtual Machines are Created"),(0,n.kt)("h2",null,"Step 1:"),(0,n.kt)("p",null,"Search devices for “aiops-”"),(0,n.kt)("h2",null,"Step 2:"),(0,n.kt)("p",null,"Click on VM Image and go to Password tab"),(0,n.kt)("h2",null,"Step 3:"),(0,n.kt)("p",null,"SSH into each machine using the given password and change it to something more secure."))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return x}});var l=a(7294),n=a(8650),r=a.n(n),i=a(5444),o=a(5426),s=a(4311),c=a(5900),u=a.n(c),m=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return l.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,n=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,s=r.subDirectory,c=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?l.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},l.createElement("div",{className:"bx--col"},l.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4275),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),m=n.replace(c,a);return l.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},l.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},l.createElement("nav",{"aria-label":t},l.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(l.Component),k=g,b=a(2881),E=a(6958),f=a(36),v=function(e){var t=e.date,a=new Date(t);return t?l.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},l.createElement(f.sg,null,l.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},x=function(e){var t=e.pageContext,a=e.children,n=e.location,c=e.Title,u=t.frontmatter,h=void 0===u?{}:u,g=t.relativePagePath,f=t.titleType,x=h.tabs,P=h.title,C=h.theme,S=h.description,w=h.keywords,N=h.date,y=(0,E.Z)().interiorTheme,T=(0,i.useStaticQuery)("2456312558").site.pathPrefix,M=T?n.pathname.replace(T,""):n.pathname,Z=x?M.split("/").filter(Boolean).slice(-1)[0]||r()(x[0],{lower:!0}):"",B=C||y;return l.createElement(s.Z,{tabs:x,homepage:!1,theme:B,pageTitle:P,pageDescription:S,pageKeywords:w,titleType:f},l.createElement(m,{title:c?l.createElement(c,null):P,label:"label",tabs:x,theme:B}),x&&l.createElement(k,{title:P,slug:M,tabs:x,currentTab:Z}),l.createElement(b.Z,{padded:!0},a,l.createElement(d,{relativePagePath:g}),l.createElement(v,{date:N})),l.createElement(p.Z,{pageContext:t,location:n,slug:M,tabs:x,currentTab:Z}),l.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-setup-instructions-setup-mdx-e663ed8d990eb0af945c.js.map