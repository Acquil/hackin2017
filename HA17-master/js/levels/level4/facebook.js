function fn(){document.getElementById("remove").value=""}function verify(){var e=document.getElementById("fbusername").value,s=document.getElementById("fbpassword").value;if("sudhir"==e){GetCurrentLevelId().level;$.post("ajax/levelcompletion.php",{level:"4",answer:s},function(e){var s=JSON.parse(e);s.status==EnumStatus.OK?InvokeCustomMessageDialog("You have Logged in to the account and removed the comment. Level cleared successfully!",function(){window.location="index.php"}):s.status==EnumStatus.LEVEL_DONE?InvokeCustomMessageDialog("Success. But you have already cleared this level.",function(){window.location="index.php"}):InvokeCustomMessageDialog("Access Denied.")})}else $.post("ajax/levelcompletion.php",{level:"4",answer:s},function(e){}),InvokeCustomMessageDialog("Access Denied.")}$(document).ready(function(){$("[data-toggle=offcanvas]").click(function(){$(this).toggleClass("visible-xs text-center"),$(this).find("i").toggleClass("glyphicon-chevron-right glyphicon-chevron-left"),$(".row-offcanvas").toggleClass("active"),$("#lg-menu").toggleClass("hidden-xs").toggleClass("visible-xs"),$("#xs-menu").toggleClass("visible-xs").toggleClass("hidden-xs"),$("#btnShow").toggle()})});
