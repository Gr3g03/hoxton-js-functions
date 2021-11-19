function add(a, b) {
    let sum = a + b
    return sum
  }
  

function isEven(number) {
    const inputedNumber = Number(prompt(`please enter a number betwen 1-100`)) 
    const itsEven = inputedNumber
        if(inputedNumber% 2 === 0) return true
        return false 
}

function greet() {
    let name = prompt(`Please enter yor name`)
    alert (`welcome ${name}`)
  }
  
function isAnAdult() {
    let age = Number(prompt(`enter yor age`))
        if(age < 18) {
        let year = 2021
        let bornYear = year- age
        alert(` please come back in ${18 - (year - bornYear)} years`)}
            else 
        alert (`welcome`)
        return true
  }
  
function yearsToAdulthood() {
    let age = Number(prompt(`enter yor age`))
    if(age < 18) {
    let year = 2021
    let bornYear = year- age
    alert(` please come back in ${18 - (year - bornYear)} years`)}
        else 
    alert (`welcome`)
    return true
  }
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
function admit() {
    greet()
    isAnAdult()

    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
  }
  
  admit()