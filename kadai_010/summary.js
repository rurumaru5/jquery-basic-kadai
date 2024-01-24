$(function() {
  // id属性がchange-colorの要素がクリックされたら文字に色を付ける
  $('#change-color').on('click', function(){
    $('#target').css('color', 'red');
  });
  // id属性がchange-textの要素がクリックされたら文字を変化させる
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
  });
  // id属性がfade-outの要素がクリックされたらフェードアウトさせる
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });
  // id属性がfade-inの要素がクリックされたらフェードインさせる
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
});