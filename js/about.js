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
    this.img = this.el.querySelector("img");
    this.img.src = user.pic;
    this.title = document.createElement("h3");
    this.title.textContent = user.title;

    if (i % 2 === 1) {
      this.el.append(this.title);
    } else {
      this.el.prepend(this.title);
    }

    this.el.onclick = () => this.test();
  }

  test() {
    console.log("test");
  }
}

const aboutContainer = document.querySelector(".about");

const aboutUsersEl = users.map(user => {
  const div = document.createElement("div");
  div.classList.add("aboutUser");
  div.setAttribute("data-user", user.name);
  div.append(document.createElement("img"));
  return div;
});

aboutUsersEl.forEach(userEl => {
  aboutContainer.append(userEl);
});

const allAboutUsers = Array.from(
  document.querySelectorAll(".about .aboutUser")
);

allAboutUsers.forEach((el, i) => new AboutUser(el, users[i], i));
