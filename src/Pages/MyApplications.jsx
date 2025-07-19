import React, { Suspense } from 'react';
import MyFoodRequest from './MyFoodRequest';

const MyApplications = () => {
  return (
    <div>
    
      <Suspense fallback={"loading"}>
        <MyFoodRequest></MyFoodRequest>
      </Suspense>
    </div>
  );
}

export default MyApplications;