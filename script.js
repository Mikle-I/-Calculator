 function insert(num){
     document.querySelector('.display_box').value =
      document.querySelector('.display_box').value + num;
 }
const one = document.querySelector('.one');
      two = document.querySelector('.two'),
      three = document.querySelector('.tre'),
      foor = document.querySelector('.foor'),
      five = document.querySelector('.five'),
      six = document.querySelector('.six'),
      seven = document.querySelector('.seven'),
      eat = document.querySelector('.eat'),
      nine = document.querySelector('.nine'),
      noll = document.querySelector('.null'),
      leftskoba = document.querySelector('.leftskoba'),
      rightskoba = document.querySelector('.rightskoba'),
      dot = document.querySelector('.dot');

leftskoba.addEventListener('click', () =>{
    insert('(');
});
rightskoba.addEventListener('click', () =>{
    insert(')');
});


noll.addEventListener('click', () =>{
    insert('0');
});

dot.addEventListener('click', () =>{
    insert('.');
});
one.addEventListener('click', () =>{
    insert('1');
});

two.addEventListener('click', () =>{
    insert('2');
});

three.addEventListener('click', () =>{
    insert('3');
});
foor.addEventListener('click', () =>{
    insert('4');
});

five.addEventListener('click', () =>{
    insert('5');
});

six.addEventListener('click', () =>{
    insert('6');
});

seven.addEventListener('click', () =>{
    insert('7');
});

eat.addEventListener('click', () =>{
    insert('8');
});

nine.addEventListener('click', () =>{
    insert('9');
});


const del = document.querySelector('.del'),
      umn = document.querySelector('.umn'),
      minus = document.querySelector('.minus'),
      plus = document.querySelector('.plus');

del.addEventListener('click', () =>{
    insert('/');
    });

umn.addEventListener('click', () =>{
    insert('*');
    });
minus.addEventListener('click', () =>{
    insert('-');
    });
    
plus.addEventListener('click', () =>{
        insert('+');
        });

function clean (){
    document.querySelector('.display_box').value ='';
}

const cleaninig = document.querySelector('.knopkaAC'),
      ravno = document.querySelector('.ravno');

cleaninig.addEventListener('click', () => {
    clean();
});

function calc (){
 let total = document.querySelector('.display_box').value;
if (total) {
    document.querySelector('.display_box').value = eval(total);
}
};

ravno.addEventListener('click', () => {
    calc();
});

const backspase= document.querySelector('.knopkaBS');

function back1 (){
    let total = document.querySelector('.display_box').value;
    if (total) {
        document.querySelector('.display_box').value = total.substring(0, total.length-1);
    }
};
backspase.addEventListener('click', () => {
    back1();
});

