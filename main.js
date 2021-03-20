var switchInput = document.querySelector('.switch-input');
var applyBtn = document.querySelector('.apply-btn');
var submitBtn = document.querySelector('.submit');


switchInput.addEventListener('change', openPopup);
applyBtn.addEventListener('click', applyCustomCode);
submitBtn.addEventListener('click', storeValue);

function openPopup(){
	document.querySelector('.textarea').classList.toggle('open');
}

function storeValue(){
	var textareaWrap = document.querySelector('.textarea');
	var textarea = textareaWrap.querySelector('textarea');
	var codeType = textareaWrap.querySelector('select').value;
	var customCode = {
		codeType : codeType,
		code : textarea.value,
	};
	// console.log(codeType);
	// console.log(customCode);
	localStorage.removeItem('CustomCode');
	localStorage.setItem('CustomCode', JSON.stringify(customCode) );
	textareaWrap.classList.toggle('open');
}

function applyCustomCode(){
	var CustomCode = JSON.parse( localStorage.getItem('CustomCode') );
	var domTag;
	// console.log(CustomCode, typeof CustomCode);

	if('html' == CustomCode.codeType ){
		domTag = document.createRange().createContextualFragment(CustomCode.code);
		var domTag = document.createElement('style');
		domTag.innerText = CustomCode.code;
	}
	else if('css' == CustomCode.codeType ){
		var domTag = document.createElement('style');
		domTag.innerText = CustomCode.code;
	}
	else if('js' == CustomCode.codeType ){
		var domTag = document.createElement('script');
		domTag.innerText = CustomCode.code;
	}
	document.body.appendChild( domTag );
}
