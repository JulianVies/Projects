


$().ready( ()=>{
    $('#view-btn').on('click', (e)=> {

        $([document.documentElement, document.body]).animate({
        scrollTop: $("#banner").offset().top
        }, 900);
        e.preventDefault();
    });
});