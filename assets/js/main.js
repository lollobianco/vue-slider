var app = new Vue(
	{
	   el: '#app',

	      data:{

            images: [ 
               
               {image: './assets/img/1-990-600x300.jpg'},
               {image: './assets/img/193-600x300.jpg'},
               {image: './assets/img/403-600x300.jpg'},
               {image: './assets/img/517-600x300.jpg'},
               {image: './assets/img/8-600x300.jpg'},
               {image: './assets/img/880-600x300.jpg'},

            ],

            index: 0,

	      },

         mounted(){

            //Entra quando l'applicativo vue ha caricato el: #app
            this.attivaIntervallo();

         },

		   methods:{
			
            changePhotoLeft: function (){

               if( this.index == 0 ){      
                  console.log (this.index)            
                  return this.index = this.images.length - 1;
               } else{
                  
                  console.log (this.index)
                  return this.index--;

               }
                  

            },
		
            changePhotoRight: function (){

               this.index++;
               console.log (this.index)

               if( this.index >= this.images.length ){
                  return this.index = 0;
               }

            },


            //Funzione che cambia immagine automaticamente

            attivaIntervallo(){

               setInterval(() => {this.changePhotoRight()}, 2700)

            }

		   }
	}
);