import React from 'react'
import Input from './Input.jsx'
import { useForm } from 'react-hook-form'

const currencyOptions = [
    { value: "Security", label: "Security Guard" },
    { value: "Painter", label: "Painter" },
    { value: "Carpenter", label: "Carpenter" },
    { value: "Electrician", label: "Electrician" },
    { value: "Plumber", label: "Plumber" },
];

function RequestQuote() {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="flex flex-wrap w-full h-full bg-blue-200 text-white justify-center items-center">
            <div className="w-[60%] p-5 ">
                <div className="text-center  text-black ">
                    <h1 className="font-bold text-4xl">Request a Quote</h1>
                    <p className="mt-3.5">Get a customised quote for your manpower requirements within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 shadow-2xl rounded-3xl bg-white text-black p-6 mt-2.5">
                    {/* Row 1: Service Type, Location */}
                    <div className="flex gap-3.5">
                        <div className="w-[50%]">
                            <Input
                                label="Service Type"
                                placeholder="Select a Service"
                                type="select"
                                options={currencyOptions}
                                {...register("service", { required: true })}
                            />
                        </div>
                        <div className="w-[50%]">
                            <Input
                                label="Location"
                                placeholder="Enter your Location"
                                type="text"
                                {...register("location", { required: true })}
                            />
                        </div>
                    </div>

                    {/* Row 2: Number of Staff, Preferred Start Date */}
                    <div className="flex gap-3.5">
                        <div className="w-[50%]">
                            <Input
                                label="Number of Staff Needed"
                                placeholder="Enter number of staff"
                                type="text"
                                {...register("staff", { required: true })}
                            />
                        </div>
                        <div className="w-[50%]">
                            <Input
                                label="Preferred Start Date"
                                type="date"
                                {...register("startDate", { required: true })}
                            />
                        </div>
                    </div>

                    {/* Row 3: Full Name, Email Address */}
                    <div className="flex gap-3.5">
                        <div className="w-[50%]">
                            <Input
                                label="Full Name"
                                placeholder="Enter your full name"
                                type="text"
                                {...register("fullName", { required: true })}
                            />
                        </div>
                        <div className="w-[50%]">
                            <Input
                                label="Email Address"
                                placeholder="Enter your email"
                                type="email"
                                {...register("email", { required: true })}
                            />
                        </div>
                    </div>

                    {/* Row 4: Phone Number */}
                    <div className="w-full">
                        <Input
                            label="Phone Number"
                            placeholder="Enter Your Phone Number"
                            type="tel"
                            {...register("telephone", { required: true })}
                        />
                    </div>

                    {/* Row 5: Additional Requirements */}
                    <div className="w-full">
                        <Input
                            label="Additional Requirements"
                            placeholder="Describe any specific requirements"
                            className="w-full h-40 resize-none text-left"
                            type="textarea"
                            {...register("additional", { required: true })}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-5">
                        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Submit Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RequestQuote
