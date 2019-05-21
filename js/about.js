const users = [
  {
    name: "michael mangus",
    pic: "../img/Michael.jpg",
    title: "UI Developer",
    info: ""
  },
  {
    name: "mike jean-baptiste",
    pic: "../img/Mike.jpg",
    title: "UX Designer",
    info: ""
  },
  {
    name: "ang xu",
    pic: "../img/Ang.jpg",
    title: "UI Developer",
    info: ""
  },
  {
    name: "joseph rios",
    pic: "../img/Joseph.jpg",
    title: "Back End Architect",
    info: ""
  },
  {
    name: "jared parrish",
    pic: "../img/Jared.jpg",
    title: "Front End Architect",
    info: ""
  }
];

class AboutUser {
  constructor(el, user) {
    this.el = el;

    this.input = document.createElement("input");
    this.input.setAttribute("type", "checkbox");
    this.input.setAttribute("name", "");

    this.div1 = document.createElement("div");
    this.div1.classList.add("toggle");
    this.div1.textContent = "+";

    this.div2 = document.createElement("div");
    this.div2.classList.add("imgBx");

    this.img = document.createElement("img");
    this.img.classList.add("userImage");

    this.div2.append(this.img);

    this.div3 = document.createElement("div");
    this.div3.classList.add("content");

    this.el.append(this.input);
    this.el.append(this.div1);
    this.el.append(this.div2);
    this.el.append(this.div3);

    this.imgBx = this.el.querySelector(".imgBx");
    this.image = this.imgBx.querySelector("img");
    this.image.src = user.pic;

    this.contentBx = this.el.querySelector(".content");

    this.name = document.createElement("h3");
    this.name.textContent = user.name;

    this.title = document.createElement("h5");
    this.title.textContent = user.title;

    this.info = document.createElement("p");
    this.info.textContent = user.info;

    this.contentBx.append(this.name);
    this.contentBx.append(this.title);
    this.contentBx.append(this.info);
  }
}

const aboutContainer = document.querySelector(".about");

const aboutUsersEl = users.map(user => {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("aboutUser");
  mainDiv.setAttribute("data-user", user.name);

  return mainDiv;
});

aboutUsersEl.forEach(userEl => {
  aboutContainer.append(userEl);
});

const allAboutUsers = Array.from(
  document.querySelectorAll(".about .aboutUser")
);

allAboutUsers.forEach((el, i) => new AboutUser(el, users[i]));
