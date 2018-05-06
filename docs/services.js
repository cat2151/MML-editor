angular.module('generatorApp')
.service('GeneratorService', [
function() {

  return {
    reverseOctave: MmlUtils.reverseOctave
  };

}]);
