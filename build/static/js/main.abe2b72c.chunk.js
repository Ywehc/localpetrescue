(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){},function(e,a,t){},,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(10),r=t.n(i),s=(t(17),t(1)),o=t(2),c=t(5),m=t(3),u=t(4),d=(t(7),t(18),function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,l.a.createElement("span",{className:"header-pet"},"Pet"),l.a.createElement("span",{className:"highlight"},"Rescue")),l.a.createElement("p",{className:"subheader-bestfriend"},"For you, a best friend."),l.a.createElement("p",{className:"subheader-home"}," For them, a home.")),l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"https://lh3.googleusercontent.com/SmqnK4xRdiqTLpQ4oSSHNVKYL_a6zVUFhEtyGjo6-wA6oXXDWCCKa4Po8UUZFzJi2mxF42IpW4lh0eiUa-HX0KD3qP5WWCueBS3m9B_U-a_u36JOnnvEoxm2BhssSoPFn_HnuP2zJKsT6SAzmfXfMhpKVeOJLZvO-VkA_ux_0BNBl0S6f9L1HWu17eqp_ywpVaFFA7wKXmZXxtjht8PbcatZMp3s8RveCtr0w5THRJxXZzbgwpo3cff8VFO7YeLU_1o-QSjND12mG0WoA5-7MKnqImINVvfxujq7eBMV7tGlU_oRtjs6VBJ6S8-7NNEResspfYXJYyfN8nkhJ398b22XvRzZ-makUBiqSgk_mYpzbuW2_4f6qoDK82yjd9azF5DepylPJbG8HKP_zUgznEKg7PoQUCBxKKODHaLwUxX6Htrm7MHuzKFFM5w9LrTqh6enMVAtX8IAwXmlW9F--yr02b678RsgChJPC8bCd_2JFUKiPgi73sezvpxdXD-nC5fIzPjkCa6O42XjlD_BXpYyM1Z-32LP-sl3T2ovzSWJM4R7LU7qdLyUS-uO3-7DlxTj68EYYcdS7Pk715GYCmRVxn7x1kizg9YkMlvPptKcySdJxlwgOhYu6AuOinoyFURJpyZ-Bwrsa7mtvQC7fs4kO1KFcdU=w955-h843-no",alt:""})))}}]),a}(n.Component)),h=(t(8),t(19),function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(c.a)(this,Object(m.a)(a).call(this))).state={animals:[]},e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://test1-api.rescuegroups.org/v5/public/animals/search/available/dogs?include=breeds,locations,pictures,species&fields[animals]=name,sex&fields[orgs]=name,email,url,facebookUrl,adoptionUrl&fields[breeds]=name&fields[fosters]=name,email&fields[locations]=name&fields[pictures]=large,small&fields[species]=singular&fields[videourls]=url,urlThumbnail&options=meta&limit=10",{method:"GET",headers:{Authorization:"KTVAgzJR","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(a){return e.setState({animals:a.data})})}},{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",{className:"results-container"},l.a.createElement("div",{className:"pet",id:"pet-heading"},l.a.createElement("div",{className:"animal-name"},l.a.createElement("h4",null,"Name")),l.a.createElement("div",{className:"animal-breed"},l.a.createElement("h4",null,"Breed")),l.a.createElement("div",{className:"animal-location"},l.a.createElement("h4",null,"Location")),l.a.createElement("div",{className:"animal-updated"},l.a.createElement("h4",null,"Up."))),this.state.animals.map(function(e){return l.a.createElement("div",{className:"pet",key:e.id},l.a.createElement("div",{className:"animal-property animal-name"},e.attributes.name.toString()),l.a.createElement("div",{className:"animal-property animal-breed"},e.meta.breedString.toString()),l.a.createElement("div",{className:"animal-property animal-location"},e.relationships.locations.data.toString()),l.a.createElement("div",{className:"animal-property animal-updated"},e.meta.updatedDate.substring(0,4)))}))}}]),a}(n.Component)),p=t(6),b=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={value:""},t.handleChange=t.handleChange.bind(Object(p.a)(Object(p.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("Postal code submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,l.a.createElement("input",{className:"postalInput",type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"Enter your Postal/Zip Code"})),l.a.createElement("br",null),l.a.createElement("input",{className:"submitButton",type:"submit",value:"View dogs near me!"}))}}]),a}(n.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"subheading"},l.a.createElement("h2",null,"Thinking about giving a dog in your area a loving home?"),l.a.createElement("h2",null,"Start by reviewing ",l.a.createElement("span",{className:"highlight"},"this checklist")," to make sure you are ready!")),l.a.createElement("div",{className:"main"},l.a.createElement("h3",null,"Comfortable that you can be a responsible hero to an animal in need? Enter your Postal or Zip code to see dogs near you that need a friend and home."),l.a.createElement(b,null)),l.a.createElement(h,null))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(f,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.abe2b72c.chunk.js.map