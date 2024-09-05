import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SkeletonTable } from './SkeletonTable.js';
import { toggleTheme } from './Theme.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from 'react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleClick = () => {
        dispatch(toggleTheme());
    };

    const handledelete = (id) => {
        //call api to delete user
        // axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        //     .then(response => {
        //         console.log('response', response);
        //         setDelete(true);
        //     })
        //     .catch(error => {
        //         console.error('Error deleting user:', error);
        //     });
        alert(`user with id ${id} deleted, We can call delete api and pass id as parameter`);
    }

    if (loading) return <SkeletonTable />;

    return (
        <div>
            <section className={` ${theme === 'light' ? 'bg-gray-100 text-gray-600' : 'bg-gray-800 text-gray-300'}`}>
                <div className="flex flex-col justify-center h-full">
                    <div className={theme === 'light' ? 'w-full mx-auto bg-white rounded-sm border border-gray-200' : 'w-full mx-auto bg-gray-800 rounded-sm border border-gray-700'}>
                        <div className='flex justify-between flex-wrap my-10'>
                            <div>
                                <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
                                    <input
                                        type='checkbox'
                                        checked={theme === 'light'}
                                        onChange={handleClick}
                                        className='sr-only'
                                    />
                                    <span className={`label flex items-center text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                                        Dark
                                    </span>
                                    <span
                                        className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${theme === 'light' ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
                                            }`}
                                    >
                                        <span
                                            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${theme === 'light' ? 'translate-x-[28px]' : ''
                                                }`}
                                        ></span>
                                    </span>
                                    <span className={`label flex items-center text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                                        Light
                                    </span>
                                </label>
                            </div>
                            <div className='hidden lg:block'>
                                <h1 className='text-2xl font-bold mx-20'>User List</h1>
                            </div>
                            <div>
                                <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"><Link to='/adduser'>Add User</Link></button>
                            </div>
                        </div>
                        <div className="p-3">
                            <h1 className='text-2xl text-center font-bold lg:hidden'>User List</h1>
                            <div className="overflow-x-auto">
                                <table className={theme === 'light' ? 'table-auto w-full' : 'table-auto w-full bg-gray-800'}>
                                    <thead className={theme === 'light' ? 'text-xs font-semibold uppercase text-gray-400 bg-gray-50' : 'text-xs font-semibold uppercase text-gray-500 bg-gray-700'}>
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className={theme === 'light' ? 'font-semibold text-left' : 'font-semibold text-left text-gray-100'}>
                                                    Name
                                                </div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className={theme === 'light' ? 'font-semibold text-left' : 'font-semibold text-left text-gray-100'}>
                                                    Email
                                                </div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className={theme === 'light' ? 'font-semibold text-left' : 'font-semibold text-left text-gray-100'}>
                                                    User Name
                                                </div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className={theme === 'light' ? 'font-semibold text-left' : 'font-semibold text-left text-gray-100'}>
                                                    Address
                                                </div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className={theme === 'light' ? 'font-semibold text-left' : 'font-semibold text-left text-gray-100'}>
                                                    Action
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className={theme === 'light' ? 'text-sm divide-y divide-gray-100' : 'text-sm divide-y divide-gray-600'}>
                                        {users.map(user => (
                                            <tr key={user.id} className={theme === 'light' ? 'text-gray-700 hover:bg-gray-200 hover:text-gray-950' : 'text-gray-300 hover:bg-gray-700 hover:text-gray-100'}>
                                                <td className="p-2 whitespace-nowrap" to={`/user/${user.id}`}>{user.name}</td>
                                                <td className='p-2 whitespace-nowrap'>{user.email}</td>
                                                <td className='p-2 whitespace-nowrap'>{user.username}</td>
                                                <td className='p-2 whitespace-nowrap'>{user.address.street}, {user.address.suite}, {user.address.city}</td>
                                                <td className='p-2 whitespace-nowrap '>
                                                    <button type="button" className={theme === 'light' ? 'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' : 'text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'}>
                                                        <Link to={`/update/${user.id}`}>update</Link>
                                                    </button>
                                                    <button type="button" className={theme === 'light' ? 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' : 'text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'}
                                                        onClick={(e) => { handledelete(user.id) }}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
};

export default Home;
