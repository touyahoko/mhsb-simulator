// ====== 防具データ ======
const armors = {
  head: [
    { name: "カムラヘルム", skills: { 攻撃: 1 } },
    { name: "レウスヘルム", skills: { 攻撃: 2 } }
  ],
  chest: [
    { name: "カムラメイル", skills: { 見切り: 1 } },
    { name: "ジンオウメイル", skills: { 攻撃: 1 } }
  ]
};

function searchBuild() {

  const atkValue = parseInt(document.getElementById("atk").value) || 0;
  const critValue = parseInt(document.getElementById("crit").value) || 0;

  const targetSkills = [
    { name: "攻撃", required: atkValue },
    { name: "見切り", required: critValue }
  ];

  const results = [];

  armors.head.forEach(head => {
    armors.chest.forEach(chest => {

      const totalSkills = {};

      [head, chest].forEach(part => {
        for (let skill in part.skills) {
          totalSkills[skill] = (totalSkills[skill] || 0) + part.skills[skill];
        }
      });

      let isValid = true;
      targetSkills.forEach(target => {
        if ((totalSkills[target.name] || 0) < target.required) {
          isValid = false;
        }
      });

      if (isValid) {
        results.push({
          head: head.name,
          chest: chest.name,
          skills: totalSkills
        });
      }
    });
  });

  displayResults(results);
}

function displayResults(results) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (results.length === 0) {
    resultDiv.innerHTML = "<p>条件を満たす構成がありません</p>";
    return;
  }

  results.forEach(build => {
    resultDiv.innerHTML += `
      <hr>
      <p>頭: ${build.head}</p>
      <p>胴: ${build.chest}</p>
      <p>スキル: ${JSON.stringify(build.skills)}</p>
    `;
  });
}
