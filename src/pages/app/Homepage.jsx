// import { Link } from "react-router-dom";
// function Homepage() {
//   // max-w-lg
//   return (
//     <div className="flex px-[20px] items-center justify-center overflow-hidden h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600
//     ">
//       <div className="bg-white p-[20px] sm:p-10  w-full">
//         <h1 className="text-4xl font-bold mb-6 text-center font-mono text-gray-800">
//           Welcome to the Trivia Challenge!
//         </h1>
//         <p className="mb-4 text-center text-gray-700 text-lg">
//           You will be presented with 10 True or False Questions.
//         </p>
//         <p className="text-center pb-6 text-gray-700 text-lg">
//           Can you score 100%?
//         </p>
//         <div className="flex justify-center">
//           <Link to="/quiz"
//             className="px-8 py-4 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
//           >
//             BEGIN
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Homepage;
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="flex flex-col px-[20px] items-center justify-center overflow-auto h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-[20px] sm:p-10 max-w-lg w-full mt-10 mb-10">
        <h1 className="text-4xl font-bold mb-6 text-center font-mono text-gray-800">
          Welcome to the Trivia Challenge!
        </h1>
        <p className="mb-4 text-center text-gray-700 text-lg">
          You will be presented with 10 True or False Questions.
        </p>
        <p className="text-center pb-6 text-gray-700 text-lg">
          Can you score 100%?
        </p>
        <div className="flex justify-center">
          <Link to="/quiz"
            className="px-8 py-4 bg-blue-600 text-white text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            BEGIN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
