function func(event){
    event.target.classList.toggle("done");
}
function up(event){
    event.target.parentElement.parentElement.insertBefore(event.target.parentElement,event.target.parentElement.previousElementSibling);
}
function down(event){
    event.target.parentElement.parentElement.insertBefore(event.target.parentElement.nextElementSibling,event.target.parentElement);
}
window.onload= function (){
    // Script for New Button
    $(".btn-primary").click( () => {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        if ($(".form-control").val()=="")
        return;
        $(".mylist").append($(`
        <div style="display: flex;width:100%">
            <button type="button" onclick="func(event)" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start" aria-current="true">
                ${ $(".form-control").val()}
                <span class="badge bg-info rounded-pill">
                Added at ${time}
                </span>
            </button>
            <button type="button" onclick="up(event)" class="btn btn-secondary" style="width: 50px; margin: 2px;">
            ↑
            </button>
            <button type="button" onclick="down(event)"class="btn btn-dark" style="width: 50px; margin: 2px;">
            ↓
            </button>
        </div>`));
        $(".form-control").val("");
    })
    // Script for Remove Button
    $(".btn-success").click( () => {
        $(".form-control").val("");
    })
    // Script for Clear Button
    $(".btn-warning").click( () => {
        $(".done").parent().remove();
    })
    // Script for Sort Button
    $(".btn-danger").click( () => {
        $(".list-group").append($(".done").parent());
    })
}
