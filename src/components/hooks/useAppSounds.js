import useSound from 'use-sound';

// Rutas relativas a /public/sound/
import selectSound from '/sound/select.mp3';
import passSound from '/sound/pass.mp3';
import slideSound from '/sound/slide.mp3';
import transitionSound from '/sound/transition.mp3';

export default function useAppSounds() {
  const [playSelect] = useSound(selectSound, { volume: 0.5 });
  const [playPass] = useSound(passSound, { volume: 0.5 });
  const [playSlide] = useSound(slideSound, { volume: 0.5 });
  const [playTransition] = useSound(transitionSound, { volume: 0.5 });

  return {
    playSelect,     // Sonido al abrir app
    playPass,       // Sonido al cerrar app
    playSlide,      // Sonido al desplegar algo
    playTransition  // Sonido para transiciones o cambios mayores
  };
}
