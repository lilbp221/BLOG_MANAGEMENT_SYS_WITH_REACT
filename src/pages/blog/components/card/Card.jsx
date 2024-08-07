// import React from 'react'
// import { Link } from 'react-router-dom'

// const Card = ({blog}) => {

  
//   return (
//   // <Link to="/blog/id"> This is the hyperlink for static id //it links to single blog page

//   <Link to={`/blogs/${blog._id}`} > 
//       <div class="grid sm:grid-cols-1 rounded overflow-hidden shadow-lg mb-4 ">
//   <div class="col-span-1" >
//   <img class="w-full" src={blog.imageUrl} alt="Sunset in the mountains" />
//   </div>  
//     <div class="px-6 py-4 grid col-span-1">
//       <div class="font-bold text-xl mb-2">Title:{blog.title}</div> 
//       <div class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Subtitle:{blog.subtitle}</div>

      
//     </div>
//    <div><p class="text-gray-700 text-base">
//    Description:{blog.description}      </p></div> 
//     <div class="px-6 pt-4 pb-2">
//       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//     </div>
//   </div>
//   </Link>
//   )
// }

// export default Card




import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ blog }) => {

//  console.log(blog.userId.username)
  return (
    <Link to={`/blogs/${blog._id}`} className="block rounded overflow-hidden shadow-lg mb-4 font-mono">
      <div className="grid grid-rows-[auto,auto,1fr,auto] h-full">
        <img className="block w-full h-48 object-fill row-span-1 rounded-lg text-xs bg-gray-100" src={blog?.imageUrl} alt="Image coundn't be loaded due to hosting storage issues!" />

        <div className="px-6 py-4 row-span-1">
          <div className="font-mono font-light text-xl mb-2 truncate">Title: {blog?.title}</div>
        </div>
      
        <div className="px-6 py-4 row-span-1 flex-1">
          <p className="text-gray-700 text-base overflow-hidden line-clamp-3 ">Description:{blog?.description}</p>
        </div>
       

          {/* <div className="px-6 py-4 row-span-1">
          <div className="font-bold text-xl mb-2 truncate">Author: {blog.userId.username}</div>
        </div> */}
        <div className="px-6 pt-4 pb-2 row-span-1">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hastags___</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hastags</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#hastags</span>
        </div>
      </div>
    </Link>
  );
};



export default Card

