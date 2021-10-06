import { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import { useLocation } from 'react-router-dom';

import { getCustomers, deleteCustomer } from '../apis/api';
import { Typography } from '@material-ui/core';

const CustomerList = (props: any) => {
  const [customers, setCustomers] = useState<any[]>([]);

  let location = useLocation<string>();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const result = await getCustomers();
      setCustomers(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: any) => {
    await deleteCustomer(id);
    fetchCustomers();
  };
  //   const handleDelete = async (id: any) => {
  //     await fetch('http://localhost:5000/customers/' + id, {
  //       method: 'DELETE',
  //     });
  //     const newCustomer = customers.filter((customer) => customer.id !== id);
  //     setCustomers(newCustomer);
  //   };

  //console.log(location.state);

  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Customer List
      </Typography>
      {location.state ? <Alert severity='success'>{location.state}</Alert> : ''}
      <br />
      <DataTable customers={customers} handleDelete={handleDelete} />
    </Container>
  );
};

export default CustomerList;
