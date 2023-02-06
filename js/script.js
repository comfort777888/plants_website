const buttons = document.querySelectorAll('.btn');
const gardens=document.querySelectorAll('.garden');
const pictures = document.querySelectorAll('.service_picture')

function numActiveButtons() {
    let count=1
    for (const button of buttons) {
        if (button.classList.contains("active")) {
         count++
        } 
    }  
    return count
    }

buttons.forEach(el => el.addEventListener("click", ()=> {
if (el.classList.contains("active")) {
    el.classList.remove("active")
    count=numActiveButtons()
    if (count===1) {
        console.log("Please")
        pictures.forEach((picture)=> {
            picture.style.filter ='none'
        })
    } else {
        blurImg()
    }
} else {
        count = numActiveButtons()
        if (count <=2) { 
            el.classList.add("active")
            blurImg()
        } else {
            clearActiveClasses()
            pictures.forEach((el) => { 
                el.style.filter='none'
            })
            count=0
        }
    }
}))

function clearActiveClasses() {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
}

function blurImg() { 
    let arr = []
    for (const button of buttons) {
        if (button.classList.contains("active")) {
            var classNameArray=button.className.split(" ")
            for (const picture of pictures) {
                if (picture.classList.contains(classNameArray[1])) {
                arr.push(picture)
                } 
            }
        }
    }
    pictures.forEach((picture) => {
    picture.style.filter='blur(4px)'
    })
    arr.forEach((el)=> {
    el.style.filter ='none'
    })
}

document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.rectangle_7');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');
			self.classList.toggle('open');

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = 108 + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});
 
