
export default function RepoNav() {
  return (
    <div className="bg-gray-100">
      <ul className="repo-nav border-b border-gray-400 flex items-center px-4 lg:px-8 pt-4">

        <li className="text-md font-bold">
          <a href="" className="flex items-center border-b-2 border-red-500 px-4 pb-3 space-x-1">
          <svg className="w-4 fill-current mr-1" aria-hidden="true" viewBox="0 0 16 16"data-view-component="true">
              <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
          </svg>
            <span>Code</span>
          </a>
        </li>

        <li className="text-md">
          <a href="" className="flex items-center border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150 px-4 pb-3 space-x-1">
          <svg className="w-4 fill-gray-400 mr-1" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
          </svg>
            <span>Issues</span>
            <div className="text-xs font-semibold rounded-full bg-gray-300 px-2 py-1 ml-1">106</div>
          </a>
        </li>

        <li className="text-md">
          <a href="" className="flex items-center border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150 px-4 pb-3 space-x-1">
            <svg className="w-4 fill-gray-400 mr-1" aria-hidden="true" viewBox="0 0 16 16"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
            </svg>
            <span>Pull requests</span>
            <div className="text-xs font-semibold rounded-full bg-gray-300 px-2 py-1 ml-1">25</div>
          </a>
        </li>

        <li className="text-md hidden lg:block">
          <a href="" className="flex items-center border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150 px-4 pb-3 space-x-1">
          <svg className="w-4 fill-gray-400 mr-1" aria-hidden="true"  viewBox="0 0 16 16" data-view-component="true"  >
              <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
          </svg>
            <span>Discussions</span>
          </a>
        </li>

        <li className="text-md hidden lg:block">
          <a href="" className="flex items-center border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150 px-4 pb-3 space-x-1">
            <svg className="w-4 fill-gray-400 mr-1" aria-hidden="true" viewBox="0 0 16 16" data-view-component="true">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
            </svg>
            <span>Actions</span>
          </a>
        </li>

        <li className="text-md hidden lg:block">
          <a href="" className="flex items-center border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150 px-4 pb-3 space-x-1">
            <svg className="w-4 fill-gray-400 mr-1" aria-hidden="true"viewBox="0 0 16 16"data-view-component="true">
                <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
            </svg>
            <span>Security</span>
          </a>
        </li>

        <li className="text-md hidden lg:block">
          <a href="" className="flex items-center border-b-2 border-transparent hover:border-gray-400 transition ease-in-out duration-150 px-4 pb-3 space-x-1">
            <svg className="w-4 fill-gray-400 mr-1" aria-hidden="true"  viewBox="0 0 16 16" version="1.1" data-view-component="true">
                <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
            </svg>
            <span>Insights</span>
          </a>
        </li>

      </ul>
    </div>
  )
}
