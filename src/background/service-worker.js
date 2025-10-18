const INTERVAL_SECONDS = 1;
const ALARM_NAME = "focusTimer";

// --- NOVA FUNÇÃO: LÓGICA H:M:S (Horas:Minutos:Segundos) ---
/**
 * Converte um total de segundos em uma string formatada H:MM:SS.
 * @param {number} totalSeconds O número total de segundos acumulados.
 * @returns {string} O tempo formatado (ex: "1:05:30").
 */
function formatTime(totalSeconds) {
  // 1. Calcula as horas, minutos e segundos
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // 2. Formata para ter sempre 2 dígitos (ex: 5 -> 05)
  // O padStart(2, '0') faz isso.
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // 3. Monta a string final: "H:MM:SS"
  // Se não houver horas, ele pode retornar "MM:SS" (opcional)
  if (hours > 0) {
    return `${hours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
// ------------------------------------------------------------------

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

  // Incrementa e salva (MANTEMOS O RASTREAMENTO EM SEGUNDOS)
  totalSeconds += INTERVAL_SECONDS;
  await chrome.storage.local.set({ totalTimeSeconds: totalSeconds });

  // --- AQUI APLICA A NOVA LÓGICA ---
  const formattedTime = formatTime(totalSeconds);

  console.log(`Tempo total rastreado (segundos): ${totalSeconds}s`);
  console.log(`Tempo total formatado: ${formattedTime}`);

  // NOTA: Em um aplicativo real, você também pode usar o `formattedTime`
  // para atualizar a interface do usuário (pop-up ou badge da extensão).
}
