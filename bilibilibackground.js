// ==UserScript==
// @name         bilibili���汳������������
// @namespace    https://github.com/wuxintlh/
// @namespace    https://space.bilibili.com/29058270
// @version      0.3.9.1
// @description  ����bվ���������˽ű���λ����ҳ�����½�
// @author       �@�ߥ�
// @match        *://*.bilibili.com/*
// @match        https://message.bilibili.com/*
// @match        https://t.bilibili.com/*
// @match        https://manga.bilibili.com/*
// @match        https://live.bilibili.com/blackboard/*
// @match        https://www.bilibili.com/page-proxy/*
// @exclude      https://live.bilibili.com/p/html/live-lottery/*
// @exclude      *//message.bilibili.com/pages/nav/index_new_pc_sync*
// @exclude      *//t.bilibili.com/pages/nav/index_new*
// @QQgroup      793513923
// @grant        none
// ==/UserScript==
set();
//sh����ɼ��߶�
var sh;
var bcurl = '';
var host = window.location.host;
var body = document.querySelector('body');
if (host != 'live.bilibili.com') {
    spandiv(body);
    spandivD(body);
} else {
    var main = document.querySelector('.live-room-app').querySelector('.z-app-content');
    if (main != undefined) {
        spandiv(main);
        spandivD(main);
    } else {
        spandiv(body);
        spandivD(body);
    }
};
window.addEventListener('scroll', function() {
    var span = document.querySelector('.SakuraSpans');
    var div = document.querySelector('.SakuraDivd');
    span.style.position = 'fixed';
    div.style.position = 'fixed';
})
var span = document.querySelector('.SakuraSpans');
//���������
span.addEventListener('mouseover', function() {
    animate(span, 0)
})
span.addEventListener('mouseout', function() {
    var div = document.querySelector('.SakuraDivd');
    if (div.style.display == 'block') {
        false
    } else {
        animate(span, -90)
    }
})
//������
span.addEventListener('click', function() {
    var div = document.querySelector('.SakuraDivd');
    if (div.style.display == 'none' && this.style.left == '0px') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
});
//��������
var button = document.querySelector('.SakuraButtonb')
button.addEventListener('click', function() {
    var input = document.querySelector('.SakuraInputi');
    bcurl = input.value;
    if (bcurl == '') {
        alert('��û�������κ�����!');
    } else {
        var div = document.querySelector('.SakuraBackground');
        //�ڱ��ش���bcurl
        window.localStorage.setItem('bcurl', bcurl);
        setbc(bcurl)
    }
});
var input = document.querySelector('.SakuraInputi');
input.addEventListener('focus', function() {
    if (input.value == '') {
        input.placeholder = '';
    }
});
input.addEventListener('blur', function() {
    if (input.value == '') {
        input.placeholder = '�����������ı���url';
    }
});
//��ҳ��ʱ���ñ���
function set() {
    var body = document.querySelector('body');
    var div = document.createElement('div');
    body.appendChild(div);
    div.className = 'SakuraBackground';
    var ifbcurl = window.localStorage.getItem('bcurl');
    //��ȡ��Ļ�߶�
    sh=document.documentElement.clientHeight;
    if (ifbcurl != '' && ifbcurl != null) {
        bcurl = window.localStorage.getItem('bcurl') //����ı���
        setbc(bcurl)
    } else {
        bcurl = 'https://i0.hdslb.com/bfs/album/eb65ae5ee6f66b6381090f5bee4fe6cbabfd6d0d.png'; //Ĭ�ϱ���
        setbc(bcurl)
    }
};
 
function setbc(bcurl) {
    var div = document.querySelector('.SakuraBackground')
    div.style.background = 'url("' + bcurl + '")'
    div.style.backfroundRepeat = 'no-repeat';
    div.style.position = 'fixed';
    div.style.backgroundPosition = 'center 0';
    div.style.backgroundSize = 'cover';
    div.style.zoom = '1';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.top = '0';
    div.style.left = '0';
    div.style.webkitBackgroundSize = 'cover';
    div.style.zIndex = '-1';
    div.className = 'SakuraBackground';
}
 
