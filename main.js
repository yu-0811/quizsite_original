(()=>{

// クイズの問題と答え
const quiz = [
  {
    question: "夏目漱石の後期三部作といえば、「彼岸過迄」、「行人」となに？",
    correct: "こころ",
  },

  {
    question: "フランス語で「猫の舌」という意味があるクッキーはなに？",
    correct: "ラングドシャ",
    correct2: "らんぐどしゃ"
  },

  {
    question: "日本の地図記号で、そろばんの玉をモデルにした記号で表される建物は何でしょう？",
    correct: "税務署",
    correct2: "ぜいむしょ"
  },
]

const quizLength = quiz.length
let quizIndex = 0 
let score = 0


// HTMLにクイズを反映させる
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
}
// 関数を呼び出す
setupQuiz();

const $btn = document.getElementById("js-button")

$btn.onclick = function OnButtonClick() {
  // ボタンがクリックされたときにvalue要素を取得する
  // (クリックされたときでないと空白のまま要素を取得してしまう)
  text = document.getElementById("js-answer").value;
  // 正誤判定
  if (quiz[quizIndex].correct === text) {
    alert("正解！")
    score = score + 10;
  } else if (quiz[quizIndex].correct2 === text) {
    alert("正解！")
    score = score + 10;
  } else {
    alert("不正解、、、正解は「 " + quiz[quizIndex].correct +" 」")
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz(quizIndex);
    document.getElementById("js-answer").value = ""
  } else {
    alert("よくがんばりました！あなたの得点は" + score + "点です！")
    location.reload();
  }
};

})();
