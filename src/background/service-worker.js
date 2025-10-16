const INTERVAL_SECONDS = 1;
const ALARM_NAME = "focusTimer";

// 1. Cria o alarme na instalação da extensão
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create(ALARM_NAME, {
    periodInMinutes: INTERVAL_SECONDS / 60,
  });
  console.log("Alarme 'focusTimer' criado.");
});

// 2. Listener para o alarme
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === ALARM_NAME) {
    updateFocusTime();
  }
});

// 3. Função principal de atualização
async function updateFocusTime() {
  // Pega o tempo atual armazenado
  const data = await chrome.storage.local.get(["totalTimeSeconds"]);
  let totalSeconds = data.totalTimeSeconds || 0;

  // Incrementa e salva
  totalSeconds += INTERVAL_SECONDS;
  await chrome.storage.local.set({ totalTimeSeconds: totalSeconds });

  console.log(`Tempo total rastreado: ${totalSeconds}s`);

  // NOTA: Para um MVP real, você checaria se a janela/aba está ativa aqui
  // (usando chrome.tabs e chrome.windows), mas vamos simplificar.
}
