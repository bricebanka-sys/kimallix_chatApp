import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
					Registrieren <span className='text-blue-500'> Kymallix</span>
				</h1>
        <form>
          <div>
            <label className='label p-2'>
							<span className='text-base label-text'>Vollständiger Name</span>
						</label>
            <input
							type='text'
							placeholder='Mesmin'
							className='w-full input input-bordered  h-10'/>
          </div>
          <div>
            <label className='label p-2 '>
							<span className='text-base label-text'>Benutzername</span>
						</label>
						<input
							type='text'
							placeholder='Katze'
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
          <div>
            <label className='label'>
							<span className='text-base label-text'>Passwort bestätigen</span>
						</label>
						<input
							type='password'
							placeholder='Passwort bestätigen'
							className='w-full input input-bordered h-10'/>
          </div>
          {/* GENDER CHECKBOX GOES HERE */}

          <GenderCheckbox/>

          <a   
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
            href='#'
          >
            Haben Sie bereits ein Konto?
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Registrieren</button>
          </div>
        </form>
      </div>

    </div>
  )
};

export default SignUp;





//CODE DE DEPART POUR CE FICHIER

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox';

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Registrieren <span className='text-blue-500'> Kymallix</span>
// 				</h1>
//         <form>
//           <div>
//             <label className='label p-2'>
// 							<span className='text-base label-text'>Vollständiger Name</span>
// 						</label>
//             <input
// 							type='text'
// 							placeholder='Mesmin'
// 							className='w-full input input-bordered  h-10'/>
//           </div>
//           <div>
//             <label className='label p-2 '>
// 							<span className='text-base label-text'>Benutzername</span>
// 						</label>
// 						<input
// 							type='text'
// 							placeholder='Katze'
// 							className='w-full input input-bordered h-10'/>
//           </div>
//           <div>
//             <label className='label'>
// 							<span className='text-base label-text'>Passwort</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Passwort eingeben'
// 							className='w-full input input-bordered h-10'/>
//           </div>
//           <div>
//             <label className='label'>
// 							<span className='text-base label-text'>Passwort bestätigen</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Passwort bestätigen'
// 							className='w-full input input-bordered h-10'/>
//           </div>
//           {/* GENDER CHECKBOX GOES HERE */}

//           <GenderCheckbox/>
          
//           <a   
//             className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
//             href='#'
//           >
//             Haben Sie bereits ein Konto?
//           </a>
//           <div>
//             <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Registrieren</button>
//           </div>
//         </form>
//       </div>

//     </div>
//   )
// };

// export default SignUp;