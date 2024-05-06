const containerTable = document.querySelector('.container-table')
const input = document.querySelector('#inputText')
const addingButton = document.querySelector('#addingButton')
const clearButton = document.querySelector('#clearAll')

function addNewWord() {

const inputValue = input.value.trim()

    if(inputValue === '') {
        alert('Вы ничего не ввели!')   
    } else {
        const rusDiv = document.createElement('div')
        const index = document.createElement('span')
        const engDiv = document.createElement('div')
        const rowDiv = document.createElement('div')
        const crossImg = document.createElement('img')
        crossImg.src = '/icons/Group 7.svg'

        rowDiv.className = 'row'
        rusDiv.className = 'rus-cell'
        engDiv.className = 'translit-cell'
        index.className = 'index'

            

        const allIndexes = document.querySelectorAll('.index')

        rusDiv.innerText = inputValue
        index.innerText = allIndexes.length + 1

        engDiv.innerText = transliterate(inputValue)


        crossImg.addEventListener ('click', () => {
            crossImg.closest('.row').remove()

        })

        

        if (inputValue.length > 7) {
            const slisedRusText = inputValue.slice(0,7) + '...'
            const slisedEngText = transliterate(inputValue).slice(0,7) + '...'

            rusDiv.innerText = slisedRusText
            engDiv.innerText = slisedEngText

            const rusTooltip = document.createElement('div')
            rusTooltip.className = 'tooltip';
            rusTooltip.innerText = inputValue 
        
            rusDiv.addEventListener('mouseenter', () => {
                rusTooltip.style.display = 'block'
            })
        
            rusDiv.addEventListener('mouseleave', () => {
                rusTooltip.style.display = 'none'
            })
        
            rusDiv.prepend(rusTooltip)


            const engTooltip = document.createElement('div')
            engTooltip.className = 'tooltip';
            engTooltip.innerText = transliterate(inputValue) 
        
            engDiv.addEventListener('mouseenter', () => {
                engTooltip.style.display = 'block'
            })
        
            engDiv.addEventListener('mouseleave', () => {
                engTooltip.style.display = 'none'
            })
            engDiv.prepend(engTooltip)
            
            
        }

        rusDiv.prepend(index)
        containerTable.append(rowDiv)

        if (rowDiv.previousElementSibling) {
            rowDiv.style.borderTop = '1px solid black';
        }

        rowDiv.append(rusDiv, engDiv)
        engDiv.append(crossImg)

        input.value = ''
    }

}

addingButton.addEventListener('click', addNewWord)


input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        addNewWord()
    }
})


clearButton.addEventListener('click', () => {
    window.location.reload()
})

function transliterate(text) {

  const transliterationMap = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "E",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "Kh",
    Ц: "Ts",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Shch",
    Ъ: "",
    Ы: "Y",
    Ь: "'",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };

  return text
    .split("")
    .map((char, index) => {
      if (index === 0) {
        return transliterationMap[char] || char;
      } else {
        return transliterationMap[char.toLowerCase()] || char;
      }
    })
    .join("");

  }





