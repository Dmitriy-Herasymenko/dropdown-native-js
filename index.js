const dropdowns = document.querySelectorAll(".dropdown");
const status = document.querySelector(".status");

const dropdow = (callback) => {
  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");

    select.addEventListener("click", () => {
      select.classList.toggle("select-clicked");
      caret.classList.toggle("caret-rotate");
      menu.classList.toggle("menu-open");
    });

    options.forEach((option) => {
      option.addEventListener("click", (e) => {
        selected.innerText = option.innerText;
        status.innerText = option.innerText;
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");

        if (callback) {
          callback(e);
        }

        options.forEach((option) => {
          option.classList.remove("active");
        });
        option.classList.add("active");
      });
    });
  });
};

dropdow((e) => console.log(e));
