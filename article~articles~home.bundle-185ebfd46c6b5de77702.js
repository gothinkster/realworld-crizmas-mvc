(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{25:function(t,e,n){"use strict";n.d(e,"f",(function(){return c})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return u})),n.d(e,"g",(function(){return m})),n.d(e,"e",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"m",(function(){return b})),n.d(e,"l",(function(){return h})),n.d(e,"d",(function(){return p})),n.d(e,"a",(function(){return g})),n.d(e,"j",(function(){return v})),n.d(e,"b",(function(){return j}));var a=n(5),i=n(6);const o=t=>{t.createdAt=new Date(t.createdAt),t.updatedAt=new Date(t.updatedAt)},r=t=>(t.articles.forEach(o),t),c=({offset:t,limit:e})=>Object(a.b)("articles",{offset:t,limit:e}).then(i.b).then(r),s=({offset:t,limit:e})=>Object(a.b)("articles/feed",{offset:t,limit:e}).then(i.b).then(r),u=({tag:t,offset:e,limit:n})=>Object(a.b)("articles",{tag:t,offset:e,limit:n}).then(i.b).then(r),m=({author:t,limit:e,offset:n})=>Object(a.b)("articles",{author:t,offset:n,limit:e}).then(i.b).then(r),l=({favorited:t,limit:e,offset:n})=>Object(a.b)("articles",{favorited:t,offset:n,limit:e}).then(i.b).then(r),d=({slug:t})=>Object(a.b)("articles/"+encodeURIComponent(t)).then(i.b).then(({article:t})=>(o(t),{article:t})),f=({title:t,description:e,body:n,tagList:o})=>Object(a.c)("articles",{article:{title:t,description:e,body:n,tagList:o}}).then(i.b,i.a),b=({slug:t,title:e,description:n,body:o,tagList:r})=>Object(a.d)("articles/"+encodeURIComponent(t),{article:{title:e,description:n,body:o,tagList:r}}).then(i.b,i.a),h=({slug:t,isFavorite:e})=>(e?a.c:a.a)(`articles/${t}/favorite`).then(i.b),p=({slug:t})=>Object(a.b)(`articles/${encodeURIComponent(t)}/comments`).then(i.b).then(({comments:t})=>(t.forEach(o),{comments:t})),g=({slug:t})=>Object(a.a)("articles/"+encodeURIComponent(t)),v=({slug:t,comment:e})=>Object(a.c)(`articles/${encodeURIComponent(t)}/comments`,{comment:{body:e}}).then(i.b).then(({comment:t})=>(o(t),{comment:t})),j=({slug:t,commentId:e})=>Object(a.a)(`articles/${encodeURIComponent(t)}/comments/${e}`)},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(2);function i(t){const e={title:t.title,author:new a.a(t.author),description:t.description,body:t.body,slug:t.slug,createdAt:t.createdAt,updatedAt:t.updatedAt,favorited:t.favorited,favoritesCount:t.favoritesCount,tagList:t.tagList,comments:null,setFavorite:({favorited:t,favoritesCount:n})=>{e.favorited=t,e.favoritesCount=n},setComments:t=>{e.comments=t},addComment:t=>{e.comments.unshift(t)},deleteComment:t=>{const n=e.comments.findIndex(e=>e.id===t);-1!==n&&e.comments.splice(n,1)}};return e}},29:function(t,e,n){"use strict";var a=n(0),i=n.n(a),o=n(3),r=n.n(o),c=n(4),s=n(33);const u=({article:t})=>i.a.createElement("span",null,i.a.createElement(c.a,{to:"/@"+encodeURIComponent(t.author.username)},i.a.createElement("img",{src:t.author.image})," "),i.a.createElement("div",{className:"info"},i.a.createElement(c.a,{to:"/@"+encodeURIComponent(t.author.username),className:"author"},t.author.username),i.a.createElement("span",{className:"date"},Object(s.a)(t.createdAt))));u.propTypes={article:r.a.object.isRequired},e.a=u},30:function(t,e,n){"use strict";var a=n(0),i=n.n(a),o=n(3);const r=({article:t})=>!!t.tagList.length&&i.a.createElement("ul",{className:"tag-list"},t.tagList.map((t,e)=>i.a.createElement("li",{key:e,className:"tag-default tag-pill tag-outline"},t)));r.propTypes={article:n.n(o).a.object.isRequired},e.a=r},32:function(t,e,n){"use strict";var a=n(22),i=n(2),o=n(25),r=n(10);e.a=Object(a.a)({setFavorite:t=>i.b.isAuthenticated?o.l({slug:t.slug,isFavorite:!t.favorited}).then(e=>{t.setFavorite(e.article)}):(r.a.transitionTo("/register"),Promise.reject(new Error("The user is not authenticated")))})},33:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const a=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}),i=t=>a.format(t)}}]);
//# sourceMappingURL=article~articles~home.bundle-185ebfd46c6b5de77702.js.map