const app = new Vue({

        el:'#app',
        data:{
            
            currentIndex : 0,
            SLIDES: [
                {
                    imgUrl: 'img/01.jpg' , 
                    titleImg:'Svezia',
                    descriptionImg:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            
            
                },
                {
                    imgUrl: 'img/02.jpg' , 
                    titleImg:'Svizzera',
                    descriptionImg:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            
            
                },
                {
                    imgUrl: 'img/03.jpg' , 
                    titleImg:'Gran-bretagna',
                    descriptionImg:'Lorem ipsum.',
            
            
                },
                {
                    imgUrl: 'img/04.jpg' , 
                    titleImg:'Germania',
                    descriptionImg:'Lorem ipsum,cumque provident totam omnis.',
            
            
                },
                {
                    imgUrl: 'img/05.jpg' , 
                    titleImg:'Pardise',
                    descriptionImg:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            
            
                }
            ]
            
        },
        methods: 
        {
                    upSlide: function(){
                        if(this.currentIndex == 0){
                            this.currentIndex = this.SLIDES.length - 1;

                            console.log(this.SLIDES.length)
                        }
                        else  {
                            this.currentIndex--
                        }
                    },
                    downSlide: function(){
                       if(this.currentIndex == this.SLIDES.length - 1){
                            this.currentIndex = 0 ;           
                       }
                       else {
                           this.currentIndex++
                       }
                    }
                
        },
           
        })






