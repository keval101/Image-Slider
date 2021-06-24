const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 3000;
let slideInterval;

const nextSlide = () =>{
    //get current slide
    const current = document.querySelector('.current');
    //remove current class from current slide
    current.classList.remove('current');

    //check if nextSlide is avaiable
    if(current.nextElementSibling){
        //add current class in next slide
        current.nextElementSibling.classList.add('current')
    }else{
        slides[0].classList.add('current')
    }

    setTimeout(()=> current.classList.remove('current'))
}

const prevSlide = () =>{
    //get current slide
    const current = document.querySelector('.current');
    //remove current class from current slide
    current.classList.remove('current');

    //check if nextSlide is avaiable
    if(current.previousElementSibling){
        //add current class in previous slide
        current.previousElementSibling.classList.add('current');
    }else{
        slides[slides.length-1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
nextSlide();
});

prev.addEventListener('click', e => {
prevSlide();
});

if(auto){
    slideInterval = setInterval(nextSlide, intervalTime);
}