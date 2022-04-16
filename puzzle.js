function sayHello(){
  var response = prompt("What's your name?");
  alert("Hello " + response + ", welcome to my puzzle,have a nice day!");
}
sayHello();

function dateState() {
  var date = new Date();
  if (date.getHours() >= 7 && date.getHours() < 12) {
	   return alert("上午好")
  }
  else if (date.getHours() >= 12 && date.getHours() < 18) {
		return alert("下午好")
	}
  else {
		return alert("晚上好")
	}
}
dateState();

function score(){
	var scores=0;
	var questions=document.getElementsByClassName("question")
	for(var i=0;i<questions.length;i++){
		var count=0;
		var flag=1;
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++){
			if(answer[j].checked){
				if(answer[j].value*1<0){
					flag=0;
					break;
				}
				else
					count+=answer[j].value*1;
			}
		}
		if(flag==1)
			scores+=count;
	}
	alert("你的得分是 "+scores);
}

function showwrong(){
	var questions=document.getElementsByClassName("question")
	for(var i=0;i<questions.length;i++){
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++){
			if(answer[j].checked){
				if(answer[j].value*1<=0){
					x=document.getElementById(i+1);
					x.style.color="red";
				}
			}
		}
	}
	for(var i=0;i<questions.length;i++){
			var answer=document.getElementsByName("answer"+(i+1));
			for(var j=0;j<answer.length;j++){
				if(!answer[j].checked){
					if(answer[j].value*1>0){
						answer[j].style.backgroundColor="red";
					}
				}
			}
		}
}

function displayjiexi1(){
  document.getElementById("demo1").style.display="none";
}
displayjiexi1();
function appearjiexi1(){
  var y = document.getElementById("demo1");
  y.style.display="block";
  y.style.fontSize = "20px";
  y.style.backgroundColor = "#d7bf99";
}

function displayjiexi2(){
  document.getElementById("demo2").style.display="none";
}
displayjiexi2();
function appearjiexi2(){
  var y = document.getElementById("demo2");
  y.style.display="block";
  y.style.fontSize = "20px";
  y.style.backgroundColor = "#d7bf99";
}

function displayjiexi3(){
  document.getElementById("demo3").style.display="none";
}
displayjiexi3();
function appearjiexi3(){
  var y = document.getElementById("demo3");
  y.style.display="block";
  y.style.fontSize = "20px";
  y.style.backgroundColor = "#d7bf99";
}

function displayjiexi4(){
  document.getElementById("demo4").style.display="none";
}
displayjiexi4();
function appearjiexi4(){
  var y = document.getElementById("demo4");
  y.style.display="block";
  y.style.fontSize = "20px";
  y.style.backgroundColor = "#d7bf99";
}

function displayjiexi5(){
  document.getElementById("demo5").style.display="none";
}
displayjiexi5();
function appearjiexi5(){
  var y = document.getElementById("demo5");
  y.style.display="block";
  y.style.fontSize = "20px";
  y.style.backgroundColor = "#d7bf99";
}

function myfeelings(){
  console.log("亲爱的小唐老师，感谢你百忙之中能来阅读这段话，这次网页制作的作业让我学会了很多，我观察了您给的三个示例，分别选取了第二个示例中的显示早午晚上好，标错误答案，第三个示例中的显示答案融入我的这次作业，虽然思路是借鉴的，但是我真真实实的有去网上找这些东西怎么写！下附参考代码来源：显示不同时间的：https://www.veryhuo.com/a/view/26559.html；错题标红的：https://wenku.baidu.com/view/06f0bdce6194dd88d0d233d4b14e852458fb3919.html；隐藏答案的：https://wenku.baidu.com/view/160cb23ac181e53a580216fc700abb68a982add4.html。以及还有一些想和小唐老师研讨的问题，最重要的是我显示答案的这个地方，因为想不出更好的办法只能一道题对一个按钮，如果有更充裕的时间，我会继续研究如果用一个按钮同时出现5个答案！总之非常感谢这次作业带给我更多的代码知识。最后祝小唐老师工作顺利，天天开心！");
}
myfeelings();
