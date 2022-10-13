var ninja = 'Hazel Hoi Ching Chan';
var firstNm = ninja.substring(0, ninja.indexOf(' '));
var lastNm = ninja.substring(ninja.indexOf(' ') + 1);
var lastNmInitial = lastNm.substring(0, 1);

var studentScope = angular.element(document.getElementsByClassName('body')).scope();
console.log(studentScope);
