/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

move=0;
score=0;
hscore=0;
temp=0;
curr=0;
chance=16;
arr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
sum=0;
function swt(x){ // switching theme
    var link = document.getElementById('sw');
    if(link.getAttribute('href')==x){
      link.setAttribute('href', 'dark.css');
    } else link.setAttribute('href', x);


  }
function merge(){
    arr[p]=arr[i]*2;
    arr[i]=0;
    $("#a"+p+"").remove();
    $("#a"+i+"").html(arr[p]);
    ocls=$("#a"+i+"").attr("Class");
    ncls=$("#a"+i+"").attr("Class");
    $("#a"+i+"").removeClass(ocls);
    ncls=ncls.substr(6);
    ncls++;
    ncls="tile b"+ncls;
    $("#a"+i+"").addClass(ncls);
    curr=$("#a"+i+"").text();
    score=score+parseInt(curr);
    $("#a"+i+"").attr("id","a"+p+"");
}
boardc = function boardc(){
  chance=16;
  sum=0;
  if(arr[0]!=arr[1] && arr[0]!=arr[4]) chance--;
  if(arr[1]!=arr[0] && arr[1]!=arr[2] && arr[1]!=arr[5]) chance--;
  if(arr[2]!=arr[1] && arr[2]!=arr[3] && arr[2]!=arr[6]) chance--;
  if(arr[3]!=arr[2] && arr[3]!=arr[7]) chance--;
  if(arr[4]!=arr[0] && arr[4]!=arr[5] && arr[4]!=arr[8]) chance--;
  if(arr[5]!=arr[1] && arr[5]!=arr[4] && arr[5]!=arr[6] && arr[5]!=arr[9]) chance--;
  if(arr[6]!=arr[2] && arr[6]!=arr[5] && arr[6]!=arr[7] && arr[6]!=arr[10]) chance--;
  if(arr[7]!=arr[3] && arr[7]!=arr[6] && arr[7]!=arr[11]) chance--;
  if(arr[8]!=arr[4] && arr[8]!=arr[9] && arr[8]!=arr[12]) chance--;
  if(arr[9]!=arr[5] && arr[9]!=arr[8] && arr[9]!=arr[10] && arr[9]!=arr[13]) chance--;
  if(arr[10]!=arr[6] && arr[10]!=arr[9] && arr[10]!=arr[11] && arr[10]!=arr[14]) chance--;
  if(arr[11]!=arr[7] && arr[11]!=arr[10] && arr[11]!=arr[15]) chance--;
  if(arr[12]!=arr[8] && arr[12]!=arr[13]) chance--;
  if(arr[13]!=arr[9] && arr[13]!=arr[12] && arr[13]!=arr[14]) chance--;
  if(arr[14]!=arr[10] && arr[14]!=arr[13] && arr[14]!=arr[15]) chance--;
  if(arr[15]!=arr[11] && arr[15]!=arr[14]) chance--;
  for(i=0; i<16; i++){
      if(arr[i]>0)
        sum++;
    }
    if(sum>15 && sum<17 && chance==0){
        $("#score").attr("value", score);
        $("#board-go").css("display","flex");
        $("#board-go #nick").focus();
    }
    console.log(chance);
};
create = function create(){
    while(move===0){
      sel=Math.round(Math.random()*16);
      if(arr[sel]===0){
        $("#board").append('<div class="tile b1" id="a'+sel+'">'+2+'</div>');
        arr[sel]=2;
        move=1;
      }
    }
    move=0;
    if(score>=hscore){
        hscore=score;
    }
    $("#cs").text(score);
    $("#hs").text(hscore);
};
left = function left(){
        tboard=arr+"t";
        for(c=0; c<5; c++){
            for(i=15; i>0; i--){
                p=i-1;
                if(i%4!==0){
                    if(arr[p]===0){
                        $("#a"+i+"").attr("id","a"+p+"");
                        temp=arr[i];
                        arr[i]=0;
                        arr[p]=temp;
                    }
                    else if(arr[p]==arr[i]){
                        merge();
                    }
                }
            }
        }
        if(tboard!=arr+"t"){
            create();
            sum=0;
        }
        boardc();
    };
right = function right(){
        tboard=arr+"t";
        for(c=0; c<5; c++){
            for(i=0; i<16; i++){
                p=i+1;
                if(i%4!=3){
                    if(arr[p]===0){
                        $("#a"+i+"").attr("id","a"+p+"");
                        temp=arr[i];
                        arr[i]=0;
                        arr[p]=temp;
                    }
                    else if(arr[p]==arr[i]){
                        merge();
                    }
                }
            }
        }
        if(tboard!=arr+"t"){
            create();
            sum=0;
        }
        boardc();
    };
up = function up(){
        tboard=arr+"t";
        for(c=0; c<5; c++){
            for(i=0; i<16; i++){
                p=i-4;
                if(i>3){
                    if(arr[p]===0){
                        $("#a"+i+"").attr("id","a"+p+"");
                        temp=arr[i];
                        arr[i]=0;
                        arr[p]=temp;
                    }
                    else if(arr[p]==arr[i]){
                        merge();
                    }
                }
            }
        }
        if(tboard!=arr+"t"){
            create();
            sum=0;
        }
        boardc();
    };
down = function down(){
        tboard=arr+"t";
        for(c=0; c<5; c++){
            for(i=0; i<16; i++){
                p=i+4;
                if(i<12){
                    if(arr[p]===0){
                        $("#a"+i+"").attr("id","a"+p+"");
                        temp=arr[i];
                        arr[i]=0;
                        arr[p]=temp;
                    }
                    else if(arr[p]==arr[i]){
                        merge();
                    }
                }
            }
        }
        if(tboard!=arr+"t"){
            create();
            sum=0;
        }
        boardc();
    };
$(document).ready(function(){
    create();
    $("#ls").click(left);
    $("#rs").click(right);
    $("#us").click(up);
    $("#ds").click(down);
    $("#reset").click(function(){
        $("#board .tile").remove();
        move=0;
        sum=0;
        score=0;
        $("#board-go").css("display","none");
        arr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        create();
    });
    document.onkeydown = Key;
    function Key(e) {
        e = e || window.event;
        if (e.keyCode == '37') left()
        else if (e.keyCode == '38') up()
        else if (e.keyCode == '39') right()
        else if (e.keyCode == '40') down()
        $("#dev").html(chance+", "+sum);
    }
});

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/