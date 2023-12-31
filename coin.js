// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
    init: function () {
      for (var i = 1; i <= 50; i++) {
        //id
        var id = `ring${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    } ,
  
    createRings: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",position);
      
      ringEl.setAttribute("material","color","#EBB144");
      
      ringEl.setAttribute("geometry",{ primitive: "torus",radius: 13 });   
  
      terrainEl.appendChild(ringEl);
    }
  });
  
  