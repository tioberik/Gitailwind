
export default function Footer() {
  return (
    <div className="footer container mx-auto text-xs font-medium border-t border-gray-300 py-10 px-12 flex flex-col lg:flex-row items-center justify-between">

      <ul className="flex items-center space-x-4 lg:space-x-12 ">
        <li>&copy; 2024 GiHub, Inc.</li>
        <li><a href="#" className="text-blue-600 hover:underline">Terms</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Privacy</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Security</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Status</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Help</a></li>
      </ul>

      <div className="mx-16 hidden lg:block">
        <a href="#" class="text-gray-300 hover:text-gray-400">
          <svg aria-hidden="true" viewBox="0 0 16 16"data-view-component="true" className="w-8 fill-current">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
              </path>
          </svg>
        </a>
      </div>

      <ul className="flex items-center space-x-4 lg:space-x-12  mt-4 lg:mt-0">
        <li><a href="#" className="text-blue-600 hover:underline">Contact GitHub</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Pricing</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">API</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Training</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Blog</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">About</a></li>
      </ul>

    </div>
  )
}
