function run() {
    const link = document.getElementsByName('input')[0].value;
    const id = link.split('v=')[1].split('&')[0];
    window.open(`https://www.youtube.com/watch?v=${id}&list=RDQMtoHBrwJ6K3k&start_radio=1`);
}