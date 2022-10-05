let tirukural={
    kural_num : 0, 
    kural_display_num:0, 

   // kurl_tml:"",
   // kurl_eng:"",

    //chap_nam_tml:"",
    //chap_nam_eng:"",
   // chap_grp_tml:"",
    //chap_grp_eng:"",

    section:0,
    random_num:0,
    query_url:"",

    initialize:function(){
        document.getElementById('kural_num').value =""; 
        this.query_url= 'https://api-thirukkural.vercel.app/api?num='
    },

    fetchThirukuralRandom:function() {
        this.random_num= Math.floor(Math.random() * 1330);
        let url = this.query_url+this.random_num;

        fetch(url)
        .then(response =>response.json())
        .then(result=>{
            document.getElementById('show_kural_num').innerText =result.number;
            document.getElementById('tam_kur').innerText=result.line1;  
            document.getElementById('tam_kur_linetwo').innerText =result.line2; 
            document.getElementById('tml_chap_name').innerText=result.chap_tam;
            document.getElementById('tml_chap_sec').innerText=result.sect_tam;
            //kural in english detail
            document.getElementById('eng_kur').innerText=result.eng;  
            document.getElementById('eng_kur_linetwo').innerText =""; 
            document.getElementById('eng_chap_name').innerText=result.chap_eng;
            document.getElementById('eng_chap_sec').innerText=result.sect_eng;

        })
    },

    fetchThirukural:function(){

        let num =document.getElementById('kural_num').value; 
        let input_box=document.getElementById('kural_num');
       
        if (num<=1333){
            this.kural_num = num;
            let url = this.query_url+this.kural_num;                        
            fetch(url)
            .then(response =>response.json())
            .then(result=>{                
                    document.getElementById('show_kural_num').innerText=result.number;                    
                    document.getElementById('tam_kur').innerText=result.line1;  
                    document.getElementById('tam_kur_linetwo').innerText =result.line2;
                    document.getElementById('tml_chap_name').innerText=result.chap_tam;
                    document.getElementById('tml_chap_sec').innerText=result.sect_tam;
                    //kural in english detail
                    document.getElementById('eng_kur').innerText=result.eng;  
                    document.getElementById('eng_kur_linetwo').innerText =""; 
                    document.getElementById('eng_chap_name').innerText=result.chap_eng;
                    document.getElementById('eng_chap_sec').innerText=result.sect_eng;

                    }) 
            
            }else{alert('Enter the value with in 1333');}       
    }
}
tirukural.initialize()





