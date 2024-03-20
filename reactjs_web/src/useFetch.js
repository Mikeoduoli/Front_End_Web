import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // #24 Cleaning up useEffect(Stopping the fetch)
        const abortCont = new AbortController();
        // Our get request and timeout effect of 1000
        setTimeout(() => {
            // Insted of hardcording this (Pass the end of the URL into a function)
            // Now place too 'url' as a dependency to useEffect.
            // fetch('http://localhost:8000/blogs') 

            // Adding the second argument to fetch
            // fetch(url)
            fetch(url, { signal: abortCont.signal })
        // A promise with a response object
                .then(res => {
                    if(!res.ok) {
                        throw Error('Data not fetched for the resource.');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    // Using the cleanup function
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsPending(false)
                        setError(err.message)
                    }
                })
        }, 1000);

        // Abort function
        return () => abortCont.abort();


        // console.log('use effect ran')
        // console.log(blogs);
        // console.log(name);
    },[url]
    // [name]
    );

    return { data, isPending, error }
}

export default useFetch;