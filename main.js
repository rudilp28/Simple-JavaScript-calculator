
    function insert(num){
        document.form.textview.value=document.form.textview.value+num	
    }

    function equal(){
        let express = document.form.textview.value;
        if(express){
            document.form.textview.value = eval(express);
        }
    }

    function back(){
        let express = document.form.textview.value;
        document.form.textview.value = express.substring(0,express.length-1);
        }