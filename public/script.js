const getFoods = async () => {
    try{
        return (await fetch("/api/foods")).json();
    } catch(error) {
        console.log(error);
    }
}

const showFoods = async () => {
    let foods = await getFoods();
    let foodsDiv = document.getElementById("food-list");
    foods.forEach((food) => {
        const section = document.createElement("section");
        foodsDiv.append(section);

        const a = document.createElement("a");
        a.href = "#";
        section.append(a);

        h3 = document.createElement("h3");
        h3.innerHTML = food.name;
        a.append(h3);

        a.onclick = (e) => {


            e.preventDefault();
            displayDetails(food);


            
        }
    });
};

const displayDetails = (food) => {
    const foodDetails = document.getElementById("food-details");
    foodDetails.innerHTML = " ";

    const h3 = document.createElement("h3");
    h3.innerHTML = food.name;
    foodDetails.append(h3);

    const dlink = document.createElement("a");
    dlink.innerHTML = " &#x2751";
    foodDetails.append(dlink);
    dlink.id = "delete-link"

    const elink = document.createElement("a");
    elink.innerHTML = ("&#9998;");
    foodDetails.append(elink);
    elink.id = "edit-link";

    const p = document.createElement("p");
    foodDetails.append(p);
    p.innerHTML = food.description;

    const ul = document.createElement("ul");
    foodDetails.append("ul");
    food.rating.forEach((rating) => {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = rating;
    })

elink.onclick = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("add-edit-title").innerHTML = "Edit Description"
}

    populateEditForm(food);
}

const populateEditForm = (food) => {};

const addEditFood = async (e) => {
    e.preventDefault();
}

const resetForm = () => {
    const form = document.getElementById("add-edit-food-form");
    form.reset();
    form.foodId = "-1";
    document.getElementById("rating-boxes").innerHTML = " ";
}

const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("add-edit-title").innerHTML = "Add Food";
}

window.onload = () => {
    showFoods();
    document.getElementById("add-edit-food-form").onsubmit = addEditFood;
    document.getElementById("add-link").onclick = showHideAdd;

    document.querySelector(".close").onclick = () => {
        document.querySelector(".dialog").classList.add("transparents");
    }
}