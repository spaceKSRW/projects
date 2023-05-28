import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
const Fields = (props) => {
  return (
      <div className="data-val">
        <h4>{props.name}</h4>
        <h4>{props.email}</h4>
        <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="error">
          <PersonRemoveAlt1Icon></PersonRemoveAlt1Icon>
        </Button>
    </Stack>
    </div>
  );
}

export default Fields;