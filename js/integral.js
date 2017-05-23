function Token(type, value) {
   this.type = type;
   this.value = value
}

function isDigit(ch) {
 return /\d/.test(ch);
}
function isLetter(ch) {
 return /[a-z]/i.test(ch);
}
function isOperator(ch) {
 return /\+|-|\*|\/|\^/.test(ch);
}
function isLeftParenthesis(ch) {
 return /\(/.test(ch);
}
function isRightParenthesis(ch) {
 return /\)/.test(ch);
}

function tokenize(str) {
  str.replace(/\s+/g, "");
  str=str.split("");
  
  var result=[];
  var letterBuffer=[];
  var numberBuffer=[];
  
str.forEach(function (char, idx) {
    if(isDigit(char)) {
      numberBuffer.push(char);
    } else if(char==".") {
      numberBuffer.push(char);
    } else if (isLetter(char)) {
      if(numberBuffer.length) {
        emptyNumberBufferAsLiteral();
        result.push(new Token("Operator", "*"));
      }
      letterBuffer.push(char);
    } else if (isOperator(char)) {
      if(numberBuffer.length) {
        emptyNumberBufferAsLiteral();
      }
      if(letterBuffer.length) {
        emptyLetterBufferAsVariables();
      }
      result.push(new Token("Operator", char));
    } else if (isLeftParenthesis(char)) {
      if(letterBuffer.length) {
        result.push(new Token("Function", letterBuffer.join("")));
        letterBuffer=[];
      } else if(numberBuffer.length) {
        emptyNumberBufferAsLiteral();
        result.push(new Token("Operator", "*"));
      }
      result.push(new Token("Left Parenthesis", char));
    } else if (isRightParenthesis(char)) {
      if(letterBuffer.length) {
        emptyLetterBufferAsVariables();
      } else if (numberBuffer.length) {
        emptyNumberBufferAsLiteral();
      }
      result.push(new Token("Right Parenthesis", char));
    }
  });
  if (numberBuffer.length) {
    emptyNumberBufferAsLiteral();
  }
  if(letterBuffer.length) {
    emptyLetterBufferAsVariables();
 }
 return result;
 
 function emptyLetterBufferAsVariables() {
        var l = letterBuffer.length;
        for (var i = 0; i < l; i++) {
          result.push(new Token("Variable", letterBuffer[i]));
          if(i< l-1) { //there are more Variables left
            result.push(new Token("Operator", "*"));
          }
        }
        letterBuffer = [];
 }
 
 function emptyNumberBufferAsLiteral() {
   result.push(new Token("Literal", numberBuffer.join("")));
   numberBuffer=[];
 }
 
}

var tokens = tokenize("45x^2 * 21y^2");

tokens.forEach(function(token, index) {
  console.log(index + " => " + token.type + "(" + token.value + ")");
});


