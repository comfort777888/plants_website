console.log(
  "1. При нажатии на кнопки: Gardens, Lawn, Planting происходит смена фокуса на услугах в разделе service +50\n2.	Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n3. В разделе contacts реализован select с выбором городов +25\nИТОГО: 125"
);

// Burger menu

const menuShowHide = (event) => {
  const burgerBtn = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".ul_nav");

  event.target === burgerBtn || event.target === burgerMenu
    ? burgerMenu.classList.add("ul_nav_show")
    : burgerMenu.classList.remove("ul_nav_show");
};

document.querySelector("body").addEventListener("click", menuShowHide);

// Blur service option

const serviceButtons = [
  document.querySelectorAll("button")[1],
  document.querySelectorAll("button")[2],
  document.querySelectorAll("button")[3],
];
const serviceItems = document.querySelectorAll(".service_item");
let activeBtns = [];

const btnActive = (event) => {
  serviceButtons.forEach((element) => {
    const isThisBtn = event.target === element ? true : false;
    const btnActive = activeBtns.indexOf(element);

    isThisBtn & (btnActive === -1) & (activeBtns.length < 2)
      ? activeBtns.push(element)
      : isThisBtn & (btnActive === -1)
      ? activeBtns.push(element) & activeBtns.shift()
      : isThisBtn & (btnActive === 0)
      ? activeBtns.shift()
      : isThisBtn
      ? activeBtns.pop()
      : null;
  });

  serviceButtons.forEach((element) =>
    activeBtns.indexOf(element) !== -1
      ? element.classList.add("button_active")
      : element.classList.remove("button_active")
  );

  if (activeBtns.length === 0) {
    serviceItems.forEach((element) =>
      element.classList.remove("service_item_blur")
    );
  } else {
    serviceButtons[0].classList.contains("button_active")
      ? serviceItems[0].classList.remove("service_item_blur") &
        serviceItems[4].classList.remove("service_item_blur")
      : serviceItems[0].classList.add("service_item_blur") &
        serviceItems[4].classList.add("service_item_blur");
    serviceButtons[1].classList.contains("button_active")
      ? serviceItems[2].classList.remove("service_item_blur")
      : serviceItems[2].classList.add("service_item_blur");
    serviceButtons[2].classList.contains("button_active")
      ? serviceItems[1].classList.remove("service_item_blur") &
        serviceItems[3].classList.remove("service_item_blur") &
        serviceItems[5].classList.remove("service_item_blur")
      : serviceItems[1].classList.add("service_item_blur") &
        serviceItems[3].classList.add("service_item_blur") &
        serviceItems[5].classList.add("service_item_blur");
  }
};

serviceButtons.forEach((element) =>
  element.addEventListener("click", btnActive)
);

// Accordion menu (price section)

const priceItems = document.querySelectorAll(".price_item");
const priceButtons = document.querySelectorAll(".acc_btn");
const priceItemsShow = document.querySelectorAll(".price_item_2");

const accordionShow = (event) => {
  priceButtons.forEach((element, i) => {
    if (element === event.target) {
      priceItems[i].classList.toggle("price_item_show");
      priceButtons[i].classList.toggle("acc_btn_show");
      priceItemsShow[i].classList.toggle("price_item_2_show");
      let arr = [0, 1, 2];
      arr.splice(i, 1);
      arr.forEach((element) => {
        priceItems[element].classList.remove("price_item_show");
        priceButtons[element].classList.remove("acc_btn_show");
        priceItemsShow[element].classList.remove("price_item_2_show");
      });
    }
  });
};

priceButtons.forEach((element) =>
  element.addEventListener("click", accordionShow)
);

// Contacts section

const contactList = document.querySelectorAll(".contact_li");
const dataText = document.querySelectorAll(".p8");
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
const contactTable = document.querySelector(".contact_ul");
const contactContainer = document.querySelector(".contacts_container");
const contactObject = document.querySelector(".contacts_object");

const contactShow = () => {
  if (
    contactTable.classList.contains("contact_ul_show") === false &&
    contactContainer.classList.contains("contacts_container_show") === true
  ) {
    contactObject.classList.remove("contacts_object_show");
    contactContainer.classList.remove("contacts_container_show");
    document.querySelector(".container").classList.remove("container_show");
    document.querySelector(".woman").classList.remove("woman_show");
    document.getElementById("city").innerHTML = "City";
    document.getElementById("city").classList.remove("city_show");
  } else {
    contactTable.classList.toggle("contact_ul_show");
    contactContainer.classList.toggle("contacts_container_show");
    document.querySelector(".container").classList.toggle("container_show");
    document.querySelector(".woman").classList.toggle("woman_show");
    document.querySelector(".img1").classList.toggle("img1_show");
  }
};

const dataShow = (event) => {
  contactList.forEach((element, i) => {
    if (event.target === element) {
      contactTable.classList.remove("contact_ul_show");
      contactTable.classList.remove("contact_ul_show");
      contactObject.classList.add("contacts_object_show");
      document.querySelector(".img1").classList.remove("img1_show");
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

document.querySelector(".img1").addEventListener("click", contactShow);
contactList.forEach((element) => element.addEventListener("click", dataShow));
