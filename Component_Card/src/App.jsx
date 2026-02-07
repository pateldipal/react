import React from 'react'
import { Cardprops } from './component/Cardprops'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2026-01-28",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    payPerHourUSD: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2026-01-30",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    payPerHourUSD: "$70/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2026-02-01",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    payPerHourUSD: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2026-01-25",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    payPerHourUSD: "$75/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "2026-01-29",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    payPerHourUSD: "$85/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "2026-02-02",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    payPerHourUSD: "$50/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2026-01-27",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 35,
    payPerHourUSD: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2026-01-31",
    post: "AR/VR Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    payPerHourUSD: "$90/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2026-02-03",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    payPerHourUSD: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2026-01-26",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 95,
    payPerHourUSD: "$95/hr",
    location: "Mumbai, India"
  }
];


  return (
    <div className='parent'>
      {/* <Cardprops /> */}
      {jobOpenings.map(function(elem){
        return <Cardprops companyName = {elem.companyName}/>;
      })}
    </div>
  )
}

export default App