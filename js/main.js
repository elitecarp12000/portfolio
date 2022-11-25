$(document).ready(function(){

  let name = ($('.name'));
  let sub = ($('.h_sub'));
  let welc = ($('.welcome'));
  let lr = ($('.left_line'));
  let rr = ($('.right_line'));
  let ye = ($('.year_main'));
  let ul = ($('.under_line'));
  let sc = ($('.scr'));
  let hg = ($('.h_sub2'));
  
  
  ul.delay(400).animate({'bottom':'0px'},1000)
  sc.delay(500).animate({'bottom':'8%'},1000,function(){
    sc.delay(3000).addClass('ani')
  })
  ye.delay(300).animate({'top':'0px'},1000)
  lr.delay(300).animate({'top':'0px'},1000)
  rr.delay(300).animate({'top':'0px'},1000)
  name.delay(600).animate({'left':'450px'},1000)
  sub.delay(700).animate({'left':'456px'},1000)
  welc.delay(800).animate({'left':'500px'},1000)
 
  
})
