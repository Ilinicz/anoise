var scr=document.getElementsByTagName("script"),zoombox_path=scr[scr.length-1].getAttribute("src").replace("zoombox-f2956c18.js","");(function(e){function k(){d=="closed"&&(i=!1),d="load",I(),m.test(s)?(img=new Image,img.src=s,e("body").append('<div id="zoombox_loader"></div>'),e("#zoombox_loader").css("marginTop",U()),a=window.setInterval(function(){D(img)},100)):(_(),O())}function L(){e("body").append(v),e(window).keydown(function(e){F(e.which)}),e(window).resize(function(){j()}),e("#zoombox .zoombox_mask").hide(),e("#zoombox").addClass(t.theme),e("#zoombox .zoombox_mask,.zoombox_close").click(function(){return M(),!1}),p==0?e("#zoombox .zoombox_next,#zoombox .zoombox_prev").remove():(e("#zoombox .zoombox_next").click(function(){H()}),e("#zoombox .zoombox_prev").click(function(){B()}))}function A(){var n=0,r=0,i=0;if(t.gallery){if(p===!1)return e("#zoombox .zoombox_gallery").remove(),!1;for(var s in p){var o=zoombox_path+"img/video-760adcb0.png",u=e('<img src="'+o+'" class="video gallery'+s*1+'"/>');m.test(p[s].attr("href"))&&(o=p[s].attr("href"),u=e('<img src="'+o+'" class="gallery'+s*1+'"/>')),u.data("id",s).appendTo("#zoombox .zoombox_gallery"),u.click(function(){P(e(this).data("id")),e("#zoombox .zoombox_gallery img").removeClass("current"),e(this).addClass("current")}),s==h&&u.addClass("current"),e("<img/>").data("img",u).attr("src",o).load(function(){n++;var t=e(this).data("img");t.width(Math.round(t.height()*this.width/this.height));if(n==e("#zoombox .zoombox_gallery img").length){var r=0;e("#zoombox .zoombox_gallery img").each(function(){r+=e(this).outerWidth(),e(this).data("left",r)});var s=e("<div>").css({position:"absolute",top:0,left:0,width:r});e("#zoombox .zoombox_gallery").wrapInner(s),i=e("#zoombox .zoombox_gallery").width(),e("#zoombox").trigger("change")}})}e("#zoombox .zoombox_gallery").show().animate({bottom:0},t.duration)}e("#zoombox").bind("change",function(n,r){if(e("#zoombox .zoombox_gallery div").width()<e("#zoombox .zoombox_gallery").width)return!0;var i=0,s=0;r!=null?(i=t.duration,s=r.width/2):s=e("#zoombox .zoombox_gallery").width()/2;var o=-e("#zoombox .zoombox_gallery img.current").data("left")+e("#zoombox .zoombox_gallery img.current").width()/2,u=o+s;u<s*2-e("#zoombox .zoombox_gallery div").width()&&(u=s*2-e("#zoombox .zoombox_gallery div").width()),u>0&&(u=0),e("#zoombox .zoombox_gallery div").animate({left:u},i)})}function O(){i==0?L():e("#zoombox .zoombox_title").empty(),e("#zoombox .close").hide(),e("#zoombox .zoombox_container").removeClass("multimedia").removeClass("img").addClass(c),r!=null&&r.attr("title")&&e("#zoombox .zoombox_title").append(r.attr("title")),e("#zoombox .zoombox_content").empty(),c=="img"&&i==0&&t.animation==1&&e("#zoombox .zoombox_content").append(l);if(r!=null&&r.find("img").length!=0&&i==0){var n=r.find("img");e("#zoombox .zoombox_container").css({width:n.width(),height:n.height(),top:n.offset().top,left:n.offset().left,opacity:0,marginTop:n.css("marginTop")})}else r!=null&&i==0?e("#zoombox .zoombox_container").css({width:r.width(),height:r.height(),top:r.offset().top,left:r.offset().left}):i==0&&e("#zoombox .zoombox_container").css({width:100,height:100,top:q()/2-50,left:R()/2-50});var s={width:o,height:u,left:(R()-o)/2,top:(q()-u)/2,marginTop:U(),opacity:1};e("#zoombox").trigger("change",s),t.animation==1?(e("#zoombox .zoombox_title").hide(),e("#zoombox .zoombox_close").hide(),e("#zoombox .zoombox_container").animate(s,t.duration,function(){(c=="multimedia"||i==1)&&e("#zoombox .zoombox_content").append(l),(c=="image"||i==1)&&e("#zoombox .zoombox_content img").css("opacity",0).fadeTo(300,1),e("#zoombox .zoombox_title").fadeIn(300),e("#zoombox .zoombox_close").fadeIn(300),d="opened",i||A(),i=!0}),e("#zoombox .zoombox_mask").fadeTo(200,t.opacity)):(e("#zoombox .zoombox_content").append(l),e("#zoombox .zoombox_close").show(),e("#zoombox .zoombox_gallery").show(),e("#zoombox .zoombox_container").css(s),e("#zoombox .zoombox_mask").show(),e("#zoombox .zoombox_mask").css("opacity",t.opacity),i||A(),i=!0,d="opened")}function M(){d="closing",window.clearInterval(a),e(window).unbind("keydown"),e(window).unbind("resize"),c=="multimedia"&&e("#zoombox .zoombox_container").empty();var n={};if(r!=null&&r.find("img").length>0){var s=r.find("img");n={width:s.width(),height:s.height(),top:s.offset().top,left:s.offset().left,opacity:0,marginTop:s.css("marginTop")}}else r!=null?n={width:r.width(),height:r.height(),top:r.offset().top,left:r.offset().left,marginTop:0,opacity:0}:n={width:100,height:100,top:q()/2-50,left:R()/2-50,opacity:0};t.animation==1?(e("#zoombox .zoombox_mask").fadeOut(200),e("#zoombox .zoombox_gallery").animate({bottom:-e("#zoombox .zoombox_gallery").innerHeight()},t.duration),e("#zoombox .zoombox_container").animate(n,t.duration,function(){e("#zoombox").remove(),d="closed",i=!1})):(e("#zoombox").remove(),d="closed",i=!1)}function _(){t.overflow==0&&(o*1+50>R()&&(u=(R()-50)*u/o,o=R()-50),u*1+50>q()&&(o=(q()-50)*o/u,u=q()-50));var e=s;c="multimedia";if(m.test(e))c="img",l='<img src="'+s+'" width="100%" height="100%"/>';else if(g.test(e))o=300,u=40,l='<object type="application/x-shockwave-flash" data="'+MP3Player+"?son="+e+'" width="'+o+'" height="'+u+'">',l+='<param name="movie" value="'+MP3Player+"?son="+e+'" /></object>';else if(y.test(e)){var n=0;t.autoplay==1&&(n=1),l='<object type="application/x-shockwave-flash" data="'+zoombox_path+'FLVplayer.swf" width="'+o+'" height="'+u+'"><param name="allowFullScreen" value="true"><param name="scale" value="noscale"><param name="wmode" value="transparent"><param name="flashvars" value="flv='+e+"&autoplay="+n+'"><embed src="'+zoombox_path+'FLVplayer.swf" width="'+o+'" height="'+u+'" allowscriptaccess="always" allowfullscreen="true" flashvars="flv='+e+'" wmode="transparent" /></object>'}else if(b.test(e))l='<object width="'+o+'" height="'+u+'"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="'+e+'" /><embed src="'+e+'" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="'+o+'" height="'+u+'" wmode="transparent"></embed></object>';else if(w.test(e))l='<embed src="'+e+'" width="'+o+'" height="'+u+'" controller="true" cache="true" autoplay="true"/>';else if(E.test(e))l='<embed src="'+e+'" width="'+o+'" height="'+u+'" controller="true" cache="true" autoplay="true" wmode="transparent" />';else if(S.test(e)){var r=e.split("_");r=r[0].split("/"),r=r[r.length-1]+"?",t.autoplay==1&&(r+="autoPlay=1&"),l='<iframe frameborder="0" width="'+o+'" height="'+u+'" src="http://www.dailymotion.com/embed/video/'+r+'?wmode=transparent"></iframe>'}else if(x.test(e)){var r=e.split("/");r=r[3]+"?",t.autoplay==1&&(r+="autoplay=1&"),l='<iframe src="http://player.vimeo.com/video/'+r+'title=0&amp;byline=0&amp;portrait=0&amp;wmode=transparent" width="'+o+'" height="'+u+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'}else if(T.test(e)){var r=e.split("watch?v=");r=r[1].split("&"),r=r[0]+"?",t.autoplay==1&&(r+="autoplay=1&"),l='<iframe width="'+o+'" height="'+u+'" src="http://www.youtube.com/embed/'+r+'wmode=Opaque" frameborder="0" allowfullscreen></iframe>'}else N.test(e)?(e=e.split(".html"),e=e[0],l='<object type="application/x-shockwave-flash" data="'+e+'" width="'+o+'" height="'+u+'"><param name="movie" value="'+e+'"><embed src="'+e+'" type="application/x-shockwave-flash" width="'+o+'" height="'+u+'"  wmode="transparent"></embed></object>'):l='<iframe src="'+e+'" width="'+o+'" height="'+u+'" border="0"></iframe>';return l}function D(t){t.complete&&(f=0,window.clearInterval(a),o=t.width,u=t.height,e("#zoombox_loader").remove(),_(),O()),e("#zoombox_loader").css({"background-position":"0px "+f+"px"}),f-=40,f<-440&&(f=0)}function P(t){return d!="opened"?!1:(p&&(h=t,r=p[h],s=r.attr("href"),e("#zoombox .zoombox_gallery img").length>0&&(e("#zoombox .zoombox_gallery img").removeClass("current"),e("#zoombox .zoombox_gallery img:eq("+t+")").addClass("current")),k()),!1)}function H(){f=h+1,f>p.length-1&&(f=0),P(f)}function B(){f=h-1,f<0&&(f=p.length-1),P(f)}function j(){e("#zoombox .zoombox_container").css({top:(q()-e("#zoombox .zoombox_container").outerHeight(!0))/2,left:(R()-e("#zoombox .zoombox_container").outerWidth(!0))/2})}function F(e){e==37&&B(),e==39&&H(),e==27&&M()}function I(){o=t.width,u=t.height;if(r!=null){var e=/w([0-9]+)/,n=e.exec(r.attr("class"));n!=null&&n[1]&&(o=n[1]);var i=/h([0-9]+)/,s=i.exec(r.attr("class"));s!=null&&s[1]&&(u=s[1])}return!1}function q(){return window.innerHeight?window.innerHeight:e(window).height()}function R(){return window.innerWidth?window.innerWidth:e(window).width()}function U(){return scrOfY=0,typeof window.pageYOffset=="number"?scrOfY=window.pageYOffset:document.body&&document.body.scrollTop?scrOfY=document.body.scrollTop:document.documentElement&&document.documentElement.scrollTop&&(scrOfY=document.documentElement.scrollTop),scrOfY}function z(){return scrOfX=0,typeof window.pageXOffset=="number"?scrOfX=window.pageXOffset:document.body&&document.body.scrollLeft?scrOfX=document.body.scrollLeft:document.documentElement&&document.documentElement.scrollLeft&&(scrOfX=document.documentElement.scrollLeft),scrOfX}var t={theme:"zoombox",opacity:.8,duration:800,animation:!0,width:600,height:400,gallery:!0,autoplay:!1,overflow:!1},n,r,i=!1,s,o,u,a,f=0,l,c="multimedia",h=!1,p=!1,d="closed",v='<div id="zoombox">             <div class="zoombox_mask"></div>            <div class="zoombox_container">                <div class="zoombox_content"></div>                <div class="zoombox_title"></div>                <div class="zoombox_next"></div>                <div class="zoombox_prev"></div>                <div class="zoombox_close"></div>            </div>            <div class="zoombox_gallery"></div>        </div>',m=/(\.jpg)|(\.jpeg)|(\.bmp)|(\.gif)|(\.png)/i,g=/(\.mp3)/i,y=/(\.flv)/i,b=/(\.swf)/i,w=/(\.mov)|(\.mp4)/i,E=/(\.wmv)|(\.avi)/i,S=/(http:\/\/www.dailymotion)|(http:\/\/dailymotion)/i,x=/(http:\/\/www.vimeo)|(http:\/\/vimeo)/i,T=/(youtube\.)/i,N=/(http:\/\/www\.koreus)|(http:\/\/koreus)/i,C=0;e.zoombox=function(e,t){},e.zoombox.options=t,e.zoombox.close=function(){M()},e.zoombox.open=function(n,i){r=null,s=n,t=e.extend({},e.zoombox.options,i),k()},e.zoombox.html=function(n,i){l=n,t=e.extend({},e.zoombox.options,i),o=t.width,u=t.height,r=null,O()},e.fn.zoombox=function(i){return n=new Array,this.each(function(){if(e.browser&&e.browser.msie&&e.browser.version<7&&!window.XMLHttpRequest)return!1;var o=this,u=/zgallery([0-9]+)/,a=/zskip/,f=u.exec(e(this).attr("class")),l=a.exec(e(this).attr("class")),c=!1;if(f!=null){n[f[1]]||(n[f[1]]=new Array),l==null&&n[f[1]].push(e(this));var v=n[f[1]].length-1;c=n[f[1]]}e(this).unbind("click").click(function(){return t=e.extend({},e.zoombox.options,i),d!="closed"?!1:(l!=null?v<n[f[1]].length-1&&(r=n[f[1]][v+1]):r=e(o),p=c,s=r.attr("href"),h=v,k(),!1)})})}})(jQuery);