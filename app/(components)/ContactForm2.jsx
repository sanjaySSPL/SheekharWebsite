'use client'
import { useForm } from 'react-hook-form'

function ContactForm2() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[90vw] max-w-[605px] h-auto min-h-[456px] bg-white rounded-[10px] p-6 flex flex-col gap-6 md:w-[605px] md:h-[656px] justify-center mx-auto border border-gray-300 shadow-lg"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-800">Name</label>
          <input
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="surname" className="text-gray-800">Surname</label>
          <input
            id="surname"
            {...register('surname', { required: 'Surname is required' })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your surname"
          />
          {errors.surname && <span className="text-red-500 text-sm">{errors.surname.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-800">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email',
              },
            })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="query" className="text-gray-800">Query</label>
          <textarea
            id="query"
            {...register('query', { required: 'Query is required' })}
            className="p-3 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your message"
          />
          {errors.query && <span className="text-red-500 text-sm">{errors.query.message}</span>}
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg border border-blue-700 transition self-center"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm2 