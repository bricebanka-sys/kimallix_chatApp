import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Anmelden
          <span className='text-blue-500'> Kymallix</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
							<span className='text-base label-text'>Benutzername</span>
						</label>
            <input
							type='text'
							placeholder='Benutzername eingeben'
							className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label className='label'>
							<span className='text-base label-text'>Passwort</span>
						</label>
            <input
							type='password'
							placeholder='Passwort eingeben'
							className='w-full input input-bordered h-10'/>
          </div>
            <a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
              Noch kein Konto?
            </a>
            <div className='btn btn-block btn-sm mt-2'>
              Anmelden
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;




// CODE DE DEPART POUR CETTE PAGE

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Anmelden
//           <span className='text-blue-500'> Kyalix</span>
//         </h1>
//         <form>
//           <div>
//             <label className='label p-2'>
// 							<span className='text-base label-text'>Benutzername</span>
// 						</label>
//             <input
// 							type='text'
// 							placeholder='Benutzername eingeben'
// 							className='w-full input input-bordered h-10'/>
//           </div>
//           <div>
//             <label className='label'>
// 							<span className='text-base label-text'>Passwort</span>
// 						</label>
//             <input
// 							type='password'
// 							placeholder='Passwort eingeben'
// 							className='w-full input input-bordered h-10'/>
//           </div>
//             <a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
//               Noch kein Konto?
//             </a>
//             <div className='btn btn-block btn-sm mt-2'>
//               Anmelden
//             </div>
//         </form>
//       </div>
//     </div>
//   );
// };