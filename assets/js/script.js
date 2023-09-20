
let slider1 = document.querySelector('.row-1 .col-right .slider-basic');
let slider2 = document.querySelector('.row-1 .col-left .slider-basic');

let slider3 = document.querySelector('.row-2 .slider-csl');
let slider4 = document.querySelector('.row-3 .slider-csl');
let slider5 = document.querySelector('.row-4 .infography');
let header = document.querySelector('header .row-bottom');

slider1.currentIndex = 0;
slider2.currentIndex = 0;

// Slider Csl
function moveSliderCsl(slider) {
	
	let sliderRightBtn = slider.querySelector(".btn-right");
	let sliderLeftBtn = slider.querySelector(".btn-left");
	let slides = slider.querySelector(".container");

	if(sliderRightBtn && sliderLeftBtn) {
		sliderRightBtn.addEventListener('click', e=> {
			return slides.scrollLeft += 300;
		});
	
		sliderLeftBtn.addEventListener('click', e=> {
			return slides.scrollLeft -= 300;
		});
	}


	let sliderBtn = slider.querySelectorAll(".btn-item");

	if(sliderBtn) {
		let activeIndex;

		sliderBtn.forEach((btn, clickedIndex)=> {
			btn.addEventListener('click', ()=> {
				sliderBtn.forEach((b, i)=> {
					if(b.classList.contains('active')) {
						activeIndex = i;
					}
					b.classList.remove('active');
				})

				btn.classList.add('active');
				
				if(activeIndex < clickedIndex) {
					return slides.scrollLeft -= 500;
				} else {
					return slides.scrollLeft += 500;
				}

			});
		});
	}

};

// Slider Basic
function activeSlide(index, slider) {
	let slides = slider.querySelectorAll('.slide');
	let slideBtns = slider.querySelectorAll('.slide-btn');

	slides.forEach(slide=> {
		slide.classList.remove('active');
	});

	slideBtns.forEach(btn=> {
		btn.classList.remove('active');
	});

	slides[index].classList.add('active');
	slideBtns[index].classList.add('active');

	slider.currentIndex = index;
}


// Slider-1
slider1.querySelectorAll(".slide-btn").forEach((btn, index)=> {
	btn.addEventListener('click', ()=> {
		activeSlide(index, slider1)
	});
});

// Slider-2
slider2.querySelectorAll(".slide-btn").forEach((btn, index)=> {
	btn.addEventListener('click', ()=> {
		activeSlide(index, slider2)
	});
});

// Slider-3
moveSliderCsl(slider3);
moveSliderCsl(slider4);
moveSliderCsl(slider5);



// Header Scroll
document.addEventListener('scroll', e=> {
	header.classList.toggle("scroll", scrollY > 100);
});



// Automatic Slide-Basic Show
setInterval(()=> {

	slidesSlider1 = slider1.querySelectorAll('.slide');
	slidesSlider2 = slider2.querySelectorAll('.slide');

	if(slider1.currentIndex >= slidesSlider1.length) {
		slider1.currentIndex = 0;
	}else if(slider2.currentIndex >= slidesSlider2.length) {
		slider2.currentIndex = 0;
	}

	slideBtnsSlider1 = slider1.querySelectorAll('.slide-btn');
	slideBtnsSlider2 = slider2.querySelectorAll('.slide-btn');

	slidesSlider1.forEach(slide=> {
		slide.classList.remove('active');
	});
	slidesSlider2.forEach(slide=> {
		slide.classList.remove('active');
	});


	slideBtnsSlider1.forEach(btn=> {
		btn.classList.remove('active');
	});
	slideBtnsSlider2.forEach(btn=> {
		btn.classList.remove('active');
	});

	slidesSlider1[slider1.currentIndex].classList.add('active');
	slideBtnsSlider1[slider1.currentIndex].classList.add('active');
	slider1.currentIndex++;

	slidesSlider2[slider2.currentIndex].classList.add('active');
	slideBtnsSlider2[slider2.currentIndex].classList.add('active');
	slider2.currentIndex++;

}, 3000);