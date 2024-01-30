
export default function Navigation() {
  return (
    <div className="text-gray-900 text-sm">
      <nav className="bg-gray-800 text-white px-4 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="" class="text-white hover:text-gray-400">
            <svg aria-hidden="true" viewBox="0 0 16 16"data-view-component="true" className="w-8 fill-current">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
                </path>
            </svg>
          </a>
          <div className="relative">
            <input type="text" class="rounded border-white bg-gray-700 placeholder-white w-50 lg:w-72 px-3 py-1" placeholder="Search or jump too..."/>
            <div className="absolute top-0 right-0 flex items-center h-full">
              <div className="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2">/</div>
            </div>
          </div>
          <ul className="hidden lg:flex items-center font-semibold space-x-4">
            <li><a href="#" className="hover:text-gray-400">Pull Requests</a></li>
            <li><a href="#" className="hover:text-gray-400">Issues</a></li>
            <li><a href="#" className="hover:text-gray-400">Marketplace</a></li>
            <li><a href="#" className="hover:text-gray-400">Explorer</a></li>
          </ul>
        </div>
        <div className="flex items-center space-x-4 text-white">

          <a href="#" className="relative hover:text-gray-400">
            <svg className="w-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path>
            </svg>
            <div className="bg-blue-600 rounded-full w-2 h-2 absolute top-0 right-0"></div>
          </a>

          <a href="#" className="flex hover:text-gray-400">
            <svg className="w-5" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
            <svg className="w-3" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
          </a>

          <a href="#" className="flex hover:text-gray-400">
          <img className="w-6 h-6 rounded-full" src="https://avatars.githubusercontent.com/u/107856535?v=4" alt="" data-view-component="true"/>
            <svg className="w-3 ml-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
          </a>

        </div>
      </nav>
    </div>
  )
}
