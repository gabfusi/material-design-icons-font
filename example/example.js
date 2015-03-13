
$(document).ready(function(){

    var viewport = document.querySelector('#icons'),
        prefix = 'mdi-',
        icon_wrap,
        icon,
        text;

    $.getJSON('example/material-icons.json', function(data){

        print(data);
    });

    var print = function(icons) {

        for(var i in icons){
            icon_wrap = document.createElement('div');
            icon = document.createElement('i');
            text = document.createElement('div');
            text.innerHTML = prefix + icons[i];
            icon.className = prefix + icons[i];
            icon_wrap.appendChild(icon);
            icon_wrap.appendChild(text);
            viewport.appendChild(icon_wrap);

        }
    }

});