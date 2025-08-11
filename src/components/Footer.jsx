const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm px-8 py-12">
      {/* Call Support */}
      <div className="mb-6">
        <p>
          Questions? Call{" "}
          <a href="tel:000-800-919-1743" className="hover:underline">
            000-800-919-1743 (Toll-Free)
          </a>
        </p>
      </div>

      {/* Footer Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <a href="https://help.netflix.com/support/412" className="hover:underline">
          FAQ
        </a>
        <a href="https://help.netflix.com" className="hover:underline">
          Help Centre
        </a>
        <a href="https://help.netflix.com/legal/termsofuse" className="hover:underline">
          Terms of Use
        </a>
        <a href="https://help.netflix.com/legal/privacy" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Cookie Preferences
        </a>
        <a href="https://help.netflix.com/legal/corpinfo" className="hover:underline">
          Corporate Information
        </a>
      </div>

      {/* Language Selector */}
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.476 2 2 6.477 2 12c0 5.522 4.476 10 10 10s10-4.478 10-10c0-5.523-4.476-10-10-10zm-.25 17.932v-1.946a7.994 7.994 0 01-3.75-1.038l-.889 1.536a9.938 9.938 0 004.639 1.448zm6.373-2.302l-.889-1.537a8.004 8.004 0 01-3.75 1.038v1.946a9.937 9.937 0 004.639-1.447zM4.932 13H7.05a7.944 7.944 0 01.71 2.872L6.05 16.5a9.976 9.976 0 01-1.118-3.5zm14.136 0a9.976 9.976 0 01-1.118 3.5l-1.711-.628a7.944 7.944 0 01.71-2.872h2.119zM12 4.068c1.671.105 3.21.74 4.429 1.722L15.5 7.05a7.992 7.992 0 00-3.5-.71V4.068zm-1.5.29v2.271a7.992 7.992 0 00-3.5.71L7.57 5.79A9.942 9.942 0 0110.5 4.358zM4.068 11h2.272a7.944 7.944 0 01.71-2.872L6.05 7.5A9.976 9.976 0 004.068 11zm15.864 0a9.976 9.976 0 00-1.118-3.5l-1.711.628a7.944 7.944 0 01.71 2.872h2.119z" />
        </svg>
        <label htmlFor="language-select" className="sr-only">
          Select Language
        </label>
        <select
          id="language-select"
          name="language"
          className="bg-transparent border border-gray-500 px-2 py-1 rounded text-white"
        >
          <option value="en-IN">English</option>
          <option value="hi-IN">हिन्दी</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
