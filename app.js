function regYT() {
    //YouTube Generation
    //document.getElementById("input").value = "https://www.youtube.com/watch?v=_caMQpiwiaU&ab_channel=schmoyoho";
    var input = document.getElementById("input").value;
    var link_id = input.slice(32, 43);
    var output = (
        "https://www.youtube.com/watch?v=" +
        link_id +
        "&list=RD" +
        link_id +
        "&start_radio=1"
    )
    document.getElementById("output").value = output;
    console.log(output);
}

function YTMusic() {
    //YouTube Music Generation
    //document.getElementById("input").value = "https://music.youtube.com/watch?v=Gn3NZa07msU&feature=share";
    var input = document.getElementById("input").value;
    var link_id = input.slice(34, 45);
    var output = (
        "https://music.youtube.com/watch?v=" +
        link_id +
        "&list=RDAMVM" +
        link_id
    )
    document.getElementById("output").value = output;
    console.log(output);
}

function copyText() {
    output.select()
    document.execCommand('copy');
}