const Contact = () => {
  return (
    <div className='container mx-auto mt-8 px-4 max-w-md'>
      <h2 className='text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200'>Contact Us</h2>
      <form className='space-y-4'>
        <div>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white'
            placeholder='Your name'
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white'
            placeholder='Your email'
          />
        </div>
        <div>
          <label htmlFor='message' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows='4'
            className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white'
            placeholder='Your message'
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
