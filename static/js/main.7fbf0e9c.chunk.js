(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e){e.exports=[{id:1,name:"David Price",image:"http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28958.png&w=350&h=254",clicked:!1,status:0},{id:2,name:"Steve Pearce",image:"http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28886.png&w=350&h=254",clicked:!1,status:0},{id:3,name:"Mookie Betts",image:"http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33039.png&w=350&h=254",clicked:!1,status:0},{id:4,name:"Joe Kelly",image:"http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31992.png&w=350&h=254",clicked:!1,status:0},{id:5,name:"Chris Sale",image:"http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30948.png&w=350&h=254",clicked:!1,status:0},{id:6,name:"Andrew Benintendi",image:"http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/34986.png&w=350&h=254",clicked:!1,status:0},{id:7,name:"J.D. Martinez",image:"http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31065.png&w=350&h=254",clicked:!1,status:0},{id:8,name:"Craig Kimbrel",image:"http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30653.png&w=350&h=254",clicked:!1,status:0},{id:9,name:"Nathan Eovaldi",image:"http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31174.png&w=350&h=254",clicked:!1,status:0},{id:10,name:"Rafael Devers",image:"http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33859.png&w=350&h=254",clicked:!1,status:0},{id:11,name:"Jackie Bradley Jr.",image:"http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32362.png&w=350&h=254",clicked:!1,status:0},{id:12,name:"Xander Bogaerts",image:"http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31606.png&w=350&h=254",clicked:!1,status:0}]},41:function(e,t,n){e.exports=n(90)},46:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),i=n.n(c),o=n(15),s=n(16),l=n(18),m=n(17),d=n(19),u=(n(46),n(48),function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-danger top-bar fixed",id:"navbar"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Clicky Game")),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,"".concat(e.navCenter||"Click an image to begin!!"))),r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,r.a.createElement("span",null,"Score: ","".concat(e.currentScore||"0")," \xa0"),r.a.createElement("span",null,"| \xa0  Top Score: ","".concat(e.topScore||"0"))))))}),h=(n(50),function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid backgroundForJum"},r.a.createElement("div",{className:"container text text-center"},r.a.createElement("h1",{className:"display-3"},"Your 2018 World Series Champions"),r.a.createElement("p",{className:"lead"},"The 2018 Red Sox team had some memorable faces, can you remember them all? Click on each image, but only once!")))}),p=(n(52),{width:"100%",height:"100%",backgroundColor:"green"}),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={test:1},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card text-center mag",key:this.props.id},r.a.createElement("div",{className:"card-body",style:p},r.a.createElement("img",{className:"clickImage",alt:this.props.name,src:this.props.image,key:this.props.id,onClick:function(){return e.props.handleClickevent(e.props.id)}})))}}]),t}(r.a.Component),f=n(36),v=n(92),b=n(93),k=n(94);function w(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}var y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={friends:f,navCenter:"",currentScore:0,topScore:0},n.gameOver=function(){var e=n.state.friends.map(function(t,n){return t.clicked=!1,e});return n.setState({friends:e,currentScore:0,navCenter:"Click an Image to begin!!"}),alert("you have already clicked!! Game Over!!!"),!0},n.addSomeScore=function(){return n.state.currentScore===n.state.topScore?n.setState({currentScore:n.state.currentScore+1,topScore:n.state.topScore+1}):n.state.currentScore<n.state.topScore&&n.setState({currentScore:n.state.currentScore+1}),!0},n.handleClickevent=function(e){console.log("what is this ID for:",e);var t=n.state.friends.map(function(t,a){return t.id===e&&(!0===t.clicked?n.gameOver():(t.clicked=!0,n.addSomeScore())),t});n.setState({friends:w(t),navCenter:"You guessed correctly!!"}),console.log("the new array: ",n.state.friends)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({friends:w(this.state.friends)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u,{navCenter:this.state.navCenter,currentScore:this.state.currentScore,topScore:this.state.topScore}),r.a.createElement(h,null),r.a.createElement(v.a,null,r.a.createElement(b.a,{className:"show-grid"},this.state.friends.map(function(t,n){return r.a.createElement(k.a,{xs:6,md:3,key:n},r.a.createElement(g,{name:t.name,image:t.image,key:n,id:t.id,handleClickevent:e.handleClickevent}))}))))}}]),t}(a.Component),S=(n(88),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function E(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ClickyGame",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ClickyGame","/service-worker.js");S?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):E(e)})}}()}},[[41,2,1]]]);
//# sourceMappingURL=main.7fbf0e9c.chunk.js.map