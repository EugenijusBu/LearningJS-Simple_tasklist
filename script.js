var task_number = 1;

function myFunction(){
    const str = document.querySelector("#ftask").value;
    const div = document.createElement("div");
    const strong = document.createElement("strong");
    const child = document.querySelector("#lol");
    const button = document.createElement("button");

    strong.textContent = str;
    div.append(strong);
    div.setAttribute("id", "div"+ task_number);

    button.append("delete")
    button.setAttribute("onclick", "delete_fnc(this.id)");
    button.setAttribute("class", "margin10px");
    button.setAttribute("id", task_number);

    div.append(button);

    child.append(div);

    document.querySelector("#ftask").value = "";
    task_number++;
}

function delete_fnc(clicked_id){

    const delete_element = "div" + clicked_id;
    const select_good_element = document.querySelector("#"+delete_element);
    select_good_element.remove();

}

function clearBox()
{
    const item_list = document.getElementById("lol").querySelectorAll("div");
    for (const item of item_list){
        item.remove();

    }

}


