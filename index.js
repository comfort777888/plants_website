console.log(
  "1. При нажатии на кнопки: Gardens, Lawn, Planting происходит смена фокуса на услугах в разделе service +50\n2.	Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n3. В разделе contacts реализован select с выбором городов +25\nИТОГО: 125"
);
const serviceButtons = [
  document.querySelectorAll("button")[1],
  document.querySelectorAll("button")[2],
  document.querySelectorAll("button")[3],
];
const serviceItems = document.querySelectorAll(".service_item");
const priceItems = document.querySelectorAll(".price_item");
const priceButtons = document.querySelectorAll(".acc_btn");
const priceItemsShow = document.querySelectorAll(".price_item_2");
const data = [
  {
    0: "Canandaigua, NY",
    1: "+1 585 393 0001",
    2: "151 Charlotte Street",
  },
  {
    0: "New York City",
    1: "+1 212 456 0002",
    2: "9 East 91st Street",
  },
  {
    0: "Yonkers, NY",
    1: "+1 914 678 0003",
    2: "511 Warburton Ave",
  },
  {
    0: "Sherrill, NY",
    1: "+1 315 908 0004",
    2: "14 WEST Noyes BLVD",
  },
];
const contactList = document.querySelectorAll(".contact_li");
const dataText = document.querySelectorAll(".p8");

const menuShowHide = (event) => {
  if (
    event.target === document.querySelector(".burger") ||
    event.target === document.querySelector(".ul_nav")
  ) {
    document.querySelector(".ul_nav").classList.add("ul_nav_show");
  } else document.querySelector(".ul_nav").classList.remove("ul_nav_show");
};

const serviceBlur = (event) => {
  serviceButtons.forEach((element) =>
    event.target === element ? element.classList.toggle("button_active") : null
  );
  const counter = serviceButtons.reduce(
    (a, v) => (v.classList.contains("button_active") === true ? a + 1 : a),
    0
  );
  if (counter === 3) {
    return serviceButtons.forEach((element) =>
      event.target === element
        ? element.classList.toggle("button_active")
        : null
    );
  } else if (counter === 0) {
    serviceItems.forEach((element) =>
      element.classList.remove("service_item_blur")
    );
  } else {
    if (serviceButtons[0].classList.contains("button_active") === true) {
      serviceItems[0].classList.remove("service_item_blur");
      serviceItems[4].classList.remove("service_item_blur");
    } else {
      serviceItems[0].classList.add("service_item_blur");
      serviceItems[4].classList.add("service_item_blur");
    }
    if (serviceButtons[1].classList.contains("button_active") === true) {
      serviceItems[2].classList.remove("service_item_blur");
    } else {
      serviceItems[2].classList.add("service_item_blur");
    }
    if (serviceButtons[2].classList.contains("button_active") === true) {
      serviceItems[1].classList.remove("service_item_blur");
      serviceItems[3].classList.remove("service_item_blur");
      serviceItems[5].classList.remove("service_item_blur");
    } else {
      serviceItems[1].classList.add("service_item_blur");
      serviceItems[3].classList.add("service_item_blur");
      serviceItems[5].classList.add("service_item_blur");
    }
    return;
  }
};

const accordionShow = (event) => {
  priceButtons.forEach((element, i) => {
    if (element === event.target) {
      priceItems[i].classList.toggle("price_item_show");
      document.querySelectorAll(".acc_btn")[i].classList.toggle("acc_btn_show");
      priceItemsShow[i].classList.toggle("price_item_2_show");
      let arr = [0, 1, 2];
      arr.splice(i, 1);
      arr.forEach((element) => {
        priceItems[element].classList.remove("price_item_show");
        document
          .querySelectorAll(".acc_btn")
          [element].classList.remove("acc_btn_show");
        priceItemsShow[element].classList.remove("price_item_2_show");
      });
    }
  });
};

const contactShow = () => {
  if (
    document
      .querySelector(".contact_ul")
      .classList.contains("contact_ul_show") === false &&
    document
      .querySelector(".contacts_container")
      .classList.contains("contacts_container_show") === true
  ) {
    document
      .querySelector(".contacts_object")
      .classList.remove("contacts_object_show");
    document
      .querySelector(".contacts_container")
      .classList.remove("contacts_container_show");
    document.querySelector(".container").classList.remove("container_show");
    document.querySelector(".woman").classList.remove("woman_show");
    document.getElementById("city").innerHTML = "City";
    document.getElementById("city").classList.remove("city_show");
  } else {
    document
      .querySelector(".contacts_container")
      .classList.toggle("contacts_container_show");
    document.querySelector(".img1").classList.toggle("img1_show");
    document.querySelector(".contact_ul").classList.toggle("contact_ul_show");
    document.querySelector(".container").classList.toggle("container_show");
    document.querySelector(".woman").classList.toggle("woman_show");
  }
};

const dataShow = (event) => {
  contactList.forEach((element, i) => {
    if (event.target === element) {
      document.querySelector(".img1").classList.remove("img1_show");
      document.querySelector(".contact_ul").classList.remove("contact_ul_show");
      document.querySelector(".contact_ul").classList.remove("contact_ul_show");
      document
        .querySelector(".contacts_object")
        .classList.add("contacts_object_show");
      document.getElementById("city").innerHTML = element.textContent;
      document.getElementById("city").classList.add("city_show");

      dataText.forEach((element, index) => {
        element.innerHTML = data[i][index];
        if (index === 1) {
          document.querySelector(".img2").href = "tel:" + data[i][index];
        }
      });
    }
  });
};

document.querySelector("body").addEventListener("click", menuShowHide);

serviceButtons.forEach((element) =>
  element.addEventListener("click", serviceBlur)
);

priceButtons.forEach((element) =>
  element.addEventListener("click", accordionShow)
);

document.querySelector(".img1").addEventListener("click", contactShow);

contactList.forEach((element) => element.addEventListener("click", dataShow));
