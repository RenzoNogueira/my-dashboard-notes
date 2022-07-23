$(document).ready(function() {
    var tooltipTriggerList = [].slice.call($('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    $(".navbar-header ").on("click ", () => $(".tooltip ").remove())
    $("#aba-flutuante ").draggable({ // Ativa o arrastar e soltar para mover o menu lateral no eixo y e x
        scroll: false,
        drag: (event, ui) => {
            if (ui.position.top < 0) ui.position.top = 0
            if (ui.position.left < 0) ui.position.left = 0
        }
    });
    $("#group-notes-sortable").sortable({
        placeholder: "ui-state-highlight"
    });
    $("#group-notes-sortable").sortable("refreshPositions");
    $("#group-notes-sortable").sortable({
        stop: (event, ui) => sessionStorage.setItem("group-notes-sortable", $("#group-notes-sortable").sortable("toArray")) // Salva o array de IDs na sessão
    });
    $("#group-notes-sortable").disableSelection();
    if (sessionStorage.getItem("group-notes-sortable") != null) { // Organizar os itens de acordo com a ordem salva no sessionStorage
        const GROUP_NOTES_SORTABLEARRAY = sessionStorage.getItem("group-notes-sortable").split(",")
        // console.log(GROUP_NOTES_SORTABLEARRAY)
        GROUP_NOTES_SORTABLEARRAY.forEach(id => $("#" + id).appendTo("#group-notes-sortable"));
    }
    // $.alert({
    //     title: 'Alert!',
    //     theme: 'light',
    //     draggable: true,
    //     animation: "zoom",
    //     autoClose: 'OK|10000',
    //     content: 'Simple alert!',
    //     buttons: {
    //         OK: () => {}
    //     }
    // });

    $(".column").sortable({
        connectWith: ".column",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all"
    });

    $(".portlet")
        .addClass("ui-widget card")
        .find(".portlet-header")
        .addClass("ui-corner-all")
        .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

    $(".portlet-toggle").on("click", function() {
        var icon = $(this);
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        icon.closest(".portlet").find(".portlet-content").toggle();
    });
});