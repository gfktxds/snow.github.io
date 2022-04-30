const ap = new APlayer({
    container: document.getElementById('aplayer01'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 1,
    audio: [
        {
            name: '错位时空',
            artist: '艾辰',
            url: 'https://www.ytmp3.cn/down/74706.mp3',
            cover: 'https://img0.baidu.com/it/u=53043569,1589246528&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
            lrc: '[00:00.00]艾辰 - 错位时空\n[00:00.96]作词：周仁\n[00:01.65]作曲：张博文\n[00:02.48]编曲：陈林\n[00:03.17]分轨混音：Mr.鱼\n[00:04.14]制作人：艾辰\n[00:04.96]贝斯：谭玮\n[00:05.73]吉他：望雷\n[00:06.50]监制、统筹：孙斌@子文沐凡\n[00:08.51]贴唱、和声：沙栩帆\n[00:09.79]OP：腾煌星象\n[00:10.65]企划：丁柏昕、袁晓童\n[00:12.08]宣发：徐思灵\n[00:12.94]出品人：谢奇笛、凌联兴\n[00:13.96]出品：网易飓风工作室\n[00:15.22]填不满半排观众的电影\n[00:19.07]直到散场时突然亮起灯\n[00:22.64]字幕定格在某某出品和发行\n[00:26.17]我目送他们行色匆匆\n[00:29.74]像个自不量力的复读生\n[00:33.28]完不成金榜题名的使命\n[00:37.17]命不是猜剪刀石头布的决定\n[00:40.99]那么任性\n[00:44.52]我吹过你吹过的晚风\n[00:48.15]那我们算不算 相拥\n[00:51.60]可如梦初醒般的两手空空\n[00:55.30]心也空\n[00:58.85]我吹过你吹过的晚风\n[01:02.47]是否看过同样 风景\n[01:05.91]像扰乱时差留在错位时空\n[01:09.65]终是空 是空\n[01:30.74]数不完见证许愿的繁星\n[01:34.16]没灵验谁来安慰坏心情\n[01:37.92]十字路口闪烁不停的信号灯\n[01:41.34]有个人显然心事重重\n[01:45.01]三个字只能说给自己听\n[01:48.54]仰着头不要让眼泪失控\n[01:52.25]哪里有可以峰回路转的宿命\n[01:56.06]我不想听\n[01:59.68]我吹过你吹过的晚风\n[02:03.34]那我们算不算 相拥\n[02:06.83]可如梦初醒般的两手空空\n[02:10.55]心也空\n[02:13.89]我吹过你吹过的晚风\n[02:17.67]是否看过同样 风景\n[02:21.15]像扰乱时差留在错位时空\n[02:24.87]终是空 是空\n[02:32.05]我吹过你吹过的晚风\n[02:35.55]空气里弥漫着 心痛\n[02:39.04]可我们最后在这错位时空\n[02:42.68]终成空\n[02:46.28]我吹过你吹过的晚风\n[02:49.93]空气里弥漫着 心痛\n[02:53.33]可我们最后在这错位时空\n[02:57.04]终成空 成空'
        },
        {
            name: '错位时空',
            artist: '韩可可',
            url: 'https://iayay.com/yun/music/gfktxds/%E9%94%99%E4%BD%8D%E6%97%B6%E7%A9%BA-%E9%9F%A9%E5%8F%AF%E5%8F%AF.mp3',
            cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F19844ff6f7eeac4c384f4146caa93719c6d284c3.png&refer=http%3A%2F%2Fi1.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653907338&t=37f3bc595a835692510260875aad1924',
            lrc:'[00:00.55]韩可可 - 错位时空(女版)\n[00:02.22]作词：夜半空寂凉\n[00:03.34]作曲：夜半空寂凉\n[00:17.48]我吹过你吹过的晚风\n[00:21.38]感受你曾感受的心痛\n[00:25.35]孤独的夜望着天空\n[00:29.35]眼泪都失控\n[00:33.41]你存在我存在的时空\n[00:37.31]还来不及对你说保重\n[00:41.37]越是怀念越是心痛\n[00:45.27]你是否也懂\n[00:49.32]回忆总是不分轻重\n[00:53.33]我也想过有始有终\n[00:57.32]曾经你也为我感动\n[01:01.23]为我而心动\n[01:05.43]我也试着慢慢接受\n[01:09.24]试着习惯没你以后\n[01:13.29]只是偶尔望着星空\n[01:17.30]迷失在梦中\n[01:37.47]回忆总是不分轻重\n[01:41.32]我也想过有始有终\n[01:45.33]曾经你也为我感动\n[01:49.28]为我而心动\n[01:53.38]我也试着慢慢接受\n[01:57.28]试着习惯没你以后\n[02:01.34]只是偶尔望着星空\n[02:05.33]迷失在梦中\n[02:11.61]我吹过你吹过的晚风\n[02:15.46]感受你曾感受的心痛\n[02:19.35]孤独的夜望着天空\n[02:23.41]眼泪都失控\n[02:27.46]你存在我存在的时空\n[02:31.36]还来不及对你说保重\n[02:35.43]越是怀念越是心痛\n[02:39.39]你是否也懂'
        },
        {
            name: '像我这样的人',
            artist: '毛不易',
            url: 'https://iayay.com/yun/music/gfktxds/%E5%83%8F%E6%88%91%E8%BF%99%E6%A0%B7%E7%9A%84%E4%BA%BA---%E6%AF%9B%E4%B8%8D%E6%98%93.mp3',
            cover: 'https://img1.baidu.com/it/u=4114335626,247267422&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
            lrc:'[00:00.17]毛不易 - 像我这样的人 (Live)\n[00:00.98]作词：毛不易\n[00:01.18]作曲：毛不易\n[00:01.39]编曲：郑楠\n[00:01.54]音乐总监：谭伊哲\n[00:01.79]乐队：TYZ乐队\n[00:02.05]乐队队长：黄竣琮\n[00:02.30]键盘：韩韵、杨猛\n[00:02.55]鼓手：胡宇飞\n[00:02.76]吉他：黄竣琮、Andrew Moore (加拿大)\n[00:03.26]贝斯：Ryan Bradetich (美国)\n[00:03.57]和声：宋豪、简绮琴、刘芮嘉\n[00:03.98]打击乐：Gman\n[00:04.18]电脑工程：郭丁尘\n[00:04.99]音乐统筹：吕易秋\n[00:16.31]像我这样优秀的人\n[00:19.97]本该灿烂过一生\n[00:23.88]怎么二十多年到头来\n[00:27.74]还在人海里浮沉\n[00:31.65]像我这样聪明的人\n[00:35.45]早就告别了单纯\n[00:39.36]怎么还是用了一段情\n[00:43.22]去换一身伤痕\n[00:47.28]像我这样迷茫的人\n[00:50.88]像我这样寻找的人\n[00:54.79]像我这样碌碌无为的人\n[00:58.81]你还见过多少人\n[01:21.90]像我这样庸俗的人\n[01:25.71]从不喜欢装深沉\n[01:29.62]怎么偶尔听到老歌时\n[01:33.38]忽然也晃了神\n[01:37.34]像我这样懦弱的人\n[01:41.25]凡事都要留几分\n[01:45.11]怎么曾经也会为了谁\n[01:48.81]想过奋不顾身\n[01:52.88]像我这样迷茫的人\n[01:56.79]像我这样寻找的人\n[02:00.60]像我这样碌碌无为的人\n[02:04.41]你还见过多少人\n[02:08.47]像我这样孤单的人\n[02:12.23]像我这样傻的人\n[02:16.04]像我这样不甘平凡的人\n[02:20.00]世界上有多少人\n[02:25.99]像我这样莫名其妙的人\n[02:30.26]会不会有人心疼'
        }
    ]
});

function mus_change(){
    if(document.getElementById('music_self').style.display=="none"){
        document.getElementById('music_li').style.display="none"
        document.getElementById('music_self').style.display="block"
        document.getElementById('mus_heart').style.display="none"
        document.getElementById('mus_heartbeat').style.display="inline"
    }else{
        document.getElementById('music_li').style.display="block"
        document.getElementById('music_self').style.display="none"
        document.getElementById('mus_heartbeat').style.display="none"
        document.getElementById('mus_heart').style.display="inline"
    }
}
