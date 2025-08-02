import React from 'react'
function Task({pending}){
    return(
        <div>
        {pending.map((item,i)=>(
            <div key={i}>
            <input type="checkbox"/>
            <label className='m-3'>{item}</label>
            </div>
        ))}
        </div>
    )
}

function PendingList(){
    let pending = ["Going to Sonipat","Learning Soft Skill","Instrospection"]
    return(
       <div>
            <h3 className='font-bold'>My Pending To-Do tasks are following:</h3>
            <Task pending={pending} />
        </div>
       
    )
};
export {PendingList}