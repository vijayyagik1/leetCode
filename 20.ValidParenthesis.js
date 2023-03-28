
function isValid(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else {
        
        if (
          (char === ")" && stack[stack.length - 1] === "(") ||
          (char === "]" && stack[stack.length - 1] === "[") ||
          (char === "}" && stack[stack.length - 1] === "{")
        ) {
          
          stack.pop();
        } else {
         
          return false;
        }
      }
    }
  
    // If the stack is empty, the string is valid
    return stack.length === 0;
  }
  console.log(isValid("()"));