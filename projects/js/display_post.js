let right_containers = document.getElementsByClassName("right");
let wrapper = document.getElementById("wrapper");
let present = document.getElementById("present");
let timeline = document.getElementById("timeline");
let containers = document.getElementsByClassName("container");
let styleElem = document.head.appendChild(document.createElement("style"));
let present_mode = false;

function change_alignments() {
    let cache = [];
    for (let container of right_containers) {
        container.className = "container left";
        cache.push(container);
    }
    right_containers = cache;
    present_mode = true;
    return;
}

function restore_alignments() {
    for (let container of right_containers) {
        container.className = "container right";
    }
    present_mode = false;
    return;
}

function __display_present() {
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "row";
    present.style.width = "180%";
    present.style.display = "block";
    timeline.style.width = "100%";
}

function __hide_present() {
    wrapper.style.display = null;
    wrapper.style.flexDirection = null;
    present.style.width = "0%";
    present.style.display = "none";
    timeline.style.width = null;

}

function adjust_timeline() {
    // necessary since we cannot select pseudo elements
    styleElem.innerHTML = `
        .timeline::after {
            right: 10%;
            left: auto;
        }
        .container {
            width: 90%;
        }
        .container::after {
            right: -14px;
        }
        .project-title-div{
            width: 50%;
        }
        .project-info-left {
            width: 100%;
        }
        .project-info-right {
            width: 100%;
            left: auto;
        }
        `
}

function restore_timeline() {
    styleElem.innerHTML = null;
}

function add_new_present(link) {
    let curr_present = document.getElementById("present-embed");
    if (curr_present != null) {
        curr_present.remove();
    }
    curr_present = document.createElement("embed");
    curr_present.src = link;
    curr_present.id = "present-embed";
    curr_present.nodeType = "text/html";
    curr_present.style.marginTop = "11em";
    present.appendChild(curr_present); // this has to be placed at the last
}

function show_present(link) {
    change_alignments();
    __display_present();
    add_new_present(link);
    adjust_timeline();
}

function hide_present() {
    restore_alignments();
    __hide_present();
    restore_timeline();
}

function toggle_present(link){
    if (present_mode) {
        hide_present();
    } else {
        show_present(link);
    }
}