
import Pagination from '@mui/material/Pagination';

import Stack from '@mui/material/Stack';




export default function CustomIcons({handlePage}) {


return (
    <Stack spacing={2} className='flex justify-center items-center'>
      
      <Pagination
        count={42}

        onChange={handlePage}
        hideNextButton = {true}
        hidePrevButton= {true}




      />
    </Stack>
  );
}