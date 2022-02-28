//slider_content - блок со слайдером
//services_item - карточки слайдера
//slider_block--active - класс активности

const slider = () => {
    const sliderBlock = document.querySelector('#hero')
    const slides = document.querySelectorAll('.services_item')

    let currentSlide = 0

    //стрелки
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass) 
    }
    
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }
    
    //переключение слайдера по кнопкам
    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()
       
        if (!e.target.closest('.services__arrow')) {
            return
        }
 
        prevSlide(slides, currentSlide, 'slider_block--active')
        if (e.target.closest('#arrow-right')) {
             currentSlide++
        } else if (e.target.closest('#arrow-left')) {
             currentSlide--
        } 

        //преодоление предела
        //slides.length - длина псевдомассива
         if (currentSlide >= slides.length) {
             currentSlide = 0
         }
 
         if (currentSlide < 0 ) {
             currentSlide = slides.length - 1
         }
 
        nextSlide(slides, currentSlide, 'slider_block--active')
    })
}

export default slider