define(["loadBillList"],function(t){var e=+new Date,i=function(){$(".release-list").on("click","i",a),$(".release-title .icon-cancel").on("click",n),$(".release-title .release").on("click",l)},n=function(){$(".main-title").show().siblings().hide(),$(".bill-list").show().siblings().hide(),$(".input").css({transform:"translate(0, 0)"}),$(".main-title .icon-cancel").attr("class","icon-menu"),t.appendBill(),t.setEditNum(-1)},a=function(e){var i=e.target.parentNode;$(".input").empty().append($(i).clone()),$(".input").append('<div class="input-box"><i class="icon-yen"></i><input type="text"></div>'),$(".input").css({transform:"translate(0, -5rem)"}),t.setEditNum(-1)},l=function(){if(+new Date-e<300)return!1;e=+new Date;var t=parseFloat(Math.abs($(".input-box input").val())).toFixed(2);if(isNaN(t))return alert("请输入正确的金额！"),!1;if(0>=t||t>1e4)return alert("单笔金额请在0 - 10000范围内 ！"),!1;var i=window.localStorage,n=JSON.parse(i.getItem("mybill"))||{billList:[],income:0,spending:0,edit:-1,categorylist:{clothes:0,diet:0,accommodation:0,traffic:0,shopping:0,others:0}},a=new Date,l=a.getMonth()+1,s=a.getFullYear()+"/"+l+"/"+a.getDate(),o={date:s,month:l,money:t,category:$(".input div").eq(0).attr("class")};"income"==o.category?(n.income+=parseFloat(o.money),n.edit>=0&&(n.income-=parseFloat(n.billList[n.edit].money))):(n.spending+=parseFloat(o.money),n.categorylist[o.category]+=parseFloat(o.money),n.edit>=0&&(n.spending-=parseFloat(n.billList[n.edit].money),n.categorylist[o.category]-=parseFloat(n.billList[n.edit].money))),n.edit>=0?(n.billList.splice(n.edit,1,o),n.edit=-1,alert("修改成功")):(n.billList.unshift(o),alert("添加成功")),i.setItem("mybill",JSON.stringify(n)),$(".input").css({transform:"translate(0, 0)"}),setTimeout(function(){$(".input").empty()},300)};return{init:i}});