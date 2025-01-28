import Navbar from '@/components/navbar';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';


const SignIn: React.FC = () => {
    const [serialNumber, setSerialNumber] = useState('');
    const auth = useAuth();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await auth.login(serialNumber);
        if (success) {
            console.log("Login succeeded");
        } else {
            console.log("Login failed");
        }
    };

    return (

        <>
        <Navbar />
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-3/4 h-3/4 border rounded-lg bg-white p-8 shadow-md flex flex-col items-center justify-center ">
                <h2 className="mb-6 text-2xl font-bold text-center">Enter your Serial Number</h2>
                <form onSubmit={handleSubmit} className = "flex flex-col items-center">
                                <div className="mb-4 w-full">
                                    <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700">Serial Number</label>
                                    <Input
                                        type="text"
                                        id="serialNumber"
                                        value={serialNumber}
                                        onChange={(e) => setSerialNumber(e.target.value)}
                                        className="mt-1 block w-full rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <button type="submit" className="w-1/2 rounded-md bg-gray-900  py-2 px-4 text-white hover:bg-black">Submit</button>
                            </form>
                        </div>
                    </div>
        </>
    
    );
}


export default SignIn;