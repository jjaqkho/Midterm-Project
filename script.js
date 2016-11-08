console.log('hello world');
// why does it have to be outside of document ready load in order for it to work?
// function myRestart() {
//   locition.reload();
//   Cookies.remove('name');
// }

// wait for document to load
$(document).ready(function() {


  var wo = ["齷", "韄", "蠖", "撾", "蠖", "矱", "㹻", "匎", "卧", "我"];
  var ta = ["龘", "搨", "靸", "㧺", "铊", "炨", "牠", "她", "他", "它"];
  var po = ["鏺", "皤", "奤", "婆", "破", "癹", "波", "㧊", "屰", "叵"];
  var xu = ["鬚", "絮", "敘", "徐", "恤", "卹", "序", "旭", "日", "于"];
  var la = ["䖃", "蠟", "臈", "揧", "喇", "啦", "剌", "拉", "㕇", "旯"];
  var mu = ["鶩", "㣎", "畝", "苜", "姆", "沐", "牟", "目", "木", "冖"];
  var qu = ["鑺", "鴝", "區", "祛", "取", "佢", "曲", "去", "区", "凵"];
  var yu = ["爩", "浴", "俞", "於", "余", "宇", "玉", "予", "于", "丂"];
  var ci = ["齹", "鶿", "薋", "磁", "瓷", "茨", "刺", "伺", "次", "子"];
  var bi = ["鼊", "避", "祕", "彼", "彼", "庇", "朼", "必", "比", "匕"];
  var ni = ["臡", "暱", "惄", "旎", "倪", "逆", "妳", "你", "氼", "尼"];



  $(".syllables").keyup(function() {
      var value = $(this).val();
      if (value == "w") {
        $('.english').html("wo");
      } else if (value == "t") {
        $('.english').html("ta");
      } else if (value == "p") {
        $('.english').html("po");
      } else if (value == "x") {
        $('.english').html("xu");
      } else if (value == "l") {
        $('.english').html("la");
      } else if (value == "m") {
        $('.english').html("mu");
      } else if (value == "y") {
        $('.english').html("yu");
      } else if (value == "q") {
        $('.english').html("qu");
      } else if (value == "c") {
        $('.english').html("ci");
      } else if (value == "b") {
        $('.english').html("bi");
      } else if (value == "n") {
        $('.english').html("ni");
      } else {
        $('.english').html(" ");
      }
    })
    .keyup();


  $(".syllables").keyup(function() {
      var value = $(this).val();
      if (value == "wo") {
        $('.character').addClass("chinese1");
        $('.chinese1').html(wo[10]);
        $(window).resize(function() {
          if (window.innerHeight < 700 && window.innerHeight > 650) {
            $('.chinese1').html(wo[0]);
          } else if (window.innerHeight < 650 && window.innerHeight >
            600) {
            $('.chinese1').html(wo[1]);
          } else if (window.innerHeight < 600 && window.innerHeight >
            550) {
            $('.chinese1').html(wo[2]);
          } else if (window.innerHeight < 550 && window.innerHeight >
            500) {
            $('.chinese1').html(wo[3]);
          } else if (window.innerHeight < 500 && window.innerHeight >
            450) {
            $('.chinese1').html(wo[4]);
          } else if (window.innerHeight < 450 && window.innerHeight >
            400) {
            $('.chinese1').html(wo[5]);
          } else if (window.innerHeight < 400 && window.innerHeight >
            350) {
            $('.chinese1').html(wo[6]);
          } else if (window.innerHeight < 350 && window.innerHeight >
            300) {
            $('.chinese1').html(wo[7]);
          } else if (window.innerHeight < 300 && window.innerHeight >
            250) {
            $('.chinese1').html(wo[8]);
          } else if (window.innerHeight < 250 && window.innerHeight >
            148) {
            $('.chinese1').html(wo[9]);
          }
        }).resize();

      } else if (value == "ta") {
        $('.character').addClass("chinese1");
        $('.chinese1').html(ta[10]);
        $(window).resize(function() {
          if (window.innerHeight < 700 && window.innerHeight > 650) {
            $('.chinese1').html(ta[0]);
          } else if (window.innerHeight < 650 && window.innerHeight >
            600) {
            $('.chinese1').html(ta[1]);
          } else if (window.innerHeight < 600 && window.innerHeight >
            550) {
            $('.chinese1').html(ta[2]);
          } else if (window.innerHeight < 550 && window.innerHeight >
            500) {
            $('.chinese1').html(ta[3]);
          } else if (window.innerHeight < 500 && window.innerHeight >
            450) {
            $('.chinese1').html(ta[4]);
          } else if (window.innerHeight < 450 && window.innerHeight >
            400) {
            $('.chinese1').html(ta[5]);
          } else if (window.innerHeight < 400 && window.innerHeight >
            350) {
            $('.chinese1').html(ta[6]);
          } else if (window.innerHeight < 350 && window.innerHeight >
            300) {
            $('.chinese1').html(ta[7]);
          } else if (window.innerHeight < 300 && window.innerHeight >
            250) {
            $('.chinese1').html(ta[8]);
          } else if (window.innerHeight < 250 && window.innerHeight >
            148) {
            $('.chinese1').html(ta[9]);
          }
        }).resize();
      } else if (value == "po") {
        $('.character').addClass("chinese1");
        $('.chinese1').html(po[10]);
        $(window).resize(function() {
          if (window.innerHeight < 700 && window.innerHeight > 650) {
            $('.chinese1').html(po[0]);
          } else if (window.innerHeight < 650 && window.innerHeight >
            600) {
            $('.chinese1').html(po[1]);
          } else if (window.innerHeight < 600 && window.innerHeight >
            550) {
            $('.chinese1').html(po[2]);
          } else if (window.innerHeight < 550 && window.innerHeight >
            500) {
            $('.chinese1').html(po[3]);
          } else if (window.innerHeight < 500 && window.innerHeight >
            450) {
            $('.chinese1').html(po[4]);
          } else if (window.innerHeight < 450 && window.innerHeight >
            400) {
            $('.chinese1').html(po[5]);
          } else if (window.innerHeight < 400 && window.innerHeight >
            350) {
            $('.chinese1').html(po[6]);
          } else if (window.innerHeight < 350 && window.innerHeight >
            300) {
            $('.chinese1').html(po[7]);
          } else if (window.innerHeight < 300 && window.innerHeight >
            250) {
            $('.chinese1').html(po[8]);
          } else if (window.innerHeight < 250 && window.innerHeight >
            148) {
            $('.chinese1').html(po[9]);
          }
        }).resize();
      } else if (value == "xu") {
        $('.character').addClass("chinese1");
        $('.chinese1').html(xu[10]);
        $(window).resize(function() {
          if (window.innerHeight < 700 && window.innerHeight > 650) {
            $('.chinese1').html(xu[0]);
          } else if (window.innerHeight < 650 && window.innerHeight >
            600) {
            $('.chinese1').html(xu[1]);
          } else if (window.innerHeight < 600 && window.innerHeight >
            550) {
            $('.chinese1').html(xu[2]);
          } else if (window.innerHeight < 550 && window.innerHeight >
            500) {
            $('.chinese1').html(xu[3]);
          } else if (window.innerHeight < 500 && window.innerHeight >
            450) {
            $('.chinese1').html(xu[4]);
          } else if (window.innerHeight < 450 && window.innerHeight >
            400) {
            $('.chinese1').html(xu[5]);
          } else if (window.innerHeight < 400 && window.innerHeight >
            350) {
            $('.chinese1').html(xu[6]);
          } else if (window.innerHeight < 350 && window.innerHeight >
            300) {
            $('.chinese1').html(xu[7]);
          } else if (window.innerHeight < 300 && window.innerHeight >
            250) {
            $('.chinese1').html(xu[8]);
          } else if (window.innerHeight < 250 && window.innerHeight >
            148) {
            $('.chinese1').html(xu[9]);
          }
        }).resize();
      } else if (value == "la") {
        $('.character').addClass("chinese1");
        $('.chinese1').html(la[10]);
        $(window).resize(function() {
          if (window.innerHeight < 700 && window.innerHeight > 650) {
            $('.chinese1').html(la[0]);
          } else if (window.innerHeight < 650 && window.innerHeight >
            600) {
            $('.chinese1').html(la[1]);
          } else if (window.innerHeight < 600 && window.innerHeight >
            550) {
            $('.chinese1').html(la[2]);
          } else if (window.innerHeight < 550 && window.innerHeight >
            500) {
            $('.chinese1').html(la[3]);
          } else if (window.innerHeight < 500 && window.innerHeight >
            450) {
            $('.chinese1').html(la[4]);
          } else if (window.innerHeight < 450 && window.innerHeight >
            400) {
            $('.chinese1').html(la[5]);
          } else if (window.innerHeight < 400 && window.innerHeight >
            350) {
            $('.chinese1').html(la[6]);
          } else if (window.innerHeight < 350 && window.innerHeight >
            300) {
            $('.chinese1').html(la[7]);
          } else if (window.innerHeight < 300 && window.innerHeight >
            250) {
            $('.chinese1').html(la[8]);
          } else if (window.innerHeight < 250 && window.innerHeight >
            148) {
            $('.chinese1').html(la[9]);
          }
        }).resize();
      } else if (value == "mu") {
        $('.character').addClass("chinese1");
        $('.chinese1').html(mu[10]);
        $(window).resize(function() {
          if (window.innerHeight < 700 && window.innerHeight > 650) {
            $('.chinese1').html(mu[0]);
          } else if (window.innerHeight < 650 && window.innerHeight >
            600) {
            $('.chinese1').html(mu[1]);
          } else if (window.innerHeight < 600 && window.innerHeight >
            550) {
            $('.chinese1').html(mu[2]);
          } else if (window.innerHeight < 550 && window.innerHeight >
            500) {
            $('.chinese1').html(mu[3]);
          } else if (window.innerHeight < 500 && window.innerHeight >
            450) {
            $('.chinese1').html(mu[4]);
          } else if (window.innerHeight < 450 && window.innerHeight >
            400) {
            $('.chinese1').html(mu[5]);
          } else if (window.innerHeight < 400 && window.innerHeight >
            350) {
            $('.chinese1').html(mu[6]);
          } else if (window.innerHeight < 350 && window.innerHeight >
            300) {
            $('.chinese1').html(mu[7]);
          } else if (window.innerHeight < 300 && window.innerHeight >
            250) {
            $('.chinese1').html(mu[8]);
          } else if (window.innerHeight < 250 && window.innerHeight >
            148) {
            $('.chinese1').html(mu[9]);
          }
        }).resize();
      } else if (value == "qu") {
        $('.character').addClass("chinese1");
        $('.chinese1').html(qu[10]);
        $(window).resize(function() {
          if (window.innerHeight < 700 && window.innerHeight > 650) {
            $('.chinese1').html(qu[0]);
          } else if (window.innerHeight < 650 && window.innerHeight >
            600) {
            $('.chinese1').html(qu[1]);
          } else if (window.innerHeight < 600 && window.innerHeight >
            550) {
            $('.chinese1').html(qu[2]);
          } else if (window.innerHeight < 550 && window.innerHeight >
            500) {
            $('.chinese1').html(qu[3]);
          } else if (window.innerHeight < 500 && window.innerHeight >
            450) {
            $('.chinese1').html(qu[4]);
          } else if (window.innerHeight < 450 && window.innerHeight >
            400) {
            $('.chinese1').html(qu[5]);
          } else if (window.innerHeight < 400 && window.innerHeight >
            350) {
            $('.chinese1').html(qu[6]);
          } else if (window.innerHeight < 350 && window.innerHeight >
            300) {
            $('.chinese1').html(qu[7]);
          } else if (window.innerHeight < 300 && window.innerHeight >
            250) {
            $('.chinese1').html(qu[8]);
          } else if (window.innerHeight < 250 && window.innerHeight >
            148) {
            $('.chinese1').html(qu[9]);
          }
        }).resize();
      } else if (value == "yu") {
        $('.character').addClass("chinese1");
        $('.chinese1').html(yu[10]);
        $(window).resize(function() {
          if (window.innerHeight < 700 && window.innerHeight > 650) {
            $('.chinese1').html(yu[0]);
          } else if (window.innerHeight < 650 && window.innerHeight >
            600) {
            $('.chinese1').html(yu[1]);
          } else if (window.innerHeight < 600 && window.innerHeight >
            550) {
            $('.chinese1').html(yu[2]);
          } else if (window.innerHeight < 550 && window.innerHeight >
            500) {
            $('.chinese1').html(yu[3]);
          } else if (window.innerHeight < 500 && window.innerHeight >
            450) {
            $('.chinese1').html(yu[4]);
          } else if (window.innerHeight < 450 && window.innerHeight >
            400) {
            $('.chinese1').html(yu[5]);
          } else if (window.innerHeight < 400 && window.innerHeight >
            350) {
            $('.chinese1').html(yu[6]);
          } else if (window.innerHeight < 350 && window.innerHeight >
            300) {
            $('.chinese1').html(yu[7]);
          } else if (window.innerHeight < 300 && window.innerHeight >
            250) {
            $('.chinese1').html(yu[8]);
          } else if (window.innerHeight < 250 && window.innerHeight >
            148) {
            $('.chinese1').html(yu[9]);
          }
        }).resize();
      } else if (value == "ci") {
        $('.character').addClass("chinese1");
        $('.chinese1').html(ci[10]);
        $(window).resize(function() {
          if (window.innerHeight < 700 && window.innerHeight > 650) {
            $('.chinese1').html(ci[0]);
          } else if (window.innerHeight < 650 && window.innerHeight >
            600) {
            $('.chinese1').html(ci[1]);
          } else if (window.innerHeight < 600 && window.innerHeight >
            550) {
            $('.chinese1').html(ci[2]);
          } else if (window.innerHeight < 550 && window.innerHeight >
            500) {
            $('.chinese1').html(ci[3]);
          } else if (window.innerHeight < 500 && window.innerHeight >
            450) {
            $('.chinese1').html(ci[4]);
          } else if (window.innerHeight < 450 && window.innerHeight >
            400) {
            $('.chinese1').html(ci[5]);
          } else if (window.innerHeight < 400 && window.innerHeight >
            350) {
            $('.chinese1').html(ci[6]);
          } else if (window.innerHeight < 350 && window.innerHeight >
            300) {
            $('.chinese1').html(ci[7]);
          } else if (window.innerHeight < 300 && window.innerHeight >
            250) {
            $('.chinese1').html(ci[8]);
          } else if (window.innerHeight < 250 && window.innerHeight >
            148) {
            $('.chinese1').html(ci[9]);
          }
        }).resize();
      } else if (value == "bi") {
        $('.character').addClass("chinese1");
        $('.chinese1').html(bi[10]);
        $(window).resize(function() {
          if (window.innerHeight < 700 && window.innerHeight > 650) {
            $('.chinese1').html(bi[0]);
          } else if (window.innerHeight < 650 && window.innerHeight >
            600) {
            $('.chinese1').html(bi[1]);
          } else if (window.innerHeight < 600 && window.innerHeight >
            550) {
            $('.chinese1').html(bi[2]);
          } else if (window.innerHeight < 550 && window.innerHeight >
            500) {
            $('.chinese1').html(bi[3]);
          } else if (window.innerHeight < 500 && window.innerHeight >
            450) {
            $('.chinese1').html(bi[4]);
          } else if (window.innerHeight < 450 && window.innerHeight >
            400) {
            $('.chinese1').html(bi[5]);
          } else if (window.innerHeight < 400 && window.innerHeight >
            350) {
            $('.chinese1').html(bi[6]);
          } else if (window.innerHeight < 350 && window.innerHeight >
            300) {
            $('.chinese1').html(bi[7]);
          } else if (window.innerHeight < 300 && window.innerHeight >
            250) {
            $('.chinese1').html(bi[8]);
          } else if (window.innerHeight < 250 && window.innerHeight >
            148) {
            $('.chinese1').html(bi[9]);
          }
        }).resize();
      } else if (value == "ni") {
        $('.character').addClass("chinese1");
        $('.chinese1').html(ni[10]);
        $(window).resize(function() {
          if (window.innerHeight < 700 && window.innerHeight > 650) {
            $('.chinese1').html(ni[0]);
          } else if (window.innerHeight < 650 && window.innerHeight >
            600) {
            $('.chinese1').html(ni[1]);
          } else if (window.innerHeight < 600 && window.innerHeight >
            550) {
            $('.chinese1').html(ni[2]);
          } else if (window.innerHeight < 550 && window.innerHeight >
            500) {
            $('.chinese1').html(ni[3]);
          } else if (window.innerHeight < 500 && window.innerHeight >
            450) {
            $('.chinese1').html(ni[4]);
          } else if (window.innerHeight < 450 && window.innerHeight >
            400) {
            $('.chinese1').html(ni[5]);
          } else if (window.innerHeight < 400 && window.innerHeight >
            350) {
            $('.chinese1').html(ni[6]);
          } else if (window.innerHeight < 350 && window.innerHeight >
            300) {
            $('.chinese1').html(ni[7]);
          } else if (window.innerHeight < 300 && window.innerHeight >
            250) {
            $('.chinese1').html(ni[8]);
          } else if (window.innerHeight < 250 && window.innerHeight >
            148) {
            $('.chinese1').html(ni[9]);
          }
        }).resize();
      } else {
        $('.character').addClass("chinese1");
        $('.chinese1').html(" ");
        $(window).resize(function() {
          if (window.innerHeight < 700 && window.innerHeight > 148) {
            $('.chinese1').html(" ");
          }
        }).resize();
      }
      console.log(value);
    })
    .keyup();



});
