(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{139:function(e,a){},158:function(e,a,t){"use strict";t.r(a);var s=t(1),c=(t(93),t(94),t(95),t(97),t(30)),i=t(9),n=t(0),r=t.n(n),l=t(5),o=t(10),d=t.p+"static/media/akshat.540d6af6.jpg",u=t.p+"static/media/resume.dd6ed1d0.pdf",j=t(21),b=t.n(j),m=function(){var e=Object(n.useState)(d),a=Object(o.a)(e,2),t=(a[0],a[1]),c=Object(n.useState)(l.u),i=Object(o.a)(c,2),r=i[0],j=i[1],m=Object(n.useState)(u),h=Object(o.a)(m,1)[0];Object(n.useEffect)((function(){r&&p()}),[r]);var p=function(e){b.a.get(l.n+l.p+l.o).then((function(e){return t(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return j(!1),console.error(e.message)})).finally((function(){}))};return Object(s.jsx)("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0",children:Object(s.jsx)("div",{className:"container container-fluid p-5",children:Object(s.jsxs)("div",{className:"row",children:[r&&Object(s.jsx)("div",{className:"col-5 d-none d-lg-block align-self-center",children:Object(s.jsx)("img",{className:"border border-secondary rounded-circle",src:d,alt:"profilepicture",width:l.m,height:l.m})}),Object(s.jsxs)("div",{className:"col-lg-".concat(r?"7":"12"),children:[Object(s.jsx)("h1",{className:"display-4 mb-5 text-center",children:l.e}),Object(s.jsx)("p",{className:"lead text-center",children:l.d}),h&&Object(s.jsx)("p",{className:"lead text-center",children:Object(s.jsx)("a",{className:"btn btn-outline-dark btn-lg",href:u,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV",children:"Resume"})})]})]})})})},h=t(17),p=function e(a){var t=this,c=a.title,i=a.image,r=a.description;Object(h.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(Object(s.jsx)("p",{className:"lead",children:e},t.list.length)),t},this.addHeading=function(e){return t.list.push(Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)("h1",{className:"",children:e}),Object(s.jsx)("hr",{})]},t.list.length)),t},this.getBlog=function(){return Object(s.jsx)("div",{className:"container-lg",children:t.list})},this.title=c,this.image=i,this.description=r},x=[],O=new p({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),g=new p({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");x.push(g),x.push(O);var f=x,v=function(e){return Object(s.jsxs)("div",{className:"container-lg mt-5 bg-blue",children:[Object(s.jsx)("h1",{className:"text-center",children:"Blogs"}),f.map((function(e,a){return Object(s.jsx)(N,{title:e.title,description:e.description,index:a},a)}))]})},N=function(e){var a=e.index,t=e.title,i=(e.image,e.description);return Object(s.jsx)("div",{className:"m-5",children:Object(s.jsxs)("div",{className:"",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-4 col-lg-12"}),Object(s.jsx)("div",{className:"col-8 col-lg-12",children:Object(s.jsxs)("div",{className:"",children:[Object(s.jsx)("h1",{className:"",children:t}),Object(s.jsx)("p",{className:"lead",children:i}),Object(s.jsxs)(c.b,{to:"".concat("","blog/").concat(a),children:["Read more..."," "]})]})})]}),Object(s.jsx)("hr",{})]})})},k=function(e){var a=e.match.params.id,t=f[a];return Object(s.jsxs)("div",{className:"container-lg mt-5",children:[t&&Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"display-2 text-center",children:t.title}),Object(s.jsx)("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()]}),!t&&Object(s.jsx)("h1",{className:"display-1 text-center",children:"404 - Page not found"})]})},y=t(31),w=t(25),S=t(27),q=function(e){Object(w.a)(t,e);var a=Object(S.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"contact",className:"jumbotron jumbotron-fluid bg-transparent m-0",children:[Object(s.jsx)("h1",{className:"display-4 mb-4 text-center",children:l.g}),Object(s.jsx)("center",{children:Object(s.jsx)("div",{className:" d-right col-5 p-0 d-lg-block p-0 ml-5 mr-5 mb-0 mt-5",children:Object(s.jsxs)("p",{className:"lead",children:[l.f,Object(s.jsx)("a",{href:"mailto:akshat.jindal.iitkgp@gmail.com",style:{color:"#606060"},children:"here!"})]})})}),Object(s.jsx)("center",{children:Object(s.jsx)("aside",{className:"four columns footer-widgets",children:Object(s.jsxs)("div",{className:"widget widget_contact",children:[Object(s.jsx)("h4",{children:"Address and Phone"}),Object(s.jsxs)("p",{className:"address",children:["Akshat Jindal",Object(s.jsx)("br",{}),"Bangalore, India ",Object(s.jsx)("br",{})]})]})})})]})}}]),t}(r.a.Component),P=t.p+"static/media/deloitte.e17c84e6.png",A=t.p+"static/media/sapient.231f534d.png",C={display:"flex",flexDirection:"row",alignItems:"center"},J=function(){return Object(s.jsx)("div",{id:"experience",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"},children:Object(s.jsx)("div",{className:"container container-fluid",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col d-lg-inline align-self-center",children:[Object(s.jsx)("h1",{className:"display-4 mb-5 text-center",children:"Experience"}),Object(s.jsxs)("div",{className:"row",style:C,children:[Object(s.jsxs)("div",{className:"col text-center",children:[Object(s.jsx)("img",{src:A,alt:"Publicis Sapient logo",width:"320"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"lead text-center",style:{fontSize:"22px"},children:["Software Development Engineer",Object(s.jsx)("br",{}),"June 2019 - Prsent"]})]}),Object(s.jsxs)("div",{className:"col text-center",children:[Object(s.jsx)("img",{src:P,alt:"Deloitte logo",width:"320"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"lead text-center",style:{fontSize:"22px"},children:["Technology Consultant",Object(s.jsx)("br",{}),"May - July 2018"]})]})]})]})})})})},M=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(o.a)(e,1)[0];return Object(s.jsxs)("footer",{style:a,className:"mt-auto py-3 text-center",children:[Object(s.jsx)("i",{className:"fas fa-code"})," with ",Object(s.jsx)("i",{className:"fas fa-heart"})," by"," ",Object(s.jsx)("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/AkshatJindal1","aria-label":"My GitHub",children:"Akshat Jindal"})," ","using ",Object(s.jsx)("i",{className:"fab fa-react"}),Object(s.jsx)("p",{children:Object(s.jsxs)("small",{className:"text-muted",children:[" ","This project is open source. Feel free to use the source code\xa0",Object(s.jsx)("a",{href:"https://github.com/AkshatJindal1/AkshatJindal1.github.io",style:{color:"#707070"},children:"here."})]})})]})},_=t(80),I=t(62),D=t(81),E=t(2),L=t.p+"static/media/social-image.21827524.PNG";function H(){var e=Object(_.a)(["\n\tmax-width: 90%;\n\tborder-radius: 0.4;\n\twidth: 21rem;\n"]);return H=function(){return e},e}Object(E.b)(D.a)(H());var F=function(e){Object(w.a)(t,e);var a=Object(S.a)(t);function t(){return Object(h.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){return Object(s.jsx)("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",children:Object(s.jsx)("div",{className:"container container-fluid",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col d-lg-inline align-self-center",children:[Object(s.jsx)("h1",{className:"display-4 mb-4 text-center",children:l.q.heading}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col d-lg-inline align-self-center",children:Object(s.jsxs)("p",{className:"lead text-left",children:["Throughout my career, I've been extremely grateful to have opportunities to lead my peers and make an impact on the community. In my role as the"," ",Object(s.jsx)("b",{children:"Software Development Engineer"})," at Publicis Sapient , I cultivated a culture of leadeship, collaboration, and team work through leading projects and teams. Prior to that position, I led social service intiatives that contributed providing healthy life lessons to youth community of Yekaterinburg, Russia as part of AIESEC Russia in my position as the"," ",Object(s.jsx)("b",{children:"Exchange Participant"}),". Outside of these roles, I worked with the cultural team of my university to organize the annual social and cultural fest, Spring Fest through my role as a"," ",Object(s.jsx)("b",{children:"Core Organizing Team Head"}),"."]})}),Object(s.jsx)("div",{className:"col d-lg-inline align-self-center",children:Object(s.jsx)(I.a,{children:Object(s.jsx)(I.a.Item,{children:Object(s.jsx)("img",{className:"rounded",src:L,alt:"culture",width:"615",height:"450"})})})})]})]})})})})}}]),t}(r.a.Component),B=t(23),R=t(88),T=t.n(R),z=function(){var e=Object(n.useState)(new Array(l.l.length).fill("socialicons")),a=Object(o.a)(e,2),t=a[0],c=a[1],i=function(e){var a=Object(B.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",c(a)):"leave"===e.event?(a[e.icon.id]="socialicons",c(a)):void 0};return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0",children:[Object(s.jsx)("div",{id:"stars"}),Object(s.jsxs)("div",{className:"container container-fluid text-center ",children:[Object(s.jsx)("h1",{className:"display-1",children:l.a+" "+l.c+" "+l.b}),Object(s.jsxs)(T.a,{className:"lead",children:[" ",l.h]}),Object(s.jsx)("div",{className:"p-5",children:l.l.map((function(e){return Object(s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1]),children:Object(s.jsx)("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return i({icon:e,event:"enter"})},onMouseOut:function(){return i({icon:e,event:"leave"})}})},e.id)}))}),Object(s.jsx)("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me",children:"More about me"})]})]})})},K=function(e){var a=Object(n.useState)(!0),t=Object(o.a)(a,2),i=t[0],r=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<800;e!==i&&r(e)}))}),[i]),Object(s.jsxs)("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(i?"bg-transparent":"bg-gradient"," "),children:[Object(s.jsx)("a",{className:"navbar-brand",href:"/#home",children:"<".concat(l.a," />")}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(s.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[l.t&&Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(c.b,{className:"nav-link lead",to:"/blog",children:"Blog"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link lead",href:"/#aboutme",children:Object(s.jsx)("b",{children:"About"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link lead",href:"/#experience",children:Object(s.jsx)("b",{children:"Experience"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link lead",href:"/#projects",children:Object(s.jsx)("b",{children:"Projects"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link lead",href:"/#skills",children:Object(s.jsx)("b",{children:"Skills"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link lead",href:"/#leadership",children:Object(s.jsx)("b",{children:"Leadership"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link lead",href:"/#contact",children:Object(s.jsx)("b",{children:"Contact"})})})]})})]})},Q=t(12),G=t.n(Q),Y=t(24),V=t(20),U=(t(153),function(e){var a=e.value,t=Object(n.useState)([]),c=Object(o.a)(t,2),i=c[0],r=c[1],l=Object(n.useCallback)((function(e){b.a.get(a).then((function(e){return r(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){l()}),[l]);var d=[],u=0;for(var j in i)d.push(j),u+=i[j];return Object(s.jsxs)("div",{className:"pb-3",children:["Languages:"," ",d.map((function(e){return Object(s.jsxs)("p",{className:"badge badge-light card-link",children:[e,": ",Math.trunc(i[e]/u*1e3)/10," %"]},e)}))]})}),W=function(e){var a=e.value,t=Object(n.useState)("0 mints"),c=Object(o.a)(t,2),i=c[0],r=c[1],l=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),s=(new Date).getTime()-t.getTime(),c=Math.trunc(s/1e3/60/60);if(c<24)return r("".concat(c.toString()," hours ago"));var i=t.getDate(),n=t.getMonth(),l=t.getFullYear();return r("on ".concat(i," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][n]," ").concat(l))}),[a.pushed_at]);Object(n.useEffect)((function(){l()}),[l]);var d=a.name,u=a.description,j=a.svn_url,b=a.stargazers_count,m=a.languages_url;return Object(s.jsx)("div",{className:"col-md-6",children:Object(s.jsx)("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("h5",{className:"card-title",children:[d," "]}),Object(s.jsxs)("p",{className:"card-text",children:[u," "]}),Object(s.jsxs)("a",{href:"".concat(j,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3",children:[Object(s.jsx)("i",{className:"fab fa-github"})," Clone Project"]}),Object(s.jsxs)("a",{href:j,target:" _blank",className:"btn btn-outline-secondary",children:[Object(s.jsx)("i",{className:"fab fa-github"})," Repo"]}),Object(s.jsx)("hr",{}),Object(s.jsx)(U,{value:m}),Object(s.jsxs)("p",{className:"card-text",children:[Object(s.jsxs)("span",{className:"text-dark card-link mr-4",children:[Object(s.jsx)("i",{className:"fab fa-github"})," Stars"," ",Object(s.jsx)("span",{className:"badge badge-dark",children:b})]}),Object(s.jsxs)("small",{className:"text-muted",children:["Updated ",i]})]})]})})})},X=function(){var e="".concat(l.i,"users/").concat(l.k).concat(l.j),a="".concat(l.i,"repos/").concat(l.k),t=Object(n.useState)([]),c=Object(o.a)(t,2),i=c[0],r=c[1],d=Object(n.useCallback)(Object(V.a)(G.a.mark((function t(){var s,c,i,n,o,d;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=[],t.prev=1,t.prev=2,c=Object(Y.a)(l.x),t.prev=4,c.s();case 6:if((i=c.n()).done){t.next=14;break}return n=i.value,t.next=10,b.a.get("".concat(a,"/").concat(n));case 10:o=t.sent,s.push(o.data);case 12:t.next=6;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(4),c.e(t.t0);case 19:return t.prev=19,c.f(),t.finish(19);case 22:t.next=27;break;case 24:t.prev=24,t.t1=t.catch(2),console.error(t.t1.message);case 27:return t.next=29,b.a.get(e);case 29:d=t.sent,s=[].concat(Object(B.a)(s),Object(B.a)(d.data.slice(0,l.s))),r(s),t.next=37;break;case 34:t.prev=34,t.t2=t.catch(1),console.error(t.t2.message);case 37:case"end":return t.stop()}}),t,null,[[1,34],[2,24],[4,16,19,22]])}))),[e,l.s,l.x,a]);return Object(n.useEffect)((function(){d()}),[d]),Object(s.jsx)("div",{id:"projects",className:"jumbotron jumbotron-fluid m-0",children:i.length&&Object(s.jsxs)("div",{className:"container container-fluid p-5",children:[Object(s.jsx)("h1",{className:"display-4 pb-5 mb-4 text-center",children:l.r}),Object(s.jsx)("div",{className:"row mb-1 pb-1",children:i.map((function(e){return Object(s.jsx)(W,{id:e.id,value:e},e.id)}))})]})})},Z=t(161),$=t(162),ee=t(61),ae=t(59),te=t(89);var se=function(e){var a=e.skill,t=e.value,c=e.isScrolled;return Object(s.jsxs)("div",{style:{width:"95%"},children:[Object(s.jsx)("p",{className:"lead mb-1 mt-2",children:a}),Object(s.jsx)(te.a,{className:c?" progress-bar-animation":"progress",now:t})]})};function ce(e){var a=e.skills,t=e.isScrolled;return Object(s.jsx)(s.Fragment,{children:a.map((function(e,a){return Object(s.jsx)(se,{skill:e.name,value:e.value,isScrolled:t},"".concat(e,"-").concat(a))}))})}var ie=function(e){var a=e.skills,t=e.isScrolled;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(ae.a,{xs:12,md:6,children:Object(s.jsx)(ce,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})}),Object(s.jsx)(ae.a,{xs:12,md:6,children:Object(s.jsx)(ce,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})})]})},ne=t(60),re=t(90);var le=function(){var e=r.a.useRef(),a=r.a.useState(!1),t=Object(o.a)(a,2),c=t[0];return t[1],Object(s.jsx)(Z.a,{ref:e,fluid:!0,className:"bg-white m-0",id:"skills",children:Object(s.jsxs)($.a,{className:"p-5 ",children:[Object(s.jsx)("h2",{ref:e,className:"display-4 pb-5 text-center",children:l.w.heading}),Object(s.jsxs)(re.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs",justify:!0,children:[Object(s.jsx)(ne.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills",children:Object(s.jsx)(ee.a,{className:"pt-3 px-1",children:Object(s.jsx)(ie,{skills:l.w.hardSkills,isScrolled:c})})}),Object(s.jsx)(ne.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills",children:Object(s.jsx)(ee.a,{className:"pt-3 px-1",children:Object(s.jsx)(ie,{skills:l.w.softSkills,isScrolled:c})})})]})]})})},oe=function(){return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)(z,{}),Object(s.jsx)(m,{}),Object(s.jsx)(J,{}),Object(s.jsx)(X,{}),Object(s.jsx)(le,{}),Object(s.jsx)(F,{}),Object(s.jsx)(q,{})]})},de=function(){return Object(s.jsxs)(c.a,{basename:"/",children:[l.v&&Object(s.jsx)(K,{}),Object(s.jsx)(i.a,{path:"/",exact:!0,component:oe}),l.t&&Object(s.jsx)(i.a,{path:"/blog",exact:!0,component:v}),l.t&&Object(s.jsx)(i.a,{path:"/blog/:id",component:k}),Object(s.jsx)(M,{})]})},ue=t(33);t.n(ue).a.render(Object(s.jsx)(de,{}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"a":"Akshat","c":"","b":"Jindal","h":" | Engineer | Programmer | Maker | Designer | Developer ","l":[{"id":0,"image":"fa-github","url":"https://github.com/AkshatJindal1","style":"socialicons"},{"id":1,"image":"fa-instagram","url":"https://www.instagram.com/_trippy_lens/","style":"socialicons"},{"id":2,"image":"fa-linkedin","url":"https://www.  linkedin.com/in/akshat-jindal07/","style":"socialicons"}],"e":"About Me","u":true,"n":"https://www.instagram.com/","p":"_trippy_lens","o":"/?__a=1","m":375,"d":"Hello! My name is Akshat Jindal, and I am a graduate from Indian Institute of Technology, Kharagpur, India. Currently I am working as a full stack developer at Publicis Sapient. I\'m most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering!","r":"Recent Projects","i":"https://api.github.com/","k":"AkshatJindal1","j":"/repos?sort=updated&direction=desc","s":0,"x":["AkshatJindal1.github.io","car-damage-detector","NLP-with-tensorflow","JwtAuthenticationDemo"],"g":"Contact Me","f":"Have a question? Need a tip? Feel free to reach out to me or send an email ","v":true,"t":true,"w":{"show":true,"heading":"Skills","hardSkills":[{"name":"Java","value":90},{"name":"Python","value":75},{"name":"Data Structures","value":85},{"name":"C/C++","value":65},{"name":"JavaScript","value":80},{"name":"Springboot","value":85},{"name":"React","value":65},{"name":"Scala","value":60},{"name":"MongoDB","value":70},{"name":"AWS","value":70}],"softSkills":[{"name":"Goal-Oriented","value":80},{"name":"Collaboration","value":90},{"name":"Positivity","value":75},{"name":"Adaptability","value":85},{"name":"Problem Solving","value":75},{"name":"Empathy","value":90},{"name":"Organization","value":70},{"name":"Creativity","value":90}]},"q":{"heading":"Leadership"}}')},93:function(e,a,t){},97:function(e,a,t){}},[[158,1,2]]]);
//# sourceMappingURL=main.51428a7e.chunk.js.map