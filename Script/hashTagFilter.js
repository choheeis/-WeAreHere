//var tagArray = tag_from_server;

$(document).ready(function() {
    var aTag;

    //엔터가 눌리면 서버로 데이터 전송
    $("input[name=search]").keydown(function (key) {
        if(key.keyCode == 13) {

            aTag = $(".searchbox").val();
            
            //ajax사용해서 json 형식으로 서버 선송
            $.ajax({
              url : '/search',
              type : 'GET',
              dataType : 'json',
              data : {
                'search' : aTag
              },
                //전송에 성공하면 바로 태그컨테이너 생성
              success : makeTagContainer($('#tagbox'), aTag)
            });

            //검색창은 초기화
            $("input").val('');
            
            //인풋 태그 기본 이벤트 제거
            return false;

            /*makeTagContainer($('#tagbox'), aTag);
            return false;*/
        }
    });

    //태그 삭제. 아직 서버 내용 지우는 건 구현X
    $('#tagbox').on("click", ".close", function(e) {
        deleteTagContainer(e);
    });
});

//태그 컨테이너 만드는 함수
function makeTagContainer(target_div, aTag) {
    var tag = aTag;
    var $target = target_div;
    var $container = $("<div></div>");
    var $close = makeCloseButton();

    $container.text(tag);
    $container.append($close);
    $target.append($container);

    return $target.children().length;
}

//태그 삭제 버튼
function makeCloseButton() {
    var $closebt = $("<div>X</div>");
    $closebt.addClass('close');

    return $closebt;
}

//태그 삭제 함수
function deleteTagContainer(e) {
    var $target = $(e.target);

    $target.parent().remove();
}
