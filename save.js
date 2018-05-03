var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);

function saveImage(){
    
    var data = canvas.toDataURL();
    console.log(data);
    //window.open("", '_blank','location=0, menubar=0');
    /*
     var iframe = '<iframe src="' + data + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
        var x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();
        */
}