function janken() {
  var GU    = 1;
  var CHOKI = 2;
  var PA    = 3;
  
  function getHumHand() {
    var hum = prompt('半角数字で1~3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
    hum = parseInt(hum, 10);
    /* 文字列を10進数に変更 */
    if (hum !== GU && hum !== CHOKI && hum !== PA) {
      return undefined;
    } else {
      return hum;
    }
  }
  
  function getComHand() {
    return Math.floor(Math.random() * 3) + 1;
    /* 0~2+1で乱数 */
  }
  
  function getHandName(num) {
    switch (num) {
      case GU:
      return 'グー';
      case CHOKI:
      return 'チョキ';
      case PA:
      return 'パー';
    }
  }
  
  function getResult(com, hum) {
    if (hum === com) {
      return 'あいこです';
    } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
      return '勝ちです';
    } else {
      return '負けです';
    }
  }
  
  function getResultMsg(com, hum) {
    return getResult(com, hum) + 'コンピュータの＾手は「' + getHandName(com) + '」でした';
  }
  
  var hum = getHumHand();
  /* !hum は hum==0 */
  if (!hum) {
    alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
  } else {
    var com = getComHand();
    alert(getResultMsg(com, hum));
    return getResult(com, hum);
  }
}

var win = 0;
var isLose = false;

while(!isLose){
    var result = janken();
    if(result === 'あいこです'){
        continue;
    }
    if(result === '勝ちです'){
        win++;
        alert('ただいま「' + win + '」勝です');
        continue;
    }
    alert('連勝はストップしました。記録は「' + win + '」勝です');
    isLose = true;
}
