
export default function RepoStats() {
  return (
    <div className="bg-gray-100 repo-stats flex flex-col lg:flex-row items-center justify-between px-8 py-4"> 

      <div className="flex">

        <svg className="w-5 fill-current text-gray-600" aria-hidden="true" viewBox="0 0 16 16"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
        </svg>

        <div className="flex items-center text-xl ml-2">
          <a href="#" className="text-blue-600 hover:underline">tailwindcss</a>
          <span className="ml-1">/</span>
          <a href="#" className="text-blue-600 font-semibold hover:underline ml-1 ">tailwindcss</a>
        </div>

      </div>

      <div className="flex space-x-2 text-sm font-semibold mt-5 lg:mt-0">

        <div className="flex">
          <button className="flex border border-gray-400 rounded rounded-r-none px-3 py-1 items-center space-x-1 hover:bg-gray-200">
            <svg className="w-4 fill-current" aria-hidden="true"viewBox="0 0 16 16"data-view-component="true">
              <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
            </svg> 
            <div>Watch</div>
            <svg className="w-3" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
            </svg>
          </button>
          <a className="border border-gray-400 hover:text-blue-600 rounded rounded-l-none border-l-0 px-3 py-1">430</a>
        </div>

        <div className="flex">
          <button className="flex border border-gray-400 rounded rounded-r-none px-3 py-1 items-center space-x-1 hover:bg-gray-200">
            <svg className="w-4 fill-current" aria-hidden="true"viewBox="0 0 16 16" version="1.1"data-view-component="true">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
            <div>Fork</div>
          </button>
          <a className="border border-gray-400 hover:text-blue-600 rounded rounded-l-none border-l-0 px-3 py-1">1.2k</a>
        </div>

        <div className="flex">
          <button className="flex border border-gray-400 rounded rounded-r-none px-3 py-1 items-center space-x-1 hover:bg-gray-200">
            <svg className="w-4 fill-current" aria-hidden="true" viewBox="0 0 16 16" data-view-component="true" >
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
            <div>Unstar</div>
          </button>
          <a className="border border-gray-400 hover:text-blue-600 rounded rounded-l-none border-l-0 px-3 py-1">25.3k</a>
        </div>

      </div>

    </div> 
  )
}
