const fortuneResults ={
  money:[
  {stars:"★★★",
   detail:"最高の金運です！いつの間にかお金が溜まっているかも・・・？"},
  {stars:"★★",
   detail:"まずまず金運です！使いすぎには注意しましょう！"},
  {stars:"★",
   detail:"悪い傾向が見られます！財布の紐は絞めておくと吉です！"},
  ],
  work:[
    {stars:"★★★",
     detail:"最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？"},
    {stars:"★★",
     detail:"まずまず仕事運です！普段通り仕事が進むでしょう！"},
    {stars:"★",
     detail:"悪い傾向が見られます！自信過剰にならないように注意しましょう"},
  ],
  health:[
    {stars:"★★★",
     detail:"最高の健康運です！ランニングの距離を伸ばしても良いですね！"},
    {stars:"★★",
     detail:"まずまず健康運です！無理せず体を動かしましょう！"},
    {stars:"★",
     detail:"悪い傾向が見られます！ケガにご注意を・・・"},
  ],
};

$(document).on('click','.js-fortune-start', function(){
  for(let key in fortuneResults) {
    let js_fortune_num=Math.floor(Math.random() * 3);
    const resultstar = fortuneResults[key][js_fortune_num]["stars"];
    const resulttext = fortuneResults[key][js_fortune_num]["detail"];
    const $ele = $("." + key);
    $ele.find(".stars").text(resultstar);
    $ele.find(".detail").text(resulttext);
  };
  $('.start-button').toggleClass('js-fortune-start').toggleClass('re-start').text("もう一度占う！");
  $(".result").css("display","block");
  });
$(document).on('click','.re-start',function(){
  $('.start-button').toggleClass('re-start').toggleClass('js-fortune-start').text("運勢を占う");
  $(".result").css("display","none");}
);