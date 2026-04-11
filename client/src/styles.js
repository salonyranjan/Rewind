import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  brandContainer: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
  },
 heading: {
  background: 'linear-gradient(45deg, #162227ff 30%, #0f3e76ff 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
},
  tagline: {
    color: 'rgba(48, 18, 119, 0.8)',
    fontSize: '1.2rem',
    fontWeight: '400',
    marginTop: '-5px', 
    fontStyle: 'italic',
  },
  image: {
    width: '120px', 
    height: 'auto', 
    marginLeft: '15px',
    maxWidth: '100%', 
    [theme.breakpoints.down('sm')]: {
      width: '100%', 
      marginLeft: '0',
      marginTop: '10px',
    },
  },
}));