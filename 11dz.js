let rand = document.getElementById( 'rand');
let prNum = Math.floor((Math.random()*15)+1);
let num = document.getElementById('mynum');
let out = document.getElementById( 'out');
 cont = 2
function f1() {
    if (cont > 0) {
        let num = mynum.value;
        if (num > prNum) {
            out.innerHTML = "ПЕРЕЛЁТ";
        }
        else if (num < prNum) {
            out.innerHTML = "НЕ ДОЛЁТ";
        }
        else {
            out.innerHTML = "ТОЧНО В ЯБЛОЧКО!";
        }
        document.getElementById('cont').innerHTML = "ОСТАЛОСЬ ЯДЕР:" + cont;
        cont = cont - 1;
    }
        else {
            alert("У ТЕБЯ БОЛЬШЕ НЕТ ЯДЕР, ПОПРОБУЙ В ДРУГОЙ РАЗ");
            location.reload();
    }
}
rand.onclick = f1