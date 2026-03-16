import gravitacional_beep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(gravitacional_beep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.error('Erro ao reproduzir o som:', error);
    });
  };
}
