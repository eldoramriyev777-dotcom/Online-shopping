import { Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <div>
        <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
            //   anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            //   open={Boolean(anchorElUser)}
            //   onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => ( */}
                <MenuItem >
                  <Typography sx={{ textAlign: 'center' }}>setting</Typography>
                </MenuItem>
              {/* ))} */}
            </Menu>
    </div>
  )
}

export default Profile