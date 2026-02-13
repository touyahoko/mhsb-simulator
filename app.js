const skillData = [
  { name: "攻撃", level: 0 },
  { name: "見切り", level: 0 },
  { name: "弱点特効", level: 0 }
];

function renderSkills() {
  const container = document.getElementById("skills");
  container.innerHTML = "";

  skillData.forEach((skill, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${skill.name} Lv ${skill.level}
      <button onclick="increase(${index})">＋</button>
      </p>
    `;
    container.appendChild(div);
  });

  renderResult();
}

function increase(index) {
  skillData[index].level++;
  renderSkills();
}

function renderResult() {
  const result = document.getElementById("result");
  result.innerHTML = "";

  skillData.forEach(skill => {
    if (skill.level > 0) {
      result.innerHTML += `<p>${skill.name} Lv ${skill.level}</p>`;
    }
  });
}

renderSkills();
