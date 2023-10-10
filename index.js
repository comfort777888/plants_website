// Burger menu

const menuShowHide = (event) => {
  const burgerBtn = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".ul_nav");

  event.target === burgerBtn || event.target === burgerMenu
    ? burgerMenu.classList.add("ul_nav_show")
    : burgerMenu.classList.remove("ul_nav_show");
};

document.querySelector("body").addEventListener("click", menuShowHide);

const buttons = document.querySelectorAll(".btn");

const pictures = [
  ...document.querySelectorAll(".img"),
  ...document.querySelectorAll(".img_3"),
];

function numActiveButtons() {
  let count = 1;
  for (const button of buttons) {
    if (button.classList.contains("button_active")) {
      count++;
    }
  }
  return count;
}

buttons.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("button_active")) {
      el.classList.remove("button_active");
      count = numActiveButtons();
      if (count === 1) {
        pictures.forEach((picture) => {
          picture.style.filter = "none";
        });
      } else {
        blurImg();
      }
    } else {
      count = numActiveButtons();
      if (count <= 2) {
        el.classList.add("button_active");
        blurImg();
      } else {
        clearActiveClasses();
        pictures.forEach((el) => {
          el.style.filter = "none";
        });
        count = 0;
      }
    }
  })
);

function clearActiveClasses() {
  buttons.forEach((button) => {
    button.classList.remove("button_active");
  });
}

function blurImg() {
  let arr = [];
  for (const button of buttons) {
    if (button.classList.contains("button_active")) {
      var classNameArray = button.className.split(" ");
      console.log(classNameArray);
      for (const picture of pictures) {
        if (picture.classList.contains(classNameArray[2])) {
          arr.push(picture);
        }
      }
    }
  }
  pictures.forEach((picture) => {
    picture.style.filter = "blur(4px)";
  });
  arr.forEach((el) => {
    el.style.filter = "none";
  });
}

// Accordion menu (price section)
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".price_item");
  //const priceButtons = document.querySelectorAll(".acc_btn");

  accordions.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      //const control = self.querySelector(".accordion__control");
      const content = self.querySelector(".price_item_2");

      // Закрыть все открытые аккордеоны
      const openAccordions = document.querySelectorAll(
        ".price_item.price_item_show"
      );
      openAccordions.forEach((accordion) => {
        if (accordion !== self) {
          accordion.classList.remove("price_item_show");
          //priceButtons.classList.remove("acc_btn_show");
          //const control = accordion.querySelector(".accordion__control");
          const content = accordion.querySelector(".price_item_2");
          //   control.setAttribute("aria-expanded", false);
          //   content.setAttribute("aria-hidden", true);
          content.style.maxHeight = null;
        }
      });

      // Открыть/закрыть текущий аккордеон
      self.classList.toggle("price_item_show");

      if (self.classList.contains("price_item_show")) {
        // control.setAttribute("aria-expanded", true);
        // content.setAttribute("aria-hidden", false);

        content.style.maxHeight = 108 + "px";
      } else {
        // control.setAttribute("aria-expanded", false);
        // content.setAttribute("aria-hidden", true);
        content.style.maxHeight = null;
      }
    });
  });
});

/*Contact us*/
document.addEventListener("DOMContentLoaded", () => {
  const contactsBox = document.querySelector(".contacts_container");
  const contacts_content = document.querySelector(".contact_ul");
  const contacts_btn = document.querySelector(".img1");
  const cities = document.querySelectorAll(".contact_li");
  const contactsText = document.querySelector("#city");
  const cityCard = document.querySelector(".contacts_object");
  const cityInfo = document.querySelectorAll(".p8");
  const callUsLink = document.querySelector(".img2");

  const adresses = [
    ["Canandaigua, NY", "+1	585	393 0001", "151 Charlotte Street"],
    ["New York City", "+1	212	456 0002", "9 East 91st Street"],
    ["Yonkers, NY", "+1	914	678 0003", "511 Warburton Ave"],
    ["Sherrill, NY", "+1	315	908 0004", "14 WEST Noyes BLVD"],
  ];

  contactsBox.addEventListener("click", () => {
    contacts_content.classList.toggle("contact_ul_show");
    contacts_btn.classList.toggle("img1_show");
    cityCard.style.scale = "0";
  });

  cities.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      contactsText.innerHTML = self.innerHTML;
      contacts_content.classList.toggle("contact_ul_show");
      contactsBox.classList.add("contacts_container_show");
      cityCard.style.scale = "1";
      for (let i = 0; i < adresses.length; i++) {
        if (self.innerText === adresses[i][0]) {
          if (callUsLink) {
            callUsLink.href = "tel:" + adresses[i][1];
          }
          for (let j = 0; j < cityInfo.length; j++) {
            cityInfo[j].innerText = adresses[i][j];
          }
        }
      }
    });
  });
});
