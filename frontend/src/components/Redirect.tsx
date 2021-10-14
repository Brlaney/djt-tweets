import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = ({ to }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to)
  }, [to])
  return null
};

export default Redirect;

/* Example of importing/using:
import Redirect from '@/components/Redirect';
...
  const [shouldRedirect, setShouldRedirect] = useState(false);
  
  if (shouldRedirect) {
    return <Redirect to='/create/success' />
  };
...
const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      const response = await fetch(`${server}/companies`, {
        method: 'POST',
        headers,
        body: JSON.stringify(modifiedData),
      })
        .then(checkStatus)
        .then(parseJSON)
      setShouldRedirect(true)
    } catch (error) {
      setErrorCompanies(error)
    }
  };
*/