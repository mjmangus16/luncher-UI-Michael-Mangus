const users = [
  {
    name: "michael",
    pic: "../img/Michael.jpg",
    title: "UI Developer",
    info: ""
  },
  {
    name: "mike",
    pic: "../img/Mike.jpg",
    title: "UX Designer",
    info: ""
  },
  {
    name: "ang",
    pic: "../img/Ang.jpg",
    title: "UI Developer",
    info: ""
  },
  {
    name: "joseph",
    pic: "../img/Joseph.jpg",
    title: "Back End Architect",
    info: ""
  },
  {
    name: "jared",
    pic: "../img/Jared.jpg",
    title: "Front End Architect",
    info: ""
  }
];

class AboutUser {
  constructor(el, user, i) {
    this.el = el;
    this.imgBx = this.el.querySelector(".imgBx");
    this.image = this.imgBx.querySelector("img");
    this.image.src = user.pic;
  }
}

const aboutContainer = document.querySelector(".about");

const aboutUsersEl = users.map(user => {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("aboutUser");
  mainDiv.setAttribute("data-user", user.name);

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "");

  const div1 = document.createElement("div");
  div1.classList.add("toggle");
  div1.textContent = "+";

  const div2 = document.createElement("div");
  div2.classList.add("imgBx");

  const img = document.createElement("img");
  img.classList.add("userImage");

  div2.append(img);

  const div3 = document.createElement("div");
  div3.classList.add("content");

  mainDiv.append(input);
  mainDiv.append(div1);
  mainDiv.append(div2);
  mainDiv.append(div3);
  return mainDiv;
});

aboutUsersEl.forEach(userEl => {
  aboutContainer.append(userEl);
});

const allAboutUsers = Array.from(
  document.querySelectorAll(".about .aboutUser")
);

allAboutUsers.forEach((el, i) => new AboutUser(el, users[i], i));
