import React from 'react'
import UserNavbar from '../compoents/UserNavbar'

function Userprofile() {
  return (
    <>
    <UserNavbar/>
    <div class="bg-zinc-500 rounded-2xl md:mx-10 mx-3 mt-10  md:w-[950px] w-[180px] md:h-[300px] h-[250px] drop-shadow-xl shadow-gray-950" >
            <div class="md:flex">
                <img src="img/Frame 1.svg" class="md:size-72 size-12"></img>
                <table class="w-full text-left border-collapse">
                    <tbody>
                        <tr class="border-b">
                            <td class="py-2 font-medium w-1/3">FirstName:</td>
                            <td class="py-2">Krishna</td>
                        </tr>
                        <tr class="border-b">
                            <td class="py-2 font-medium w-1/3">LastName:</td>
                            <td class="py-2">S </td>
                        </tr>
                        <tr class="border-b">
                            <td class="py-2 font-medium w-1/3">UserName:</td>
                            <td class="py-2">Krishna S</td>
                        </tr>
                        <tr class="border-b">
                            <td class="py-2 font-medium">Department</td>
                            <td class="py-2">Orthology</td>
                        </tr>
                        <tr class="border-b">
                            <td class="py-2 font-medium">Phone:</td>
                            <td class="py-2">+95544446488</td>
                        </tr>
                        
                    </tbody>
                </table>
                
               
            </div>
            
        </div>
     </>   
  )
}

export default Userprofile