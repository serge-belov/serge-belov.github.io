"use strict";!function(r){var o={};function n(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=r,n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,r){t.a=[{code:"w",name:"White",color:"#FFF"},{code:"r",name:"Red",color:"#E00"},{code:"b",name:"Blue",color:"#0000F2"},{code:"y",name:"Yellow",color:"#FEFE00"},{code:"o",name:"Orange",color:"#FFA100"},{code:"g",name:"Green",color:"#00D800"}];t.b=[[1,2,4,5],[5,3,2,0],[0,1,3,4],[5,4,2,1],[0,2,3,5],[4,3,1,0]]},function(e,t,r){e.exports=r(2)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),s="#999",d="#333",p=void 0,o=!1;function n(){var e=Math.floor(6*Math.random()),t=Math.floor(4*Math.random()),r=Math.floor(2*Math.random()),o=i.a[e].color,n=i.b[e],a=n[t],l=n[(t+1)%4];p=i.a[1===r?a:l];var u=1===r?d:i.a[a].color,c=0===r?d:i.a[l].color;$(".top").attr("fill",s),$(".front").attr("fill",s),$(".right").attr("fill",s),$("#top_center").attr("fill",o),$("#front_bottom_edge").attr("fill",u),$("#right_bottom_edge").attr("fill",c),$("#answer").focus()}function a(){($("input[type=submit]").prop("disabled",!0),o=!o,$("#answer").prop("readonly",o),$("#result").prop("hidden",!o),$("input[type=submit]").val(o?"New":"Check"),o)?($("#answer").val().toLowerCase().trim()===p.code?$("#result").removeClass("alert-danger").addClass("alert-success").text("Correct!"):$("#result").addClass("alert-danger").removeClass("alert-success").text("Correct answer: "+p.code+" ("+p.name+")"),$("input[type=submit]").focus(),$("input[type=submit]").prop("disabled",!1)):($("#answer").val(""),n(),$("input[type=submit]").prop("disabled",!0));return!1}function l(){$("input[type=submit]").prop("disabled",0===$("#answer").val().length)}$(document).ready(function(){$("#mainForm").submit(a),$("#answer").keyup(l),n()})}]);