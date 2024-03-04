
$("ul>li>a").click(function(event){
    event.preventDefault();
    let href = $(this).attr("href");
    $("html, body").animate({
        scrollTop:$(href).offset().top},1800)
});




const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
