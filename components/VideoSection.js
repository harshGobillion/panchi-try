export default function VideoSection({ showVideo }) {
  return (
    <div>
      {showVideo ? (
        // Embedded YouTube video
        <div className="w-full p-4">
          <iframe
            className="w-1/2 md:h-96"
            src="https://www.youtube.com/embed/ZByhs9mDtDg"
            title="Embedded Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        // Video placeholder
        <div className="w-180 h-37 bg-gray-200">Video Here</div>
      )}
    </div>
  );
}
