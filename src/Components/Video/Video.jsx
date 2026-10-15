
import Travel from '../../assets/Video/Travel.mp4';

function VideoSection() {
  return (
    <section className="w-full">
      <video
        className="w-full max-w-7xl h-48 sm:h-64 md:h-80 lg:h-96 mx-auto object-cover"
        src={Travel}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}

export default VideoSection;
