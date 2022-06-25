AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        if (
          e.key === "ArrowUp" 
        ) {
            var entity = document.querySelector("#camera");
            entity.setAttribute("velocity","0 0 -2")
        }
        if (
            e.key === "ArrowDown" 
          ) {
              var entity = document.querySelector("#camera");
              entity.setAttribute("velocity","0 0 2")
          }
          var camera = document.querySelector("#camera").object3D;
      });
    },
  });