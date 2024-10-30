const contentLetterStart_active = "祝王亚楠生日快乐~天天开心❤ happpy birthday";
const mainContentLetterParts = [
    "祝王亚楠同学生日快乐！N多年后再一次送上祝福。上一次还是在初中，不知道你是否还有印象。",
    "那时，我记得借着理发的名义，出去给你买了个生日礼物。我想你不知道的是，好像那次是借钱买的，理发加上买礼物正好把钱花光了，哈哈哈。",
    "话不多说，希望你能在以后的日子里，天天开心，烦恼统统丢掉！成年人的世界很累，希望你能永远快乐下去，做个无忧的小女孩~"
];

let currentContentIndex = 0;

let imgStart = document.querySelector(".myAI");
imgStart.src = "img/happy.png";

let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/b4bbdb54b7152338d7143cb444a77f09.png";

const splitContentLetterStart_active = contentLetterStart_active.split("");
document.querySelector(".sticker").addEventListener("click", function () {
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active");
    setTimeout(() => {
        splitContentLetterStart_active.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index === contentLetterStart_active.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s");
                    }, 1000);
                }
            }, 50 * index);
        });
    }, 1000);
});

document.querySelector(".designBox").addEventListener("click", function () {
    showNextPart();
});

function showNextPart() {
    if (currentContentIndex < mainContentLetterParts.length) {
        document.querySelector(".mainContent").innerHTML = mainContentLetterParts[currentContentIndex];
        document.querySelector(".content").classList.add("actived");
        document.querySelector(".img1").style.opacity = 1;
        currentContentIndex++;
    } else {
        console.log("No more content to display.");
        // Optionally reset currentContentIndex to start again
        currentContentIndex = 0;
    }
}
// 添加点击事件到接收按钮
document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20);
            } else {
                createLight(40);
            }
        }, 500);
    }, 500);
});

document.querySelector('.recieve').addEventListener('click', () => {
    const audio = document.querySelector('audio');
    if (audio.muted) {
      audio.muted = false;
    }
  });
// 动画 Drop light
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"];

    for (var i = 0; i < count; i++) {
        var randomLeft = Math.floor(Math.random() * width);
        var randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add("snow");
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)];
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px";
        div.style.height = "0px";
        div.style.width = "0px";
        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px";
        div.style.marginTop = randomTop + "px";
        div.style.filter = "blur(" + blurLv[blur] + "px)";
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}
