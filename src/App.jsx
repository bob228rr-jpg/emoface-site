import React, { useRef, useState } from "react";
import { ExternalLink, Pause, Play, Volume2 } from "lucide-react";

const memeImages = [
  "/assets/meme-01.jpg",
  "/assets/meme-02.jpg",
  "/assets/meme-03.jpg",
  "/assets/meme-04.jpg",
  "/assets/meme-05.jpg",
];

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <main className="site-shell">
      <audio
        ref={audioRef}
        src="/assets/can-you-feel-my-heart.m4a"
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />

      <div className="top-actions" aria-label="site actions">
        <button
          className="audio-button"
          type="button"
          onClick={toggleAudio}
          aria-pressed={isPlaying}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          <span>{isPlaying ? "pause my heart" : "play my heart"}</span>
        </button>
        <a
          className="link-button"
          href="https://x.com/emoface_solana"
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink size={18} />
          <span>TWT</span>
        </a>
        <div className="contract-pill">
          <span>contract</span>
          <strong>coming soon</strong>
        </div>
      </div>

      <section className="hero-section">
        <div className="hero-copy">
          <h1 data-text="$emoface">$emoface</h1>
          <div className="manifesto">
            <p>nobody understands me.</p>
            <p>i built this for the ones laughing while it hurts.</p>
            <p>i turn pain into memes because explaining myself got boring.</p>
          </div>
        </div>

        <div className="hero-media" aria-label="$emoface visuals">
          <img className="wide-mark" src="/assets/wide-emoface.png" alt="" />
          <img className="hero-face" src="/assets/hero-meme.jpeg" alt="" />
          <div className="sound-chip">
            <Volume2 size={18} />
            <span>can you feel my heart?</span>
          </div>
        </div>
      </section>

      <section className="lore-section" aria-label="lore">
        <div className="lore-kicker">lore / narrative / the reason</div>
        <div className="lore-grid">
          <h2>i am the face you make when nobody gets the joke or the pain.</h2>
          <div className="lore-copy">
            <p>
              $emoface is not trying to look normal. it is the coin for people who
              grew up online, learned to hide the crash behind a laugh, and still
              hear the chorus in their head at 3am.
            </p>
            <p>
              the narrative is simple: misunderstood energy became a meme, the meme
              became a mask, and the mask became a ticker. no clean roadmap, no
              perfect explanation. just a community that knows what it feels like to
              be too much and still show up.
            </p>
            <p>
              if you ever laughed because crying would take too long, you already
              understand the chart.
            </p>
          </div>
        </div>
      </section>

      <section className="meme-section">
        <div className="section-heading">
          <p>i stopped explaining</p>
          <h2>the wall understands</h2>
        </div>

        <div className="meme-grid">
          {memeImages.map((src) => (
            <figure className="meme-card" key={src}>
              <img src={src} alt="" loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
