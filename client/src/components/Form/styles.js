import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: '15px', // Added a slight curve to match the cinematic "Rewind" feel
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#3f51b5', // Ensuring it uses the primary theme color
    color: 'white',
    '&:hover': {
      backgroundColor: '#303f9f', // Darker shade on hover for better UX
    },
  },
}));