module.exports = function multiply(first, second) {
  this.first = +first;    
  this.second = +second;    
  let result = this.first * this.second;    
  return(result);
}
