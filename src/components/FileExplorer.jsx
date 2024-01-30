
import Markdown from 'react-markdown'
import ReadmeTailwind from '../assets/readme-tailwind.md'

export default function FileExplorer() 
{

  const markdown = ReadmeTailwind

  return (
    <div className="container mx-auto my-8 px-4 flex flex-col lg:flex-row">

      <div className="file-explorer-container w-full lg:w-3/4 lg:mr-8">
        <div className="branch-navigation flex items-center justify-between">
          <div className="flex items-center space-x-5">

            <button className="flex border text-sm  items-center border-gray-300  hover:bg-gray-100 rounded-md px-4 py-1 font-bold space-x-1">
              <svg className="w-4 fill-current text-gray-600" aria-hidden="true" viewBox="0 0 16 16"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
              </svg>
              <span>master</span>
              <svg className="w-3" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
              </svg>
            </button>

            <a href="#" className="flex items-center space-x-1 group">
              <svg className="w-4 fill-current text-gray-600 group-hover:text-blue-600" aria-hidden="true" viewBox="0 0 16 16"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
              </svg>
              <span className="group-hover:text-blue-600 font-bold">25 </span>
              <span className="text-gray-500 font-semibold group-hover:text-blue-600 hidden md:inline">branches</span>
            </a>

            <a href="#" className="flex items-center space-x-1 group">
              <svg className="w-4 fill-current text-gray-600 group-hover:text-blue-600" aria-hidden="true" focusable="false" role="img"viewBox="0 0 16 16"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg>
              <span className="group-hover:text-blue-600 font-bold">79 </span>
              <span className="text-gray-500 font-semibold group-hover:text-blue-600 hidden md:inline">tags</span>
            </a>

          </div>
          <div className="flex items-center space-x-2">
            <button className="border border-gray-300 hover:bg-gray-100 rounded-md px-4 py-1 font-semibold hidden lg:block">
              Go to file
            </button>

            <div className='hidden lg:block'>
              <button className="border border-gray-300  hover:bg-gray-100 rounded-md px-4 py-1 font-semibold flex items-center space-x-2">
                <span>Add file</span>
                <svg className="w-3" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
              </button>
            </div>

            <button className="border bg-green-600  hover:bg-green-500 text-white rounded-md px-4 py-1 font-semibold flex items-center space-x-2">
              <svg className="w-4 fill-white mr-1" aria-hidden="true" viewBox="0 0 16 16"data-view-component="true">
                <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
              </svg>
              <span>Code</span>
              <svg className="w-3 stroke-white" data-slot="icon" fill="none" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
              </svg>
            </button>
          </div>
        </div> {/* End of branch navigation */}

        <div className="commits-container bg-blue-50 rounded-md rounded-b-none border border-blue-200 border-b-0 flex items-center justify-between px-4 py-4 mt-5">
          <a href="#" className="flex items-center space-x-2">
            <img className="w-6 h-6 rounded-full" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1122.jpg" alt="avatar" data-view-component="true"/>
            <span className="font-bold hover:underline">tioberik</span>
            <span className="font-semibold hover:underline hover:text-blue-600">1.5.1</span>
          </a>

          <div className="flex items-center space-x-3">

            <div className="hidden lg:block">
              <a href="#" className="flex items-end space-x-1 group">
                <svg className="w-4 stroke-green-600 "data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                </svg>
                <span className="font-mono text-xs text-gray-600 group-hover:underline group-hover:text-blue-600">da070bd</span>
              </a>
            </div>

            <a href="#" className="text-gray-500 font-semibold hover:underline hover:text-blue-600">5 days ago</a>

            <a href="#" className="flex items-center justify-between space-x-1 group">
              <svg className="w-4 fill-gray-500 group-hover:fill-blue-600 " aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg>
              <span className="group-hover:text-blue-600 font-bold">3,040 </span>
              <span className="text-gray-500 font-semibold group-hover:text-blue-600 hidden lg:inline">commits</span>
            </a>
          </div>
        </div> {/* End of commits container */}

        <div className="file-explorer text-sm rounded-md rounded-t-none border border-gray-300 text-gray-700 divide-y divide-gray-300">

          <div className="flex justify-between px-2 py-2 hover:bg-gray-100">
            <a className="w-4/12 flex items-center space-x-3 px-2">
              <svg className="w-4 fill-blue-300" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
              <span className="hover:underline hover:text-blue-600">.github</span>
            </a>
            <div className="w-6/12 truncate hidden lg:block">Update issues template</div>
            <div className="w-6/12 lg:w-2/12 text-right">13 days ago</div>
          </div>
          
          <div className="flex justify-between px-2 py-2 hover:bg-gray-100">
            <a className="w-4/12 flex items-center space-x-3 px-2">
              <svg className="w-4 fill-blue-300" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
              <span className="hover:underline hover:text-blue-600">.github</span>
            </a>
            <div className="w-6/12 truncate hidden lg:block">Update issues template</div>
            <div className="w-6/12 lg:w-2/12 text-right">13 days ago</div>
          </div>
          
          <div className="flex justify-between px-2 py-2 hover:bg-gray-100">
            <a className="w-4/12 flex items-center space-x-3 px-2">
              <svg className="w-4 fill-blue-300" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
              <span className="hover:underline hover:text-blue-600">.github</span>
            </a>
            <div className="w-6/12 truncate hidden lg:block">Update issues template</div>
            <div className="w-6/12 lg:w-2/12 text-right">13 days ago</div>
          </div>
          
          <div className="flex justify-between px-2 py-2 hover:bg-gray-100">
            <a className="w-4/12 flex items-center space-x-3 px-2">
              <svg className="w-4 fill-blue-300" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
              <span className="hover:underline hover:text-blue-600">.github</span>
            </a>
            <div className="w-6/12 truncate hidden lg:block">Update issues template</div>
            <div className="w-6/12 lg:w-2/12 text-right">13 days ago</div>
          </div>
          
          <div className="flex justify-between px-2 py-2 hover:bg-gray-100">
            <a className="w-4/12 flex items-center space-x-3 px-2">
              <svg className="w-4 fill-blue-300" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
              <span className="hover:underline hover:text-blue-600">.github</span>
            </a>
            <div className="w-6/12 truncate hidden lg:block">Update issues template</div>
            <div className="w-6/12 lg:w-2/12 text-right">13 days ago</div>
          </div>
          
          <div className="flex justify-between px-2 py-2 hover:bg-gray-100">
            <a className="w-4/12 flex items-center space-x-3 px-2">
              <svg className="w-4 fill-blue-300" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
              <span className="hover:underline hover:text-blue-600">.github</span>
            </a>
            <div className="w-6/12 truncate hidden lg:block">Update issues template</div>
            <div className="w-6/12 lg:w-2/12 text-right">13 days ago</div>
          </div>
          
          <div className="flex justify-between px-2 py-2 hover:bg-gray-100">
            <a className="w-4/12 flex items-center space-x-3 px-2">
              <svg className="w-4 fill-blue-300" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
              <span className="hover:underline hover:text-blue-600">.github</span>
            </a>
            <div className="w-6/12 truncate hidden lg:block">Update issues template</div>
            <div className="w-6/12 lg:w-2/12 text-right">13 days ago</div>
          </div>
          
          <div className="flex justify-between px-2 py-2 hover:bg-gray-100">
            <a className="w-4/12 flex items-center space-x-3 px-2">
              <svg className="w-4 fill-blue-300" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
              <span className="hover:underline hover:text-blue-600">.github</span>
            </a>
            <div className="w-6/12 truncate hidden lg:block">Update issues template</div>
            <div className="w-6/12 lg:w-2/12 text-right">13 days ago</div>
          </div>
          
          <div className="flex justify-between px-2 py-2 hover:bg-gray-100">
            <a className="w-4/12 flex items-center space-x-3 px-2">
              <svg className="w-4 fill-blue-300" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
              <span className="hover:underline hover:text-blue-600">.github</span>
            </a>
            <div className="w-6/12 truncate hidden lg:block">Update issues template</div>
            <div className="w-6/12 lg:w-2/12 text-right">13 days ago</div>
          </div>
          
          <div className="flex justify-between px-2 py-2 hover:bg-gray-100">
            <a className="w-4/12 flex items-center space-x-3 px-2">
              <svg className="w-4 fill-blue-300" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
              <span className="hover:underline hover:text-blue-600">.github</span>
            </a>
            <div className="w-6/12 truncate hidden lg:block">Update issues template</div>
            <div className="w-6/12 lg:w-2/12 text-right">13 days ago</div>
          </div>
          
          <div className="flex justify-between px-2 py-2 hover:bg-gray-100">
            <a className="w-4/12 flex items-center space-x-3 px-2">
              <svg className="w-4 fill-blue-300" aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
              <span className="hover:underline hover:text-blue-600">.github</span>
            </a>
            <div className="w-6/12 truncate hidden lg:block">Update issues template</div>
            <div className="w-6/12 lg:w-2/12 text-right">13 days ago</div>
          </div>
          
        </div> {/* End of file explorer */}

        <div className="readme-container rounded-md border border-gray-300 px-4 py-4 mt-4">
          <h4 className="font-semibold">README.md</h4>
          <div>
            <article className="prose mt-10">
              <Markdown>{markdown}</Markdown>
            </article>
          </div>
        </div> {/* End of readme container */}

      </div>  {/* End of file explorer container */}

      <div className="file-explorer-sidebar w-full lg:w-1/4 mt-6 lg:mt-0">
        <div className="about">
          <h4 className="text-base font-semibold">About</h4>
          <p className="text-base mt-4">A utility first CSS framework for rapid UI development.</p>

          <a href="#" className="flex items-center space-x-2 mt-4">
            <svg className="w-4 fill-current" aria-hidden="true" height="16" viewBox="0 0 16 16" data-view-component="true">
                <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
            </svg>
            <span className="font-semibold text-blue-500 hover:underline">tailwindcss.com/</span>
          </a>
          
          <div className="tags text-xs font-semibold flex items-center flex-wrap mt-2">
            <a href="#" className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full px-3 py-1 mt-2 mr-1">tailwindcss</a>
            <a href="#" className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full px-3 py-1 mt-2 mr-1">css</a>
            <a href="#" className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full px-3 py-1 mt-2 mr-1">css-framework</a>
            <a href="#" className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full px-3 py-1 mt-2 mr-1">postcss</a>
            <a href="#" className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full px-3 py-1 mt-2 mr-1">functional-css</a>
            <a href="#" className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full px-3 py-1 mt-2 mr-1">utility-classes</a>
            <a href="#" className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full px-3 py-1 mt-2 mr-1">utility-classes</a>
            <a href="#" className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full px-3 py-1 mt-2 mr-1">utility-classes</a>
            <a href="#" className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full px-3 py-1 mt-2 mr-1">responsive</a>
          </div> {/* End of tags */}

          <a href="#" className="flex items-center space-x-2 group mt-5 ">
            <svg className="w-4 fill-gray-500 group-hover:fill-blue-600" aria-hidden="true"viewBox="0 0 16 16"data-view-component="true">
                <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
            </svg>
              <span className="text-sm text-gray-500 font-semibold group-hover:text-blue-600">Readme</span>
          </a>

          <a href="#" className="flex items-center space-x-2 group mt-3">
          <svg className="w-4 fill-gray-500 group-hover:fill-blue-600" aria-hidden="true"viewBox="0 0 16 16"data-view-component="true">
                <path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z"></path>
            </svg>
            <span className="text-sm text-gray-500 font-semibold group-hover:text-blue-600">MIT License</span>
          </a>

        </div> {/* End of about */}

        <div className="releases border-t border-gray-300 mt-6">
          <a href="#"className="flex items-center space-2 mt-6">
            <h4 className="text-base font-bold hover:text-blue-600">Releases</h4>
            <div className="text-xs font-semibold rounded-full bg-gray-200 px-2 py-1 ml-1">79</div>
          </a>

          <a href="#" className="flex items-start my-4 space-x-2 group">
            <svg className="w-4 mt-1 fill-green-600 group-hover:fill-blue-600" aria-hidden="true" viewBox="0 0 16 16" version="1.1"data-view-component="true">
                <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
            </svg>
            <span className="ml-2">
              <span className="font-bold group-hover:text-blue-600">v1.5.1</span>
              <span className="ml-2 text-xs font-semibold text-green-600 border border-green-600  rounded-full px-2">Latest</span>
              <span className="block text-xs group-hover:text-blue-600">5 days ago</span>
            </span>
          </a>
          <a href="#" className="text-blue-600 text-sm hover:underline mt-6">+ 218 releases</a>
        </div> {/* End of releases */}

        <div className="packages border-t border-gray-300 mt-6">
          <a href="#"className="flex items-center space-2 mt-6">
            <h4 className="text-base font-bold hover:text-blue-600">Packages</h4>
          </a>
          <a href="#"className="block text-xs mt-5 group-hover:text-blue-600">No packages public</a>
        </div> {/* End of packages */}

        <div className="used-by border-t border-gray-300 mt-6">
          <a href="#"className="flex items-center space-x-2 mt-6">
            <h4 className="text-base font-bold hover:text-blue-600">Used by</h4>
            <div className="text-xs font-semibold rounded-full bg-gray-200 px-2 py-1 ml-1">5,000+</div>
          </a>

          <div className="flex items-center  mt-4 space-x-2">
            <a href="#" className="flex items-center -space-x-2">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg" alt="avatar" className="w-8 border-2 border-white rounded-full"/>
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1110.jpg" alt="avatar" className="w-8 border-2 border-white rounded-full"/>
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1124.jpg" alt="avatar" className="w-8 border-2 border-white rounded-full"/>
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1164.jpg" alt="avatar" className="w-8 border-2 border-white rounded-full"/>
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1144.jpg" alt="avatar" className="w-8 border-2 border-white rounded-full"/>
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1154.jpg" alt="avatar" className="w-8 border-2 border-white rounded-full"/>
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg" alt="avatar" className="w-8 border-2 border-white rounded-lg"/>
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1198.jpg" alt="avatar" className="w-8 border-2 border-white rounded-full"/>
            </a>
            <a href="#" className="text-xs font-semibold text-blue-600 hover:underline ml-10">+6,857,330</a>
          </div>
          
        </div> {/* End of used-by */}

        <div className="contributors border-t border-gray-300 mt-6">
          <a href="#"className="flex items-center space-2 mt-6">
            <h4 className="text-base font-bold hover:text-blue-600">Contributors</h4>
            <div className="text-xs font-semibold rounded-full bg-gray-200 px-2 py-1 ml-1">288</div>
          </a>

          <div className="flex flex-wrap mt-2 items-center mb-3">
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1111.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1112.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1113.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1114.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1115.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1116.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1117.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1118.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1119.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1120.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1121.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1122.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1123.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1124.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1125.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
            <a href="#">
              <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1126.jpg" alt="avatar" className="w-9 border-2 border-white mr-1 mt-1 rounded-full"/>
            </a>
          </div>
          <a href="#" className="mt-5 text-sm font-semibold text-blue-600 hover:underline">+ 274 contributors</a>

        </div> {/* End of contributors */}

        <div className="langauges border-t border-gray-300 mt-6">
          <a href="#"className="flex items-center space-2 mt-6">
            <h4 className="text-base font-bold hover:text-blue-600">Langauges</h4>
          </a>

          <div className="mt-4 flex">
            <div className="w-11/12 h-2 rounded rounded-r-none bg-purple-700"></div>
            <div className="w-1/12 h-2 rounded rounded-l-none bg-yellow-500"></div>
          </div>

          <div className="mt-2 flex items-center space-x-3">
            <div className="flex items-center space-x-2 ml-2">
              <div className="w-2 h-2 rounded-full bg-purple-700"></div>
              <span className="font-bold text-xs">CSS</span>
              <span className="font-semibold text-xs text-gray-400">93.9%</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="font-bold text-xs">JavaScript</span>
                <span className="font-semibold text-xs text-gray-400">6.1%</span>
              </div>
          </div>

        </div> {/* End of langauges */}

      </div> {/* End of sidebar */}

    </div>
  )
}
