import React from "react";

const Signup = () => {
    const handleSubmit = () => {

    }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Sign up!</h2>
          <p>Create an account</p>
          <div className="card-actions justify-end">
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-neutral-content dark:text-white">Your name</label>
                      <input type="text" placeholder="Type your name" className="input input-bordered input-primary w-full max-w-xs text-neutral-focus" />
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-neutral-content dark:text-white">Your email</label>
                      <input type="text" placeholder="Type your email" className="input input-bordered input-primary w-full max-w-xs text-neutral-focus" />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-neutral-content dark:text-white">Password</label>
                      <input type="password" placeholder="Type your password" className="input input-bordered input-primary w-full max-w-xs text-neutral-focus" />
                  </div>
                  
                  <button type="submit" className="btn btn-success">Sign Up!</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
