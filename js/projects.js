document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
    const data = await response.json();

    // ID url detection

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    //console.log("ID:", id);


    // project details projects.hmtl 

    if (id) {
      const project = data.find(p => p.uuid == id);

      if (!project) {
        alert("Project not found");
        return;
      }

      document.querySelector(".project-title").textContent = project.name;
      document.querySelector(".text-project").textContent = project.description;
      document.querySelector(".project-image").src = project.image;
      
      document.querySelector(".project-content-1").textContent = project.content;
      document.querySelector(".project-content-2").textContent = project.content;

      const container = document.querySelector(".projects-container");
      if (container) {
        container.innerHTML = "";

        const otherProjects = data.filter(p => p.uuid != id);

        otherProjects.slice(0, 3).forEach(project => {
          container.innerHTML += `
            <div class="project-card">
              <img src="${project.image}" alt="${project.name}" />
              <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="projects.html?id=${project.uuid}">Learn more</a>
              </div>
            </div>
          `;
        });
      }

      return; 
    }

    // index project cards

    const container = document.querySelector(".projects-container");

    if (!container) return;

    container.innerHTML = "";

    data.slice(0, 3).forEach(project => {
      container.innerHTML += `
        <div class="project-card">
          <img src="${project.image}" alt="${project.name}" />
          <div class="project-content">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="projects.html?id=${project.uuid}">Learn more</a>
          </div>
        </div>
      `;
    });

  } catch (error) {
    console.error("Error fetching projects:", error);
  }
});