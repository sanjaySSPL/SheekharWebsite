"use client";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // You can integrate API call here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl mx-auto bg-white border border-gray-300 p-6 rounded-lg shadow-md space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-800 mb-1">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-gray-800 mb-1">Surname</label>
          <input
            {...register("surname")}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your surname"
          />
        </div>

        <div>
          <label className="block text-gray-800 mb-1">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-gray-800 mb-1">Category</label>
          <input
            {...register("category")}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter category"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-800 mb-1">Query</label>
        <textarea
          {...register("query")}
          className="w-full p-3 border border-gray-300 rounded-lg h-24 resize-none"
          placeholder="Your message"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg border border-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
