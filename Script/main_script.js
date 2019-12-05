$(document).ready(function () {
    var srcArray = new Array();
     srcArray.push("https://m.afrimo.net/web/product/tiny/201808/0c2cafd3a350042731e9e598565323c7.jpg");
    srcArray.push("http://m.jlauren.co.kr/web/product/big/201903/35394376998c8f6612cc7b240b7ecc4d.jpg");
    srcArray.push("http://image2.lotteimall.com/goods/02/93/95/1392959302_L.jpg");
    srcArray.push("http://modmartin.co.kr/web/product/big/201503/155_shop1_297012.jpg");
    srcArray.push("http://janecourt.com/web/product/big/201905/13b0ff1ea846fbd12d44aefe66a41816.jpg");
    srcArray.push("http://t1.daumcdn.net/liveboard/bizion/9418dbf2817c48fca75ff46ba2a18bd1.JPG");
    srcArray.push("http://m.3months.co.kr/web/product/big/201902/aabb44b090d0052a90f0b3b745183ba5.jpg");
    srcArray.push("https://m.dorocy.co.kr/web/product/big/201712/13971_shop1_940108.jpg");
    srcArray.push("http://m.sasimgoods.com/web/product/big/201902/5f7ee74b0f71f0b3ed571da0acbb6a9b.jpeg");
    srcArray.push("https://cdn.imweb.me/upload/S2017082959a568197ba46/9e652f125375f.jpeg");
    
    for(var i = 0; i < srcArray.length; i++)
        addProduct($('.content'), srcArray[i]);
    //임시로 이미지 데이터 배열 형식으로 넘겼어요
    
    
    //$('.test_button').click(addProduct($('.content'), productData));
    
});
