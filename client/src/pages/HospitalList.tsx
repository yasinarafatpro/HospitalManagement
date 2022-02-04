import { Button } from '@mui/material';
import React from 'react';

const HospitalList: React.FC = () => {
    return (
        <div>
            <Button variant="contained" style={{margin:'20px'}}>Add Hospitals</Button>
            <div>

            </div>
            <div className='hospitals'>

                <ol type='1' >
                    <li style={{ cursor: 'pointer' }}>
                        Hospital 1
                    </li>
                    <li style={{ cursor: 'pointer' }}>
                        Hospital 2
                    </li>
                </ol>

            </div>

        </div>
    )
};

export default HospitalList
