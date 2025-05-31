      const input = document.querySelector('input')

      const lowerCaseOutput = document.querySelector('#lowercase span')
      const upperCaseOutput = document.querySelector('#uppercase span')
      const camelCaseOutput = document.querySelector('#camelcase span')
      const pascalCaseOutput = document.querySelector('#pascalcase span')
      const snackCaseOutput = document.querySelector('#snackcase span')
      const kebabCaseOutput = document.querySelector('#kebabcase span')

      function capitalizeString(str){      
         return str[0].toUpperCase() + str.slice(1,str.length)
      }

      function camelCase(string){  //string is 'my name is neha'
         const lowerCaseString = string.toLowerCase()
         const wordsArray = lowerCaseString.split(' ') 
         const finalArray = wordsArray.map((word,i)=>{
            if(i === 0) return word
            return capitalizeString(word)
         })
       return finalArray.join(' ')
      }

      function pascalCase(string){  //string is 'my name is neha'
         const lowerCaseString = string.toLowerCase()
         const wordsArray = lowerCaseString.split(' ') 
         const finalArray = wordsArray.map((word,i)=>{
            return capitalizeString(word)
         })
       return finalArray.join(' ')
      }

      function snackCase(string){  //string is 'my name is neha'
         const snackString = string.toLowerCase()
         const wordsArray = snackString.split(' ')   
         return wordsArray.join('_')
      }

      function kebabCase(string){  //string is 'my name is neha'
         const snackString = string.toLowerCase()
         const wordsArray = snackString.split(' ')   
         return wordsArray.join('-')
      }
      
      function updateScreen(){
         lowerCaseOutput.innerText = input.value.toLowerCase()
         upperCaseOutput.innerText = input.value.toUpperCase() 
         camelCaseOutput.innerText = camelCase(input.value) 
         pascalCaseOutput.innerText = pascalCase(input.value) 
         snackCaseOutput.innerText = snackCase(input.value)
         kebabCaseOutput.innerText = kebabCase(input.value)
      }

      updateScreen()

 input.addEventListener('input',updateScreen)