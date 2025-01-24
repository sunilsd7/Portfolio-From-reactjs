import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='text-center m-10'>
        <span className='border-2 p-2 rounded-lg text-4xl'>Contact Me</span>
      </div>

    <div className='md:flex gap-32'>
      <div className='text-center md:ms-auto text-4xl'>
        <div>Connect with me</div>
      </div>
      <div className='md:mx-auto'>
       <form className='pt-5  p-10' >
                            <input
                                className='w-[100%] py-2 px-1 bg-lowdark mb-3 placeholder:text-darkcolor rounded-[0.2rem]'
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Name:'
                              
                              
                            />
                            <input
                                className='w-[100%] py-2 px-1 bg-lowdark mb-3 placeholder:text-darkcolor rounded-[0.2rem]'
                                type="text"
                                name="email"
                                id="email"
                                placeholder='Email:'
                        
                            
                            />
                            <textarea
                                className='w-[100%] h-24 py-2 px-1 bg-lowdark placeholder:text-darkcolor rounded-[0.2rem]'
                                name="message"
                                id="message"
                                placeholder='Message:'
                               
                            />
                            <button
                                type='submit'
                                className="text-whitecolor bg-primarycolor mt-3 border-primarycolor hover:bg-darkcolor flex items-center space-x-2 border-2 px-8 py-2 rounded-[0.4rem] text-[1rem]"
                             
                            >
                                <span>Send</span>
                            </button>
                        </form>
                        </div>
    </div>
    </div>
  )
}

export default Contact
