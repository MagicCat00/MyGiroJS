const database = () => {
    const user = fetch('hero.json')
    const render = (data) => {
        const block = document.querySelector('.specialty-block-content')

        data.forEach(element => {
            let name = element.название;
            let type = element.тип;
            let ah = element.батарея;
            let wt = element.мощность;
            let imgSrc = element.фото;
            let desc = element.описание   

            const card = block.querySelectorAll('.spec-block-info')[0]
            const newCard = card.cloneNode(true);

            
            const img = newCard.querySelector('img')
            img.src = `${imgSrc}`

            const nameCard = newCard.querySelector('.spec-title')
            nameCard.textContent = `${name}`

            const descCard = newCard.querySelector('.spec-price')
            descCard.textContent = `${desc}`

            const typesCard = newCard.querySelector('.spec-type')
            typesCard.textContent = `Тип: ${type}`

            const ahCard = newCard.querySelector('.spec-ah')
            ahCard.textContent = `Батарея: ${ah}`

            const wtCard = newCard.querySelector('.spec-wt')
            wtCard.textContent = `Мощность: ${wt}`
            
            const typeCard = newCard.querySelector

            newCard.classList.remove('not-active')

            block.append(newCard)
        })
    };
    user
        .then(response => response.json())
        .then(data => {
           render(data);
        })

}
export default database