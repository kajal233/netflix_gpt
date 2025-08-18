const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-36 px-12">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="flex gap-4">
                {/* Play Button */}
                <button className="flex items-center gap-2 bg-gray-600 text-black font-semibold px-6 py-3 rounded-md hover:bg-opacity-80 transition">
                    ▶ Play
                </button>

                {/* More Info Button */}
                <button className="flex items-center gap-2 bg-gray-600 text-white font-semibold px-6 py-3 rounded-md bg-opacity-70 hover:bg-opacity-50 transition">
                    ℹ More Info
                </button>
            </div>
        </div>
    )
}
export default VideoTitle;