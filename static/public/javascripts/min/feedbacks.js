$(function(){function a(a,t){$.ajax({url:"/api/i18n",type:"GET",data:{phrases:a}}).done(function(a){l=Object.assign(l,a),e(s,menuTableTemplate,d.page||1)})}function e(a,t,n){var i="/api/feedbacks";n&&(i=i+"?page="+n),$.get(i,a).done(function(n){if(d={total:n.total,limit:n.limit,page:n.page,pages:n.pages},n.docs&&n.docs.length>0||1===n.page){$("#feedbacks").replaceWith(t(n));var i=$(".tbl-content").width()-$(".tbl-content table").width();$(".tbl-header").css({"padding-right":i})}else e(a,t,n.page-1)})}function t(a,e,t){$("#feedback-info").remove(),e!==o?($.post(a+"/view").done(function(a){$("#"+e).after(t(a)),$("#"+e).addClass("active")}),o=e):o=null}function n(a,e,t){$("#feedback-info").remove(),$("tr.bg-grey").removeClass("bg-grey"),$("tr > td.bg-grey").removeClass("bg-grey"),e!==o?($.get(a).done(function(a){$("#"+e).after(t(a)),$("#"+e).addClass("bg-grey"),$("#"+e+" td").addClass("bg-grey")}),o=e):o=null}var i,c,d,o,s=null,l={};Handlebars.registerHelper("__",function(e){var t=l[e];return t?t:void a([e])}),$.ajax({url:"/api/i18n",type:"GET",data:{phrases:["Name","Email","Message","Actions","Message status"]}}).done(function(a){l=a,$.get("/static/handlebars/feedbacks.hbs").done(function(a){c=Handlebars.compile(a),e(s,c)})}),$("a[data-target=feedbacks][data-action=find-new]").click(function(){s={status:"NEW"},e(s,c,d.page)}),$("a[data-target=feedbacks][data-action=find-all]").click(function(){s={},e(s,c,d.page)}),$("body").on("click","a[data-action=open-feedback]",function(){var a=$(this).attr("data-self-link"),e=$(this).attr("data-id"),c=$(this).attr("data-status"),d=n;return"NEW"==c&&(d=t),i?d(a,e,i):$.get("/static/handlebars/feedback-info.hbs").done(function(t){i=Handlebars.compile(t),d(a,e,i)}),!1}),$("body").on("click","a[data-action=delete-feedback]",function(){var a=$(this).attr("data-self-link"),t=$("#confirm-delete").modal();return t.off("click","#delete"),t.one("click","#delete",function(t){$.ajax({url:a,type:"DELETE",success:function(a){a._id&&e(s,c,d.page)}})}),!1}),$("body").on("click","a[data-target=page][data-action=select]",function(){var a=$(this).attr("data-page");return $.get("/api/feedbacks?page="+a,s).done(function(a){d={total:a.total,limit:a.limit,page:a.page,pages:a.pages},$("#feedbacks").replaceWith(c(a))}),!1}),$("body").on("click","a[data-target=page][data-action=find-first]",function(){return $.get("/api/feedbacks?page=0",s).done(function(a){d={total:a.total,limit:a.limit,page:a.page,pages:a.pages},$("#feedbacks").replaceWith(c(a))}),!1}),$("body").on("click","a[data-target=page][data-action=find-last]",function(){var a=d.pages;return $.get("/api/feedbacks?page="+a,s).done(function(a){d={total:a.total,limit:a.limit,page:a.page,pages:a.pages},$("#feedbacks").replaceWith(c(a))}),!1});var r=io("/admin");r.on("feedbacks/new",function(){e(s,c,d.page)})});