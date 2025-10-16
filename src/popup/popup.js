// src/popup/popup.js

document.addEventListener("DOMContentLoaded", () => {
  const timeDisplay = document.getElementById("timeDisplay");
  const resetButton = document.getElementById("resetButton");

  // 1. Função para carregar e exibir o tempo
  function displayTime() {
    chrome.storage.local.get(["totalTimeSeconds"], (data) => {
      const totalSeconds = data.totalTimeSeconds || 0;

      // Formatação simples (horas:minutos:segundos)
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      timeDisplay.textContent = `${h.toString().padStart(2, "0")}:${m
        .toString()
        .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    });
  }

  // 2. Listener para o botão de reset
  resetButton.addEventListener("click", () => {
    chrome.storage.local.set({ totalTimeSeconds: 0 }, () => {
      displayTime(); // Atualiza a exibição
      console.log("Tempo zerado.");
    });
  });

  // 3. Executa a exibição ao carregar e a cada 1 segundo (para atualização dinâmica)
  displayTime();
  setInterval(displayTime, 1000);
});
