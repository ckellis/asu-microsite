var c = document.getElementById('myCanvas');
	  var ctx = c.getContext('2d');
	  ctx.moveTo(0,65);
	  ctx.lineTo(50,65);
	  ctx.lineWidth = 2;
	  ctx.stroke();
	  
	  ctx.fillStyle="#000000";
	  ctx.beginPath();
	  ctx.moveTo(50,58);
	  ctx.lineTo(63,65);
	  ctx.lineTo(50,72);
	  ctx.closePath();
	  ctx.fill();
	  	  
	  ctx.moveTo(0,110);
	  ctx.lineTo(50,110);
	  ctx.lineWidth = 2;
	  ctx.stroke();
	  
	  ctx.fillStyle="#000000";
	  ctx.beginPath();
	  ctx.moveTo(50,103);
	  ctx.lineTo(63,110);
	  ctx.lineTo(50,117);
	  ctx.closePath();
	  ctx.fill();
	  
	  ctx.moveTo(0,155);
	  ctx.lineTo(50,155);
	  ctx.lineWidth = 2;
	  ctx.stroke();
	  
	  ctx.fillStyle="#000000";
	  ctx.beginPath();
	  ctx.moveTo(50,148);
	  ctx.lineTo(63,155);
	  ctx.lineTo(50,162);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();

	  
      var imageObj8 = new Image();

      imageObj8.onload = function() {
        ctx.drawImage(imageObj8, 80, 50);
      };
      imageObj8.src = 'images/maroonmark.png';
	  
      var imageObj9 = new Image();
	  
	  imageObj9.onload = function() {
        ctx.drawImage(imageObj9, 80, 95);
      };
      imageObj9.src = 'images/bluemark.png';
	  
	   var imageObj10 = new Image();
	  
	  imageObj10.onload = function() {
		ctx.drawImage(imageObj10, 80, 140);
      };
      imageObj10.src = 'images/orangemark.png';
	  
	  
	  
      var canvas = new Kinetic.Stage({
        container: 'container',
        width: 464,
        height: 384
      });

      var polyMap = new Kinetic.Layer();
      var linkMapLayer = new Kinetic.Layer();
	  
      var imageObj = new Image();
      imageObj.onload = function() {

            var imageMap = new Kinetic.Circle({
                x: 171,
         		y: 229,
          		radius: 10
            });
			
			var imageMap2 = new Kinetic.Circle({
                x: 332,
           		y: 162,
          		radius: 10
            });
			
			var imageMap3 = new Kinetic.Circle({
              x: 102,
              y: 299,
              radius: 10
            });
			
			var imageMap4 = new Kinetic.Circle({
              x: 230,
              y: 165,
              radius: 10
            });
			
			var imageMap5 = new Kinetic.Circle({
              x: 110,
              y: 100,
              radius: 10
            });
			
			var imageMap6 = new Kinetic.Circle({
              x: 385,
              y: 81,
              radius: 10
            });
			
			var imageMap7 = new Kinetic.Circle({
              x: 62,
              y: 325,
              radius: 10
            });
			
			var imageMap8 = new Kinetic.Circle({
              x: 145,
              y: 352,
              radius: 10
            });
			
			var imageMap9 = new Kinetic.Circle({
              x: 285,
              y: 11,
              radius: 10
            });
			
			var imageMap10 = new Kinetic.Circle({
              x: 436,
              y: 11,
              radius: 10
            });
			
		var imageObj1 = new Image();
		imageObj1.onload = function() {
        mapContext.drawImage(imageObj1, 161, 220);
		mapContext.drawImage(imageObj1, 220, 155);
		mapContext.drawImage(imageObj1, 320, 150);
		mapContext.drawImage(imageObj1, 90, 295);
      };
      imageObj1.src = 'images/maroonmark.png';
	  
      var imageObj2 = new Image();
	  imageObj2.onload = function() {
        mapContext.drawImage(imageObj2, 98, 93);
		mapContext.drawImage(imageObj2, 373, 73);
		mapContext.drawImage(imageObj2, 50, 315);
      };
      imageObj2.src = 'images/bluemark.png';
	  
	   var imageObj3 = new Image();
	  imageObj3.onload = function() {
        mapContext.drawImage(imageObj3, 270, -10);
		mapContext.drawImage(imageObj3, 420, -10);
		mapContext.drawImage(imageObj3, 130, 340);
      };
      imageObj3.src = 'images/orangemark.png';

            imageMap.on('click', function() {
             var newDiv = $(document.createElement('div')); 
				$(newDiv).html('<img alt="" src="images/picachohall.jpg"/>'+'<h4>'+'Facilities and Resources:'+'</h4>'+'GIT Faculty Offices');
				$(newDiv).dialog({
               autoOpen: true, 
               title: "Picacho Hall",
			   color:"black",
               hide: "puff",
               show : "slide",
			   position: [1150, 290]
               });
			   $(".ui-widget-header").css({"background":"#990033"});
            });
			
			imageMap2.on('click', function() {
				var newDiv = $(document.createElement('div')); 
				$(newDiv).html('<img alt="" src="images/union.jpg"/>'+'<h4>'+'Facilities and Resources:'+'</h4>'+'Bookstore'+'<br>'+'Cooley Ballrooms'+'<br>'+'Meeting Rooms');
				$(newDiv).dialog({
               autoOpen: true, 
               title: "Student Union",
			   color:"black",
               hide: "puff",
               show : "slide",
			   position: [1150, 290]
               });
			   $(".ui-widget-header").css({"background":"#990033"});
         });
			
			imageMap3.on('click', function() {
              var newDiv = $(document.createElement('div')); 
				$(newDiv).html('<img alt="" src="images/techcenter.jpg"/>'+'<h4>'+'Facilities and Resources:'+'</h4>'+'GIT Commercial Photography Studio'+'<br>'+'Technical Imaging Laboratory'+'<br>'+'Print and Imaging Laboratory'+'<br>'+'Start Up Labs');
				$(newDiv).dialog({
               autoOpen: true, 
               title: "Technology Center",
			   color:"black",
               hide: "puff",
               show : "slide",
			   position: [1150, 290]
               });
			   $(".ui-widget-header").css({"background":"#990033"});
         });
			
			imageMap4.on('click', function() {
              var newDiv = $(document.createElement('div')); 
				$(newDiv).html('<img alt="" src="images/center.jpg"/>'+'<h4>'+'Facilities and Resources:'+'</h4>'+'Computing Commons'+'<br>'+'Polytechnic Library');
				$(newDiv).dialog({
               autoOpen: true, 
               title: "Academic Center",
			   color:"black",
               hide: "puff",
               show : "slide",
			   position: [1150, 290]
               });
			   $(".ui-widget-header").css({"background":"#990033"});
            });
			
			imageMap5.on('click', function() {
              var newDiv = $(document.createElement('div')); 
				$(newDiv).html('<img alt="" src="images/quads.jpg"/>'+'<h5>'+'Facilities and Resources:'+'</h5>'+'Cashiering'+'<br>'+'University Housing'+'<br>'+'Parking and Transit Services');
				$(newDiv).dialog({
               autoOpen: true, 
               title: "Quads",
			   color:"black",
               hide: "puff",
               show : "slide",
			   position: [1150, 290]
               });
			   	$(".ui-widget-header").css({"background":"#008ED6"});
            });
			
			imageMap6.on('click', function() {
              var newDiv = $(document.createElement('div')); 
				$(newDiv).html('<img alt="" src="images/sdfc.jpg"/>'+'<h5>'+'Facilities and Resources:'+'</h5>'+'Campus Pool'+'<br>'+'Full-sized Gym'+'<br>'+'Personal Training');
				$(newDiv).dialog({
               autoOpen: true, 
               title: "Sun Devil Fitness Complex",
			   color:"black",
               hide: "puff",
               show : "slide",
			   position: [1150, 290]
               });
			   $(".ui-widget-header").css({"background":"#008ED6"});
            });
			
			imageMap7.on('click', function() {
              var newDiv = $(document.createElement('div')); 
				$(newDiv).html('<img alt="" src="images/tower.jpg"/>'+'<h5>'+'Facilities and Resources:'+'</h5>'+'Campus Landmark!');
				$(newDiv).dialog({
               autoOpen: true, 
               title: "Water Tower",
			   color:"black",
               hide: "puff",
               show : "slide",
			   position: [1150, 290]
               });
			   $(".ui-widget-header").css({"background":"#008ED6"});
            });
			
			imageMap8.on('click', function() {
              var newDiv = $(document.createElement('div')); 
				$(newDiv).html('<img alt="" src="images/stop1.jpg"/>'+'<h6>'+'Location:'+'</h6>'+'Lot 37 on Innovation Way South');
				$(newDiv).dialog({
               autoOpen: true, 
               title: "Shuttle Stop 1",
			   color:"black",
               hide: "puff",
               show : "slide",
			   position: [1150, 290]
               });
			   $(".ui-widget-header").css({"background":"#F47C00"});
            });
			
			imageMap9.on('click', function() {
              var newDiv = $(document.createElement('div')); 
				$(newDiv).html('<img alt="" src="images/stop2.jpg"/>'+'<h6>'+'Location:'+'</h6>'+'Phantom Hall on Innovation Way North');
				$(newDiv).dialog({
               autoOpen: true, 
               title: "Shuttle Stop 2",
			   color:"black",
               hide: "puff",
               show : "slide",
			   position: [1150, 290]
               });
			   $(".ui-widget-header").css({"background":"#F47C00"});
            });
			
			imageMap10.on('click', function() {
              var newDiv = $(document.createElement('div')); 
				$(newDiv).html('<img alt="" src="images/stop3.jpg"/>'+'<h6>'+'Location:'+'</h6>'+'SIM Building North of Mesquite Field');
				$(newDiv).dialog({
               autoOpen: true, 
               title: "Shuttle Stop 3",
			   color:"black",
               hide: "puff",
               show : "slide",
			   position: [1150, 290]
               });
			   $(".ui-widget-header").css({"background":"#F47C00"});
            });


            linkMapLayer.add(imageMap);
			linkMapLayer.add(imageMap2);
			linkMapLayer.add(imageMap3);
			linkMapLayer.add(imageMap4);
			linkMapLayer.add(imageMap5);
			linkMapLayer.add(imageMap6);
			linkMapLayer.add(imageMap7);
			linkMapLayer.add(imageMap8);
			linkMapLayer.add(imageMap9);
			linkMapLayer.add(imageMap10);

        canvas.add(polyMap);
        canvas.add(linkMapLayer);

       var mapContext = polyMap.getContext();
        mapContext.drawImage(imageObj, 0, 0);
      };
      imageObj.src = 'images/polymap.png';