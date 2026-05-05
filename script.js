const container = document.getElementById("skillsContainer");

fetch("./assets/data/languagelvl.json").then(response => {

  if (!response.ok) {
    throw new Error("No se pudo cargar el archivo languagelvl.json");
  }
  return response.json();
})

  .then(languagelvl => {
    languagelvl.forEach(lang => {
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
  })
  .catch(error => {
    console.error("Error:", error);
  });

const container2 = document.getElementById("enterpriseExperience");

fetch("./assets/data/enterpriseExperience.json").then(response => {

  if (!response.ok) {
    throw new Error("No se pudo cargar el archivo enterpriseExperience.json");
  }
  return response.json();
})

  .then(enterpriseExperience => {

    enterpriseExperience.forEach(enterprise => {
      const experience = document.createElement("div");
      experience.classList.add("experience");
      experience.innerHTML = `
        <span>${enterprise.name}</span>
        <p>${enterprise.date}</p>
        <p>${enterprise.description}</p>
    `;
      container2.appendChild(experience);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });