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

const container2 = document.getElementById("timelineContainer");

fetch("./assets/data/enterpriseExperience.json").then(response => {

  if (!response.ok) {
    throw new Error("No se pudo cargar el archivo enterpriseExperience.json");
  }
  return response.json();
})

  .then(enterpriseExperience => {
    enterpriseExperience.forEach(enterprise => {

      const timelineItem = document.createElement("div");
      timelineItem.classList.add("timeline-item");
      
      timelineItem.innerHTML = `
        <div class="timeline-card">
          <h3>${enterprise.name}</h3>
          <div class="timeline-date">${enterprise.date}</div>
          <p>${enterprise.description}</p>
        </div>
      `;
      container2.appendChild(timelineItem);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });

const containerProjects = document.getElementById("projectsContainer");

fetch("./assets/data/projects.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo projects.json");
    }
    return response.json();
  })
  .then(projects => {
    projects.reverse().forEach(project => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      
      const demoButton = project.demo 
        ? `<a href="${project.demo}" target="_blank" class="genericButton">Demo</a>` 
        : "";

      card.innerHTML = `
        <img src="${project.image}" alt="${project.name}" class="project-img">
        <h3>${project.name}</h3>
        <div class="button-group">
          <a href="${project.repository}" target="_blank" class="genericButton">GitHub</a>
          ${demoButton}
        </div>
      `;
      containerProjects.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error cargando proyectos:", error);
  });