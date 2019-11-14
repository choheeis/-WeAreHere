//제목 설정
var setTitle = function (str_title) {
    $('.title').html(str_title);
}

//프로필 사진 설정
var setProfile = function (url_profile) {
    $('.profile').attr('src', url_profile);
}

//날짜 설정
var setDate = function (date_date) {
    $('.date').html(date_date);
}

var setDescription = function (str_description) {
    $('.description').html(str_description)
}

//상품 사진 추가
var addPicture = function (url_picture) {
    var $li_picture = $('<li></li>');
    var $img_picture = $('<img>');
    $img_picture.attr('src', url_picture);
    $li_picture.append($img_picture);
    $('.slider').append($li_picture);
}
