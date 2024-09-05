import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Update = () => {
    const theme = useSelector((state) => state.theme);
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: ''
        }
    });
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [address, setAddress] = useState('');

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                setUser(response.data);
                setLoading(false);
                const { street, suite, city, zipcode } = response.data.address;
                setAddress(`${street} ${suite} ${city} ${zipcode}`);
            })
            .catch(error => {
                console.error('Error fetching user:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'address') {
            setAddress(value);
        } else {
            setUser(prevUser => ({
                ...prevUser,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let formObj = Object.fromEntries(formData.entries());
        let jsondata = JSON.stringify(formObj);
        // api call to update user
        // axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, jsondata).
        // then(response=>{console.log('do somthing with')}).
        // catch(error=>{ console.error('Error updating user:', error); });
        alert(`${jsondata} this data with id ${id} will be updated, We can call update API and pass id as parameter.`);
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
                <h1 className={`text-2xl font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-gray-300'}`}>Update User</h1>
                <div className="mt-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className={theme === 'light' ? 'block text-sm font-medium leading-6 text-gray-800' : 'block text-sm font-medium leading-6 text-gray-300'}>
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="current-name"
                                    required
                                    value={user.name}
                                    onChange={handleChange}
                                    className={theme === 'light' ? 'block w-full bg-white rounded-md border-0 p-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6' : 'block w-full bg-gray-800 rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6'}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="username" className={theme === 'light' ? 'block text-sm font-medium leading-6 text-gray-800' : 'block text-sm font-medium leading-6 text-gray-300'}>
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="current-username"
                                    required
                                    value={user.username}
                                    onChange={handleChange}
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
                                    value={user.email}
                                    onChange={handleChange}
                                    className={theme === 'light' ? 'block w-full bg-white rounded-md border-0 p-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6' : 'block w-full bg-gray-800 rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6'}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className={theme === 'light' ? 'block text-sm font-medium leading-6 text-gray-800' : 'block text-sm font-medium leading-6 text-gray-300'}>
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    autoComplete="current-address"
                                    required
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className={theme === 'light' ? 'block w-full bg-white rounded-md border-0 p-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6' : 'block w-full bg-gray-800 rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6'}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={theme === 'light' ? 'flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600' : 'flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-100 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'}
                            >
                                Update user
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};