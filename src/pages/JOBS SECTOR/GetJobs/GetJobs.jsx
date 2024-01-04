import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Jobs from '../Jobs/Jobs';

function GetJobs() {
  const [allJob, setAllJob] = useState();
  // console.log(allJob);


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:9000/jobs");
      setAllJob(data);
    };
    getData();
  }, []);
    
  return (
    <>
        {
          allJob &&
          allJob.map((job) => (<Jobs job={job} key={job.id}/>))
        
        }
    </>
  )
}

export default GetJobs;