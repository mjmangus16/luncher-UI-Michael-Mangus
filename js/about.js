const users = [
  {
    name: "michael mangus",
    pic: "../img/Michael.jpg",
    title: "UI Developer",
    info: "https://github.com/mjmangus16"
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
    info: "https://github.com/Labyrinth65"
  },
  {
    name: "joseph rios",
    pic: "../img/Joseph.jpg",
    title: "Back End Architect",
    info: "https://github.com/josephriosIO"
  },
  {
    name: "jared parrish",
    pic: "../img/Jared.jpg",
    title: "Front End Architect",
    info: "https://github.com/ParrishJ"
  }
];

class AboutUser {
  constructor(el, user) {
    this.el = el;

    this.input1 = document.createElement("input");
    this.input1.setAttribute("type", "checkbox");

    this.aTag = document.createElement("a");
    this.aTag.href = user.info;
    this.aTag.classList.add("repo-link");
    this.aTag.setAttribute("target", "_blank");

    if (user.title !== "UX Designer") {
      this.aTag.textContent = "Visit Github";
    } else {
      this.aTag.textContent = "Visit InVision";
    }

    this.div1 = document.createElement("div");
    this.div1.classList.add("toggle");
    this.div1.textContent = "+";

    this.div2 = document.createElement("div");
    this.div2.classList.add("imgBx");

    this.img = document.createElement("img");

    this.div2.append(this.img);

    this.div3 = document.createElement("div");
    this.div3.classList.add("content");

    this.el.append(this.input1);
    this.el.append(this.aTag);
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

    this.contentBx.append(this.name);
    this.contentBx.append(this.title);
  }
}

const aboutContainer = document.querySelector(".about");

const aboutUsersEl = users.map(user => {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("aboutUser");

  return mainDiv;
});

aboutUsersEl.forEach(userEl => {
  aboutContainer.append(userEl);
});

const allAboutUsers = Array.from(
  document.querySelectorAll(".about .aboutUser")
);

allAboutUsers.forEach((el, i) => new AboutUser(el, users[i]));
