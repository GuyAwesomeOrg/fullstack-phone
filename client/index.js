function h(a){return"string"==typeof a}function l(a,b){function c(){}c.prototype=b.prototype;a.Fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ma=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function n(a,b){null!=a&&this.append.apply(this,arguments)}n.prototype.g="";n.prototype.set=function(a){this.g=""+a};n.prototype.append=function(a,b,c){this.g+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.g+=arguments[d];return this};n.prototype.clear=function(){this.g=""};n.prototype.toString=function(){return this.g};var p=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(h(a))return h(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},aa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=h(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var k=f[g];b.call(void 0,k,g,a)&&(d[e++]=k)}return d};
function ba(a,b){a.sort(b||ca)}function ca(a,b){return a>b?1:a<b?-1:0};function da(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function ea(a,b){this.o=a;this.va=b.name;this.la=!!b.ja;this.w=b.a;this.wa=b.type;this.qa=!1;switch(this.w){case fa:case ha:case ia:case ja:case ka:case la:case ma:this.qa=!0}this.ga=b.defaultValue}var ma=1,la=2,fa=3,ha=4,ia=6,ja=16,ka=18;ea.prototype.getName=function(){return this.va};function na(a,b,c){this.Ca=a;this.va=b.name||null;this.v={};for(a=0;a<c.length;a++)b=c[a],this.v[b.o]=b}na.prototype.getName=function(){return this.va};function oa(a){a=da(a.v);ba(a,function(a,c){return a.o-c.o});return a};function q(){this.j={};this.v=this.f().v;this.h=this.ua=null}q.prototype.has=function(a){return r(this,a.o)};q.prototype.get=function(a,b){return t(this,a.o,b)};q.prototype.set=function(a,b){u(this,a.o,b)};q.prototype.add=function(a,b){pa(this,a.o,b)};q.prototype.clear=function(a){a=a.o;delete this.j[a];this.h&&delete this.h[a]};
function qa(a,b){for(var c=oa(a.f()),d=0;d<c.length;d++){var e=c[d],f=e.o;if(r(b,f)){a.h&&delete a.h[e.o];var g=11==e.w||10==e.w;if(e.la){e=v(b,f);for(var k=0;k<e.length;k++)pa(a,f,g?e[k].clone():e[k])}else e=w(b,f),g?(g=w(a,f))?qa(g,e):u(a,f,e.clone()):u(a,f,e)}}}q.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.j={},a.h&&(a.h={}),qa(a,this));return a};function r(a,b){return null!=a.j[b]}
function w(a,b){var c=a.j[b];if(null==c)return null;if(a.ua){if(!(b in a.h)){var d=a.ua,e=a.v[b];if(null!=c)if(e.la){for(var f=[],g=0;g<c.length;g++)f[g]=d.ka(e,c[g]);c=f}else c=d.ka(e,c);return a.h[b]=c}return a.h[b]}return c}function t(a,b,c){var d=w(a,b);return a.v[b].la?d[c||0]:d}function x(a,b){if(r(a,b))var c=t(a,b,void 0);else a:{c=a.v[b];if(void 0===c.ga){var d=c.wa;if(d===Boolean)c.ga=!1;else if(d===Number)c.ga=0;else if(d===String)c.ga=c.qa?"0":"";else{c=new d;break a}}c=c.ga}return c}
function v(a,b){return w(a,b)||[]}function z(a,b){return a.v[b].la?r(a,b)?a.j[b].length:0:r(a,b)?1:0}function u(a,b,c){a.j[b]=c;a.h&&(a.h[b]=c)}function pa(a,b,c){a.j[b]||(a.j[b]=[]);a.j[b].push(c);a.h&&delete a.h[b]}function A(a,b){var c=[],d=b[0],e;for(e in b)0!=e&&c.push(new ea(e,b[e]));return new na(a,d,c)};function B(){}B.prototype.ha=function(a){new a.Ca;throw Error("Unimplemented");};B.prototype.ka=function(a,b){if(11==a.w||10==a.w)return b instanceof q?b:this.ha(a.wa.prototype.f(),b);if(14==a.w){if(h(b)&&ra.test(b)){var c=Number(b);if(0<c)return c}return b}if(!a.qa)return b;c=a.wa;if(c===String){if("number"==typeof b)return String(b)}else if(c===Number&&h(b)&&("Infinity"===b||"-Infinity"===b||"NaN"===b||ra.test(b)))return Number(b);return b};var ra=/^-?[0-9]+$/;function sa(){}l(sa,B);sa.prototype.ha=function(a,b){var c=new a.Ca;c.ua=this;c.j=b;c.h={};return c};function C(){}l(C,sa);C.prototype.Ga=!1;C.prototype.ka=function(a,b){return 8==a.w?!!b:B.prototype.ka.apply(this,arguments)};C.prototype.ha=function(a,b){var c=b;if(this.Ga){c=[];for(var d in b)c[parseInt(d,10)+1]=b[d]}return C.Fa.ha.call(this,a,c)};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function D(){q.call(this)}l(D,q);var ta=null;function E(){q.call(this)}l(E,q);var ua=null;E.prototype.Aa=function(){return t(this,6)};function F(){q.call(this)}l(F,q);var va=null;F.prototype.za=function(){return t(this,10)};F.prototype.aa=function(){return x(this,10)};F.prototype.da=function(a){u(this,10,a)};
D.prototype.f=function(){var a=ta;a||(ta=a=A(D,{0:{name:"NumberFormat",ra:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,a:9,type:String},2:{name:"format",required:!0,a:9,type:String},3:{name:"leading_digits_pattern",ja:!0,a:9,type:String},4:{name:"national_prefix_formatting_rule",a:9,type:String},6:{name:"national_prefix_optional_when_formatting",a:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",a:9,type:String}}));return a};D.f=D.prototype.f;
E.prototype.f=function(){var a=ua;a||(ua=a=A(E,{0:{name:"PhoneNumberDesc",ra:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",a:9,type:String},9:{name:"possible_length",ja:!0,a:5,type:Number},10:{name:"possible_length_local_only",ja:!0,a:5,type:Number},6:{name:"example_number",a:9,type:String}}));return a};E.f=E.prototype.f;
F.prototype.f=function(){var a=va;a||(va=a=A(F,{0:{name:"PhoneMetadata",ra:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",a:11,type:E},2:{name:"fixed_line",a:11,type:E},3:{name:"mobile",a:11,type:E},4:{name:"toll_free",a:11,type:E},5:{name:"premium_rate",a:11,type:E},6:{name:"shared_cost",a:11,type:E},7:{name:"personal_number",a:11,type:E},8:{name:"voip",a:11,type:E},21:{name:"pager",a:11,type:E},25:{name:"uan",a:11,type:E},27:{name:"emergency",a:11,type:E},28:{name:"voicemail",a:11,type:E},
29:{name:"short_code",a:11,type:E},30:{name:"standard_rate",a:11,type:E},31:{name:"carrier_specific",a:11,type:E},33:{name:"sms_services",a:11,type:E},24:{name:"no_international_dialling",a:11,type:E},9:{name:"id",required:!0,a:9,type:String},10:{name:"country_code",a:5,type:Number},11:{name:"international_prefix",a:9,type:String},17:{name:"preferred_international_prefix",a:9,type:String},12:{name:"national_prefix",a:9,type:String},13:{name:"preferred_extn_prefix",a:9,type:String},15:{name:"national_prefix_for_parsing",
a:9,type:String},16:{name:"national_prefix_transform_rule",a:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",a:8,defaultValue:!1,type:Boolean},19:{name:"number_format",ja:!0,a:11,type:D},20:{name:"intl_number_format",ja:!0,a:11,type:D},22:{name:"main_country_for_code",a:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",a:9,type:String},26:{name:"leading_zero_possible",a:8,defaultValue:!1,type:Boolean}}));return a};F.f=F.prototype.f;function G(){q.call(this)}l(G,q);var wa=null;G.prototype.za=function(){return t(this,1)};G.prototype.aa=function(){return x(this,1)};G.prototype.da=function(a){u(this,1,a)};G.prototype.getExtension=function(){return t(this,3)};var xa={La:0,Ka:1,Ja:5,Ia:10,Ha:20};
G.prototype.f=function(){var a=wa;a||(wa=a=A(G,{0:{name:"PhoneNumber",ra:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,a:5,type:Number},2:{name:"national_number",required:!0,a:4,type:Number},3:{name:"extension",a:9,type:String},4:{name:"italian_leading_zero",a:8,type:Boolean},8:{name:"number_of_leading_zeros",a:5,defaultValue:1,type:Number},5:{name:"raw_input",a:9,type:String},6:{name:"country_code_source",a:14,defaultValue:0,type:xa},7:{name:"preferred_domestic_carrier_code",
a:9,type:String}}));return a};G.ctor=G;G.ctor.f=G.prototype.f;var H,I;function J(a){H=a.countryCodeToRegionCodeMap;I=a.countryToMetadata};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function K(){this.Da={}}K.ta=void 0;K.Ba=function(){return K.ta?K.ta:K.ta=new K};
var ya={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},za={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",
Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},Aa=RegExp("[+\uff0b]+"),L=RegExp("^[+\uff0b]+"),Ba=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),Ca=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),Da=/[\\\/] *x/,Ea=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),Fa=/(?:.*?[A-Za-z]){3}.*/,Ga=RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$",
"i"),Ha=RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$",
"i"),Ia=/(\$\d)/,Ja=/^\(?\$1\)?$/;function Ka(a){var b=a.search(Ca);0<=b?(a=a.substring(b),a=a.replace(Ea,""),b=a.search(Da),0<=b&&(a=a.substring(0,b))):a="";return a}function La(a){return 2>a.length?!1:M(Ha,a)}function Ma(a){return M(Fa,a)?Na(a,za):Na(a,ya)}function Oa(a){var b=Ma(a.toString());a.clear();a.append(b)}function Pa(){return aa(Object.keys(I),function(a){return isNaN(a)})}function Qa(a){return null!=a&&(1!=z(a,9)||-1!=v(a,9)[0])}
function Na(a,b){for(var c=new n,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.append(d);return c.toString()}function Ra(a){return 0==a.length||Ja.test(a)}function N(a){return null!=a&&isNaN(a)&&a.toUpperCase()in I}
K.prototype.format=function(a,b){if(0==t(a,2)&&r(a,5)){var c=x(a,5);if(0<c.length)return c}c=a.aa();var d=Sa(a);if(0==b)return Ta(c,0,d,"");if(!(c in H))return d;var e=O(this,c,P(c));var f=r(a,3)&&0!=a.getExtension().length?3==b?";ext="+a.getExtension():r(e,13)?t(e,13)+x(a,3):" ext. "+x(a,3):"";a:{e=0==v(e,20).length||2==b?v(e,19):v(e,20);for(var g,k=e.length,m=0;m<k;++m){g=e[m];var y=z(g,3);if(0==y||0==d.search(t(g,3,y-1)))if(y=new RegExp(t(g,1)),M(y,d)){e=g;break a}}e=null}null!=e&&(k=e,e=x(k,2),
g=new RegExp(t(k,1)),x(k,5),k=x(k,4),d=2==b&&null!=k&&0<k.length?d.replace(g,e.replace(Ia,k)):d.replace(g,e),3==b&&(d=d.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),d=d.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+","g"),"-")));return Ta(c,b,d,f)};
function O(a,b,c){return"001"==c?Q(a,""+b):Q(a,c)}function Sa(a){if(!r(a,2))return"";var b=""+t(a,2);return r(a,4)&&t(a,4)&&0<x(a,8)?Array(x(a,8)+1).join("0")+b:b}function Ta(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}K.prototype.Aa=function(){return Ua(this,void 0,0)};function Ua(a,b,c){if(!N(b))return null;c=R(Q(a,b),c);try{if(r(c,6))return a.parse(c.Aa(),b)}catch(d){}return null}
function R(a,b){switch(b){case 4:return t(a,5);case 3:return t(a,4);case 1:return t(a,3);case 0:case 2:return t(a,2);case 5:return t(a,6);case 6:return t(a,8);case 7:return t(a,7);case 8:return t(a,21);case 9:return t(a,25);case 10:return t(a,28);default:return t(a,1)}}function Q(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.Da[b];if(null==c){c=I[b];if(null==c)return null;c=(new C).ha(F.f(),c);a.Da[b]=c}return c}
function S(a,b){var c=a.length;return 0<z(b,9)&&-1==p(v(b,9),c)?!1:M(x(b,2),a)}function P(a){a=H[a];return null==a?"ZZ":a[0]}function Va(a,b){var c=Q(a,b);if(null==c)throw Error("Invalid region code: "+b);return c.aa()}
function T(a,b,c,d){var e=R(c,d),f=0==z(e,9)?v(t(c,1),9):v(e,9);e=v(e,10);if(2==d)if(Qa(R(c,0)))a=R(c,1),Qa(a)&&(f=f.concat(0==z(a,9)?v(t(c,1),9):v(a,9)),ba(f),0==e.length?e=v(a,10):(e=e.concat(v(a,10)),ba(e)));else return T(a,b,c,1);if(-1==f[0])return 5;b=b.length;if(-1<p(e,b))return 4;c=f[0];return c==b?0:c>b?2:f[f.length-1]<b?3:-1<p(f,b,1)?0:5}
function Wa(a,b){var c=a.toString();if(0==c.length||"0"==c.charAt(0))return 0;for(var d,e=c.length,f=1;3>=f&&f<=e;++f)if(d=parseInt(c.substring(0,f),10),d in H)return b.append(c.substring(f)),d;return 0}
function Xa(a,b,c,d,e){if(0==b.length)return 0;b=new n(b);var f;null!=c&&(f=t(c,11));null==f&&(f="NonMatch");var g=b.toString();if(0==g.length)f=20;else if(L.test(g))g=g.replace(L,""),b.clear(),b.append(Ma(g)),f=1;else{g=new RegExp(f);Oa(b);f=b.toString();if(0==f.search(g)){g=f.match(g)[0].length;var k=f.substring(g).match(Ba);k&&null!=k[1]&&0<k[1].length&&"0"==Na(k[1],ya)?f=!1:(b.clear(),b.append(f.substring(g)),f=!0)}else f=!1;f=f?5:20}if(20!=f){if(2>=b.g.length)throw Error("Phone number too short after IDD");
a=Wa(b,d);if(0!=a)return e.da(a),a;throw Error("Invalid country calling code");}if(null!=c&&(f=c.aa(),g=""+f,k=b.toString(),0==k.lastIndexOf(g,0)&&(g=new n(k.substring(g.length)),k=t(c,1),k=new RegExp(x(k,2)),Ya(g,c,null),g=g.toString(),!M(k,b.toString())&&M(k,g)||3==T(a,b.toString(),c,-1))))return d.append(g),e.da(f),f;e.da(0);return 0}
function Ya(a,b,c){var d=a.toString(),e=d.length,f=t(b,15);if(0!=e&&null!=f&&0!=f.length){var g=new RegExp("^(?:"+f+")");if(e=g.exec(d)){f=new RegExp(x(t(b,1),2));var k=M(f,d),m=e.length-1;b=t(b,16);if(null==b||0==b.length||null==e[m]||0==e[m].length){if(!k||M(f,d.substring(e[0].length)))null!=c&&0<m&&null!=e[m]&&c.append(e[1]),a.set(d.substring(e[0].length))}else if(d=d.replace(g,b),!k||M(f,d))null!=c&&0<m&&c.append(e[1]),a.set(d)}}}
K.prototype.parse=function(a,b){if(null==a)throw Error("The string supplied did not seem to be a phone number");if(250<a.length)throw Error("The string supplied is too long to be a phone number");var c=new n,d=a.indexOf(";phone-context=");if(0<=d){var e=d+15;if("+"==a.charAt(e)){var f=a.indexOf(";",e);0<f?c.append(a.substring(e,f)):c.append(a.substring(e))}e=a.indexOf("tel:");c.append(a.substring(0<=e?e+4:0,d))}else c.append(Ka(a));d=c.toString();e=d.indexOf(";isub=");0<e&&(c.clear(),c.append(d.substring(0,
e)));if(!La(c.toString()))throw Error("The string supplied did not seem to be a phone number");d=c.toString();if(!(N(b)||null!=d&&0<d.length&&L.test(d)))throw Error("Invalid country calling code");d=new G;a:{e=c.toString();f=e.search(Ga);if(0<=f&&La(e.substring(0,f)))for(var g=e.match(Ga),k=g.length,m=1;m<k;++m)if(null!=g[m]&&0<g[m].length){c.clear();c.append(e.substring(0,f));e=g[m];break a}e=""}0<e.length&&u(d,3,e);f=Q(this,b);e=new n;g=0;k=c.toString();try{g=Xa(this,k,f,e,d)}catch(y){if("Invalid country calling code"==
y.message&&L.test(k)){if(k=k.replace(L,""),g=Xa(this,k,f,e,d),0==g)throw y;}else throw y;}0!=g?(c=P(g),c!=b&&(f=O(this,g,c))):(Oa(c),e.append(c.toString()),null!=b&&(g=f.aa(),d.da(g)));if(2>e.g.length)throw Error("The string supplied is too short to be a phone number");null!=f&&(g=new n,c=new n(e.toString()),Ya(c,f,g),f=T(this,c.toString(),f,-1),2!=f&&4!=f&&5!=f&&(e=c));c=e.toString();e=c.length;if(2>e)throw Error("The string supplied is too short to be a phone number");if(17<e)throw Error("The string supplied is too long to be a phone number");
if(1<c.length&&"0"==c.charAt(0)){u(d,4,!0);for(e=1;e<c.length-1&&"0"==c.charAt(e);)e++;1!=e&&u(d,8,e)}u(d,2,parseInt(c,10));return d};function M(a,b){var c="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a);return c&&c[0].length==b.length?!0:!1};function Za(a){this.ya="\u2008";this.na=new RegExp(this.ya);this.oa="";this.$=new n;this.fa="";this.s=new n;this.ea=new n;this.u=!0;this.ia=this.ba=this.sa=!1;this.xa=K.Ba();this.ca=0;this.c=new n;this.ma=!1;this.m="";this.b=new n;this.i=[];this.pa=a;this.Ea=this.l=$a(this,this.pa)}var ab=new F;u(ab,11,"NA");
var bb=RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*(\\$\\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]*)+$"),cb=/[- ]/;function $a(a,b){var c=a.xa;c=N(b)?Va(c,b):0;c=Q(a.xa,P(c));return null!=c?c:ab}
function db(a){for(var b=a.i.length,c=0;c<b;++c){var d=a.i[c],e=x(d,1);if(a.fa==e)return!1;var f=a;var g=d,k=x(g,1);f.$.clear();var m=f;g=x(g,2);var y="999999999999999".match(k)[0];y.length<m.b.g.length?m="":(k=y.replace(new RegExp(k,"g"),g),m=k=k.replace(RegExp("9","g"),m.ya));0<m.length?(f.$.append(m),f=!0):f=!1;if(f)return a.fa=e,a.ma=cb.test(t(d,4)),a.ca=0,!0}return a.u=!1}
function eb(a,b){for(var c=[],d=b.length-3,e=a.i.length,f=0;f<e;++f){var g=a.i[f];0==z(g,3)?c.push(a.i[f]):(g=t(g,3,Math.min(d,z(g,3)-1)),0==b.search(g)&&c.push(a.i[f]))}a.i=c}Za.prototype.clear=function(){this.oa="";this.s.clear();this.ea.clear();this.$.clear();this.ca=0;this.fa="";this.c.clear();this.m="";this.b.clear();this.u=!0;this.ia=this.ba=this.sa=!1;this.i=[];this.ma=!1;this.l!=this.Ea&&(this.l=$a(this,this.pa))};
function fb(a,b){a.s.append(b);var c=b;if(Ba.test(c)||1==a.s.g.length&&Aa.test(c)){c=b;if("+"==c){var d=c;a.ea.append(c)}else d=ya[c],a.ea.append(d),a.b.append(d);b=d}else a.u=!1,a.sa=!0;if(!a.u){if(!a.sa)if(gb(a)){if(hb(a))return ib(a)}else if(0<a.m.length&&(c=a.b.toString(),a.b.clear(),a.b.append(a.m),a.b.append(c),c=a.c.toString(),d=c.lastIndexOf(a.m),a.c.clear(),a.c.append(c.substring(0,d))),a.m!=jb(a))return a.c.append(" "),ib(a);return a.s.toString()}switch(a.ea.g.length){case 0:case 1:case 2:return a.s.toString();
case 3:if(gb(a))a.ia=!0;else return a.m=jb(a),kb(a);default:if(a.ia)return hb(a)&&(a.ia=!1),a.c.toString()+a.b.toString();if(0<a.i.length){c=lb(a,b);d=mb(a);if(0<d.length)return d;eb(a,a.b.toString());return db(a)?nb(a):a.u?U(a,c):a.s.toString()}return kb(a)}}function ib(a){a.u=!0;a.ia=!1;a.i=[];a.ca=0;a.$.clear();a.fa="";return kb(a)}
function mb(a){for(var b=a.b.toString(),c=a.i.length,d=0;d<c;++d){var e=a.i[d],f=x(e,1);if((new RegExp("^(?:"+f+")$")).test(b))return a.ma=cb.test(t(e,4)),b=b.replace(new RegExp(f,"g"),t(e,2)),U(a,b)}return""}function U(a,b){var c=a.c.g.length;return a.ma&&0<c&&" "!=a.c.toString().charAt(c-1)?a.c+" "+b:a.c+b}
function kb(a){var b=a.b.toString();if(3<=b.length){for(var c=a.ba&&0==a.m.length&&0<z(a.l,20)?v(a.l,20):v(a.l,19),d=c.length,e=0;e<d;++e){var f=c[e];0<a.m.length&&Ra(x(f,4))&&!t(f,6)&&!r(f,5)||(0!=a.m.length||a.ba||Ra(x(f,4))||t(f,6))&&bb.test(x(f,2))&&a.i.push(f)}eb(a,b);b=mb(a);return 0<b.length?b:db(a)?nb(a):a.s.toString()}return U(a,b)}function nb(a){var b=a.b.toString(),c=b.length;if(0<c){for(var d="",e=0;e<c;e++)d=lb(a,b.charAt(e));return a.u?U(a,d):a.s.toString()}return a.c.toString()}
function jb(a){var b=a.b.toString(),c=0;if(1!=a.l.za())var d=!1;else d=a.b.toString(),d="1"==d.charAt(0)&&"0"!=d.charAt(1)&&"1"!=d.charAt(1);d?(c=1,a.c.append("1").append(" "),a.ba=!0):r(a.l,15)&&(d=new RegExp("^(?:"+t(a.l,15)+")"),d=b.match(d),null!=d&&null!=d[0]&&0<d[0].length&&(a.ba=!0,c=d[0].length,a.c.append(b.substring(0,c))));a.b.clear();a.b.append(b.substring(c));return b.substring(0,c)}
function gb(a){var b=a.ea.toString(),c=new RegExp("^(?:\\+|"+t(a.l,11)+")");c=b.match(c);return null!=c&&null!=c[0]&&0<c[0].length?(a.ba=!0,c=c[0].length,a.b.clear(),a.b.append(b.substring(c)),a.c.clear(),a.c.append(b.substring(0,c)),"+"!=b.charAt(0)&&a.c.append(" "),!0):!1}function hb(a){if(0==a.b.g.length)return!1;var b=new n,c=Wa(a.b,b);if(0==c)return!1;a.b.clear();a.b.append(b.toString());b=P(c);"001"==b?a.l=Q(a.xa,""+c):b!=a.pa&&(a.l=$a(a,b));a.c.append(""+c).append(" ");a.m="";return!0}
function lb(a,b){var c=a.$.toString();if(0<=c.substring(a.ca).search(a.na)){var d=c.search(a.na);c=c.replace(a.na,b);a.$.clear();a.$.append(c);a.ca=d;return c.substring(0,a.ca+1)}1==a.i.length&&(a.u=!1);a.fa="";return a.s.toString()};var V=K.Ba(),ob={e164:0,international:1,national:2,rfc3966:3},pb={FIXED_LINE:0,MOBILE:1,FIXED_LINE_OR_MOBILE:2,TOLL_FREE:3,PREMIUM_RATE:4,SHARED_COST:5,VOIP:6,PERSONAL_NUMBER:7,PAGER:8,UAN:9,VOICEMAIL:10},qb={"Invalid country calling code":"PHONE_INVALID_COUNTRY_CODE","The string supplied is too short to be a phone number":"PHONE_NUMBER_TOO_SHORT","The string supplied is too long to be a phone number":"PHONE_NUMBER_TOO_LONG","The string supplied did not seem to be a phone number":"PHONE_NOT_A_NUMBER",
"Phone number too short after IDD":"PHONE_TOO_SHORT_AFTER_IDD"};function rb(a){if(!sb(a))throw Error("Invalid metadata");var b=a.regionCodes;if(!b||!Array.isArray(b)||!b.length)throw Error("Invalid metadata");if(!sb(a.countryCodeToRegionCodeMap)||!sb(a.countryToMetadata))throw Error("Invalid metadata");}function sb(a){return null!==a&&"[object Object]"===""+a&&a.constructor===Object}function W(a,b){if(-1===b.regionCodes.indexOf(a))throw Error("Metadata not loaded for region: "+a);}
function tb(a){if(null===a)return null;var b={countryCode:a.j[1].toString(),nationalNumber:a.j[2].toString()};if(r(a,4))for(var c=x(a,8),d=0;d<c;d++)b.nationalNumber="0"+b.nationalNumber;void 0!==a.j[3]&&(b.extension=a.j[3]);return b}
function ub(a){var b=new G,c=!1;b.da(Number(a.countryCode));var d=a.nationalNumber;if("string"===typeof d){for(var e=0;"0"===d.charAt(e);)c=!0,e++;c&&(u(b,4,!0),u(b,8,e));d=Number(d)}u(b,2,d);void 0!==a.extension&&null!==a.extension&&(a=a.extension.toString(),u(b,3,a));return b}
function vb(a){rb(a);return{getSupportedRegions:function(){J(a);return Pa()},getCountryCodeForRegion:function(b){J(a);W(b,a);return N(b)?Va(V,b):0},countryCodeToRegionCodeMap:function(){J(a);return H},formatPhoneNumber:function(b,c){J(a);try{var d=ub(b)}catch(f){throw Error("Phone object conversion failed: "+f.message);}c=c||{};var e=ob[c.style];if(void 0===e)throw Error("Invalid style property: "+c.style);return V.format(d,e).toString()},validatePhoneNumber:function(b,c){J(a);W(c,a);try{var d=ub(b)}catch(k){throw Error("Phone object conversion failed: "+
k.message);}var e=d,f=e.aa();var g=O(V,f,c);null==g||"001"!=c&&f!=Va(V,c)?g=!1:(e=Sa(e),g=-1!=(S(e,t(g,1))?S(e,t(g,5))?4:S(e,t(g,4))?3:S(e,t(g,6))?5:S(e,t(g,8))?6:S(e,t(g,7))?7:S(e,t(g,21))?8:S(e,t(g,25))?9:S(e,t(g,28))?10:S(e,t(g,2))?t(g,18)||S(e,t(g,3))?2:0:!t(g,18)&&S(e,t(g,3))?1:-1:-1));if(g)return!0;g=d;d=Sa(g);g=g.aa();g in H?(g=O(V,g,P(g)),d=T(V,d,g,-1)):d=1;switch(d){case 1:d="PHONE_INVALID_COUNTRY_CODE";break;case 2:d="PHONE_NUMBER_TOO_SHORT";break;case 3:d="PHONE_NUMBER_TOO_LONG";break;
case 5:d="PHONE_NUMBER_INVALID_LENGTH";break;default:d="PHONE_INVALID_FOR_REGION"}return Error(d)},parsePhoneNumber:function(b,c){J(a);W(c,a);try{var d=V.parse(b,c)}catch(e){return Error(qb[e.message])}return tb(d)},getExampleNumberForType:function(b,c){J(a);W(c,a);var d=pb[b];void 0===d&&(d=-1);return tb(Ua(V,c,d))},getAsYouTypeFormatter:function(b){J(a);W(b,a);var c=new Za(b);return{inputDigit:function(a){c.oa=fb(c,a);return c.oa},clear:function(){return c.clear()}}}}}
var X=["createPhoneHandler"],Y=this;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());){var wb;if(wb=!X.length)wb=void 0!==vb;wb?Y[Z]=vb:Y=Y[Z]&&Y[Z]!==Object.prototype[Z]?Y[Z]:Y[Z]={}};
