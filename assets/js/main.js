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
            index: 0

	      },

		   methods:{
			
            changePhotoLeft: function (){

               if( this.index == 0 ){
                  return this.index = this.images.length;
               }else{
                  return this.index--;
               }

            },
		
            changePhotoRight: function (){

               if( this.index >= this.images.length ){
                  return this.index = 0;
               }else{
                  return this.index++;
               }

            }
		   }
	}
);