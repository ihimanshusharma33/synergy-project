import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const AddForm = () => {
    const theme = useSelector((state) => state.theme);

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let formObj = Object.fromEntries(formData.entries());
        let jsondata = JSON.stringify(formObj);
        alert(`${jsondata} this data will be added, We can call add API and pass jsondata and it will return a response code`)
    };

    return (
        <div className={theme === 'light' ? 'bg-white text-gray-800 min-h-screen' : 'bg-gray-800 text-gray-300 min-h-screen'}>
            <nav className={`h-16 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
                <span className={`p-4 text-2xl ${theme === 'light' ? 'text-gray-800' : 'text-gray-50'}`}>
                    <Link to='/'>
                        <i className="fa-solid fa-house mt-4"></i>
                    </Link>
                </span>
            </nav>
            <div className={`flex w-full lg:w-1/3 shadow-2xl mx-auto flex-col justify-start px-6 py-12 lg:px-8 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
                <h1 className={`text-2xl font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-gray-300'}`}>Add User</h1>
                <div className="mt-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="name" className={theme === 'light' ? 'block text-sm font-medium leading-6 text-gray-800' : 'block text-sm font-medium leading-6 text-gray-300'}>
                                    Name
                                </label>
                            </div>
                            <div className="mt-2 relative">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="current-name"
                                    required
                                    className={theme === 'light' ? 'block w-full bg-white rounded-md border-0 p-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6' : 'block w-full bg-gray-800 rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6'}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="username" className={theme === 'light' ? 'block text-sm font-medium leading-6 text-gray-800' : 'block text-sm font-medium leading-6 text-gray-300'}>
                                    Username
                                </label>
                            </div>
                            <div className="mt-2 relative">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="current-username"
                                    required
                                    className={theme === 'light' ? 'block w-full bg-white rounded-md border-0 p-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6' : 'block w-full bg-gray-800 rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6'}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className={theme === 'light' ? 'block text-sm font-medium leading-6 text-gray-800' : 'block text-sm font-medium leading-6 text-gray-300'}>
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className={theme === 'light' ? 'block w-full bg-white rounded-md border-0 p-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6' : 'block w-full bg-gray-800 rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6'}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="address" className={theme === 'light' ? 'block text-sm font-medium leading-6 text-gray-800' : 'block text-sm font-medium leading-6 text-gray-300'}>
                                    Address
                                </label>
                            </div>
                            <div className="mt-2 relative">
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    autoComplete="current-address"
                                    required
                                    className={theme === 'light' ? 'block w-full bg-white rounded-md border-0 p-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6' : 'block w-full bg-gray-800 rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6'}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={theme === 'light' ? 'flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600' : 'flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-100 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'}
                            >
                                Add user
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
