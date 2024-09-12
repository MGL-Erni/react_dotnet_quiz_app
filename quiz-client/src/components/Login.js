import React, { useEffect } from 'react';
import { Button, TextField, Box, Card, CardContent, Typography } from '@mui/material';
import Center from './Center';
import useForm from '../hooks/useForm';
import { createAPIEndpoint, ENDPOINTS } from '../api';
import useStateContext from '../hooks/useStateContext';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react';

// Define keyframes for glowing animation
const glowing = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 1);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
`;

const getFreshModel = () => ({
    name: '',
    email: ''
});

export default function Login() {
    const { context, setContext, resetContext } = useStateContext();
    const navigate = useNavigate();

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    useEffect(() => {
        resetContext();
    }, []);

    const login = e => {
        e.preventDefault();
        if (validate()) {
            createAPIEndpoint(ENDPOINTS.participant)
                .post(values)
                .then(res => {
                    setContext({ participantId: res.data.participantId });
                    navigate('/quiz');
                })
                .catch(err => console.log(err));
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;  // alphanumeric, underscores, dashes only. no spaces, dots, special chars, etc.

    const validate = () => {
        let errorMessages = {};

        errorMessages.email = (emailRegex).test(values.email) ? '' : 'Please enter a valid email.';
        errorMessages.name = (usernameRegex).test(values.name) ? '' : 'Letters, numbers, underscores, and dashes only.';

        setErrors(errorMessages);
        return Object.values(errorMessages).every(x => x === '');
    }

    return (
        <Center>
            <Card sx={{
                width: '400px',
                animation: `${glowing} 3s infinite`,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                '&:hover': {
                    boxShadow: '0 0 30px rgba(255, 255, 255, 1)',
                }
            }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography
                        variant='h5'
                        sx={{
                            my: 3,
                            animation: `${glowing} 3s infinite`,
                            color: 'white',
                            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                        }}
                    >
                        IT Knowledge Quiz!
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            margin: 1,
                            width: '90%',
                            input: {
                                color: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '5px',
                            },
                            label: {
                                color: 'white',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }
                    }}>
                        <form noValidate autoComplete='off' onSubmit={login}>
                            <TextField
                                label='Email'
                                name='email'
                                variant='outlined'
                                value={values.email}
                                onChange={handleInputChange}
                                {...(errors.email && { error: true, helperText: errors.email })}
                            />
                            <TextField
                                label='Username'
                                name='name'
                                variant='outlined'
                                value={values.name}
                                onChange={handleInputChange}
                                {...(errors.name && { error: true, helperText: errors.name })}
                            />
                            <Button
                                type='submit'
                                variant='contained'
                                size='large'
                                sx={{
                                    width: '90%',
                                    mt: 2,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                                        boxShadow: '0 0 20px rgba(255, 255, 255, 1)',
                                    },
                                    animation: `${glowing} 3s infinite`
                                }}
                            >
                                Start
                            </Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    );
}