
import './index.css';

function App() {
  return (
    <div className="container">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
          <a href="https://flowbite.com/" className='flex items-center'>
            <img src="https://flowbite.com/docs/images/logo.svg" alt="Google Translator" className='h-6 mr-3 sm:h-9' />
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>Google Translator</span>
          </a>
       
        <div className='flex items-center md:order-2'>
          <button className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600' type='button' id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className='sr-only'>Open user menu</span>
            <img src="#" alt="#" className='w-8 h-8 rounded-full' />
          </button>
          <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
        </div>
        </div>
      </nav>
        <section className="optionsButton">
            <div>
                <button className="btn btnText">Text</button>
                <button className="btn btnImage">Images</button>
                <button className="btn btnDocument">Documents</button>
                <button className="btn btnWebsites">Websites</button>
            </div>
        </section>
        <section className="translatorSection">
            <div className="container1">
                <div className="langSettings">
                    <p>Define language</p>
                    <p>English</p>
                    <p>Russian</p>
                    <p>Uzbek</p>
                </div>
                <div className="inputField">
                    some text
                </div>
                
            </div>
            <div className="container2">
                <div className="langSettings">
                    <p>Define language</p>
                    <p>English</p>
                    <p>Russian</p>
                    <p>Uzbek</p>
                </div>
                <div className="resultField">
                    result
                </div>
            </div>

        </section>
        <section className="history"></section>
    </div>
  );
}

export default App;
