const fibonacci = function(num) {
  if (!Number.isInteger(num) 
    || Number.isNaN(num) 
    || num <= 0) {
    return "OOPS"
  }
  
  if (num === 1 || num === 2) {
    return 1
  }

  let current = 1
  let prev = 1
  for (let i = 2; i < num; i++) {
    const temp = current
    current += prev
    prev = temp
  }
  return current
};

// Do not edit below this line
module.exports = fibonacci;
