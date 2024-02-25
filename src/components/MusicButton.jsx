import { useState, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import "./MusicButton.css";

const MusicButton = ({ musicFile }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={musicFile} />
      <button className="sound-button" onClick={toggleMusic}>
        {isPlaying ? (
          <FaVolumeUp className="sound-icon" />
        ) : (
          <FaVolumeMute className="sound-icon" />
        )}
      </button>
    </div>
  );
};

export default MusicButton;
