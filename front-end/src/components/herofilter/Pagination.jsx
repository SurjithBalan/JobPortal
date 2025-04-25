
import React from 'react';
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import '../herofilter/herofilter.css'



const Pagination = ({jobsPerPage,totalJobs, paginate, activePage}) => {
    const pageNumber = [];
    for(let i = 1; i<=Math.ceil(totalJobs / jobsPerPage); i++){
        pageNumber.push(i)
    }
  return (
    <ul className='paginate'>
        <li>
            <button className='prev-nextbtns' onClick={()=>{
                if(activePage > 1){
                    paginate(activePage-1)
                }
            }}><i><HiChevronLeft /></i></button>
        </li>
        {
            pageNumber.map((number)=>{
                return <li key={number}>
                    <button className={`paginate-btns ${number === activePage? "paginate-button-bg" : ""}`} onClick={()=>paginate(number)}>{number}</button>
                </li>
            })
        }
        <li>
            <button className='prev-nextbtns' onClick={()=>{
                if(activePage<pageNumber.length){
                    paginate(activePage+1)
                }
            }}><i><HiChevronRight /></i></button>
        </li>
    </ul>
  )
}

export default Pagination