var path=require("path"),hash=require("hash-sum"),cache=Object.create(null),sepRE=new RegExp(path.sep.replace("\\","\\\\"),"g");module.exports=function(e,a,h){var p=a.split(path.sep);return e=p[p.length-1]+"/"+path.relative(a,e).replace(sepRE,"/")+(h||""),cache[e]||(cache[e]=hash(e))};