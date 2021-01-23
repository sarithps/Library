var controls = document.querySelector('form').elements;

function valid333(){
    console.log('testing..');
    // var len = controls.length;
    // console.log('...................' + len + '..............');
    // for(var i = 0; i<len;i++){
    //     controls[i].disabled = controls[i].value == '';
    // }
}




function showFiles()
{
    let inputField=document.getElementById('input');
    let file=inputField.files;
    let fileReader=new FileReader;
    fileReader.onload=function(event)
    {
        let imageURL=fileReader.result;
        $('#preview').attr("src",`${imageURL}`)
    }
    FileReader.readAsDataURL(file[0])
}
