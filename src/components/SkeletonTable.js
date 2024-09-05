import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { toggleTheme } from './Theme.js';
import { useDispatch, useSelector } from 'react-redux';
export const SkeletonTable = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    const handleClick = () => {
        dispatch(toggleTheme());
    };

    return (
        <section className={`h-screen ${theme==='light'?'bg-gray-100 text-gray-600':'bg-gray-800 text-white'}`}>
            <div className="flex flex-col justify-center h-full">
                <div className={`w-full mx-auto rounded-sm ${theme==='light'?'bg-white':'bg-gray-800'}`}>
                    <header className="px-5 py-4">
                        <h2 className={`text-xl text-center font-semibold ${theme==='light'?'text-gray-800':'text-white'}`}>User Data</h2>
                        <button onClick={handleClick} className={`${theme === 'light' ? 'bg-white' : 'text-white bg-gray-700'}`}>
                            Switch to {theme === 'light' ? 'dark' : 'light'} mode
                        </button>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className={`text-xs font-semibold uppercase ${theme==='light'?'text-gray-400 bg-gray-50':'text-white bg-gray-700'}`}>
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Email</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">User Name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Address</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Action</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={`text-sm divide-y ${theme==='light'?'divide-gray-100':'divide-gray-700'}`}>
                                    {Array.from({ length: 10 }).map((_, index) => (
                                        <tr key={index}>
                                            <td className="p-2 whitespace-nowrap">
                                                <Skeleton className={`skeleton ${theme === 'dark' ? 'skeleton-dark' : 'skeleton-light'}`} height={20} width={100} />
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <Skeleton className={`skeleton ${theme === 'dark' ? 'skeleton-dark' : 'skeleton-light'}`} height={20} width={150} />
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <Skeleton className={`skeleton ${theme === 'dark' ? 'skeleton-dark' : 'skeleton-light'}`} height={20} width={120} />
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <Skeleton className={`skeleton ${theme === 'dark' ? 'skeleton-dark' : 'skeleton-light'}`} height={20} width={200} />
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex space-x-2">
                                                    <Skeleton className={`skeleton ${theme === 'dark' ? 'skeleton-dark' : 'skeleton-light'}`} height={30} width={80} />
                                                    <Skeleton className={`skeleton ${theme === 'dark' ? 'skeleton-dark' : 'skeleton-light'}`} height={30} width={80} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
