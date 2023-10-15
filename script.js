//your code here
const main=document.querySelector('main');
const resetButton=document.createElement('button');
const verifyButton=document.createElement('button');
const message=document.createElement('p');
let arr=['img1','img2','img3','img4','img5'];
let prev;
let count;
let current;
imNotRobot();

function imNotRobot(){
main.innerHTML='';
message.innerHTML='';
resetButton.remove();
verifyButton.remove();
arr.sort(()=>0.5-Math.random());
count=0;
let i;	
for(i=0; i<5; i++){
	const image=document.createElement('img');
	image.className=arr[i];
	image.id=i;
	image.addEventListener('click',(event) => check(event));
	main.appendChild(image);
}
const image=document.createElement('img');
image.className=arr[Math.floor(Math.random() *5)];
image.id=i;
image.addEventListener('click',(event) => check(event));
main.appendChild(image);
	
}

function check(event){

		event.target.classList.add('selected');
		if(!count){
			++count;
			prev=event.target.id
			resetButton.textContent='RESET'
			resetButton.id='reset'
			resetButton.addEventListener('click',imNotRobot);
			document.querySelector('body').insertBefore(resetButton,document.querySelector('body').lastElementChild);	
		}
	else if(count===1 && prev!==event.target.id){
			++count;
			current=event.target.id
			verifyButton.textContent='VERIFY';
			verifyButton.id='verify'
			verifyButton.addEventListener('click',(event)=>{
					event.target.remove()
				if(document.getElementById(prev).className===document.getElementById(current).className){

					
					message.textContent='You are a human. Congratulations!'
					message.id='para'
					document.querySelector('body').insertBefore(message,document.querySelector('body').lastElementChild)

				}
				else{

					
					message.textContent='We can\'t verify you as a human. You selected the non-identical tiles.'
					message.id='para'
					document.querySelector('body').insertBefore(message,document.querySelector('body').lastElementChild)

				}

				
			});
			document.querySelector('body').insertBefore(verifyButton,document.querySelector('body').lastElementChild);	
	}
	else {

		verifyButton.remove();
	}
	
		
}