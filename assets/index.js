var num = 0;
let isReady = true;
let canEsc = false;
const showBigBackground = () => {
    setTimeout(() => {
        $(".introduce").fadeIn(1000, "linear");
        canEsc = true;
    }, 4000)
}
$(document).keydown(function(event){
    if (event.key == "Escape" && canEsc) {       //esc
        isReady = true;
        canEsc = false;
        $(".introduce").empty();
        $(".introduce").fadeOut("slow");
        $("li").css("z-index","10");
        if (num===1){
            $(".a").css("z-index","100");
            $(".a").addClass("small");
            $(".a").animate({ left:534,top:130,width:220,height:308},900);
        }
        if (num===2){
            $(".b").css("z-index","100");
            $(".b").addClass("small");
            $(".b").animate({ left:896,top:130,width:220,height:308},900);
        }
        if (num===3){
            $(".c").css("z-index","100");
            $(".c").addClass("small");
            $(".c").animate({ left:1280,top:130,width:220,height:308},900);
        }
        if (num===4){
            $(".d").css("z-index","100");
            $(".d").addClass("small");
            $(".d").animate({ left:1664,top:130,width:220,height:308},900);
        }
        if (num===5){
            $(".e").css("z-index","100");
            $(".e").addClass("small");
            $(".e").animate({ left:2047,top:130,width:220,height:308},900);
        }
        if (num===6){
            $(".f").css("z-index","100");
            $(".f").addClass("small");
            $(".f").animate({ left:2428,top:130,width:220,height:308},900);
        }
        if (num===7){
            $(".g").css("z-index","100");
            $(".g").addClass("small");
            $(".g").animate({ left:2814,top:130,width:220,height:308},900);
        }
        if (num===8){
            $(".h").css("z-index","100");
            $(".h").addClass("small");
            $(".h").animate({ left:294,top:518,width:220,height:308},900);
        }
        if (num===9){
            $(".i").css("z-index","100");
            $(".i").addClass("small");
            $(".i").animate({ left:704,top:518,width:220,height:308},900);
        }
        if (num===10){
            $(".j").css("z-index","100");
            $(".j").addClass("small");
            $(".j").animate({ left:1088,top:518,width:220,height:308},900);
        }
        if (num===11){
            $(".k").css("z-index","100");
            $(".k").addClass("small");
            $(".k").animate({ left:1472,top:518,width:220,height:308},900);
        }
        if (num===12){
            $(".l").css("z-index","100");
            $(".l").addClass("small");
            $(".l").animate({ left:1856,top:518,width:220,height:308},900);
        }
        if (num===13){
            $(".m").css("z-index","100");
            $(".m").addClass("small");
            $(".m").animate({ left:2239,top:518,width:220,height:308},900);
        }
        if (num===14){
            $(".n").css("z-index","100");
            $(".n").addClass("small");
            $(".n").animate({ left:2622,top:518,width:220,height:308},900);
        }
        if (num===15){
            $(".o").css("z-index","100");
            $(".o").addClass("small");
            $(".o").animate({ left:3008,top:518,width:220,height:308},900);
        }
    }
    if(event.key === "1" && isReady){
        isReady = false;
        $(".a").addClass("big");
        num = 1;
        $(".introduce").append("<h1>纸杯传水</h1>");
        $(".introduce").append("<h4>5人一组（邀请两组同事），同时进行比赛。倒水至嘴叼着的纸杯内，再传递至下一个人的纸杯内，最后一人的纸杯内的水倒入一个小缸内。在限定的3分钟内，看哪个组的缸内的水最多，哪个组就获胜！</h4>");
        $(".a").css("zIndex",1000);
        $(".a").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".a").removeClass("small");
        $(".a1").css("animation","move2 2s ease forwards");
        $(".a2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "2" && isReady){
        isReady = false;
        $(".b").addClass("big");
        num = 2;
        $(".introduce").append("<h1>占据阵地</h1>");
        $(".introduce").append("<h4>邀请一位异性一同站在一张报纸上，两人身体的任何部位，不得碰地，成功后再撕去一半报纸站，接着再撕去一半…</h4>");
        $(".b").css("zIndex",1000);
        $(".b").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".b").removeClass("small");
        $(".b1").css("animation","move2 2s ease forwards");
        $(".b2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "3" && isReady){
        isReady = false;
        $(".c").addClass("big");
        num = 3;
        $(".introduce").append("<h1>搬运工</h1>");
        $(".introduce").append("<h4>邀请一位异性同伴上台，两人背对背，手牵手紧靠，将篮子里的香蕉、橘子、西瓜等依次搬运到对面的空篮筐里！</h4>");
        $(".c").css("zIndex",1000);
        $(".c").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".c").removeClass("small");
        $(".c1").css("animation","move2 2s ease forwards");
        $(".c2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "4" && isReady){
        isReady = false;
        $(".d").addClass("big");
        num = 4;
        $(".introduce").append("<h1>瞎子背瘸子</h1>");
        $(".introduce").append("<h4>邀请一位同事，一人当瞎子，一人当瘸子，瞎子背着瘸子，按照瘸子的提示，依次捡起地上的指定物品，交给瘸子，完成后奖励红包！</h4>");
        $(".d").css("zIndex",1000);
        $(".d").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".d").removeClass("small");
        $(".d1").css("animation","move2 2s ease forwards");
        $(".d2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "5" && isReady) {
        isReady = false;
        $(".e").addClass("big");
        num = 5;
        $(".introduce").append("<h1>单身狗粮</h1>");
        $(".introduce").append("<h4>恭喜拿到豁免权，并得到单身狗粮一大袋！</h4>");
        $(".e").css("zIndex", 1000);
        $(".e").animate({left: 1400,top:74,width:630,height:882}, 900, function () {
        $(".e").removeClass("small");
        $(".e1").css("animation", "move2 2s ease forwards");
        $(".e2").css("animation", "move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "6" && isReady){
        isReady = false;
        $(".f").addClass("big");
        num = 6;
        $(".introduce").append("<h1>大诗人</h1>");
        $(".introduce").append("<h4>吸一口魔法仙气！！然后大声朗读一首情诗！！</h4>");
        $(".f").css("zIndex",1000);
        $(".f").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".f").removeClass("small");
        $(".f1").css("animation","move2 2s ease forwards");
        $(".f2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "7" && isReady){
        isReady = false;
        $(".g").addClass("big");
        num = 7;
        $(".introduce").append("<h1>尬舞之王</h1>");
        $(".introduce").append("<h4>来一段抖音最强尬舞神曲，参与选手邀请台下另外一位好友上台一起尬舞！！</h4>");
        $(".g").css("zIndex",1000);
        $(".g").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".g").removeClass("small");
        $(".g1").css("animation","move2 2s ease forwards");
        $(".g2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "8" && isReady){
        isReady = false;
        $(".h").addClass("big");
        num = 8;
        $(".introduce").append("<h1>大实话</h1>");
        $(".introduce").append("<h4>说出你的直属上司是哪一位，并说出一件关于他的尬事！！</h4>");
        $(".h").css("zIndex",1000);
        $(".h").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".h").removeClass("small");
        $(".h1").css("animation","move2 2s ease forwards");
        $(".h2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "9" && isReady){
        isReady = false;
        $(".i").addClass("big");
        num = 9;
        $(".introduce").append("<h1>抢水瓶</h1>");
        $(".introduce").append("<h4>邀请9位同事上台，参加者面对面站成两排，水瓶放置在中间。裁判依次喊出身上的部位，参加者按指令指出相应的部位（如鼻子、耳朵、脸），直到指令最后喊出“水瓶”，两边的参加者立即抢位于中间的水瓶！  </h4>");
        $(".i").css("zIndex",1000);
        $(".i").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".i").removeClass("small");
        $(".i1").css("animation","move2 2s ease forwards");
        $(".i2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "0" && isReady){
        isReady = false;
        $(".j").addClass("big");
        num = 10;
        $(".introduce").append("<h1>歌颂老板</h1>");
        $(".introduce").append("<h4>3分钟时间，发自肺腑说一说你心目中的老板形象，歌颂一下老板！！</h4>");
        $(".j").css("zIndex",1000);
        $(".j").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".j").removeClass("small");
        $(".j1").css("animation","move2 2s ease forwards");
        $(".j2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "j" && isReady){
        isReady = false;
        $(".k").addClass("big");
        num = 11;
        $(".introduce").append("<h1> 我渴了</h1>");
        $(".introduce").append("<h4>一口气喝掉准备好的可乐、鸡尾酒、啤酒（任选一种即可）！</h4>");
        $(".k").css("zIndex",1000);
        $(".k").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".k").removeClass("small");
        $(".k1").css("animation","move2 2s ease forwards");
        $(".k2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "q" && isReady){
        isReady = false;
        $(".l").addClass("big");
        num = 12;
        $(".introduce").append("<h1>麒麟臂大比拼</h1>");
        $(".introduce").append("<h4>该游戏专属男士，如若女生抽到，请邀请两位你认为手速很快的同事上台，表演一下麒麟臂！</h4>");
        $(".l").css("zIndex",1000);
        $(".l").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".l").removeClass("small");
        $(".l1").css("animation","move2 2s ease forwards");
        $(".l2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "k" && isReady){
        isReady = false;
        $(".m").addClass("big");
        num = 13;
        $(".introduce").append("<h1>饶舌达人</h1>");
        $(".introduce").append("<h4>给一段音乐，选手将歌词用饶舌的方式表现出来！</h4>");
        $(".m").css("zIndex",1000);
        $(".m").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".m").removeClass("small");
        $(".m1").css("animation","move2 2s ease forwards");
        $(".m2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "s" && isReady){ //小王
        isReady = false;
        $(".n").addClass("big");
        num = 14;
        $(".introduce").append("<h1>乒乓对抗</h1>");
        $(".introduce").append("<h4>邀请一位好友上台，在5米距离上完成乒乓球5个来回！！</h4>");
        $(".n").css("zIndex",1000);
        $(".n").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".n").removeClass("small");
        $(".n1").css("animation","move2 2s ease forwards");
        $(".n2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
    if(event.key == "b" && isReady){ //大王
        isReady = false;
        $(".o").addClass("big");
        num = 15;
        $(".introduce").append("<h1>超级模特大比拼</h1>");
        $(".introduce").append("<h4>邀请两名异性，一位同性友人，两两组成组合，使用我们提前准备好的道具，自由搭配，必须男扮女装，女扮男装，打扮时间为3分钟，完成之后，音乐响起开始走秀！</h4>");
        $(".o").css("zIndex",1000);
        $(".o").animate({ left:1400,top:74,width:630,height:882},900,function () {
        $(".o").removeClass("small");
        $(".o1").css("animation","move2 2s ease forwards");
        $(".o2").css("animation","move1 2s ease forwards");
        showBigBackground();
        });
    }
})
