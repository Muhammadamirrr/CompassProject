import * as React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import TablePagination from '@mui/material/TablePagination'

import { Customer } from '../../gql/types'
import Spinner from '../Spinner/Spinner'
import { useCustomers } from '../../hooks/useCustomers'

const Row = (props: { row: Customer }) => {
  const { row } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align='left'>{row.name}</TableCell>
        <TableCell align='left'>{row.birthdate.toString().split('T')[0]}</TableCell>
        <TableCell align='left'>{row.email}</TableCell>
        <TableCell align='left'>{row.address}</TableCell>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Accounts Details
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>limits</TableCell>
                    <TableCell>Products</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.accounts.map((accountDetail) => (
                    <TableRow key={accountDetail.account_id}>
                      <TableCell>{accountDetail.account_id}</TableCell>
                      <TableCell>{accountDetail.limit}</TableCell>
                      <TableCell>{accountDetail.products.join(', ')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default function UserList() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const { data: rows, loading, error } = useCustomers(page + 1, rowsPerPage)

  if (loading) return <Spinner />
  if (error) return <p>Error : {error.message}</p>

  return (
    <React.Fragment>
      <div style={{ textAlign: 'center' }}>
        <h1>Customer Details With Accounts</h1>
      </div>
      <div style={{ margin: 10 }}>
        <TableContainer component={Paper}>
          <Table aria-label='collapsible table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Name</TableCell>
                <TableCell align='left'>DOB</TableCell>
                <TableCell align='left'>Email</TableCell>
                <TableCell align='left'>Address</TableCell>
                <TableCell align='left'>Accounts Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.customers.map((row: Customer) => (
                <Row key={row._id} row={row} />
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component='div'
            count={500}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(event, newPage) => setPage(newPage)}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10))
              setPage(0)
            }}
          />
        </TableContainer>
      </div>
    </React.Fragment>
  )
}