function spandiv(target) {
    var div = document.createElement('div');
    var span = document.createElement('span');
    var input = document.createElement('input');
    var button = document.createElement('button');
    target.appendChild(span);
    span.innerHTML = '�����������';
    span.style.color = 'rgb(220,20,60)';
    span.className = 'SakuraSpans';
    span.style.width = '100px';
    span.style.height = '22px';
    span.style.position = 'absolute';
    span.style.top = '940px';
    //������Ļ�߶ȸ���
    span.style.top = sh - 160 + "px";
    span.style.left = '-90px';
    span.style.backgroundColor = 'rgba(0,255,255,.5)';
    span.style.userSelect = 'none';
    span.style.zIndex = '10';
    span.style.fontSize = '15px';
    target.appendChild(div);
    div.className = 'SakuraDivd';
    div.style.backgroundColor = 'rgba(255,0,255,.5)'
    div.style.width = '400px';
    div.style.height = '60px';
    div.style.position = 'absolute';
    div.style.top = '902px'
    //������Ļ�߶ȸ���
    div.style.top = sh - 158 + "px";
    div.style.left = '100px';
    div.style.display = 'none';
    div.style.zIndex = '10';
    span.style.position = 'fixed';
    div.style.postion = 'fixed';
    div.appendChild(input);
    div.appendChild(button);
    input.type = 'text';
    input.placeholder = '�����������ı���url';
    input.style.width = '400px';
    input.className = 'SakuraInputi';
    button.innerHTML = '�����������';
    button.style.position = 'absolute';
    button.style.top = '30px';
    button.style.left = '150px';
    button.className = 'SakuraButtonb';
};
 
