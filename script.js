const lenguajeLvl = [
  {
    name: "Python",
    icon: "./assets/icons/python.svg",
    lvl: "11%"
  },
  {
    name: "Java",
    icon: "./assets/icons/java.svg",
    lvl: "15%"
  },
  {
    name: "HTML",
    icon: "./assets/icons/html.svg",
    lvl: "20%"
  },
  {
    name: "CSS",
    icon: "./assets/icons/css.svg",
    lvl: "18%"
  },
  {
    name: "JavaScript",
    icon: "./assets/icons/javascript.svg",
    lvl: "5%"
  },
];

const container = document.getElementById("skillsContainer");

lenguajeLvl.forEach(lang => {
  const skill = document.createElement("div");
  skill.classList.add("skill");
  skill.innerHTML = `
    <div class="skillHeader">
      <img src="${lang.icon}" alt="${lang.name}">
      <span>${lang.name}</span>
    </div>
    <div class="bar">
      <div class="progress" style="width: ${lang.lvl};"></div>
    </div>
  `;
  container.appendChild(skill);
});