function renderHello() {
    var button = document.getElementById("open-window-button");
    var side_text = document.getElementById("side-items");
    var main_text = document.getElementById("items");
    var screen_width = screen.width
    var screen_height = screen.height
    console.log("ele:", button);
    button.addEventListener('click', function() {
        var text = document.getElementById("items");
        text.style.display = 'block';
        // alert("screen width:" + screen_width);
        text.cols = Math.round(screen_width/7);
        console.log("ele:", text);
        var text2 = document.getElementById("side-items");
        text2.style.display = 'block';
        console.log("ele:", text2);
    });
    //$("side-items").on("mouseup", function(eventData) {
    side_text.addEventListener('mouseup', function(eventData){
        line_num = side_text.value.substr(0, side_text.selectionStart).split("\n").length;
        if(line_num == 1){
            main_text.value = "text 1"
        }else if(line_num == 2){
            main_text.value = "text 2"
        }
    });
    // var lst  = document.getElementById("people-list");
    // console.log("list:", lst);

    // for (var i = 0; i< arr.length; i++) {
    //     var name  = arr[i];
    //     var element = document.createElement('li');
    //     element.innerText = name;

    //     element.addEventListener('click', function() {
    //         alert("you have clicked on " + name + " at index" + i);
    //     });
    //     console.log("ele:", element);
    //     lst.appendChild(element);
    // }

}