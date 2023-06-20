export default function VideoSection({ showVideo }) {
    return (
      <div className="relative flex place-items-center w-full">
        {showVideo ? (
          // Embedded YouTube video
          <div className="w-full">
            <iframe
              className="w-full h-96 md:h-64"
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
  