function spandivD(target) {
    var div = document.createElement('div');
    var body = document.querySelector('body');
    var span = document.createElement('span');
    var img = document.createElement('img');
    target.appendChild(span);
    span.innerHTML = '����鿴Ĭ�ϱ���';
    span.style.color = 'rgb(220,20,60)';
    span.className = 'SakuraDSpans';
    span.style.width = '140px';
    span.style.height = '22px';
    span.style.position = 'absolute';
    span.style.top = '900px';
    //������Ļ�߶ȸ���
    span.style.top = sh - 335 + "px";
    span.style.left = '-120px';
    span.style.backgroundColor = 'rgba(0,255,255,.5)';
    span.style.userSelect = 'none';
    span.style.zIndex = '10';
    span.style.fontSize = '15px';
    target.appendChild(div);
    div.className = 'SakuraDDivd';
    div.style.backgroundColor = 'rgba(255,255,255,.4)'
    div.style.width = '300px';
    div.style.height = '200px';
    div.style.position = 'absolute';
    div.style.top = '723px'
    //������Ļ�߶ȸ���
    div.style.top = sh-337 + "px";
    div.style.left = '140px';
    div.style.display = 'none';
    div.style.zIndex = '10';
    span.style.position = 'fixed';
    div.style.position = 'fixed';
    div.appendChild(img);
    img.src = 'https://i0.hdslb.com/bfs/article/d12fee446e2533206e0b04024c39e00a40c4bc4c.png@1320w_912h.webp';//��һ��
    img.style.width = '80px';
    img.style.height = '80px';
    img = document.createElement('img');
    div.appendChild(img);
    img.src = 'https://i0.hdslb.com/bfs/article/54616fdbb9bed40ea2cf8540f8517b11c9aa4ad3.jpg@1320w_868h.webp';//�ڶ���
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.marginLeft = '30px';
    img = document.createElement('img');
    div.appendChild(img);
    img.src = 'https://i0.hdslb.com/bfs/article/67a82d9f881dd41dd6709322595340bf9e6cf46a.jpg@1320w_788h.webp';//������
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.marginLeft = '30px';
    img = document.createElement('img');
    div.appendChild(img);
    img.src = 'https://i0.hdslb.com/bfs/album/658ab52e2d631f9d974112e2d5b4cab476e3f61d.jpg';//������
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.marginTop = '40px';
    img = document.createElement('img');
    div.appendChild(img);
    img.src = 'https://i0.hdslb.com/bfs/vc/c255f51c594cf6e724fb9f04975fae7e7eb8b876.jpg@2000w_1e.webp';//������
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.marginLeft = '30px';
    img.style.marginTop = '40px';
    img = document.createElement('img');
    div.appendChild(img);
    img.src = 'https://iknow-pic.cdn.bcebos.com/42a98226cffc1e17c52713054290f603738de96e?x-bce-process=image/resize,m_lfit,w_600,h_800,limit_1';//������
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.marginLeft = '30px'
    img.style.marginTop = '40px';
}
//�ṩĬ�ϱ������ĵĵ������
var spanD = document.querySelector('.SakuraDSpans');
window.addEventListener('scroll', function() {
    var spanD = document.querySelector('.SakuraDSpans');
    var divD = document.querySelector('.SakuraDDivd');
    spanD.style.position = 'fixed';
    divD.style.position = 'fixed';
})
spanD = document.querySelector('.SakuraDSpans');
//���������
spanD.addEventListener('mouseover', function() {
    animate(spanD, 0)
})
spanD.addEventListener('mouseout', function() {
    var divD = document.querySelector('.SakuraDDivd');
    if (divD.style.display == 'block') {
        false
    } else {
        animate(spanD, -120)
    }
})
//������
spanD.addEventListener('click', function() {
    var divD = document.querySelector('.SakuraDDivd');
    if (divD.style.display == 'none' && this.style.left == '0px') {
        divD.style.display = 'block';
    } else {
        divD.style.display = 'none';
    }
});
var divD = document.querySelector('.SakuraDDivd');
var img = divD.querySelectorAll('img');
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {
        var bcurl = this.src;
        setbc(bcurl);
        window.localStorage.setItem('bcurl', bcurl);
    })
};
//����Ƶ�г��ֵĹ�ע��ť�������ز���������͸����
setTimeout(function() {
    if (document.querySelector('.bilibili-player-popup-padding') && document.querySelector('.bilibili-player-popup-area')) {
        var father = document.querySelector('.bilibili-player-popup-padding');
        var son = document.querySelector('.bilibili-player-popup-area');
        father.removeChild(son);
    }
}, 2000) //����Ĭ��2s�ӳ�
//��Ƶ����
var cvhost = window.location.pathname;
var cvhostall = cvhost.split('/',-1);
cvhost = cvhostall[1];
setTimeout(function() {
    if ((document.querySelector('.bb-comment')&& cvhost == 'video')||(document.querySelector('.bb-comment')&& cvhost == 'bangumi')) {
        var span = document.createElement('span');
        body.appendChild(span);
        span.style.position = 'absolute';
        span.style.backgroundColor = 'rgba(0,255,255,.5)';
        span.innerHTML = '����л�������͸����';
        span.style.userSelect = 'none';
        span.style.width = '140px'
        span.style.left = '-120px';
        span.style.top = '800px';
        //������Ļ���ĸ߶�
        span.style.top = sh - 220 + "px";
        span.style.position = 'fixed';
        span.className = 'SakuraSpanBbChange';
        var div = document.querySelector('.bb-comment');
        div.style.background = 'rgba(255,192,203,0)';
    }
}, 5000) //����Ĭ��5s�ӳ�
setTimeout(function(){
    var spansbc = document.querySelector('.SakuraSpanBbChange');
    spansbc.addEventListener('click',function(){
        var div = document.querySelector('.bb-comment');
        if(div.style.background == 'rgba(255, 192, 203, 0.5)'&& spansbc.style.left == '0px'){
            div.style.background = 'rgba(255, 192, 203, 0)';
        }else{
            div.style.background = 'rgba(255, 192, 203, 0.5)';
        }
    })
    spansbc.addEventListener('mouseover',function(){
        animate(spansbc,0);
    })
    spansbc.addEventListener('mouseout',function(){
        animate(spansbc,-120);
    })
},6000)
//��ר��͸����
if (document.querySelector('.page-container') && cvhost == 'read') {
    var page = document.querySelector('.page-container');
    page.style.background = 'rgba(255,192,203,.4)';
    setTimeout(function() {
        var cont = document.querySelector('.bb-comment');
        cont.style.background = 'rgba(255,255,255,0)';
    }, 3000)
}
//ֱ���䶯̬��ҳ��͸����
if (host == 'live.bilibili.com') {
    setTimeout(function() {
        if (document.querySelector('.feed-card') != undefined) {
            var div = document.querySelector('.feed-card').querySelector('.content').querySelectorAll('.card');
            for (var i = 0; i < div.length; i++) {
                div[i].style.background = 'rgba(255,192,203,0)'
            }
        }
        if (div = document.querySelector('#link-footer-vm')) { //��ĳЩҳ����Ͳ��͸��
            div = document.querySelector('#link-footer-vm');
            div.style.background = 'rgba(255,192,203,.1)';
            var footer = document.querySelector('.link-footer');
            footer.style.backgroundColor = 'rgba(255,192,203,.1)';
        }
    }, 5000)
}
//����Ƶ�Ϸ��ĵ�����͸����
setTimeout(function() {
    if (document.querySelector('.mini-type')) {
        var div = document.querySelector('.mini-type');
        div.style.background = 'rgba(255,192,203, .1)';
        div = document.querySelectorAll('div')
        for (var i = 0; i < div.length; i++) {
            if (div[i].className == 'van-popover van-popper van-popper-vip' || div[i].className == 'van-popover van-popper van-popper-favorite' || div[i].className == 'van-popover van-popper van-popper-history' ||
                div[i].className == 'van-popover van-popper van-popper-upload' || div[i].className == 'van-popover van-popper van-popper-nav van-popper-avatar') {
                div[i].style.backgroundColor = 'rgba(255,192,203, .8)';
            }
        }
    }
}, 3000);
 
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                animate(obj, target, callback);
            }
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 10)
};