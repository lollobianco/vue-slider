var app = new Vue(
	{
	   el: '#app',
	      data:{

            images: [ './assets/img/1-990-600x300.jpg', './assets/img/193-600x300.jpg', './assets/img/403-600x300.jpg', './assets/img/517-600x300.jpg', './assets/img/8-600x300.jpg', './assets/img/880-600x300.jpg',],


	      },
		   methods:{
			
            changePhotoUP: function (){

               this.index++;
               if( this.index > this.images.length ){
                 return this.index = 0;
               } 

            }
		
		   }
	}
);
 
 // - realizzare uno slider
       // - ci sono anche 2 frecce a sinistra e a destra dell'immagine momentanea dello slider che permettono di andare avanti e indietro tra le immagini
 
       //BONUS:
       // - nello slider ci sono dei pallini in basso al click dei pallini cambia l'immagine nello slider
       // - a ogni 3 sec l'immagine cambia automaticamente senza nessun click da parte nostra
 