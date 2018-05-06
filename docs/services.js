angular.module('generatorApp')
.service('GeneratorService', [
function() {

  function reverseOctave(inputText) {
    return inputText.replace(/>/g, "MMLeditorGT")
      .replace(/</g, "MMLeditorLT")
      .replace(/MMLeditorGT/g, "<")
      .replace(/MMLeditorLT/g, ">")
    ;
  }

  return {
    reverseOctave: reverseOctave
  };

}]);
