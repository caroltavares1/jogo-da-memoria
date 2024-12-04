
// Function to shuffle the elements of an array using Fisher-Yates Shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements at indices i and j
    }
    return array;
}

/* Abre o modal da vitória */
function openModal() {
    let venceu = document.querySelector('.modal')
    venceu.classList.add('open')
}

function closeModal() {
    let venceu = document.querySelector('.modal')
    venceu.classList.remove('open')
}

function toggleAbobora() {
    /* Ao clicar no quadrado mostra ou esconde a imagem */
    document.querySelectorAll('.grid-item').forEach((div) => {
        let displays = []
        div.addEventListener('click', () => {

            let img = document.querySelector('.abobora' + div.classList[1])

            if (img.style.display === 'none' || img.style.display === '') {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }

            let aboboras = Array.from(document.querySelectorAll('.abobora'))
            aboboras.forEach(el => {
                displays.push(el.style.display)
            })

            let found = displays.find(el => (el === 'none' || el === ''))
            console.log(found)
            if (found === undefined) {
                let container = document.querySelector('.main-container')
                container.classList.add('filter')
                openModal()
            }

            displays = []
        })
    })
}

function startGame() {

    toggleAbobora() //deixa disponível a função de clicar no quadrado

    let grid = document.querySelector('.grid-container')
    grid.classList.toggle('transition')
    /* Sempre que a pàgina é atualizada são atribuidas imagens diferentes para cada quadrado */

    let lista = ['./assets/images/abobora1.svg', './assets/images/abobora2.svg', './assets/images/abobora3.svg',
        './assets/images/abobora4.svg', './assets/images/abobora5.svg', './assets/images/abobora6.svg',
        './assets/images/abobora7.svg', './assets/images/abobora8.svg', './assets/images/abobora9.svg',
        './assets/images/abobora1.svg', './assets/images/abobora2.svg', './assets/images/abobora3.svg',
        './assets/images/abobora4.svg', './assets/images/abobora5.svg', './assets/images/abobora6.svg',
        './assets/images/abobora7.svg', './assets/images/abobora8.svg', './assets/images/abobora9.svg'
    ]
    let newlista = shuffleArray(lista) //embaralha a lista de imagens
    let count = 0

    document.querySelectorAll('.abobora').forEach((ab) => {
        ab.src = newlista[count] //atribuição
        ab.style.display = 'none'
        count++
    })



}





document.querySelector('#start-bt')
    .addEventListener('click', () => {
        startGame()
    })

document.querySelector('#jogarNovamente')
    .addEventListener('click', () => {
        let container = document.querySelector('.main-container')
        container.classList.remove('filter')
        closeModal()
        startGame()
    })



