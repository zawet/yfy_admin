// JavaScript Document

//自动变化以头部的距离，i为想离头部有多远，可以负数
function qkyh5_topa_header(i,jq){
	if(jq==1){
	var titHeight = $('.qkyh5_header').height()+i;
	}else{
	var titHeight = $('.qkyh5_header').offset().height+i;}
	//console.log(titHeight);
	$(".qkyh5_main").css({"paddingTop":titHeight+"px"});
}


//单下拉选秀
function select_box(){
	$(".select_icon").on("click",function(){
		$(this).next(".select_more").toggleClass("open");
	});
	$(".select_more a.select_mli").on("click",function(){
        $(this).parents(".select_box").find(".select_value").val($(this).html());
		$(this).parent().removeClass("open");
    });
}

//下拉多选项
function select_box_fu(){
	$(".select_icon").on("click",function(){
		$(this).parent().attr("ischoose","yes");
		$(".select_more").addClass("open");
		$(".select_mask").slideDown(100);
	});
	$(".select_mask").on("click",function(){
		$(".select_box").attr("ischoose","no");
		$(".select_more").removeClass("open");
		$(".select_mask").slideUp(100);
	});
	
	$(".select_mi").on("click",function(){
		$(this).toggleClass("r45");
		$(this).parent().next(".select_twobox").first().slideToggle(200);
	});
	
	var addhtml="";
	
	chobox(
		function(thisin){
			
			addhtml+=thisin.next(".select_mtxt").html()+",";
			$(".select_box[ischoose='yes']").find(".select_value").val(addhtml);
		},
		function(thisout){
			var ishtml=$(".select_box[ischoose='yes']").find(".select_value").val();
			var chtml=thisout.next(".select_mtxt").html()+",";
			ishtml=ishtml.replace(chtml,"");
			addhtml=ishtml;
			$(".select_box[ischoose='yes']").find(".select_value").val(ishtml);
		}
	);
	
}
//多选项事件
function chobox(infun,outfun){
	$(".chobox").on("click",function(){
		var isc=$(this).attr("isc");
		if(isc=="no"){
			$(this).addClass("open");$(this).attr("isc","yes");
			infun($(this));
		}else{
			$(this).removeClass("open");$(this).attr("isc","no");
			outfun($(this));
		}
	})
}

//滚动加载
function scrollload(fun){
	$(window).scroll(function() {
		if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
		  console.log("滚动条已经到达底部为" + $(document).scrollTop());
		  fun();
		}
  	});
}

//同页弹页
function pages(){
	$(".sz_li").on("click",function(){
	var where=$(this).attr("to");
	 //console.log(where);
	$("."+where).addClass("open");
	});
	$(".pro_zfbut.close,.back_icon").on("click",function(){
		$(".pages").removeClass("open");
	})
}

function lt_btn(fun){
	$(".lt_btn .btn").each(function(i) {
        $(this).click(function(){	
		$(this).addClass("active").siblings().removeClass("active");
		fun($(this),i);
		});
    });	
}

function lt_btn2(fun){
	$(".lt_btn2 .btn").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	fun($(this));
}	

//开关按钮
function wx_kg(){
	$(".wx_kg").on("click",function(){
		var ot=$(this).attr("o_txt");var ct=$(this).attr("c_txt");
		if($(this).attr("isc")=="no"){
			$(this).addClass("open").next(".kg_txt").addClass("open").html(ot);$(this).attr("isc","yes");
		}else{
			$(this).removeClass("open").next(".kg_txt").removeClass("open").html(ct);;$(this).attr("isc","no");
		}
	});
}

//点击添加更多的模板
 function addmore_mb(cid,mbid,fdiv){
	$(cid).on("click",function(){
		var thisxh=$(fdiv).find(".spli").length;
		$(mbid).find(".spxh").html(thisxh+1);
		$(this).before($(mbid).html());
	});
}

//银行卡交互事件
function yhcadr(){
	$(".yh_cadr").each(function(i) {
		
		$(this).click(function(){
			if(i!=$(".yh_cadr").length-1){
			$(this).toggleClass("choose").next(".yh_cadr").addClass("mt10").siblings().removeClass("mt10");
			$(this).siblings().removeClass("choose");
			}else{
				$(this).toggleClass("choose").siblings().removeClass("choose");
				$(this).removeClass("mt10").siblings().removeClass("mt10");
			}
			
		});
    });
}

//点击后旋转延迟跳转页面
function zf_href(href){
	$(".pro_zfbut.zf").click(function(){		
		$(".zf_icon").addClass("open");
		setTimeout(function(){
			window.location.href=href; 
			},2000);
	});	
}

//停用按钮事件
function ty(id){
	$(id).on("click",function(){
		if($(this).attr("isc")=="no"){
		$(this).html("开启").addClass("on");
		$(this).parents(".spli").addClass("close");
		$(this).attr("isc","yes");
		}else{
		$(this).html("停用").removeClass("on");
		$(this).parents(".spli").removeClass("close");
		$(this).attr("isc","no");
		}
	});
}
//编辑按钮事件
function edit(){
	$(".edit_icon").on("click",function(){
		if($(this).attr("isc")=="no"){
			$(".edit_box").each(function(i) {
				$(this).removeClass("t_r");
                var thtml=$(this).html();
			    $(this).html('<input type="text" class="tx_input br_nb fz_14 wd_100" value="'+thtml+'">');
            });
			$(this).attr("isc","yes");
		}else{
			$(".edit_box").each(function(i) {
				$(this).addClass("t_r");
               var tvhtml=$(this).find("input").val();
			   $(this).html(tvhtml);
            });
			$(this).attr("isc","no");
		}
	});
}