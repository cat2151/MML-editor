var MmlUtils;
if (MmlUtils == null) {
  MmlUtils = (function() {
    // Private Static Member Value
    var _info = null;

    // Private Static Member Function
    var _init = function() {
      _info = {
      };
    }

    // Public Static Member Function
    return {
      // オクターブ反転
      reverseOctave: function(mml) {
        return mml.replace(/>/g, "MmlUtilsGT")
          .replace(/</g, "MmlUtilsLT")
          .replace(/MmlUtilsGT/g, "<")
          .replace(/MmlUtilsLT/g, ">")
        ;
      }
    }
  })();
}
