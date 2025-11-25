const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-b from-black ">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="flex gap-4">
                {/* Play Button */}
                <button className="flex items-center gap-2 bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition">
                    <span className="text-black text-2xl leading-none">►</span>
                    Play
                </button>

                {/* More Info Button */}
                <button className="flex items-center gap-2 bg-gray-600 bg-opacity-70 text-white font-semibold py-2 px-6 rounded-md hover:bg-opacity-50 transition">
                    <span className="text-xl">ℹ</span>
                    More Info
                </button>
            </div>
        </div>
    )
}
export default VideoTitle;