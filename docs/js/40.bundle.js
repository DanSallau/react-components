(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1109:function(e,t,n){"use strict";n.r(t);var a=n(36),s=n(0),l=n(792),r=function(e){function t(t){var n=e.call(this,t)||this;return n.state={releases:[]},n}return a.b(t,e),t.prototype.componentDidMount=function(){this.setState({releases:l})},t.prototype.render=function(){return s.createElement("div",{className:"releases-page"},s.createElement("h2",{className:"title"},"Release notes"),s.createElement("ul",{className:"note-holder"},this.state.releases.map(function(e,t){return s.createElement("li",{className:"item",key:t},s.createElement("div",{className:"name "+(e.important?"text-danger":"")},e.name," ",s.createElement("span",null,e.version)),s.createElement("div",{className:"date"},e.date),s.createElement("div",{className:"desc"},e.description),e.notes&&e.notes.length>0&&s.createElement("ul",{className:"notes"},e.notes.map(function(e,t){return s.createElement("li",{key:t,className:"noteItems"},s.createElement("div",{className:"note-title"},e.title),s.createElement("div",{className:"note-desc"},e.note))})))})))},t}(s.Component);t.default=r},792:function(e){e.exports=[{version:"0.0.1",name:"Beta",date:"01/03/2019",description:"Initial Release."}]}}]);