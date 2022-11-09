
let calc = document.querySelector('.calc');
let disp = document.querySelector('.calc__display');
let flag = false;
console.log(flag);
calc.addEventListener('click', function (ev) {
	let value = ev.target.innerText;
	console.log(value);

	if (value == 'C') {
		disp.value = '';
		flag = false;
	}
	else if (value == '=') {
		disp.value = eval(disp.value);
		flag = true;
	}
	else {
		if (flag == true && value != '*' && value != '/' && value != '+' && value != '-') {
			disp.value = '';
			disp.value += value;
			flag = false;
			return 0;
		}
		else {
			disp.value += value;
			flag = false;
		}
		console.log(flag);
	}

});
