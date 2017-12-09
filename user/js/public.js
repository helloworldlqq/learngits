


//帖子列表 列表框大小定义 帖子先加载后显示
var postHeight=document.getElementsByClassName("post-list")[0].offsetHeight;
$('.post-shop-img, .post-text').css('height',postHeight);
$('.post-shop-img img').css({'width':postHeight,'height':postHeight});
$(".post-list").css('visibility','visible');



//选择帖子数量展示
$('.view-item').click(function () {
    $(this).addClass('this-view');
    $(this).parent('li').siblings().find('.view-item').removeClass('this-view');
    console.log($(this).text());
})



//是否全选帖子
$('#checkbox-all').click(function () {

    if($("#checkbox-all").prop('checked')){
        // console.log( $(".post-list .post-shop-img input[type='checkbox']") );
        $(".post-list .post-shop-img input[type='checkbox']").prop('checked',true);
    }else {
        $(".post-list .post-shop-img input[type='checkbox']").prop("checked", false);;
    }
})

//复制帖子文字
$('.copy-this-url').click(function () {
    $(this).parents('post-url').children('post-url-title,post-url-item');
    console.log( $(this).parents('.post-url').find('.post-url-title,.post-url-item').text());

    var Url2=$(this).parents('.post-url').find('.post-url-title,.post-url-item').text()
    var oInput = document.createElement('input');
    oInput.value = Url2;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令-->
    oInput.className = 'oInput';
    oInput.style.display='none';
    alert('Copy successfully!');

})