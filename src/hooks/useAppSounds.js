import useSound from 'use-sound';
import selectSound from '/sounds/select.mp3';
import passSound from '/sounds/pass.mp3';
import slideSound from '/sounds/slide.mp3';
import transitionSound from '/sounds/transition.mp3';

export default function useAppSounds() {
  const [playSelect] = useSound(selectSound, { volume: 0.5 });
  const [playPass] = useSound(passSound, { volume: 0.2 });
  const [playSlide] = useSound(slideSound, { volume: 0.5 });
  const [playTransition] = useSound(transitionSound, { volume: 0.5 });

  return {
    playSelect,    
    playPass,       
    playSlide,     
    playTransition  
  };
}
